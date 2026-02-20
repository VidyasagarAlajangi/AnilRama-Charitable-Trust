import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TRUST_DETAILS } from '../constants';
import { Shield, Target, Eye, Award, Linkedin, Mail } from 'lucide-react';
import anil from "../assets/anil_1.jpg";
import rama from "../assets/Rama.jpg";

const About = () => {
  const values = [
    { icon: <Shield size={32} />, title: "Integrity", desc: "Absolute transparency in every donation received and spent." },
    { icon: <Target size={32} />, title: "Impact", desc: "Ensuring every program creates a measurable, long-term difference." },
    { icon: <Eye size={32} />, title: "Vision", desc: "A world where basic needs are guaranteed for all." },
    { icon: <Award size={32} />, title: "Accountability", desc: "Committed to legal compliance and regular audits." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Header Section */}
        <section className="relative bg-brand-blue text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-[100px]"></div>
          </div>
          <div className="relative max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl text-white/90 font-extrabold mb-6 tracking-tight drop-shadow-sm">
              Our Story & Mission
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Founded on the principles of empathy and service, Anil Rama Charitable Trust was established to bridge the gap between resources and those who need them most.
            </p>
          </div>
        </section>

        {/* President & Vice President Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-brand-green font-bold uppercase tracking-widest text-sm mb-3">Our Leadership</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-brand-blue tracking-tight">Governance & Vision</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              {/* President */}
              <div className="group flex flex-col xl:flex-row gap-8 items-center bg-brand-light/30 p-8 md:p-10 rounded-3xl border border-brand-light shadow-sm hover:shadow-soft transition-all duration-300">
                <div className="flex-shrink-0 relative overflow-hidden rounded-2xl shadow-md border-4 border-white">
                  <img src={anil} alt="Mr. Anil Thummaganti" className="w-40 h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                </div>
                <div className="text-center xl:text-left flex-grow">
                  <h4 className="text-2xl md:text-3xl font-bold text-brand-blue mb-1">Mr. Anil Thummaganti</h4>
                  <p className="text-brand-green font-bold text-sm tracking-wide uppercase mb-4">President & Founder</p>
                  <p className="text-charity-muted text-base leading-relaxed mb-6 font-light">
                    "True wealth lies in what we give back. Our trust is built on the foundation of hope and the belief that no child should go hungry or uneducated."
                  </p>
                  <div className="flex justify-center xl:justify-start gap-4">
                    <div className="bg-white p-2.5 rounded-full shadow-sm hover:shadow text-brand-blue hover:text-brand-green transition-all cursor-pointer"><Linkedin size={20} /></div>
                    <div className="bg-white p-2.5 rounded-full shadow-sm hover:shadow text-brand-blue hover:text-brand-green transition-all cursor-pointer"><Mail size={20} /></div>
                  </div>
                </div>
              </div>

              {/* Vice President */}
              <div className="group flex flex-col xl:flex-row gap-8 items-center bg-brand-light/30 p-8 md:p-10 rounded-3xl border border-brand-light shadow-sm hover:shadow-soft transition-all duration-300">
                <div className="flex-shrink-0 relative overflow-hidden rounded-2xl shadow-md border-4 border-white">
                  <img src={rama} alt="Mr. Rama Rao Alajangi" className="w-40 h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                </div>
                <div className="text-center xl:text-left flex-grow">
                  <h4 className="text-2xl md:text-3xl font-bold text-brand-blue mb-1">Mr. Rama Rao Alajangi</h4>
                  <p className="text-brand-green font-bold text-sm tracking-wide uppercase mb-4">Vice President</p>
                  <p className="text-charity-muted text-base leading-relaxed mb-6 font-light">
                    Overseeing our healthcare and community welfare initiatives, ensuring transparency and direct impact in every project we undertake.
                  </p>
                  <div className="flex justify-center xl:justify-start gap-4">
                    <div className="bg-white p-2.5 rounded-full shadow-sm hover:shadow text-brand-blue hover:text-brand-green transition-all cursor-pointer"><Linkedin size={20} /></div>
                    <div className="bg-white p-2.5 rounded-full shadow-sm hover:shadow text-brand-blue hover:text-brand-green transition-all cursor-pointer"><Mail size={20} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-brand-light/50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue tracking-tight">Our Core Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((v, i) => (
                <div key={i} className="card-premium p-8 text-center group">
                  <div className="w-16 h-16 mx-auto bg-brand-light text-brand-green rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                    {v.icon}
                  </div>
                  <h4 className="text-xl font-bold text-brand-blue mb-3">{v.title}</h4>
                  <p className="text-base text-charity-muted leading-relaxed font-light">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Recognition */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="border-2 border-dashed border-brand-green/30 bg-brand-light/10 p-10 md:p-14 rounded-[2rem] text-center shadow-sm">
              <h2 className="text-3xl font-extrabold text-brand-blue mb-6 tracking-tight">Legal Recognition</h2>
              <div className="space-y-4 text-charity-text text-lg md:text-xl">
                <p className="flex flex-col md:flex-row justify-center items-center gap-2">
                  <span className="font-bold text-brand-blue uppercase tracking-wide text-sm">Trust Registration No:</span>
                  <span className="font-medium bg-white px-4 py-1.5 rounded-lg border border-gray-100 shadow-sm">{TRUST_DETAILS.regNo}</span>
                </p>
                <p className="flex flex-col md:flex-row justify-center items-center gap-2">
                  <span className="font-bold text-brand-blue uppercase tracking-wide text-sm">80G Registration:</span>
                  <span className="font-medium bg-white px-4 py-1.5 rounded-lg border border-gray-100 shadow-sm">CIT(E)/80G/202X-XX/XXXX</span>
                </p>
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <span className="bg-brand-green border border-brand-green text-white px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-md">Tax Exempted</span>
                <span className="bg-brand-blue border border-brand-blue text-white px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-md">Certified Trust</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;