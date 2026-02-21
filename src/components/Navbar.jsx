import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between pl-3 pr-6 py-2">
        {/* logo */}
        <div id="logo" className="flex items-center">
          <img
            src="/heritage-logo-1-removebg.png"
            alt="logo"
            width="80px"
            height="80px"
          />
          <p className="font-bold text-xl tracking-tight">
            <span className="text-amber-400 ">Heritage</span>Kente
          </p>
        </div>

        <div className="flex gap-4 mr-2">
          <a
            href="/cart"
            className="md:hidden text-black hover:bg-amber-400 transition"
          >
            <ShoppingCart />
          </a>

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
          <a href="/" className="hover:text-amber-400 transition">
            Home
          </a>
          <a href="/shop" className="hover:text-amber-400 transition">
            Shop
          </a>
          <a href="/about" className="hover:text-amber-400 transition">
            About
          </a>
          <a
            href="/cart"
            className="bg-amber-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg transition"
          >
            <ShoppingCart />
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow-md flex flex-col items-center">
          <a
            href="/"
            className="block hover:text-amber-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/shop"
            className="block hover:text-amber-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </a>
          <a
            href="/about"
            className="block hover:text-amber-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
