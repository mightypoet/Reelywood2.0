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
    ? (isScrolled ? "bg-brand-cream/95 backdrop-blur-md border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-transparent border-transparent")
    : (isScrolled ? "bg-neutral-950/90 backdrop-blur-md border-neutral-800" : "bg-transparent border-transparent");
  
  const logoColor = isLightMode ? "text-black" : "text-white";
  const navItemClass = isLightMode ? "text-black font-bold tracking-widest hover:bg-brand-yellow hover:text-black hover:border-black border-2 border-transparent px-3 py-1 rounded-full transition-all" : "text-neutral-300 tracking-wider hover:text-brand-neon";
  const mobileMenuColor = isLightMode ? "text-black" : "text-white hover:text-brand-neon";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${headerClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className={`font-display font-bold text-2xl tracking-tight uppercase ${logoColor}`}>
              Reelywood
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/courses"
              className={`text-sm font-semibold uppercase transition-colors ${location.pathname === '/courses' ? (isLightMode ? 'text-black font-black' : 'text-brand-neon font-black') : navItemClass}`}
            >
              COURSES
            </Link>
            <Link
              to="/agent"
              className={`text-sm font-semibold uppercase transition-colors ${location.pathname === '/agent' ? 'text-brand-neon font-black' : navItemClass}`}
            >
              AGENTS
            </Link>
            <Link
              to="/agents"
              className={`text-sm font-semibold uppercase transition-colors ${location.pathname.startsWith('/agents') || location.pathname.startsWith('/agent/') ? 'text-brand-neon font-black' : navItemClass}`}
            >
              AGENT DIRECTORY
            </Link>
            {["CONTACT", "AI STUDIO"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-semibold uppercase transition-colors ${navItemClass}`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <LiquidButton asChild className="bg-brand-neon hover:bg-[#cbfb45] text-black rounded-full" size="default">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center space-x-2 font-bold uppercase tracking-wide"
              >
                <span>NEW COURSES</span>
                <Play className="w-4 h-4 fill-black text-black" />
              </Link>
            </LiquidButton>
          </div>

          {/* Mobile menu button (visual only for now) */}
          <div className="md:hidden flex items-center">
            <button className={`p-2 transition-colors ${mobileMenuColor}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
