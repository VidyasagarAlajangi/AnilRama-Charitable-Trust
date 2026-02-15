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
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="bg-brand-blue py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story & Mission</h1>
            <p className="text-brand-light/80 text-lg leading-relaxed">
              Founded on the principles of empathy and service, Anil Rama Charitable Trust was established to bridge the gap between resources and those who need them most.
            </p>
          </div>
        </section>

        {/* President & Vice President Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-brand-green font-bold uppercase tracking-widest text-sm mb-2">Our Leadership</h2>
              <h3 className="text-3xl font-bold text-brand-blue">Governance & Vision</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* President */}
              <div className="flex flex-col md:flex-row gap-8 items-center bg-brand-light/30 p-8 rounded-3xl border border-gray-100 shadow-sm">
                <img src={anil} alt="Anil Rama Logo" className="w-35 h-40 rounded-2xl" />
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-brand-blue">Mr. Anil Thummaganti</h4>
                  <p className="text-brand-green font-bold text-sm mb-4">President & Founder</p>
                  <p className="text-charity-muted text-sm leading-relaxed mb-4">
                    "True wealth lies in what we give back. Our trust is built on the foundation of hope and the belief that no child should go hungry or uneducated."
                  </p>
                  <div className="flex justify-center md:justify-start gap-3">
                    <Linkedin size={18} className="text-brand-blue cursor-pointer" />
                    <Mail size={18} className="text-brand-blue cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Vice President */}
              <div className="flex flex-col md:flex-row gap-8 items-center bg-brand-light/30 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <img src={rama} alt="Anil Rama Logo" className="w-35 h-40 rounded-2xl" />
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-brand-blue">Mr. Rama Rao Alajangi</h4>
                  <p className="text-brand-green font-bold text-sm mb-4">Vice President</p>
                  <p className="text-charity-muted text-sm leading-relaxed mb-4">
                    Overseeing our healthcare and community welfare initiatives, Sarah brings 10+ years of administrative expertise to ensure impact and transparency.
                  </p>
                  <div className="flex justify-center md:justify-start gap-3">
                    <Linkedin size={18} className="text-brand-blue cursor-pointer" />
                    <Mail size={18} className="text-brand-blue cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-16 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-blue">Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="text-brand-green mb-4 flex justify-center">{v.icon}</div>
                  <h4 className="font-bold text-brand-blue mb-2">{v.title}</h4>
                  <p className="text-sm text-charity-muted">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Recognition */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center border-2 border-dashed border-brand-blue/20 p-12 rounded-3xl">
            <h2 className="text-2xl font-bold text-brand-blue mb-4">Legal Recognition</h2>
            <div className="space-y-2 text-charity-muted">
              <p><span className="font-bold text-brand-blue">Trust Registration No:</span> {TRUST_DETAILS.regNo}</p>
              <p><span className="font-bold text-brand-blue">80G Registration:</span> CIT(E)/80G/202X-XX/XXXX</p>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-bold uppercase">Tax Exempted</span>
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase">Certified Trust</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;