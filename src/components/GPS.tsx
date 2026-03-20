import {
  Satellite,
  MapPinned,
  Waves,
  Mountain,
  Timer,
  Maximize2,
} from "lucide-react";

const capabilities = [
  { icon: MapPinned, label: "Geodetic & local control" },
  { icon: Mountain, label: "Topographic mapping" },
  { icon: Waves, label: "Hydrographic surveying" },
  { icon: Maximize2, label: "Projects up to 7,500 acres" },
  { icon: Timer, label: "Rapid data acquisition" },
  { icon: Satellite, label: "Dual Frequency GPS" },
];

export default function GPS() {
  return (
    <section id="gps" className="py-20 md:py-28 bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Global Positioning System
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-6">
              Precision GPS Surveying
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              Merestone surveyors have been utilizing the Global Positioning
              System and robotic survey instruments for nearly a decade due to
              their extremely precise and rapid acquisition of three-dimensional
              survey data.
            </p>
            <p className="text-white/75 leading-relaxed mb-4">
              Merestone uses the latest generation of Dual Frequency GPS to
              extend and densify geodetic and local control, transfer Flood Map
              benchmarks, and gather planimetric and topographic mapping data.
            </p>
            <p className="text-white/75 leading-relaxed">
              We have used our GPS system to survey projects as large as 7,500
              acres, gather hydrographic data, map Mean High Water lines,
              recover and map unexploded ordnance, map high traffic roadways,
              and respond quickly to short timeframe project requirements.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="flex flex-col items-center text-center gap-3 bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <cap.icon size={32} className="text-accent" />
                <span className="text-sm font-medium text-white/85">
                  {cap.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
