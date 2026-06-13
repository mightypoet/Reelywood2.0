import { motion } from "motion/react";
import { Headphones, ArrowUpRight } from "lucide-react";

export function PodcastSection() {
  return (
    <section className="py-24 bg-brand-green font-playful relative overflow-hidden border-b-[4px] border-black">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-white border-[4px] border-black rounded-[40px] p-8 md:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-brand-yellow font-bold uppercase tracking-widest text-sm mb-6 border-[3px] border-black rounded-full text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">The Podcast</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black mb-6 leading-[0.9]">
                Creative <br />
                Conversations
              </h2>
              <p className="text-black/70 text-xl md:text-2xl font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Dive deep into the minds of top creators, designers, and marketers. Learn their workflows and secrets.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {["Spotify", "YouTube", "Apple Podcasts"].map((platform) => (
                    <motion.button 
                      key={platform}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-4 bg-white border-[3px] border-black text-black rounded-full font-bold uppercase text-sm tracking-wider transition-colors flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-brand-yellow"
                    >
                      {platform} <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <motion.div
               whileHover={{ rotate: 5, scale: 1.02 }}
               className="relative aspect-square max-w-md w-full rounded-[40px] overflow-hidden border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-brand-yellow"
            >
              <img 
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2787&auto=format&fit=crop" 
                alt="Podcast Host"
                className="w-full h-full object-cover mix-blend-multiply"
              />
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <motion.div 
                   whileHover={{ scale: 1.1 }}
                   className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-lg flex items-center gap-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(245,226,17,1)] cursor-pointer"
                >
                  <Headphones className="w-6 h-6" />
                  Listen Now
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
