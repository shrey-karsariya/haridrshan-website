import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@/assets/haridarshan_crest_transparent.png";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/85 mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
          >
            <img
              src={logo}
              width={56}
              height={56}
              alt="Shree Haridarshan Vidya Sankul crest"
              className="h-14 w-14 object-contain"
            />
            <div>
              <div className="font-display text-cream text-lg font-semibold">
                Shree Haridarshan Vidya Sankul
              </div>
              <div className="font-gujarati text-cream/70 text-sm">શ્રી હરિદર્શન વિદ્યા સંકુલ</div>
            </div>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            Nurturing young minds since 2000 through academic excellence, discipline, values and
            holistic development in the heart of Rajkot.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-10 w-10 rounded-full border border-cream/20 grid place-items-center hover:bg-primary hover:border-primary transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-cream font-display font-semibold mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About Us"],
              ["/academics", "Academics"],
              ["/facilities", "Facilities"],
              ["/gallery", "Gallery"],
              ["/admissions", "Admissions"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-cream transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-cream font-display font-semibold mb-4">Reach Us</div>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>Mavdi Bypass Road, Madhav Park, Mavdi Village, Rajkot, Gujarat 360004</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href="tel:+919427882733" className="hover:text-cream">
                +91 94278 82733
              </a>
            </li>
          </ul>
          <a
            href="https://maps.google.com/?q=Shree+Haridarshan+School+Mavdi+Bypass+Road+Rajkot"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            View on Google Maps →
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <div>
            © {new Date().getFullYear()} Shree Haridarshan Vidya Sankul. All rights reserved.
          </div>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-cream">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cream">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
