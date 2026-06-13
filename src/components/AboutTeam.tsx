import { motion } from "motion/react";

export function AboutTeam() {
  return (
    <section className="py-24 bg-brand-cream border-b-[4px] border-black font-playful">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 px-4"
        >
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-black leading-[0.9] max-w-5xl mx-auto tracking-tight">
               Graphic design is <span className="text-brand-green">now grabbing attention</span>,<br/> not just conveying the message.
             </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="lg:w-[45%] w-full relative">
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="relative rounded-[40px] overflow-hidden aspect-[4/5] border-[4px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] z-10 bg-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop" 
                alt="Reelywood Team"
                className="w-full h-full object-cover filter saturate-150"
              />
            </motion.div>
            <div className="absolute top-10 -left-10 w-32 h-32 bg-brand-yellow rounded-full border-[4px] border-black z-0"></div>
          </div>

          <div className="lg:w-[55%] w-full">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h3 className="inline-block px-4 py-2 bg-brand-green border-[3px] border-black rounded-full font-bold uppercase tracking-widest text-sm mb-6 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">About Reelywood</h3>
              <h2 className="text-5xl lg:text-7xl font-black uppercase mb-8 text-black leading-[0.9]">The Creative<br/>Agency</h2>
              <div className="space-y-6 text-black/80 text-xl font-medium">
                <p>
                  We are a collective of digital storytellers, designers, and AI-strategists. We didn't just adapt to the new age of media; we were born in it.
                </p>
                <p>
                  Reelywood started as an experiment in pushing the boundaries of what is possible within a 10-second window. Today, we train thousands of students and consult for the world's most aggressive brands.
                </p>
                <div className="bg-brand-yellow p-6 rounded-[24px] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-8">
                  <p className="text-black italic font-bold">
                    "Our mission is to equip the next generation of creators with the tools to dominate a noisy timeline."
                  </p>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t-[4px] border-black">
                 <div className="flex flex-wrap gap-4">
                    {["New Courses", "Resources", "Contact", "AI Studio"].map(tag => (
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        key={tag} 
                        href="#" 
                        className="px-6 py-3 rounded-full border-[3px] border-black bg-white text-black hover:bg-brand-green uppercase text-sm font-bold tracking-wider transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      >
                        {tag}
                      </motion.a>
                    ))}
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
