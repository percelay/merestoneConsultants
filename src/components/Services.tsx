import {
  Ruler,
  Compass,
  Satellite,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const services: ServiceCard[] = [
  {
    icon: Ruler,
    title: "Civil Engineering",
    items: [
      "Subdivision, land development and site planning",
      "Septic system / sanitary sewer design",
      "Lines & grades",
    ],
  },
  {
    icon: Compass,
    title: "Surveying",
    items: [
      "40 Hour OSHA HAZWOPER Certified",
      "ALTA/ACSM land title survey",
      "Construction layout",
      "Property corners",
      "FEMA / flood elevation certificates",
    ],
  },
  {
    icon: Building2,
    title: "Site Design",
    items: [
      "Site planning & feasibility studies",
      "Site layout and detail design",
      "Streetscape planning and design",
      "Sediment and erosion control",
      "Stormwater management",
    ],
  },
  {
    icon: Satellite,
    title: "GPS Services",
    items: [
      "Geodetic and site control",
      "Planimetric and topographic mapping",
      "GIS data collection / mapping",
      "Photogrammetric control",
      "Hydrographic surveying",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-text-muted leading-relaxed">
            Comprehensive residential and commercial services including civil
            engineering, land surveying, and Global Positioning Systems.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-surface rounded-xl border border-border p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon
                  size={28}
                  className="text-primary group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-main mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-muted leading-relaxed flex items-start gap-2"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
