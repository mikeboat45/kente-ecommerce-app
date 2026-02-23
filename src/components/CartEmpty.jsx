import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-amber-50 p-6 rounded-full mb-6">
        <ShoppingBag size={48} className="text-amber-400" />
      </div>
      <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Looks like you haven't added anything to your cart yet. Discover our collection of handwoven Kente cloths and more.
      </p>
      <Link
        to="/products"
        className="bg-amber-400 hover:bg-yellow-500 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default CartEmpty;
