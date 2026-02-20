import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PROGRAMS } from '../constants';
import { BookOpen, Activity, Utensils, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import health from "../assets/health.jpg";
import Education from "../assets/education.jpg";
import food from "../assets/Food.jpg";
const pics = [health, Education, food];
const Programs = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const getIcon = (title) => {
    if (title.includes('Education')) return <BookOpen size={12} />;
    if (title.includes('Healthcare')) return <Activity size={12} />;
    if (title.includes('Food')) return <Utensils size={12} />;
    return <Users size={28} />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-16 md:pt-20">

        {/* Hero Section */}
        <section className="relative bg-brand-blue text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-[100px]"></div>
          </div>
          <div className="relative max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl text-white/90 font-extrabold mb-6 tracking-tight drop-shadow-sm">
              Where We Work
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Each program is built around real needs we've seen firsthand. Here's what we're focused on right now.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">

            {PROGRAMS.map((program, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={program.id}
                  className={`mb-16 md:mb-24 last:mb-0 ${idx > 0 ? 'pt-8 md:pt-12' : ''}`}
                >
                  <div className={`grid md:grid-cols-5 gap-12 md:gap-20 items-center `}>

                    {/* Image side */}
                    <div className={`md:col-span-2 ${isEven ? 'md:order-1' : 'md:order-2'} relative group`}>
                      <div className="absolute -inset-6 bg-gradient-to-br from-brand-green/30 to-brand-blue/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 ease-out z-0"></div>

                      <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(15,45,63,0.15)] group-hover:shadow-[0_30px_60px_-15px_rgba(15,45,63,0.25)] transition-all duration-700 ease-out transform group-hover:-translate-y-2 group-hover:rotate-1 border border-white/50">
                        <img
                          src={pics[idx]}
                          alt={program.title}
                          className="w-full h-[360px] md:h-[480px] object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                        {/* Floating Icon Badge */}
                        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-glass">
                          {getIcon(program.title)}
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className={`md:col-span-3 ${isEven ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'} flex flex-col justify-center space-y-8`}>

                      <div className="relative">
                        {/* Huge editorial watermark number */}
                        <div className="absolute -left-6 md:-left-12 -top-12 md:-top-16 text-8xl md:text-[140px] font-black text-brand-blue/[0.03] select-none z-0 pointer-events-none tracking-tighter">
                          0{idx + 1}
                        </div>

                        <h2 className="relative z-10 text-4xl md:text-5xl font-black text-brand-blue mb-6 tracking-tight drop-shadow-sm">
                          {program.title}
                        </h2>
                        <p className="relative z-10 text-lg md:text-xl text-charity-muted leading-relaxed font-light">
                          {program.description}
                        </p>
                      </div>

                      <div className="relative z-10 space-y-5 pt-2">
                        <div className="flex items-start gap-4 group/item">
                          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center group-hover/item:bg-brand-green group-hover/item:text-white transition-colors duration-300">
                            <ArrowRight size={16} className="text-brand-green group-hover/item:text-white transition-colors" />
                          </div>
                          <p className="font-medium text-charity-text text-base md:text-lg pt-1 group-hover/item:text-brand-blue transition-colors">Funds are allocated transparently with regular reporting</p>
                        </div>
                        <div className="flex items-start gap-4 group/item">
                          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center group-hover/item:bg-brand-green group-hover/item:text-white transition-colors duration-300">
                            <ArrowRight size={16} className="text-brand-green group-hover/item:text-white transition-colors" />
                          </div>
                          <p className="font-medium text-charity-text text-base md:text-lg pt-1 group-hover/item:text-brand-blue transition-colors">Local partners guide every decision we make</p>
                        </div>
                      </div>

                      <div className="pt-6 relative z-10">
                        <button
                          onClick={goToContact}
                          className="group btn-primary px-8 py-4 text-lg w-full sm:w-auto"
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            Support This Work
                            <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                          </span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-20 px-6 bg-brand-light overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center glass-panel p-10 md:p-16 border-white/60">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-5 tracking-tight">
              Got something in mind?
            </h2>
            <p className="text-lg md:text-xl text-charity-muted mb-10 max-w-xl mx-auto leading-relaxed">
              If there's a need you think we should know about, we'd genuinely love to hear from you.
            </p>
            <button
              onClick={goToContact}
              className="group btn-primary px-10 py-4 text-lg"
            >
              Reach Out
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Programs;