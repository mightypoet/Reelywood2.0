import { motion } from "motion/react";
import { useState } from "react";
import { Users, Search, Target, CreditCard, ShoppingBag, ArrowRight } from "lucide-react";
import { FadeUp } from "./FadeUp";

const funnelStages = [
  {
    id: "awareness",
    title: "Awareness",
    description: "Attract a broad audience through content, social media, and ads.",
    color: "#FF90E8", // Pink
    icon: Users,
    topW: 380,
    botW: 340,
    hasArrow: true,
  },
  {
    id: "interest",
    title: "Interest",
    description: "Engage prospects with targeted information & lead magnets.",
    color: "#3861FB", // Blue
    icon: Search,
    topW: 340,
    botW: 300,
    hasArrow: true,
  },
  {
    id: "consideration",
    title: "Decision",
    description: "Build trust with case studies, webinars, and demonstrations.",
    color: "#C6F91F", // Neon lime
    icon: Target,
    topW: 300,
    botW: 260,
    hasArrow: true,
  },
  {
    id: "intent",
    title: "Action",
    description: "Convert ready buyers with clear CTAs and easy checkout.",
    color: "#FF5151", // Red
    icon: CreditCard,
    topW: 260,
    botW: 220,
    hasArrow: true,
  },
  {
    id: "purchase",
    title: "Loyalty",
    description: "Retain customers through excellent service and community.",
    color: "#FAE414", // Yellow
    icon: ShoppingBag,
    topW: 220,
    botW: 180,
    hasArrow: false,
  },
];

function getLayerPath(topW: number, botW: number, hasArrow: boolean, startY: number) {
  const height = 80;
  const endY = startY + height;
  
  const tLx = (400 - topW) / 2;
  const tRx = 400 - tLx;
  const bLx = (400 - botW) / 2;
  const bRx = 400 - bLx;
  const slope = (tRx - bRx) / height;
  
  const arrowW = 14;
  const arrowH = 16;
  
  let d = `M ${tLx + 10} ${startY} `;
  d += `L ${tRx - 10} ${startY} `;
  d += `Q ${tRx} ${startY} ${tRx - slope * 10} ${startY + 10} `;
  d += `L ${bRx + slope * 10} ${endY - 10} `;
  d += `Q ${bRx} ${endY} ${bRx - 10} ${endY} `;
  
  if (hasArrow) {
    d += `L ${200 + arrowW} ${endY} `;
    d += `L 200 ${endY + arrowH} `;
    d += `L ${200 - arrowW} ${endY} `;
  }
  
  d += `L ${bLx + 10} ${endY} `;
  d += `Q ${bLx} ${endY} ${bLx - slope * 10} ${endY - 10} `;
  d += `L ${tLx + slope * 10} ${startY + 10} `;
  d += `Q ${tLx} ${startY} ${tLx + 10} ${startY} Z`;

  return d;
}

