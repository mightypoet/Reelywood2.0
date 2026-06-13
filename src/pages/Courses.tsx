import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Minus, ArrowUpRight } from 'lucide-react';
import { FadeUp } from '../components/FadeUp';

const CourseCard = ({ image, tag, title, tagColor, oldPrice, newPrice }: any) => (
  <div className="bg-white border border-neutral-200 flex flex-col h-full group hover:border-neutral-300 transition-colors shadow-sm">
    <div className="relative aspect-[4/5] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className={`absolute top-4 right-4 ${tagColor} text-black text-xs font-bold px-2 py-1 uppercase tracking-wider`}>
        {tag}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl lg:text-2xl font-display font-bold uppercase leading-tight mb-6 mt-2 flex-grow text-black">
        {title}
      </h3>
      <div className="flex items-center justify-between border-t border-neutral-200 pt-6 mt-auto">
        <div className="text-lg">
          <span className="text-black font-black mr-2">₹{newPrice}</span>
          <span className="text-neutral-500 line-through text-sm font-semibold">₹{oldPrice}</span>
        </div>
        <button className="bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 border border-neutral-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  </div>
);

const EpisodeCard = ({ image, subtitle, series, duration, audio }: any) => (
  <div className="flex flex-col h-full group">
    <div className="relative aspect-video overflow-hidden border border-neutral-200 mb-4 bg-neutral-100 flex items-center justify-center p-8 text-center text-xl lg:text-3xl font-display font-medium tracking-tight uppercase group-hover:border-neutral-300 transition-colors">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-neutral-900/40"></div>
      <span className="relative z-10 text-white">{subtitle}</span>
    </div>
    <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">New Episode | Out Now</p>
    <h3 className="text-lg font-bold uppercase leading-tight text-black mb-2">{series}</h3>
    <div className="flex items-center justify-between mt-auto">
      <div className="text-xs text-neutral-500 space-y-1 font-semibold uppercase tracking-wider">
        <p>Duration / {duration}</p>
        <p>Audio / {audio}</p>
      </div>
      <button className="flex items-center text-xs font-bold uppercase border border-neutral-300 text-black px-4 py-2 hover:bg-neutral-50 transition-colors">
        Watch Now <ArrowUpRight className="w-3 h-3 ml-2" />
      </button>
    </div>
  </div>
);

const SectionHeader = ({ title, showArrows = true }: { title: string, showArrows?: boolean }) => (
  <div className="flex items-center justify-between mb-10 pb-4 border-b border-neutral-200">
    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black">{title}</h2>
    {showArrows && (
      <div className="flex gap-2">
        <button className="text-neutral-400 hover:text-black transition-colors p-2"><ChevronLeft size={32} strokeWidth={1} /></button>
        <button className="text-neutral-400 hover:text-black transition-colors p-2"><ChevronRight size={32} strokeWidth={1} /></button>
      </div>
    )}
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200 py-6">
      <button 
        className="w-full flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight text-black">{question}</h4>
        {isOpen ? <Minus className="text-black" /> : <Plus className="text-neutral-400" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-neutral-600 leading-relaxed font-medium">
          {answer}
        </div>
      )}
    </div>
  );
};

