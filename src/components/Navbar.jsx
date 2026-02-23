import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between pl-3 pr-6 py-2">
        {/* logo */}
        <Link id="logo" to="/" className="flex items-center">
          <img
            src="/heritage-logo-1-removebg.png"
            alt="logo"
            width="80px"
            height="80px"
          />
          <p className="font-bold text-xl tracking-tight">
            <span className="text-amber-400 ">Heritage</span>Kente
          </p>
        </Link>

        <div className="flex gap-4 mr-2">
          <Link
            to="/cart"
            className="md:hidden text-black hover:bg-amber-400 transition relative p-2"
          >
            <ShoppingCart />
            {getCartCount() > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-amber-400 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-amber-400 transition">
            Shop
          </Link>
          <Link to="/about" className="hover:text-amber-400 transition">
            About
          </Link>
          <Link
            to="/cart"
            className="bg-amber-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg transition relative"
          >
            <ShoppingCart />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow-md flex flex-col items-center">
          <Link
            to="/"
            className="block hover:text-amber-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block hover:text-amber-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="block hover:text-amber-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
