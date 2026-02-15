import React from 'react';
import { TRUST_DETAILS } from '../constants';
import hero from "../assets/hero.avif";
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hero} 
          alt="Community impact" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/85 via-brand-blue/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full ">
        <div className="max-w-3xl">
          
          {/* Small badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-5">
            <Heart size={16} className="text-brand-accent" fill="currentColor" />
            <span className="text-sm text-white/90 font-medium">
                Making a real difference since 2025
            </span>
        </div>


          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.1] tracking-tight">
            {TRUST_DETAILS.tagline}
          </h1>
          
          <p className="text-md md:text-xl text-white/90 mb-8 leading-relaxed font-light">
            {TRUST_DETAILS.mission}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center gap-2 btn-primary text-lg px-8 py-3.5"
            >
              Make an Impact
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#gallery" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 text-white px-8 py-3.5 rounded-lg font-bold transition-all"
            >
              See Our Work
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/20">
            <div className="text-white/90">
              <div className="text-2xl md:text-3xl font-bold text-white">2,50+</div>
              <div className="text-xs md:text-sm text-white/70">Lives Changed</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-white/90">
              <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
              <div className="text-xs md:text-sm text-white/70">Transparent</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-white/90">
              <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
              <div className="text-xs md:text-sm text-white/70">Active Programs</div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#gallery"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60 hover:text-white transition group"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2 group-hover:border-white/60 transition">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;