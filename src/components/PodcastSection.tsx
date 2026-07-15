import { motion } from "motion/react";
import { Headphones, ArrowUpRight } from "lucide-react";

export function PodcastSection() {
  return (
    <section className="py-24 bg-[#C6F91F] font-playful relative overflow-hidden border-b-8 border-black">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-white border-8 border-black p-8 md:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#FF90E8] font-black uppercase tracking-widest text-sm mb-6 border-4 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">The Podcast</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#d3d3d3] mb-6 leading-[0.9] drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">
                Creative <br />
                Conversations
              </h2>
              <p className="text-black text-xl md:text-2xl font-bold mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed bg-neutral-100 p-4 border-4 border-black">
                Dive deep into the minds of top creators, designers, and marketers. Learn their workflows and secrets.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {["Spotify", "YouTube", "Apple Podcasts"].map((platform) => (
                    <motion.button 
                      key={platform}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-4 bg-white border-4 border-black text-black font-black uppercase text-sm tracking-widest transition-colors flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FAE414] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                    >
                      {platform} <ArrowUpRight className="w-5 h-5" strokeWidth={3} />
                    </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <motion.div
               whileHover={{ rotate: 5, scale: 1.02 }}
               className="relative aspect-square max-w-md w-full border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] bg-black group overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2787&auto=format&fit=crop" 
                alt="Podcast Host"
                className="absolute inset-0 w-full h-full object-cover filter grayscale mix-blend-screen opacity-80 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 border-[16px] border-[#3861FB] pointer-events-none opacity-50 mix-blend-multiply"></div>
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <motion.div 
                   whileHover={{ scale: 1.1 }}
                   className="bg-white text-black px-8 py-4 font-black uppercase tracking-widest text-lg flex items-center gap-3 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:bg-[#C6F91F]"
                >
                  <Headphones className="w-6 h-6" strokeWidth={3} />
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
