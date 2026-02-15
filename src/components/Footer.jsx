import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { TRUST_DETAILS } from '../constants';
import anilrama from '../assets/anil_rama_logo.png';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 border-b border-white/10 pb-10">
        
        {/* About Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img src={anilrama} alt="Anil Rama Logo" className="w-10 h-10" />
            <span className="font-bold text-xl leading-tight">
              Anil Rama Trust
            </span>
          </div>
          <p className="text-brand-light/70 text-sm leading-relaxed">
            {TRUST_DETAILS.mission.substring(0, 120)}...
          </p>
          <div className="flex gap-4">
            <Facebook className="hover:text-brand-green cursor-pointer transition-colors" size={20} />
            <Instagram className="hover:text-brand-green cursor-pointer transition-colors" size={20} />
            <Twitter className="hover:text-brand-green cursor-pointer transition-colors" size={20} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-brand-light/70 text-sm">
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                Our Story
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Volunteer with Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-brand-light/70 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-brand-green mt-1" />
              <div>
                Door No: 1S-1005 <br />
                Bazar Street <br />
                Narayanapuram Village <br />
                Balijipeta Mandal <br />
                Parvathipuram Manyam Dist - 535557
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-brand-green" />
              +91 9440977757
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-brand-green" />
              anilramatrust@gmail.com
            </li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <h4 className="font-bold text-lg mb-6">Our Location</h4>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5941856066715!2d83.54320737443344!3d18.637314065599323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b81001e3a6467%3A0x3fc4c439d625ed68!2sAnil%20Rama%20Charitable%20Trust!5e0!3m2!1sen!2sin!4v1771133491214!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anil Rama Charitable Trust Location"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-7 flex flex-col md:flex-row justify-between items-center text-xs text-brand-light/50 gap-4">
        <p>© 2026 Anil Rama Charitable Trust. All rights reserved.</p>
        <p>Registration No: {TRUST_DETAILS.regNo} | 80G Tax Exempted</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
