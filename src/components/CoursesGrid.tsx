import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { LiquidButton } from "./ui/button";

export function CoursesGrid() {
  const courses = [
    {
      title: "Gen-AI Advertising",
      desc: "Master Gen-AI tools & creative direction for modern advertising.",
      tag: "Bestseller",
      bg: "bg-[#C6F91F]",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
      videoThumb: true
    },
    {
      title: "6/10 Seconds Branding",
      desc: "Build brand emotion, connection, and recall in seconds.",
      tag: "New",
      bg: "bg-[#FF90E8]",
      img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=1000",
      videoThumb: false
    },
    {
      title: "Typography Explained",
      desc: "Learn the foundation of brutalist and modern type styling.",
      tag: "Popular",
      bg: "bg-[#3861FB]",
      textColor: "text-white",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
      videoThumb: false
    },
    {
       title: "Docu Video Editing",
       desc: "Learn modern video editing techniques used by top creators.",
       tag: "Hot",
       bg: "bg-white",
       img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000",
       videoThumb: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full pb-16">
      {courses.map((course, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`w-full flex flex-col ${course.bg} ${course.textColor || 'text-black'} border-[8px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)]`}
        >
          <div className="w-full aspect-video border-b-[8px] border-black relative overflow-hidden bg-black">
             <img src={course.img} alt={course.title} className="w-full h-full object-cover filter grayscale mix-blend-screen opacity-80" />
             {course.videoThumb && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                   <div className="w-20 h-20 bg-[#FF5151] flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-10 h-10 text-white fill-white ml-2" />
                   </div>
                </div>
             )}
          </div>
          
          <div className="p-8 flex flex-col flex-grow justify-between">
            <div>
              <span className={`inline-block px-4 py-1 ${course.textColor ? 'bg-white text-black' : 'bg-black text-white'} border-4 border-black text-xs font-black uppercase tracking-widest mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                {course.tag}
              </span>
              <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight mb-4 drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">
                {course.title}
              </h3>
              <p className={`text-lg font-bold mb-8 ${course.textColor ? 'text-white' : 'text-black'}`}>
                {course.desc}
              </p>
            </div>
            
            <div className="pt-4 mt-auto border-t-4 border-black">
               <LiquidButton className={`h-auto w-full py-6 text-lg border-4 border-black uppercase font-black tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${course.textColor ? 'bg-white text-black hover:bg-[#FAE414]' : 'bg-black text-white hover:bg-[#FF5151]'}`}>
                 Learn More <ArrowUpRight className="ml-2 w-6 h-6" strokeWidth={3} />
               </LiquidButton>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
