import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/productsInfo.json";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function ProductDetailsPage() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === productId);

  if (!product) return <h2>Product not found</h2>;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <main className="min-h-screen md:min-h-0 py-8 md:py-12">
      <div className="mx-auto px-4 pt-18 ">
        <a
          className="inline-flex items-center gap-2 text-sm hover:text-amber-400 transition-colors mb-8"
          href="/products"
        >
          <ArrowLeft />
          Back to Collection
        </a>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted cursor-zoom-in transition-transform duration-300 ">
            <img
              src={product.image}
              className="w-full h-full object-cover transition-transform duration-500 "
            />
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-amber-100/70 backdrop-blur-sm rounded-full">
              Cloths
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-amber-400 uppercase tracking-wider mb-2">
              {product.name.split(" ")[0]}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-foreground mb-6">
              ${product.price}
            </p>
            <p className="leading-relaxed mb-6">{product.description}</p>
            <div className="rounded-lg p-4 mb-6 bg-amber-50">
              <h3 className="font-display font-semibold mb-2">
                Cultural Significance
              </h3>
              <p className="text-sm leading-relaxed">{product.signficance}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-border rounded-md">
                <button
                  onClick={decreaseQuantity}
                  className="p-3 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="p-3 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <a
                href="/cart"
                className="inline-flex items-center justify-center gap-2 transition-all duration-300 bg-amber-400 hover:bg-yellow-500 font-semibold active:scale-[0.98] h-12 rounded-md px-8 text-base flex-1"
              >
                <ShoppingBag /> Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
