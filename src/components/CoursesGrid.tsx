import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";

export function CoursesGrid() {
  const courses = [
    {
      title: "Gen-AI Advertising",
      desc: "Master Gen-AI tools & creative direction for modern advertising.",
      tag: "Bestseller",
      bg: "bg-white",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
      videoThumb: true
    },
    {
      title: "6/10 Seconds Branding",
      desc: "Build brand emotion, connection, and recall in seconds.",
      tag: "New",
      bg: "bg-brand-yellow",
      img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=1000",
      videoThumb: false
    },
    {
      title: "Typography Explained",
      desc: "Learn the foundation of brutalist and modern type styling.",
      tag: "Popular",
      bg: "bg-brand-green",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
      videoThumb: false
    },
    {
       title: "Docu Video Editing",
       desc: "Learn modern video editing techniques used by top creators.",
       tag: "Hot",
       bg: "bg-black",
       textColor: "text-white",
       img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000",
       videoThumb: true
    }
  ];

  return (
    <section id="courses" className="py-24 bg-brand-cream relative font-playful">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black mb-6"
          >
            Get Serious <br/> <span className="text-brand-green">With Courses</span>
          </motion.h2>
          <p className="text-black/70 max-w-2xl mx-auto text-xl font-medium">
            Level up your creative skills with industry-leading courses designed for the modern creator.
          </p>
        </div>

        <div className="flex flex-col gap-8 pb-32">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`sticky w-full min-h-[400px] ${course.bg} ${course.textColor || 'text-black'} rounded-[40px] border-[4px] border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-8 items-center justify-between transition-transform duration-300 origin-top`}
              style={{ top: `${120 + index * 40}px`, zIndex: index }}
            >
              <div className="md:w-1/2 flex flex-col justify-center h-full">
                <span className={`inline-block px-5 py-2 ${course.textColor ? 'bg-white text-black' : 'bg-black text-white'} border-[3px] border-black rounded-full text-xs font-bold uppercase tracking-widest mb-6 self-start`}>
                  {course.tag}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-6">
                  {course.title}
                </h3>
                <p className={`text-lg md:text-xl font-medium mb-8 ${course.textColor ? 'text-white/80' : 'text-black/70'}`}>
                  {course.desc}
                </p>
                <div className="self-start">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm border-[3px] ${course.textColor ? 'border-brand-yellow bg-brand-yellow text-black hover:bg-white' : 'border-black bg-white text-black hover:bg-brand-neon'} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors`}
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
              <div className="md:w-1/2 w-full aspect-video md:aspect-[4/3] rounded-[24px] overflow-hidden border-[4px] border-black relative bg-[#E5E5E5]">
                 <img src={course.img} alt={course.title} className="w-full h-full object-cover filter saturate-150" />
                 {course.videoThumb && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                       <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                          <Play className="w-8 h-8 text-black fill-black ml-1" />
                       </div>
                    </div>
                 )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
