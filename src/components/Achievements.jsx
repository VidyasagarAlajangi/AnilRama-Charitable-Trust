import { useRef } from "react";
import { Shirt, Utensils, GraduationCap, HeartHandshake } from "lucide-react";

const Achievements = () => {
  const milestones = [
    {
      title: "Winter Clothing Drive",
      desc: "We've distributed warm clothes to over 800 families when they needed it most—during harsh winters and unexpected crises.",
      icon: Shirt,
      stat: "300+",
      label: "families"
    },
    {
      title: "Meal Programs",
      desc: "Hot, nutritious meals delivered to doorsteps and community centers. No one should go hungry.",
      icon: Utensils,
      stat: "100+",
      label: "meals served"
    },
    {
      title: "Education First",
      desc: "Scholarships that keep kids in school. Because talent is everywhere, but opportunity isn't.",
      icon: GraduationCap,
      stat: "15+",
      label: "students"
    },
    {
      title: "Ongoing Support",
      desc: "From healthcare camps to skill training, we show up for communities that need consistent help.",
      icon: HeartHandshake,
      stat: "10+",
      label: "programs"
    },
  ];

  const handleMouseMove = (e, ref) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty("--mouse-x", `${x}px`);
    ref.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="py-16 md:py-16 bg-gradient-to-b from-white via-brand-light/30 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-5 tracking-tight">
            What We've Done Together
          </h2>
          <p className="text-charity-muted text-lg md:text-xl leading-relaxed">
            Every number here represents a real person whose life got a little easier. Here's what your support has made possible.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            const cardRef = useRef(null);

            return (
              <div
                key={index}
                ref={cardRef}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                className="group relative p-7 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-gray-100"
                style={{
                  backgroundImage:
                    "radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(21,152,149,0.08), transparent 70%)",
                }}
              >
                <div className="relative z-10">

                  {/* Stat badge */}
                  <div className="flex items-end justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-blue">{item.stat}</div>
                      <div className="text-xs text-charity-muted uppercase tracking-wide">{item.label}</div>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-green transition-colors">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-charity-muted leading-relaxed">
                    {item.desc}
                  </p>

                </div>

                {/* Subtle gradient accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-accent/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-16 text-center">
          <p className="text-charity-muted text-lg">
            Want to be part of the next milestone?{" "}
            <a href="#contact" className="text-brand-green font-semibold hover:text-brand-blue transition-colors underline decoration-brand-green/30 hover:decoration-brand-blue/30">
              Get in touch
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Achievements;