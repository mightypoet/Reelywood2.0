import { Hero } from '../components/Hero';
import { SocialProof } from '../components/SocialProof';
import { InteractiveFunnel } from '../components/InteractiveFunnel';
import { InteractiveWorkflow } from '../components/InteractiveWorkflow';
import { CoursesGrid } from '../components/CoursesGrid';
import { TrustIndicators } from '../components/TrustIndicators';
import { AboutTeam } from '../components/AboutTeam';
import { PodcastSection } from '../components/PodcastSection';

export function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <AboutTeam />
      
      {/* Methodology & Workflows Combined */}
      <section className="bg-neutral-100 py-24 font-playful border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black uppercase text-[#030202] drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
                METHODOLOGY & WORKFLOWS
              </h2>
           </div>
           <div className="flex flex-col gap-24">
             <InteractiveFunnel />
             <div className="border-t-8 border-black pt-24">
               <InteractiveWorkflow />
             </div>
           </div>
        </div>
      </section>

      {/* Education & Courses */}
      <section className="bg-[#040404] py-24 font-playful border-b-8 border-black relative overflow-hidden bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] bg-[size:24px_24px]">
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FAE414] border-8 border-black p-8 mb-16 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-5xl md:text-7xl font-black uppercase text-black drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">GET SERIOUS WITH COURSES</h2>
              <TrustIndicators />
            </div>
            <CoursesGrid />
         </div>
      </section>

      <PodcastSection />
    </>
  );
}
