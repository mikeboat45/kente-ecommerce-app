export default function AboutHero() {
  return (
    <section className="relative pt-36 py-20 md:py-32 overflow-hidden">
      <img
        src="/kente-pattern.webp"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-yellow-50/70 to-green-100/70" />
      <div className="relative mx-auto px-4 text-center">
        <span className="inline-block px-4 py-2 mb-6 text-md font-medium text-amber-400 bg-amber-50 rounded-full border border-amber-400">
          Our Story
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Weaving Tradition
          <br />
          Into the Future
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          For generations, our family has preserved the sacred art of Kente
          weaving, bringing the stories and symbols of our ancestors to the
          world.
        </p>
      </div>
    </section>
  );
}
