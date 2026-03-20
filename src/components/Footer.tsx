import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
              Merestone Consultants
            </h3>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-4">
              Engineers &middot; Land Surveyors &middot; Planners &middot;
              Landscape Architects
            </p>
            <p className="text-sm text-white/65 leading-relaxed">
              Providing comprehensive engineering services throughout Delaware,
              Maryland, Pennsylvania, and New Jersey since 1996.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Mail size={14} className="text-accent" />
              <a
                href="mailto:info@merestoneconsultants.com"
                className="text-sm text-white/75 hover:text-white transition-colors"
              >
                info@merestoneconsultants.com
              </a>
            </div>
          </div>

          {/* Wilmington Office */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Wilmington Office
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-white/40 mt-0.5 shrink-0" />
                <p className="text-sm text-white/65">
                  5215 West Woodmill Dr. Suite 38
                  <br />
                  Wilmington, DE 19808
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-white/40 shrink-0" />
                <a
                  href="tel:3029927900"
                  className="text-sm text-white/65 hover:text-white transition-colors"
                >
                  302.992.7900
                </a>
              </div>
            </div>
          </div>

          {/* Lewes Office */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Lewes Office
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-white/40 mt-0.5 shrink-0" />
                <p className="text-sm text-white/65">
                  33516 Crossing Avenue, Unit 1
                  <br />
                  Lewes, DE 19958
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-white/40 shrink-0" />
                <a
                  href="tel:3022265880"
                  className="text-sm text-white/65 hover:text-white transition-colors"
                >
                  302.226.5880
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Merestone Consultants, Inc. All
            rights reserved.
          </p>
          <nav className="flex gap-6">
            {["Services", "About", "GPS", "Careers", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
