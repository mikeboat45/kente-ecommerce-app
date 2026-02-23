import { useCart } from "../context/CartContext";
import CartEmpty from "../components/CartEmpty";
import CartDetails from "../components/CartDetails";

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-16 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Your Shopping Cart
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Review your selections and prepare to experience the timeless artistry of handwoven Kente.
          </p>
        </header>

        {cartItems.length === 0 ? <CartEmpty /> : <CartDetails />}
      </div>
    </main>
  );
};

export default CartPage;
