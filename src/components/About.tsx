import Image from "next/image";
import { Award, Users, ShieldCheck, Zap } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Nearly 30 Years",
    desc: "Established in 1996, one of the most respected firms in the area",
  },
  {
    icon: Users,
    title: "Loyal Client Base",
    desc: "Success built on referrals and outstanding customer service",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Expertise",
    desc: "Designs formatted to meet agency regulations across multiple states",
  },
  {
    icon: Zap,
    title: "Innovative Techniques",
    desc: "Cutting-edge technologies that give clients every advantage",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/project6.jpg"
                alt="Merestone engineering project"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent detail */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
          </div>

          {/* Text Side */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-primary mb-6">
              A Legacy of Precision &amp; Trust
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Merestone Consultants, Inc. was established in 1996 to fill a
              growing need for comprehensive engineering services. Nearly three
              decades later, Merestone is one of the most respected engineering
              and surveying firms in the area.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              The professionals at Merestone have a keen awareness of how
              critical their services are to a growing community. Our
              professionals subscribe to the highest standards of quality as they
              develop and integrate innovative techniques and technologies that
              give their clients every advantage.
            </p>
            <p className="text-text-muted leading-relaxed mb-10">
              Our staff&apos;s cumulative professional experience and our on-going
              reputation for outstanding customer service make Merestone the
              choice of businesses looking for an engineering / surveying firm
              that is committed to excellence.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <h.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-text-main">
                      {h.title}
                    </h4>
                    <p className="text-xs text-text-muted mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
