import { Facebook, Instagram, Ghost, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white/80">
      <div className="h-2 bg-linear-to-r from-amber-400 via-green-700 to-red-900"></div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <a href="/" id="logo" className="flex items-center">
              <img
                src="/heritage-logo-1-removebg.png"
                alt="logo"
                width="60px"
                height="60px"
              />
              <p className="font-bold text-xl tracking-tight">
                <span className="text-amber-400 ">Heritage</span>Kente
              </p>
            </a>
            <p className="text-sm text-white/70 leading-relaxed">
              Preserving the art of Kente weaving through authentic, handcrafted
              pieces that celebrate African heritage and craftsmanship.
            </p>
            <div className="flex gap-4 pt-2">
              <Facebook />
              <Instagram />
              <Ghost />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>Shop All</li>
              <li>Clothes</li>
              <li>Accessories</li>
              <li>About Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul>
              <li>Shipping Info</li>
              <li>Returns & Exchanges</li>
              <li>Size Guide</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin />
                Stadium Road 123, Amasaman
              </li>
              <li className="flex items-start gap-3">
                <Phone />
                123456789
              </li>
              <li className="flex items-start gap-3">
                <Mail />
                heritagekente@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/50 text-center">
          <p className="text-sm text-white/70">
            © 2026 KenteHeritage. Handcrafted with love in Ghana.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
