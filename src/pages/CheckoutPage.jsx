import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart when the user reaches the success page
    clearCart(false);
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-green-50 p-6 rounded-full animate-bounce">
            <CheckCircle size={64} className="text-green-500" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Purchase Successful!
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Thank you for choosing <span className="text-amber-500 font-semibold">Heritage Kente</span>. 
          Your order has been received and is being prepared with the utmost care by our master weavers.
        </p>

        <div className="bg-amber-50 rounded-2xl p-8 mb-12 border border-amber-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            We'd love to see you again!
          </h2>
          <p className="text-gray-600 mb-6">
            Our collection is constantly evolving with new patterns and traditional designs. 
            Come back soon to discover more of Ghana's rich textile heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-md"
            >
              <ShoppingBag size={20} /> Continue Shopping
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-amber-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-amber-50 transition-all duration-300"
            >
              Back to Home <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <p className="text-gray-400 text-sm">
          A confirmation email will be sent to you shortly with your order details and tracking information.
        </p>
      </div>
    </main>
  );
};

export default CheckoutPage;
