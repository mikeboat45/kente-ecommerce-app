import { ArrowRight, Van, Shield, Award } from "lucide-react";

function Hero() {
  return (
    <>
      <section id="hero" className="relative min-h-screen md:min-h-0 pb-20 flex flex-col pt-36 overflow-hidden">
        <img
          src="/kente-pattern.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-yellow-100/80 to-red-50/80" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
          <div className="text-amber-400 font-medium text-sm inline-block rounded-4xl px-4 py-2 mb-6 border border-amber-400 bg-amber-50">
            Authentic Ghanaian Craftsmanship
          </div>
          <h1 className="text-4xl md:text-6xl lg-text-7xl font-bold leading-tight mb-6">
            Woven with{" "}
            <span className=" bg-linear-to-r from-amber-500 to-yellow-700 bg-clip-text text-transparent">
              Heritage
            </span>
            , <br />
            Worn with Pride
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Discover handcrafted Kente pieces that celebrate centuries of
            African artistry. Each thread tells a story of tradition, identity,
            and timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/products"
              className=" inline-flex items-center justify-center gap-2 transition-all duration-300 focus-visible:outline-none font-semibold bg-amber-400 hover:bg-yellow-500 hover:shadow active:scale-[0.98] h-14 rounded-md px-10 text-xl"
            >
              Shop Collection <ArrowRight />
            </a>
            <a
              href="#about"
              className="bg-amber-50 inline-flex items-center justify-center gap-2 transition-all duration-300 focus-visible:outline-none border-2 border-amber-400 font-semibold hover:bg-yellow-500 hover:shadow active:scale-[0.98] h-14 rounded-md px-10 text-xl"
            >
              Our Story
            </a>
          </div>
        </div>
      </section>

      <section className="py-6 border-b border-border border-amber-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-slide-up">
              <div className="bg-amber-100 text-amber-300 w-12 h-12 rounded-full bg-kente-gold/10 flex items-center justify-center">
                <Van />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Worldwide Shipping
                </h3>
                <p className="text-sm text-muted-foreground">
                  Delivering heritage globally
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-slide-up">
              <div className="w-12 h-12 rounded-full bg-kente-gold/10 flex items-center justify-center bg-amber-100 text-amber-300">
                <Shield />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Authenticity Guaranteed
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hand-woven in Ghana
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-slide-up">
              <div className=" bg-amber-100 text-amber-300 w-12 h-12 rounded-full bg-kente-gold/10 flex items-center justify-center">
                <Award />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Master Craftsmanship
                </h3>
                <p className="text-sm text-muted-foreground">
                  Generations of expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
