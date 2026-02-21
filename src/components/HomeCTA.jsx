import { ArrowDown, ArrowRight } from "lucide-react";

function HomeCTA() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Embrace Your Heritage?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Join thousands of customers worldwide who wear their culture with
          pride. Experience the beauty of authentic Kente.
        </p>
        <a
          className="inline-flex items-center justify-center gap-2 transition-all duration-300 focus-visible:outline-none bg-amber-400 font-semibold hover:bg-yellow-500 hover:shadow-hover active:scale-[0.98] h-14 rounded-md px-10 text-lg"
          href="/products"
        >
          Explore the Collection
          <ArrowRight />
        </a>
      </div>
    </section>
  );
}

export default HomeCTA;
