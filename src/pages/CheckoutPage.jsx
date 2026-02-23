import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  CreditCard,
  ArrowLeft,
  Loader2,
  ShieldCheck,
  Mail,
} from "lucide-react";
import axios from "axios";

const CheckoutPage = () => {
  const { cartItems, getCartTotal } = useCart();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayNow = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const backendUrl =
        import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
      const response = await axios.post(
        `${backendUrl}/api/payment/initialize`,
        {
          email,
          cartItems,
        },
      );

      if (response.data.success && response.data.authorization_url) {
        // Redirect to Paystack's secure payment page
        window.location.href = response.data.authorization_url;
      } else {
        setError(response.data.message || "Failed to initialize payment.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Initialization Error:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred during checkout. Please try again.",
      );
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen pt-32 pb-16 bg-white flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link
          to="/products"
          className="text-amber-500 font-semibold hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-16 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-amber-500 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Cart
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Checkout Form */}
          <div className="grow max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Secure Checkout
            </h1>

            <form
              onSubmit={handlePayNow}
              className="space-y-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <section className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="text-amber-500" size={20} />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email to receive order confirmation"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className="text-xs text-gray-400">
                    We'll never share your email with anyone else.
                  </p>
                </div>
              </section>

              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                  {error}
                </div>
              )}

              <section className="pt-6 border-t border-gray-50">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="text-amber-500" size={20} />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Payment
                  </h2>
                </div>

                <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                  You will be redirected to{" "}
                  <span className="font-semibold text-gray-700">
                    Paystack's
                  </span>{" "}
                  secure payment portal to complete your transaction. We do not
                  store your card details.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center bg-amber-400 hover:bg-yellow-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-100 disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 size={24} className="animate-spin mr-2" />
                      Redirecting to Payment...
                    </>
                  ) : (
                    <>Pay ${getCartTotal().toFixed(2)} Securely</>
                  )}
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-xs uppercase tracking-widest font-semibold">
                  <ShieldCheck size={16} /> 256-Bit SSL Encrypted
                </div>
              </section>
            </form>
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 sticky top-32">
              <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-50 pb-4">
                In Your Cart ({cartItems.length})
              </h2>

              <div className="space-y-6 mb-8 max-h-100 overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg border border-gray-50 overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center grow min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.quantity} x ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-sm font-bold text-gray-900 self-center">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-gray-50 pt-6">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="text-green-500 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-4">
                  <span>Total</span>
                  <span className="text-amber-500">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
