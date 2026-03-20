import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/project17.jpg"
        alt="Merestone Consultants project — waterfront surveying"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/70 to-primary-dark/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Serving Delaware, Maryland, Pennsylvania &amp; New Jersey
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Engineering Excellence Since 1996
          </h1>
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-xl">
            Civil engineering, land surveying, GPS services, and site design
            — delivered with nearly three decades of precision and commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-bold text-primary-dark hover:bg-accent-dark transition-colors duration-200"
            >
              <Phone size={18} />
              Request a Survey
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-200"
            >
              Our Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
