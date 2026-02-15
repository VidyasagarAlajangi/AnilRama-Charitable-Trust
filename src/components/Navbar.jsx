import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import anilrama from "../assets/anil_rama_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = () => {
    setIsOpen(false);
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Impact", path: "#transparency" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div
            className="flex items-center gap-2 sm:gap-3 lg:gap-4 cursor-pointer group"
            onClick={() => navigate("/")}
            >
            {/* Logo */}
            <div className="relative flex-shrink-0">
                <img
                src={anilrama}
                alt="Anil Rama Logo"
                className="w-12 sm:w-14 md:w-16 lg:w-20 h-auto transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Title */}
            <div className="leading-tight">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold tracking-wide text-brand-blue">
                Anil Rama
                </p>

                <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-medium tracking-widest text-brand-green uppercase">
                Charitable Trust
                </p>
            </div>
            </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.path)}
                className={`relative font-medium transition-colors cursor-pointer ${
                  isActive(link.path)
                    ? "text-brand-blue"
                    : "text-charity-muted hover:text-brand-blue"
                } group`}
              >
                {link.name}
                <span 
                  className={`absolute left-0 -bottom-1 h-0.5 bg-brand-green transition-all ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}

            <button
              onClick={goToContact}
              className="relative text-charity-muted font-medium hover:text-brand-blue transition-colors group"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
            </button>

            {/* Donate Button */}
            <button
              onClick={goToContact}
              className="group inline-flex items-center gap-2 bg-brand-accent hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <Heart size={16} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              Donate
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-blue hover:text-brand-green transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setIsOpen(false);
                  navigate(link.path);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-brand-green/10 text-brand-blue"
                    : "text-charity-text hover:bg-gray-50"
                }`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={goToContact}
              className="block w-full text-left px-4 py-3 rounded-lg text-charity-text font-medium hover:bg-gray-50 transition-colors"
            >
              Contact
            </button>

            <div className="pt-4">
              <button
                onClick={goToContact}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-amber-600 text-white py-3.5 rounded-lg font-bold shadow-md transition-all"
              >
                <Heart size={18} fill="currentColor" />
                Donate Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;