export function InteractiveFunnel() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  // We map over funnelStages to create elements, then reverse the array so the top layer is rendered LAST and appears ON TOP.
  const stageElements = funnelStages.map((stage, index) => {
    const isActive = activeStage === stage.id;
    const startY = 10 + index * 84; // 80 height + 4 gap
    const d = getLayerPath(stage.topW, stage.botW, stage.hasArrow, startY);
    const Icon = stage.icon;
                
    return (
      <motion.g
        key={stage.id}
        onHoverStart={() => setActiveStage(stage.id)}
        onHoverEnd={() => setActiveStage(null)}
        onClick={() => setActiveStage(stage.id === activeStage ? null : stage.id)}
        className="cursor-pointer"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: isActive ? 15 : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
      >
        {/* Shadow Layer for Brutalist 3D pop effect */}
        <path
          d={d}
          fill="black"
          transform="translate(6, 6)"
        />
        {/* Main Layer */}
        <motion.path
          d={d}
          fill={isActive ? "#FFF" : stage.color}
          stroke="black"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <foreignObject 
          x="0" 
          y={startY} 
          width="400" 
          height="80"
          className="pointer-events-none"
        >
          <div className="w-full h-full flex items-center justify-center gap-2">
            <div className={`p-1.5 rounded-full border-[3px] border-black ${isActive ? 'bg-black text-white' : 'bg-white text-black'}`}>
              <Icon size={18} strokeWidth={3} />
            </div>
            <span className={`font-black uppercase tracking-widest text-lg ml-1 text-black`}>
              {stage.title}
            </span>
          </div>
        </foreignObject>
      </motion.g>
    );
  });

  return (
    <div className="w-full">
      <FadeUp>
        <div className="text-center mb-20">
           <div className="inline-block px-4 py-2 border-4 border-black bg-[#C6F91F] font-black uppercase tracking-widest text-sm mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Sales Pipeline
           </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#6e6e6e] mb-6 tracking-tighter uppercase leading-none">
            The Stacked <br className="md:hidden" />
            <span className="text-black bg-white px-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2 inline-block ml-2">
              Conversion Funnel
            </span>
          </h2>
          <p className="text-black bg-white p-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] max-w-2xl mx-auto text-lg md:text-xl font-bold mt-8">
            Interact with our neo-brutalist funnel layers. Hover to explore how we turn cold traffic into brand advocates.
          </p>
        </div>
      </FadeUp>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* 2D Flat Funnel Visualization */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg viewBox="0 0 400 460" className="w-full max-w-[400px] h-auto overflow-visible py-10">
            {stageElements.reverse()}
          </svg>
        </div>

        {/* Details / Content Panel */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white border-8 border-black p-8 md:p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden min-h-[400px] flex flex-col justify-center">
             
             {/* Background pattern */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6F91F] border-l-[8px] border-b-[8px] border-black -mr-16 -mt-16 rotate-45 z-0" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF90E8] border-r-[8px] border-t-[8px] border-black -ml-16 -mb-16 rotate-45 z-0" />
             
             <div className="relative z-10 bg-white/90 p-4 border-4 border-black border-dashed">
               {!activeStage ? (
                 <div className="flex items-center justify-center h-full text-center py-10">
                   <p className="text-xl md:text-2xl font-black uppercase text-black animate-pulse">
                      Hover over a funnel stage <br/>to reveal the strategy
                   </p>
                 </div>
               ) : (
                 <div className="flex flex-col h-full justify-center p-4">
                   {funnelStages.map((stage) => {
                     if (stage.id !== activeStage) return null;
                     const Icon = stage.icon;
                     return (
                       <motion.div
                         key={stage.id}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -20 }}
                         transition={{ duration: 0.3 }}
                       >
                         <div className="flex items-center gap-4 mb-6">
                            <span className="p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{ backgroundColor: stage.color }}>
                              <Icon size={32} className="text-black" strokeWidth={3} />
                            </span>
                            <h3 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                              {stage.title}
                            </h3>
                         </div>
                         <p className="text-xl text-black font-bold leading-relaxed mb-10 bg-neutral-100 p-4 border-4 border-black">
                           {stage.description}
                         </p>
                         
                         <div className="space-y-4 font-black uppercase">
                            <div className="flex items-center gap-3 border-b-4 border-black pb-3">
                               <ArrowRight className="text-[#3861FB]" strokeWidth={3} /> 
                               <span>Metrics: Conversion Rate %</span>
                            </div>
                            <div className="flex items-center gap-3 border-b-4 border-black pb-3">
                               <ArrowRight className="text-[#FF90E8]" strokeWidth={3} /> 
                               <span>Tactics: Multi-channel Touchpoints</span>
                            </div>
                         </div>

                         <button className="mt-10 px-8 py-4 bg-black text-white font-black uppercase tracking-widest hover:bg-[#FAE414] hover:text-black transition-colors w-max border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                           Optimize Stage
                         </button>
                       </motion.div>
                     );
                   })}
                 </div>
               )}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
