import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LiquidButton } from "./ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightMode = location.pathname === '/courses' || location.pathname === '/';
  const headerClasses = isLightMode
    ? (isScrolled ? "bg-white border-b-8 border-black shadow-[0_8px_0_0_rgba(0,0,0,1)]" : "bg-white border-b-8 border-black shadow-[0_8px_0_0_rgba(0,0,0,1)]")
    : (isScrolled ? "bg-black border-b-8 border-white shadow-[0_8px_0_0_rgba(255,255,255,1)]" : "bg-black border-b-8 border-white shadow-[0_8px_0_0_rgba(255,255,255,1)]");
  
  const logoColor = isLightMode ? "text-black" : "text-white";
  const navItemClass = isLightMode 
    ? "text-black font-black uppercase tracking-widest hover:bg-[#FAE414] px-4 py-2 border-4 border-transparent hover:border-black transition-all hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]" 
    : "text-white font-black uppercase tracking-widest hover:bg-[#C6F91F] hover:text-black px-4 py-2 border-4 border-transparent hover:border-white transition-all hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)]";
  
  const mobileMenuColor = isLightMode ? "text-black border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-[#FF90E8]" : "text-white border-4 border-white shadow-[4px_4px_0_0_rgba(255,255,255,1)] bg-neutral-800";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className={`font-display font-black text-3xl tracking-tighter uppercase ${logoColor} drop-shadow-[2px_2px_0_rgba(255,144,232,1)]`}>
              Reelywood
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2 items-center">
            <Link
              to="/courses"
              className={`text-sm ${navItemClass} ${location.pathname === '/courses' ? (isLightMode ? 'bg-[#3861FB] text-white border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]' : 'bg-[#C6F91F] text-black border-white shadow-[4px_4px_0_0_rgba(255,255,255,1)]') : ''}`}
            >
              COURSES
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm ${navItemClass} ${location.pathname === '/portfolio' ? (isLightMode ? 'bg-[#3861FB] text-white border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]' : 'bg-[#C6F91F] text-black border-white shadow-[4px_4px_0_0_rgba(255,255,255,1)]') : ''}`}
            >
              PORTFOLIO
            </Link>
            <Link
              to="/agent"
              className={`text-sm ${navItemClass} ${location.pathname === '/agent' ? (isLightMode ? 'bg-[#3861FB] text-white border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]' : 'bg-[#C6F91F] text-black border-white shadow-[4px_4px_0_0_rgba(255,255,255,1)]') : ''}`}
            >
              AGENTS
            </Link>
            <Link
              to="/agents"
              className={`text-sm ${navItemClass} ${location.pathname.startsWith('/agents') || location.pathname.startsWith('/agent/') ? (isLightMode ? 'bg-[#3861FB] text-white border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]' : 'bg-[#C6F91F] text-black border-white shadow-[4px_4px_0_0_rgba(255,255,255,1)]') : ''}`}
            >
              DIRECTORY
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <LiquidButton asChild className={`h-auto border-4 rounded-none px-6 py-4 lg:py-6 font-black uppercase tracking-widest transition-all ${isLightMode ? 'bg-[#C6F91F] border-black text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1' : 'bg-white border-white text-black shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1'}`} size="default">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center space-x-2"
              >
                <span>NEW COURSES</span>
                <Play className={`w-5 h-5 fill-current`} strokeWidth={3} />
              </Link>
            </LiquidButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button className={`p-3 ${mobileMenuColor}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
