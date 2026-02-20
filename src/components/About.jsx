function About() {
  return (
    <>
      <section className="py-16 md:py-24 bg-yellow-50" id="about">
        <div className="mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12  mb-10 md:mb-0">
            <div className="space-y-6">
              <span className="text-sm font-medium text-amber-400 uppercase tracking-wider">
                Our Heritage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                A Legacy Woven Through Generations
              </h2>
              <p className="leading-relaxed">
                For over 400 years, the art of Kente weaving has been passed
                down through generations of master weavers in Bonwire, Ghana.
                Each pattern holds deep cultural significance, telling stories
                of royalty, spirituality, and the indomitable African spirit
              </p>
              <p className="leading-relaxed">
                At KenteHeritage, we work directly with artisan communities to
                bring you authentic pieces that honor this remarkable tradition
                while supporting the livelihoods of skilled craftsmen.
              </p>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-green-800 text-white font-semibold hover:bg-green-950 hover:shadow-lg h-12 rounded-md px-8 text-base"
              >
                Discover Our Story
              </a>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-hover aspect-6/5">
                <img
                  src="/kente-weaving.jpg"
                  alt="man weaving kente"
                  className="w-full h-full object-over"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-400 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-black">
                    400+
                  </span>
                  <span className="text-sm text-black/70">
                    Years of Tradition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
