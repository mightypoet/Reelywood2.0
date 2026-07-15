import { motion } from "motion/react";
import { Link } from 'react-router-dom';
import { LiquidButton } from "./ui/button";

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-cream min-h-[90vh] flex items-center font-playful border-b-8 border-black bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-brand-yellow p-8 md:p-16 lg:p-24 relative overflow-hidden border-[8px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          {/* Decorative inner shape */}
          <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block border-l-[8px] border-black bg-[#C6F91F]">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80 border-b-8 border-black" alt="Team Collaboration" />
          </div>

          <div className="relative z-10 max-w-3xl lg:max-w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            >
              <p className="text-black font-extrabold tracking-widest uppercase mb-6 text-sm md:text-base border-4 border-black inline-block px-5 py-2 bg-brand-green shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Welcome to Reelywood
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter uppercase text-black mb-8 drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
                CREATIVE AGENCY<br />& STORYTELLERS
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
            >
              <p className="text-xl md:text-3xl text-black max-w-2xl mb-12 font-bold bg-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Transform your ideas into impactful branding with Reelywood's creative touch. Master modern tools, and digital storytelling.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
               className="flex flex-col sm:flex-row gap-6"
            >
              <LiquidButton asChild className="h-auto w-full sm:w-auto bg-black text-white border-4 border-black font-black uppercase text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-[#C6F91F] hover:text-black py-6 md:py-8 px-6 md:px-10">
                <Link to="/courses">
                  Explore Courses
                </Link>
              </LiquidButton>
              <LiquidButton asChild className="h-auto w-full sm:w-auto bg-white text-black border-4 border-black font-black uppercase text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FF90E8] hover:text-black py-6 md:py-8 px-6 md:px-10">
                <a href="#contact">
                  Get in Touch
                </a>
              </LiquidButton>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
