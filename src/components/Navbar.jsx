import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import anilrama from "../assets/anil_rama_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isHome = location.pathname === "/";

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || !isHome
      ? "bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-soft py-0"
      : "bg-transparent border-transparent py-1 md:py-2"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled || !isHome ? "h-16 md:h-20" : "h-20 md:h-24 lg:h-28"}`}>

          {/* Logo */}
          <div
            className="flex items-center gap-2.5 md:gap-3 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            {/* Logo */}
            <div className={`relative flex-shrink-0 transition-transform duration-500 ${scrolled || !isHome ? "scale-90 md:scale-100" : "scale-100 md:scale-110 origin-left"}`}>
              <div className="bg-white p-1 rounded-xl shadow-sm">
                <img
                  src={anilrama}
                  alt="Anil Rama Logo"
                  className="w-9 sm:w-10 md:w-12 h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-95"
                />
              </div>
            </div>

            {/* Title */}
            <div className="leading-tight pl-1 md:pl-2">
              <p className={`text-lg sm:text-xl md:text-2xl font-black tracking-tight transition-colors duration-500 ${scrolled || !isHome ? "text-brand-blue group-hover:text-brand-green" : "text-white group-hover:text-white/80 drop-shadow-md"
                }`}>
                Anil Rama
              </p>

              <p className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mt-0.5 transition-colors duration-500 ${scrolled || !isHome ? "text-brand-green" : "text-brand-accent drop-shadow-md"
                }`}>
                Charitable Trust
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const textColorClass = scrolled || !isHome
                ? (active ? "text-brand-blue" : "text-charity-muted group-hover:text-brand-blue")
                : (active ? "text-white" : "text-white/80 group-hover:text-white");

              return (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className={`relative font-semibold transition-colors duration-300 ease-out cursor-pointer px-4 py-2 rounded-full overflow-hidden group ${textColorClass}`}
                >
                  <span className="relative z-10 block transform group-hover:-translate-y-px transition-transform duration-300 ease-out">
                    {link.name}
                  </span>

                  {/* Advanced Hover Background Pill */}
                  <span className={`absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] z-0 ${scrolled || !isHome ? "bg-brand-blue/5" : "bg-white/10 backdrop-blur-md"
                    }`}></span>

                  {/* Elegant expanding active/hover indicator */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-t-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] z-10 ${scrolled || !isHome ? "bg-brand-green" : "bg-brand-accent"
                    } ${active ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-50"
                    }`}></span>
                </button>
              );
            })}

            <div className="w-px h-6 bg-gray-300/50 mx-4"></div>

            {/* Donate Button */}
            <button
              onClick={goToContact}
              className={`group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-out overflow-hidden z-10 ${scrolled || !isHome
                ? "bg-brand-accent text-white hover:shadow-glow"
                : "bg-white text-brand-blue hover:shadow-soft"
                }`}
            >
              <Heart size={16} fill="currentColor" className={`mr-2 group-hover:scale-110 transition-transform duration-300 ${scrolled || !isHome ? "text-white" : "text-brand-accent"}`} />
              Donate
              {/* Optional: shine effect */}
              <div className={`absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1] ${scrolled || !isHome ? "via-white/20" : "via-brand-blue/10"}`}></div>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors active:scale-95 ${scrolled || !isHome
                ? "text-brand-blue hover:bg-brand-light"
                : "text-white bg-white/10 backdrop-blur-sm"
                }`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl transition-all duration-300 origin-top ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
          }`}
      >
        <div className="px-6 py-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setIsOpen(false);
                navigate(link.path);
              }}
              className={`block w-full text-left px-4 py-3.5 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] ${isActive(link.path)
                ? "bg-brand-green/10 text-brand-blue"
                : "text-charity-text hover:bg-brand-light"
                }`}
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={goToContact}
            className="block w-full text-left px-4 py-3.5 rounded-xl text-charity-text font-semibold hover:bg-brand-light transition-all duration-200 active:scale-[0.98]"
          >
            Contact
          </button>

          <div className="pt-6 pb-2">
            <button
              onClick={goToContact}
              className="w-full btn-primary py-4 text-lg"
            >
              <Heart size={18} fill="currentColor" className="mr-2 animate-pulse" />
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;