export function Courses() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* NEW COURSES */}
        <section>
          <FadeUp>
            <SectionHeader title="New Courses" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard 
                image="https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2940&auto=format&fit=crop"
                tag="Upcoming" tagColor="bg-white"
                title="Branding with AI Films – AI Filmmaking & Film Design Course"
                oldPrice="12,000" newPrice="8,000"
              />
              <CourseCard 
                image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop"
                tag="On Going" tagColor="bg-brand-neon"
                title="Gen-AI Advertising – A Multi-AI Creative Direction Course"
                oldPrice="9,000" newPrice="4,500"
              />
              <CourseCard 
                image="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2874&auto=format&fit=crop"
                tag="Upcoming" tagColor="bg-white"
                title="6/10 Seconds – Micro Branding & Storytelling Course"
                oldPrice="6,000" newPrice="1,999"
              />
            </div>
          </FadeUp>
        </section>

        {/* LATEST + UPCOMING */}
        <section>
          <FadeUp>
            <SectionHeader title="Latest + Upcoming" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EpisodeCard 
                image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2874&auto=format&fit=crop"
                subtitle="Micro graphics will make all the difference."
                series="Course / Gen AI Advertising"
                duration="11:19MIN" audio="Hindi + Eng CC"
              />
              <EpisodeCard 
                image="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=2874&auto=format&fit=crop"
                subtitle="Frame to ad film with human touch."
                series="Course / Gen AI Advertising"
                duration="29:34MIN" audio="Hindi + Eng CC"
              />
              <EpisodeCard 
                image="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2874&auto=format&fit=crop"
                subtitle="AI is the tool. You are the director."
                series="Course / Gen AI Advertising"
                duration="14:46MIN" audio="Hindi + Eng CC"
              />
            </div>
          </FadeUp>
        </section>

        {/* GRAPHIC DESIGNING */}
        <section>
          <FadeUp>
            <SectionHeader title="Graphic Designing" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard 
                image="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2942&auto=format&fit=crop"
                tag="Bestseller" tagColor="bg-brand-neon"
                title="Unlock Design – Basic to Advance Social Media Graphic Design"
                oldPrice="10,000" newPrice="2,000"
              />
              <CourseCard 
                image="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
                tag="Popular" tagColor="bg-white"
                title="Typography Explained – For Graphic & UI/UX Designer"
                oldPrice="5,999" newPrice="1,499"
              />
              <CourseCard 
                image="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2000&auto=format&fit=crop"
                tag="New" tagColor="bg-brand-neon"
                title="Digital Branding - Build a Brand from Zero"
                oldPrice="2,999" newPrice="1,299"
              />
            </div>
          </FadeUp>
        </section>

        {/* VIDEO EDITING */}
        <section>
          <FadeUp>
            <SectionHeader title="Video Editing" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard 
                image="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop"
                tag="Bestseller" tagColor="bg-brand-neon"
                title="Documentary Style Video Editing – Full Course"
                oldPrice="2,999" newPrice="1,000"
              />
              <CourseCard 
                image="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2000&auto=format&fit=crop"
                tag="Popular" tagColor="bg-white"
                title="Video & Motion – Learn Motion Ads Making"
                oldPrice="1,599" newPrice="1,000"
              />
              <CourseCard 
                image="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2000&auto=format&fit=crop"
                tag="Masterclass" tagColor="bg-brand-neon"
                title="Master in Short Video Ads Making"
                oldPrice="4,999" newPrice="1,000"
              />
            </div>
          </FadeUp>
        </section>

        {/* BUNDLE */}
        <FadeUp>
          <section className="border border-neutral-200 grid grid-cols-1 lg:grid-cols-2 bg-white relative overflow-hidden shadow-sm">
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-black mb-6">
                Top Course Bundle<br />+ Font Pack
              </h2>
              <p className="text-neutral-600 text-lg mb-8 max-w-md font-medium leading-relaxed">
                Top courses and workshops access, plus 5000+ premium fonts all with a single one-time payment.
              </p>
              <div className="flex items-center gap-4 mb-10 text-2xl">
                <span className="text-neutral-400 line-through font-semibold text-xl">₹21,289</span>
                <span className="text-black font-black text-4xl tracking-tighter">₹1,500</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border border-neutral-300 bg-transparent text-black hover:bg-neutral-50 px-8 py-4 font-bold uppercase tracking-widest text-xs transition-colors">
                  See What's Included
                </button>
                <button className="bg-black hover:bg-neutral-800 text-white border border-neutral-700 px-8 py-4 font-bold uppercase tracking-widest text-xs transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop" 
                alt="Course Bundle" 
                className="w-full h-full object-cover mix-blend-multiply hover:mix-blend-normal transition-all duration-700" 
              />
            </div>
          </section>
        </FadeUp>

        {/* CTA IMAGE */}
        <section className="bg-brand-neon aspect-video md:aspect-[21/9] lg:aspect-[3/1] relative overflow-hidden flex items-end justify-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <img 
            src="https://images.unsplash.com/photo-1588682664551-7f98fb7decd4?q=80&w=2000&auto=format&fit=crop"
            alt="Creator"
            className="h-full w-auto object-contain mix-blend-multiply relative z-10 filter contrast-125"
          />
        </section>

        {/* STATS & INTRO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight mb-6 mt-4 text-black">
              Hi I'm <br /> <span className="font-bold text-black text-5xl lg:text-6xl uppercase">Reelywood Creator</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed font-medium text-lg">
              With 14+ years in graphic design, photography, and filmmaking, I've learned one thing: real skills come from real work. In my sessions, I teach Photoshop, design, content, and storytelling - all in Hindi/English. Let's level up your creative journey together.
            </p>
          </div>
          <div className="flex justify-between items-center border-t lg:border-t-0 lg:border-l border-neutral-200 pt-8 lg:pt-0 lg:pl-16">
            <div className="text-center">
              <h4 className="text-4xl md:text-5xl font-black text-black mb-2">622K+</h4>
              <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs border-b border-black inline-block pb-1">Youtube</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl md:text-5xl font-black text-black mb-2">150K+</h4>
              <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs border-b border-black inline-block pb-1">Instagram</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl md:text-5xl font-black text-black mb-2">18K+</h4>
              <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs border-b border-black inline-block pb-1">LinkedIn</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto">
          <SectionHeader title="Frequently Asked Questions" showArrows={false} />
          <div className="mt-8">
            <FAQItem 
              question="Will the creator teach the class himself?" 
              answer="Yes, all courses are personally created and taught by the lead creator, ensuring you get direct industry insights and verified workflows." 
            />
            <FAQItem 
              question="Will I have access to the video once the course is over?" 
              answer="Absolutely. Once you enroll in a course, you get lifetime access to the video materials, assets, and future updates within that specific course module." 
            />
            <FAQItem 
              question="In which language will the course be taught?" 
              answer="The courses are taught in a mix of Hindi and English to ensure ease of understanding. All UI and technical terms are in English." 
            />
            <FAQItem 
              question="I am facing problems in payment processing when buying this course, what to do?" 
              answer="If you experience any issues during checkout, please reach out directly to our support team at hello@reelywood.com or via the WhatsApp chat bubble." 
            />
          </div>
        </section>

      </div>
    </div>
  );
}
