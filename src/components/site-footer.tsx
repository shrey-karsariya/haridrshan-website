import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Mail, Globe } from "lucide-react";
import logo from "@/assets/haridarshan_crest_transparent.png";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/85 mt-24 border-t border-cream/10">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
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
              <div className="font-gujarati text-accent text-xs">
                જ્યાં છે જ્ઞાનનો સૂર્યોદય, સાથે સંસ્કારની છાયા.
              </div>
            </div>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Serving continuously since 2000 at very affordable fees. STD: KG to 12th (Arts & Commerce) + Shree Juniors. Dedicated to holistic education, national sports coaching, and 6000+ library resources in Mavdi, Rajkot.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-cream/80">
            <span className="bg-white/10 px-2.5 py-1 rounded">SHVS (Est. 2000)</span>
            <span className="bg-accent/20 text-accent px-2.5 py-1 rounded">Shree Juniors</span>
            <span className="bg-white/10 px-2.5 py-1 rounded">Gyan Sadhana (Est. 1995)</span>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook: Shree Haridarshan School"
              className="h-10 w-10 rounded-full border border-cream/20 grid place-items-center hover:bg-primary hover:border-primary transition"
            >
              <Facebook className="h-4 w-4 text-cream" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram: @shreeharidarshanschool"
              className="h-10 w-10 rounded-full border border-cream/20 grid place-items-center hover:bg-primary hover:border-primary transition"
            >
              <Instagram className="h-4 w-4 text-cream" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-cream font-display font-semibold mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About Us & Leadership"],
              ["/academics", "Academics & Unit Tests"],
              ["/facilities", "6000+ Books & Facilities"],
              ["/gallery", "Gallery & Activities"],
              ["/admissions", "Admissions 2026-27"],
              ["/contact", "Contact & Location"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-accent transition-colors">
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
              <span>80 Ft Mavdi Bypass Road, Near Bapasitaram Chowk, Mavdi, Rajkot, Gujarat</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href="tel:+919427882733" className="hover:text-cream">
                +91 94278 82733
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href="mailto:haridarshanschool@gmail.com" className="hover:text-cream">
                haridarshanschool@gmail.com
              </a>
            </li>
          </ul>
          <a
            href="https://maps.google.com/?q=Shree+Haridarshan+Vidya+Sankul+Mavdi+Bypass+Road+Rajkot"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Google Maps Location →
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
