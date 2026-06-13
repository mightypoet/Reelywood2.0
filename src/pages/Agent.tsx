import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Database, GitMerge, Code, BarChart, Zap } from 'lucide-react';

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-20 flex">
      {/* Moving container */}
      <motion.div
        className="flex min-w-[200%] h-full"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 1].map((iter) => (
          <div key={iter} className="flex-1 flex flex-wrap gap-8 items-center justify-around h-full p-20">
            <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl flex items-center gap-4 w-64 shadow-2xl">
              <Database className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-white font-mono text-sm">Supabase Table</p>
                <div className="h-2 w-16 bg-neutral-700 rounded-full mt-2"></div>
              </div>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl flex items-center gap-4 w-72 shadow-2xl">
               <GitMerge className="w-8 h-8 text-orange-500" />
               <div>
                  <p className="text-white font-mono text-sm">n8n Workflow Node</p>
                  <div className="h-2 w-24 bg-neutral-700 rounded-full mt-2"></div>
               </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl flex items-center gap-4 w-64 shadow-2xl">
               <Code className="w-8 h-8 text-brand-neon" />
               <div>
                  <p className="text-white font-mono text-sm">Gemini API Prompt</p>
                  <div className="h-2 w-20 bg-neutral-700 rounded-full mt-2"></div>
               </div>
            </div>

             <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl flex items-center gap-4 w-56 shadow-2xl">
               <BarChart className="w-8 h-8 text-purple-500" />
               <div>
                  <p className="text-white font-mono text-sm">Analytics Hub</p>
                  <div className="h-2 w-16 bg-neutral-700 rounded-full mt-2"></div>
               </div>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl flex items-center gap-4 w-56 shadow-2xl">
               <Zap className="w-8 h-8 text-yellow-500" />
               <div>
                  <p className="text-white font-mono text-sm">Agentic Action</p>
                  <div className="h-2 w-20 bg-neutral-700 rounded-full mt-2"></div>
               </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const Countdown = ({ compact = false }: { compact?: boolean }) => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60 - 5); // 24 hours minus 5 secs

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  if (compact) {
    return (
      <div className="flex gap-2 text-brand-neon font-mono font-bold text-sm tracking-widest bg-black/40 px-3 py-1 rounded-full border border-neutral-800">
        <span>{hours.toString().padStart(2, '0')}:</span>
        <span>{minutes.toString().padStart(2, '0')}:</span>
        <span>{seconds.toString().padStart(2, '0')}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-4 md:gap-8 justify-center my-12 relative z-10">
      <div className="flex flex-col items-center bg-neutral-900/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-neutral-800 min-w-[100px] md:min-w-[140px] shadow-2xl">
        <span className="text-4xl md:text-7xl font-black text-white font-display mb-1">{hours.toString().padStart(2, '0')}</span>
        <span className="text-[#A3A3A3] uppercase text-[10px] md:text-xs font-bold tracking-widest">Hours</span>
      </div>
      <span className="text-4xl md:text-7xl font-black text-neutral-800 self-center">:</span>
      <div className="flex flex-col items-center bg-neutral-900/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-neutral-800 min-w-[100px] md:min-w-[140px] shadow-2xl">
        <span className="text-4xl md:text-7xl font-black text-white font-display mb-1">{minutes.toString().padStart(2, '0')}</span>
        <span className="text-[#A3A3A3] uppercase text-[10px] md:text-xs font-bold tracking-widest">Minutes</span>
      </div>
      <span className="text-4xl md:text-7xl font-black text-neutral-800 self-center">:</span>
      <div className="flex flex-col items-center bg-neutral-900/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-brand-neon/30 min-w-[100px] md:min-w-[140px] shadow-[0_0_30px_rgba(214,255,0,0.15)]">
        <span className="text-4xl md:text-7xl font-black text-brand-neon font-display mb-1">{seconds.toString().padStart(2, '0')}</span>
        <span className="text-brand-neon uppercase text-[10px] md:text-xs font-bold tracking-widest">Seconds</span>
      </div>
    </div>
  );
};

export function Agent() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white relative flex flex-col font-sans">
      <BackgroundElements />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/80 to-neutral-950 pointer-events-none z-0"></div>

      <main className="flex-grow flex flex-col justify-center items-center relative z-10 pt-32 pb-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full mb-8 shadow-xl">
             <span className="w-2 h-2 bg-brand-neon rounded-full mr-3 animate-pulse"></span>
             <span className="text-xs font-bold uppercase tracking-widest text-[#A3A3A3]">Lifetime License Now Available</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-display font-black leading-[1.1] uppercase tracking-tighter mb-6 mx-auto max-w-6xl text-white">
            Reelywood: The <br className="hidden md:block"/>
            <span className="text-brand-neon px-2">AI Automation</span> <br className="hidden xl:block"/>
            & SaaS Suite
          </h1>

          <p className="text-lg md:text-xl text-[#A3A3A3] max-w-3xl mx-auto font-medium leading-relaxed mt-4">
            Deploy agentic systems, automate business workflows, and scale with custom AI infrastructure—all with a single lifetime license.
          </p>

          <Countdown />

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
            <button className="w-full sm:w-auto px-8 md:px-12 py-4 bg-brand-neon text-black font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-transform text-sm md:text-base border border-transparent shadow-[0_4px_30px_rgba(214,255,0,0.25)]">
               Get Lifetime Access @₹15,000
            </button>
            <button className="w-full sm:w-auto px-8 md:px-12 py-4 bg-black border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-neutral-900 active:scale-95 transition-colors text-sm md:text-base shadow-xl">
               Explore the Tech Stack
            </button>
          </div>
        </motion.div>

      </main>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-t border-neutral-800 p-4">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center justify-between w-full lg:w-auto gap-4">
               <div>
                  <span className="text-neutral-500 line-through text-xs sm:text-sm font-semibold mr-2 md:mr-3">₹45,000</span>
                  <span className="text-brand-neon text-xl sm:text-2xl font-black font-display tracking-tight">₹15,000</span>
               </div>
               <div className="block lg:hidden">
                  <Countdown compact={true} />
               </div>
            </div>
            
            <div className="flex items-center gap-4 w-full lg:w-auto">
               <div className="hidden lg:block">
                  <Countdown compact={true} />
               </div>
               <button className="w-full lg:w-auto px-8 py-3 bg-brand-neon text-black font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-transform text-sm shadow-[0_0_20px_rgba(214,255,0,0.3)]">
                  Deploy Now
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
