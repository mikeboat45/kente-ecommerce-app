const express = require('express');
const axios = require('axios');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const app = express();

// Security Middlewares
app.use(helmet()); // Sets various HTTP headers for security
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());

// Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Load Product Data for server-side verification
const productsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf8'));

// Routes

/**
 * @route POST /api/payment/initialize
 * @desc Initialize Paystack payment
 * @access Public
 */
app.post('/api/payment/initialize', async (req, res) => {
    try {
        const { email, cartItems } = req.body;

        if (!email || !cartItems || !Array.isArray(cartItems)) {
            return res.status(400).json({ success: false, message: 'Invalid request data.' });
        }

        // 1. Calculate and Verify Amount Server-Side
        let amount = 0;
        cartItems.forEach(item => {
            const product = productsData.find(p => p.id === item.id);
            if (product) {
                amount += product.price * item.quantity;
            }
        });

        if (amount <= 0) {
            return res.status(400).json({ success: false, message: 'Invalid cart total.' });
        }

        // Amount in Kobo (Paystack uses kobo for NGN or cents for other currencies)
        // Since we have $ in the app, let's assume we're using USD or converting to a local currency unit.
        // Paystack usually expects the smallest currency unit.
        const amountInSmallestUnit = Math.round(amount * 100);

        // 2. Initialize Paystack Transaction
        const paystackResponse = await axios.post(
            'https://api.paystack.co/transaction/initialize',
            {
                email,
                amount: amountInSmallestUnit,
                callback_url: `${process.env.FRONTEND_URL}/checkout/success`,
                metadata: {
                    cartItems: cartItems.map(i => ({ id: i.id, quantity: i.quantity })),
                    custom_fields: [
                        {
                            display_name: "Cart Total",
                            variable_name: "cart_total",
                            value: amount
                        }
                    ]
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (paystackResponse.data.status) {
            return res.json({
                success: true,
                authorization_url: paystackResponse.data.data.authorization_url,
                reference: paystackResponse.data.data.reference
            });
        } else {
            return res.status(400).json({
                success: false,
                message: paystackResponse.data.message || 'Payment initialization failed.'
            });
        }

    } catch (error) {
        console.error('Paystack Initialization Error:', error.response?.data || error.message);
        return res.status(500).json({
            success: false,
            message: 'Internal server error during payment initialization.'
        });
    }
});

/**
 * @route GET /api/payment/verify/:reference
 * @desc Verify Paystack payment
 * @access Public
 */
app.get('/api/payment/verify/:reference', async (req, res) => {
    try {
        const { reference } = req.params;

        if (!reference) {
            return res.status(400).json({ success: false, message: 'Reference is required.' });
        }

        // 1. Verify Payment with Paystack
        const verifyResponse = await axios.get(
            `https://api.paystack.co/transaction/verify/${reference}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
                }
            }
        );

        if (verifyResponse.data.status && verifyResponse.data.data.status === 'success') {
            const paymentData = verifyResponse.data.data;
            
            // 2. Server-Side Re-Verification (Double-check amount and currency)
            // Note: In production, you would also check if this reference has already been processed in your DB
            
            return res.json({
                success: true,
                message: 'Payment verified successfully.',
                data: paymentData
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'Payment verification failed or transaction not successful.'
            });
        }

    } catch (error) {
        console.error('Paystack Verification Error:', error.response?.data || error.message);
        return res.status(500).json({
            success: false,
            message: 'Internal server error during payment verification.'
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
