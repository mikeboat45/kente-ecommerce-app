import { Heart, Users, Globe } from "lucide-react";

export default function Statement() {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className=" text-3xl md:text-4xl font-bold mb-4">
            What We Stand For
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-lg p-6 bg-white text-center animate-slide-up">
            <div className="w-14 h-14 mx-auto mb-4 bg-yellow-50 text-amber-400 rounded-full flex items-center justify-center">
              <Heart />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              Authenticity
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every piece is hand-woven by master artisans using traditional
              techniques passed down through generations.
            </p>
          </div>

          <div className=" rounded-lg p-6 bg-white text-center animate-slide-up">
            <div className="w-14 h-14 mx-auto mb-4 bg-yellow-50 text-amber-400 rounded-full flex items-center justify-center">
              <Users />
            </div>
            <h3 className=" text-xl font-semibold mb-3">Community</h3>
            <p className="text-sm leading-relaxed">
              We work directly with weaving communities, ensuring fair wages and
              sustainable livelihoods.
            </p>
          </div>

          <div className="rounded-lg p-6 bg-white text-center animate-slide-up">
            <div className="w-14 h-14 mx-auto mb-4 bg-yellow-50 text-amber-400 rounded-full flex items-center justify-center">
              <Globe />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cultural Bridge</h3>
            <p className="text-sm leading-relaxed">
              We believe Kente connects us all, transcending borders and
              celebrating shared humanity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
