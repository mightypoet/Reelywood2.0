import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-cream min-h-[90vh] flex items-center font-playful">
      {/* Abstract Organic Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-64 h-64 bg-brand-green rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-20 w-80 h-80 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-brand-yellow rounded-[40px] p-8 md:p-16 lg:p-24 relative overflow-hidden border-[4px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          {/* Decorative inner shape */}
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block border-l-[4px] border-black">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover filter brightness-105" alt="Team Collaboration" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            >
              <p className="text-black font-extrabold tracking-widest uppercase mb-6 text-sm md:text-base border-2 border-black inline-block px-5 py-2 rounded-full bg-brand-green shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Welcome to Reelywood
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight uppercase text-black mb-8">
                Creative<br />Agency &<br />Storytellers
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-black/80 max-w-xl mb-12 font-medium leading-relaxed">
                Transform your ideas into impactful branding with Reelywood's creative touch. Master modern tools, and digital storytelling.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
               className="flex flex-col sm:flex-row gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/courses" 
                  className="inline-flex w-full items-center justify-center px-10 py-5 bg-black text-white border-[3px] border-black rounded-full font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-800 transition-colors"
                >
                  Explore Courses
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="#contact" 
                  className="inline-flex w-full items-center justify-center px-10 py-5 bg-white text-black border-[3px] border-black rounded-full font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-brand-green transition-colors"
                >
                  Get in Touch
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
