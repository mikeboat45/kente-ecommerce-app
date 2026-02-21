import { ArrowRight } from "lucide-react";

function AboutCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Experience Authentic Kente
        </h2>
        <p className="text-black/70 max-w-xl mx-auto mb-8">
          Explore our collection of handcrafted pieces and find the perfect way
          to celebrate your heritage.
        </p>
        <a
          className="inline-flex items-center justify-center gap-2 transition-all duration-300 focus-visible:outline-none bg-amber-400 font-semibold hover:bg-yellow-500 hover:shadow-hover active:scale-[0.98] h-14 rounded-md px-10 text-lg"
          href="/products"
        >
          Shop Now <ArrowRight />
        </a>
      </div>
    </section>
  );
}

export default AboutCTA;
