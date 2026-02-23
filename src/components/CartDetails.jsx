import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartDetails = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } =
    useCart();

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-8">
      {/* Items Section */}
      <div className="grow">
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm">
          {/* Header (Desktop) */}
          <div className="hidden md:grid grid-cols-6 p-6 border-b border-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-50 rounded-t-lg">
            <div className="col-span-3">Product Details</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-right">Total</div>
          </div>

          {/* Cart Items */}
          <div className="divide-y divide-gray-50">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-6 p-6 items-center gap-4"
              >
                {/* Product Details */}
                <div className="col-span-1 md:col-span-3 flex items-center gap-4">
                  <div className="h-24 w-20 shrink-0 overflow-hidden rounded-md border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-gray-900 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-amber-500 font-medium uppercase tracking-wider">
                      {item.type}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="md:hidden flex items-center gap-1 text-red-500 hover:text-red-600 text-xs font-medium transition mt-1"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>

                {/* Price (Desktop) */}
                <div className="hidden md:block text-center text-sm font-medium">
                  ${item.price.toFixed(2)}
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center border border-gray-200 rounded-md bg-gray-50">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:text-amber-500 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:text-amber-500 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Total & Desktop Remove */}
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4">
                  <div className="text-base font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="hidden md:flex items-center gap-1 text-gray-400 hover:text-red-500 text-xs font-medium transition"
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-amber-500 transition-colors"
          >
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
          <button
            onClick={clearCart}
            className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors"
          >
            Clear Cart
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-80 shrink-0">
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 sticky top-24">
          <h2 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-50">
            Order Summary
          </h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Shipping</span>
              <span className="text-green-500 font-medium text-xs uppercase tracking-wider">
                Free
              </span>
            </div>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-900 mb-8 pt-4 border-t border-gray-50">
            <span>Total</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="w-full inline-flex items-center justify-center bg-amber-400 hover:bg-yellow-500 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-md shadow-amber-100"
          >
            Checkout Now
          </Link>
          <p className="mt-4 text-center text-xs text-gray-400 px-4">
            Shipping and taxes will be calculated at checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
