import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { TRUST_DETAILS } from '../constants';
import anilrama from '../assets/anil_rama_logo.png';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-16 md:pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 border-b border-white/10 pb-16">

        {/* About Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-xl shadow-sm">
              <img src={anilrama} alt="Anil Rama Logo" className="w-12 h-12 rounded-lg" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight leading-none text-brand-light">
              Anil Rama <br /><span className="text-sm font-semibold text-brand-green tracking-widest uppercase">Trust</span>
            </span>
          </div>
          <p className="text-brand-light/80 text-base leading-relaxed font-light">
            Founded on the principles of empathy and service, helping those who need it the most through direct action and community support.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-green hover:text-white transition-all duration-300 text-brand-light/80"><Facebook size={20} className="fill-current" /></a>
            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-green hover:text-white transition-all duration-300 text-brand-light/80"><Instagram size={20} /></a>
            <a href="#" className="bg-white/5 p-2 rounded-full hover:brand-green hover:bg-brand-green hover:text-white transition-all duration-300 text-brand-light/80"><Twitter size={20} className="fill-current" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:pl-6">
          <h4 className="font-bold text-xl mb-6 text-white tracking-wide">Quick Links</h4>
          <ul className="space-y-4 text-brand-light/80 text-base font-medium">
            <li>
              <a href="/about" className="hover:text-brand-green transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green/50 group-hover:bg-brand-green transition-colors"></span> Our Story
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-brand-green transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green/50 group-hover:bg-brand-green transition-colors"></span> Volunteer with Us
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-brand-green transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green/50 group-hover:bg-brand-green transition-colors"></span> Impact Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-xl mb-6 text-white tracking-wide">Contact Us</h4>
          <ul className="space-y-5 text-brand-light/80 text-sm md:text-base">
            <li className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-brand-green" />
              </div>
              <div className="leading-relaxed font-light">
                Door No: 1S-1005, Bazar Street <br />
                Narayanapuram Village, Balijipeta <br />
                Parvathipuram Manyam Dist - 535557
              </div>
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-brand-green" />
              </div>
              <span className="font-medium tracking-wide">+91 8886111666</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-brand-green" />
              </div>
              <span className="font-medium tracking-wide">anilramatrust@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <h4 className="font-bold text-xl mb-6 text-white tracking-wide">Our Location</h4>
          <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white/10 group relative">
            <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5941856066715!2d83.54320737443344!3d18.637314065599323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b81001e3a6467%3A0x3fc4c439d625ed68!2sAnil%20Rama%20Charitable%20Trust!5e0!3m2!1sen!2sin!4v1771133491214!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anil Rama Charitable Trust Location"
              className="grayscale hover:grayscale-0 transition-all duration-700 w-full"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-8 flex flex-col lg:flex-row justify-between items-center text-sm text-brand-light/60 gap-4 font-medium">
        <p className="flex items-center text-center lg:text-left">
          © {new Date().getFullYear()} Anil Rama Charitable Trust. All rights reserved.
        </p>
        <p className="text-center font-bold tracking-widest uppercase text-xs">
          Reg No: {TRUST_DETAILS.regNo} <span className="text-white/20 mx-2">|</span> 80G Tax Exempted
        </p>
        <div className="flex gap-6 mt-2 lg:mt-0 font-semibold tracking-wide text-xs uppercase">
          <a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-green transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
