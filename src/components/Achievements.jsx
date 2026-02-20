import { useRef } from "react";
import { Shirt, Utensils, GraduationCap, HeartHandshake } from "lucide-react";

const Achievements = () => {
  const milestones = [
    {
      title: "Winter Clothing Drive",
      desc: "We've distributed warm clothes to over 300 families when they needed it most—during harsh winters and unexpected crises.",
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
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-brand-light/40 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-6 tracking-tight animate-fade-in-up">
            What We've Done Together
          </h2>
          <p className="text-charity-muted text-lg md:text-xl leading-relaxed tracking-wide font-light max-w-2xl animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
            Every number here represents a real person whose life got a little easier. Here's what your support has made possible.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            const cardRef = useRef(null);

            return (
              <div
                key={index}
                ref={cardRef}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                className="group card-premium relative p-8 isolate"
                style={{
                  backgroundImage:
                    "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(21,152,149,0.06), transparent 80%)",
                }}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">

                  {/* Stat badge */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-brand-light text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300 ease-out shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                      <Icon size={28} strokeWidth={2} />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-brand-blue tabular-nums tracking-tight">{item.stat}</div>
                      <div className="text-[11px] text-brand-green font-bold uppercase tracking-widest mt-1 opacity-90">{item.label}</div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h4 className="text-xl font-bold text-brand-blue mb-4 group-hover:text-brand-green transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-charity-muted leading-relaxed text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {item.desc}
                    </p>
                  </div>

                </div>

                {/* Subtle gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-green/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
          <p className="text-charity-muted text-lg font-medium">
            Want to be part of the next milestone?{" "}
            <a href="#contact" className="text-brand-green ml-1 font-bold hover:text-brand-blue transition-colors duration-300 border-b-2 border-brand-green/30 hover:border-brand-blue pb-0.5">
              Get in touch
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Achievements;