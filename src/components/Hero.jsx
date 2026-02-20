import React from 'react';
import { TRUST_DETAILS } from '../constants';
import hero from "../assets/hero.avif";
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-16 md:pt-32 lg:pt-32 bg-brand-blue">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Community impact"
          className="w-full h-full object-cover animate-ken-burns object-top md:object-center top-0"
        />
        {/* Advanced Multi-layered Gradients for better contrast and depth */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-blue/98 via-brand-blue/80 to-brand-blue/20 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/40 md:from-transparent via-brand-blue/20 to-brand-blue/90"></div>

        {/* Subtle noise/texture overlay - simulated with CSS radial gradient dots */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full mt-4 md:mt-0">
        <div className="max-w-3xl">

          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-1.5 pr-4 py-1.5 md:pl-2 md:pr-5 md:py-2 mb-6 md:mb-8 shadow-glass animate-fade-in-up relative group cursor-default max-w-full">
            <div className="bg-brand-accent rounded-full p-1 shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.8)] transition-shadow duration-500 shrink-0">
              <Heart size={12} className="text-white animate-pulse" fill="currentColor" />
            </div>
            <span className="text-xs sm:text-sm text-white/90 font-medium tracking-wide truncate">
              Making a real difference since 2025
            </span>
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 group-hover:ring-white/30 transition-all duration-500"></div>
          </div>

          {/* Staggered Heading */}
          <div className="overflow-hidden mb-4 md:mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
              {TRUST_DETAILS.tagline}
            </h1>
          </div>

          <div className="overflow-hidden mb-8 md:mb-10">
            <p className="text-base sm:text-lg md:text-2xl text-white/80 leading-relaxed font-light drop-shadow-md animate-fade-in-up max-w-2xl" style={{ animationDelay: '200ms', opacity: 0 }}>
              {TRUST_DETAILS.mission}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center bg-brand-accent text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-[0_8px_30px_rgb(245,158,11,0.3)] hover:shadow-[0_12px_40px_rgb(245,158,11,0.5)] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 ease-out overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center">
                Make an Impact
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            </a>

            <a
              href="#gallery"
              className="group inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold shadow-soft hover:shadow-hover hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-out w-full sm:w-auto"
            >
              Explore Our Work
            </a>
          </div>

          {/* Enhanced Trust Indicators */}


        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#gallery"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 group z-10"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2 group-hover:border-white/80 transition-colors duration-300">
          <div className="w-1 h-2 bg-brand-accent rounded-full animate-bounce"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;