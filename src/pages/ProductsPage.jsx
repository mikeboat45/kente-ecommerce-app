import { useState } from "react";
import products from "../data/productsInfo.json";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const types = ["all", ...new Set(products.map((p) => p.type))];

  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.type === filter);

  return (
    <main className="min-h-screen md:min-h-0 pt-20">
      <section className="bg-amber-50 py-12 md:py-20">
        <div className="mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Collection
          </h1>
          <p className="max-w-xl mx-auto">
            Each piece is handwoven by master artisans in Ghana, carrying
            centuries of tradition and cultural significance.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`uppercase inline-flex items-center justify-center gap-2 text-sm transition-all duration-300 font-semibold hover:bg-amber-300 active:bg-amber-400 border-2 border-amber-400 active:scale-0.98 h-9 px-3 py-2 rounded ${
                  filter === type ? "bg-amber-400 text-white" : ""
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;
