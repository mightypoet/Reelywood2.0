import { motion } from "motion/react";
import { Users, Star, MessageSquare } from "lucide-react";

export function TrustIndicators() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      
      <motion.div 
        whileHover={{ scale: 1.05, rotate: -2 }}
        className="flex flex-col items-center justify-center text-center p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="w-16 h-16 bg-[#C6F91F] flex items-center justify-center border-4 border-black mb-4">
            <Users className="w-8 h-8 text-black" strokeWidth={3} />
        </div>
        <h4 className="text-5xl md:text-6xl font-black text-[#ababab] tracking-tighter mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">10K+</h4>
        <p className="text-black uppercase font-black tracking-widest text-xs border-t-4 border-black w-full pt-4 mt-2">Active Students</p>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="flex flex-col items-center justify-center text-center p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="w-16 h-16 bg-[#FF90E8] flex items-center justify-center border-4 border-black mb-4">
            <MessageSquare className="w-8 h-8 text-black" strokeWidth={3} />
        </div>
        <h4 className="text-5xl md:text-6xl font-black text-[#b7b7b7] tracking-tighter mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">19K+</h4>
        <p className="text-black uppercase font-black tracking-widest text-xs border-t-4 border-black w-full pt-4 mt-2">Positive Reviews</p>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.05, rotate: -2 }}
        className="flex flex-col items-center justify-center text-center p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="w-16 h-16 bg-[#3861FB] flex items-center justify-center border-4 border-black mb-4">
            <Star className="w-8 h-8 text-white fill-white" strokeWidth={3} />
        </div>
        <h4 className="text-5xl md:text-6xl font-black text-[#c4c3c3] tracking-tighter mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">4.9</h4>
        <p className="text-black uppercase font-black tracking-widest text-xs border-t-4 border-black w-full pt-4 mt-2">Average Rating</p>
      </motion.div>

    </div>
  );
}
