import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

function ConstructionLogo() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Outer ring */}
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke="currentColor"
        strokeWidth="3"
        className="text-primary/15"
      />
      <circle
        cx="100"
        cy="100"
        r="82"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary/10"
      />

      {/* Compass rose / surveying crosshairs */}
      <line
        x1="100"
        y1="30"
        x2="100"
        y2="170"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary/12"
      />
      <line
        x1="30"
        y1="100"
        x2="170"
        y2="100"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary/12"
      />

      {/* Diagonal crosshairs */}
      <line
        x1="50"
        y1="50"
        x2="150"
        y2="150"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary/8"
      />
      <line
        x1="150"
        y1="50"
        x2="50"
        y2="150"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary/8"
      />

      {/* Theodolite / transit instrument body */}
      <rect
        x="88"
        y="60"
        width="24"
        height="36"
        rx="3"
        fill="currentColor"
        className="text-primary/20"
      />
      {/* Lens circle */}
      <circle
        cx="100"
        cy="72"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        className="text-accent/30"
      />
      <circle cx="100" cy="72" r="3" fill="currentColor" className="text-primary/30" />

      {/* Telescope barrel */}
      <rect
        x="68"
        y="68"
        width="64"
        height="8"
        rx="4"
        fill="currentColor"
        className="text-primary/18"
      />

      {/* Tripod legs */}
      <line
        x1="100"
        y1="96"
        x2="72"
        y2="148"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-primary/20"
      />
      <line
        x1="100"
        y1="96"
        x2="128"
        y2="148"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-primary/20"
      />
      <line
        x1="100"
        y1="96"
        x2="100"
        y2="150"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-primary/20"
      />

      {/* Tripod base plate */}
      <circle
        cx="100"
        cy="96"
        r="5"
        fill="currentColor"
        className="text-primary/25"
      />

      {/* North indicator */}
      <polygon
        points="100,22 96,34 104,34"
        fill="currentColor"
        className="text-accent/40"
      />
      <text
        x="100"
        y="19"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="currentColor"
        className="text-primary/20"
      >
        N
      </text>

      {/* Degree tick marks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 100 + 87 * Math.sin(rad);
        const y1 = 100 - 87 * Math.cos(rad);
        const x2 = 100 + 82 * Math.sin(rad);
        const y2 = 100 - 82 * Math.cos(rad);
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary/15"
          />
        );
      })}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div className="order-2 lg:order-1">
            {/* Construction logo watermark behind text on mobile */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-48 h-48 opacity-40 pointer-events-none lg:hidden">
                <ConstructionLogo />
              </div>
              <div className="relative z-10">
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                  Serving Delaware, Maryland, Pennsylvania &amp; New Jersey
                </p>
                <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl xl:text-6xl font-bold text-primary leading-tight mb-6">
                  Engineering Excellence Since 1996
                </h1>
                <p className="text-lg sm:text-xl text-text-muted leading-relaxed mb-10 max-w-xl">
                  Civil engineering, land surveying, GPS services, and site
                  design — delivered with nearly three decades of precision and
                  commitment.
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
                    className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary/20 px-7 py-3.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors duration-200"
                  >
                    Our Services
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Photo + Logo */}
          <div className="order-1 lg:order-2 relative">
            {/* Construction logo behind photo */}
            <div className="absolute -top-6 -right-6 w-40 h-40 hidden lg:block">
              <ConstructionLogo />
            </div>
            <div className="absolute -bottom-8 -left-8 w-56 h-56 hidden lg:block">
              <ConstructionLogo />
            </div>

            {/* Photo */}
            <div className="relative z-10 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
              <Image
                src="/project17.jpg"
                alt="Merestone Consultants project — waterfront surveying"
                fill
                priority
                className="object-cover"
              />
              {/* Subtle gradient overlay for polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent" />
            </div>

            {/* Accent corner detail */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent/10 rounded-xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
