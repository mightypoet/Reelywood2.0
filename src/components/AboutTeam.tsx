import { motion } from "motion/react";

export function AboutTeam() {
  return (
    <section className="py-24 bg-[#040404] border-b-8 border-black font-playful relative overflow-hidden bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 px-4 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-5xl mx-auto"
        >
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-[#c1bebe] leading-[0.9] tracking-tight">
               Graphic design is <span className="text-[#C6F91F] drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">now grabbing attention</span>,<br/> not just conveying the message.
             </h2>
        </motion.div>

        <div className="bg-white border-[8px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full p-8 md:p-12 lg:p-16 border-b-[8px] lg:border-b-0 lg:border-r-[8px] border-black flex flex-col justify-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h3 className="inline-block px-4 py-2 bg-[#C6F91F] border-4 border-black font-black uppercase tracking-widest text-sm mb-6 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">About Reelywood</h3>
              <h2 className="text-5xl lg:text-7xl font-black uppercase mb-8 text-black leading-[0.9]">The Creative<br/>Agency</h2>
              <div className="space-y-6 text-black text-xl font-bold">
                <p className="bg-neutral-100 border-2 border-black p-4">
                  We are a collective of digital storytellers, designers, and AI-strategists. We didn't just adapt to the new age of media; we were born in it.
                </p>
                <p className="bg-neutral-100 border-2 border-black p-4">
                  Reelywood started as an experiment in pushing the boundaries of what is possible within a 10-second window. Today, we train thousands of students and consult for the world's most aggressive brands.
                </p>
                <div className="bg-[#FF90E8] p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-8">
                  <p className="text-black italic font-black uppercase text-2xl leading-tight">
                    "Our mission is to equip the next generation of creators with the tools to dominate a noisy timeline."
                  </p>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t-8 border-black">
                 <div className="flex flex-wrap gap-4">
                    {["New Courses", "Resources", "Contact", "AI Studio"].map(tag => (
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        key={tag} 
                        href="#" 
                        className="px-6 py-3 border-4 border-black bg-white text-black hover:bg-[#FAE414] uppercase text-sm font-black tracking-widest transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      >
                        {tag}
                      </motion.a>
                    ))}
                 </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full relative bg-[#C6F91F] min-h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop" 
              alt="Reelywood Team"
              className="absolute inset-0 w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
