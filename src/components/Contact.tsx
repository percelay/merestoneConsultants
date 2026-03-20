import { Phone, Mail, MapPin } from "lucide-react";

const offices = [
  {
    name: "Wilmington Office",
    address: "5215 West Woodmill Dr. Suite 38",
    city: "Wilmington, DE 19808",
    phone: "302.992.7900",
    areas: "New Castle County, Northern Kent County, and surrounding areas",
  },
  {
    name: "Lewes Office",
    address: "33516 Crossing Avenue, Unit 1",
    city: "Lewes, DE 19958",
    phone: "302.226.5880",
    areas: "Southern Kent County, Sussex County, and surrounding areas",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-primary mb-4">
            Request a Survey
          </h2>
          <p className="text-text-muted leading-relaxed">
            Contact the office nearest to your project location, or send us an
            email and we&apos;ll direct your request to the right team.
          </p>
        </div>

        {/* Office Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offices.map((office) => (
            <div
              key={office.name}
              className="bg-bg rounded-xl border border-border p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-4">
                {office.name}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-text-main">{office.address}</p>
                    <p className="text-sm text-text-main">{office.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-accent shrink-0" />
                  <a
                    href={`tel:${office.phone.replace(/\./g, "")}`}
                    className="text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
                <p className="text-xs text-text-muted leading-relaxed pt-2 border-t border-border">
                  Serving {office.areas}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Email CTA */}
        <div className="text-center mt-12">
          <p className="text-text-muted mb-4">
            Or request information via email:
          </p>
          <a
            href="mailto:info@merestoneconsultants.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors duration-200"
          >
            <Mail size={18} />
            info@merestoneconsultants.com
          </a>
        </div>
      </div>
    </section>
  );
}
