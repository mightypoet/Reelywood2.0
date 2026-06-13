import { motion } from "motion/react";
import { Users, Star, MessageSquare } from "lucide-react";

export function TrustIndicators() {
  return (
    <div className="py-20 bg-brand-yellow font-playful border-y-[4px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="flex flex-col items-center justify-center text-center p-10 bg-white rounded-[40px] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center border-[4px] border-black mb-6">
                <Users className="w-10 h-10 text-black" strokeWidth={2} />
            </div>
            <h4 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-2">10K+</h4>
            <p className="text-black uppercase font-bold tracking-widest text-sm">Active Students</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="flex flex-col items-center justify-center text-center p-10 bg-white rounded-[40px] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center border-[4px] border-black mb-6">
                <MessageSquare className="w-10 h-10 text-black" strokeWidth={2} />
            </div>
            <h4 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-2">19K+</h4>
            <p className="text-black uppercase font-bold tracking-widest text-sm">Positive Reviews</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="flex flex-col items-center justify-center text-center p-10 bg-white rounded-[40px] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center border-[4px] border-black mb-6">
                <Star className="w-10 h-10 text-black fill-black" strokeWidth={2} />
            </div>
            <h4 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-2">4.9</h4>
            <p className="text-black uppercase font-bold tracking-widest text-sm">Average Rating</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
