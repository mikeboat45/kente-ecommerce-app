import { ArrowDown, Van, Shield, Award } from "lucide-react";

function Hero() {
  return (
    <>
      <section id="hero" className="min-h-screen flex flex-col pt-36">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="text-amber-400 font-medium text-sm inline-block rounded-4xl px-4 py-2 mb-6 border border-amber-400 bg-amber-50">
            Authentic Ghanaian Craftsmanship
          </div>
          <h1 className="text-4xl md:text-6xl lg-text-7xl font-bold leading-tight mb-6">
            Woven with <span className="text-amber-400">Heritage</span>, Worn
            with Pride
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Discover handcrafted Kente pieces that celebrate centuries of
            African artistry. Each thread tells a story of tradition, identity,
            and timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 transition-all duration-300 focus-visible:outline-none font-semibold bg-amber-400 hover:bg-yellow-500 hover:shadow active:scale-[0.98] h-14 rounded-md px-10 text-lg"
            >
              Shop Collection
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 transition-all duration-300 focus-visible:outline-none border-2 border-amber-400 font-semibold bg-white hover:bg-yellow-500 hover:shadow active:scale-[0.98] h-14 rounded-md px-10 text-lg"
            >
              Our Story
            </a>
          </div>
        </div>
      </section>

      <section class="py-6 border-b border-border">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center md:justify-start animate-slide-up">
              <div class="bg-amber-100 text-amber-300 w-12 h-12 rounded-full bg-kente-gold/10 flex items-center justify-center">
                <Van />
              </div>
              <div>
                <h3 class="font-semibold text-foreground">
                  Worldwide Shipping
                </h3>
                <p class="text-sm text-muted-foreground">
                  Delivering heritage globally
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start animate-slide-up">
              <div class="w-12 h-12 rounded-full bg-kente-gold/10 flex items-center justify-center bg-amber-100 text-amber-300">
                <Shield />
              </div>
              <div>
                <h3 class="font-semibold text-foreground">
                  Authenticity Guaranteed
                </h3>
                <p class="text-sm text-muted-foreground">Hand-woven in Ghana</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start animate-slide-up">
              <div class=" bg-amber-100 text-amber-300 w-12 h-12 rounded-full bg-kente-gold/10 flex items-center justify-center">
                <Award />
              </div>
              <div>
                <h3 class="font-semibold text-foreground">
                  Master Craftsmanship
                </h3>
                <p class="text-sm text-muted-foreground">
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
