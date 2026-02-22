import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="shadow-md overflow-hidden transition-all duration-300 rounded-lg"
    >
      <div className="group relative aspect-3/4 overflow-hiden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration 300">
          <button className="inline-flex items-center justify-center gap-2 transition-all duration-300 bg-amber-400  hover:bg-yellow-500 rounded-md px-8 py-4 w-full text-base font-semibold">
            <ShoppingBag /> Add to Cart
          </button>
        </div>
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-amber-50/90 backdrop-blur-sm rounded-full">
          {product.type}
        </span>
      </div>

      <div className="p-4 space-y-2">
        <p className="text-xs text-amber-400 font-medium uppercase tracking-wider">
          {product.name.split(" ")[0]}
        </p>
        <h3 className="text-lg font-semibold leading-tight group-hover:text-amber-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-lg font-semibold">${product.price}</p>
      </div>
    </Link>
  );
}
