import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PROGRAMS } from '../constants';
import { BookOpen, Activity, Utensils, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import health from "../assets/health.jpg";
import Education from "../assets/education.jpg";
import food from "../assets/Food.jpg";
const pics=[health,Education,food];
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

      <main className="flex-grow pt-20">
        
        {/* Hero Section */}
        <section className="relative bg-brand-blue text-white py-12 md:py-18 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Where We Work
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Each program is built around real needs we've seen firsthand. Here's what we're focused on right now.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-12 md:py-14 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            
            {PROGRAMS.map((program, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={program.id} 
                  className={`mb-10 md:mb-16 last:mb-0 ${idx > 0 ? 'pt-10 md:pt-16' : ''}`}
                >
                  <div className={`grid md:grid-cols-5 gap-8 md:gap-12 items-center `}>
                    
                    {/* Image side */}
                    <div className={`md:col-span-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-br from-brand-green/30 to-brand-accent/20 rounded-2xl blur opacity-40 group-hover:opacity-60 transition "></div>
                        <div className="relative overflow-hidden rounded-xl shadow-xl">
                          <img
                            src={pics[idx]}
                            alt={program.title}
                            className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className={`md:col-span-3 ${isEven ? 'md:order-2' : 'md:order-1'} space-y-5`}>
                      
                     
                      <div>
                        <h2 className="text-2xl md:text-4xl font-bold text-brand-blue mb-3 tracking-tight">
                          {program.title}
                        </h2>
                        <p className="text-md text-charity-muted leading-relaxed">
                          {program.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-3 text-charity-text">
                        <div className="flex items-start gap-3">
                          <span className="text-brand-green mt-1">→</span>
                          <p>Funds are allocated transparently with regular reporting</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-brand-green mt-1">→</span>
                          <p>Local partners guide every decision we make</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={goToContact}
                          className="group inline-flex items-center gap-2 btn-primary"
                        >
                          Support This Work
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
        <section className="relative py-16 md:py-20 px-4 bg-brand-light overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 tracking-tight">
              Got something in mind?
            </h2>
            <p className="text-lg text-charity-muted mb-8 max-w-xl mx-auto">
              If there's a need you think we should know about, we'd genuinely love to hear from you.
            </p>
            <button
              onClick={goToContact}
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3.5 rounded-lg font-bold hover:bg-opacity-90 shadow-lg hover:shadow-xl transition-all"
            >
              Reach Out
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Programs;