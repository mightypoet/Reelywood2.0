import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Smartphone, Search, Share2, Mail, Video, MousePointerClick, X } from "lucide-react";
import { FadeUp } from "./FadeUp";

const nodes = [
  { id: 'start', label: 'Strategy', icon: MousePointerClick, color: '#fff', bg: 'bg-white', x: 400, y: 100, z: 20, description: "Define goals and identify the target audience to lay the groundwork for a successful campaign." },
  { id: 'mobile', label: 'Mobile', icon: Smartphone, color: '#FAE414', bg: 'bg-[#FAE414]', x: 150, y: 250, z: 40, description: "Reach customers on their devices with SMS, push notifications, and mobile-optimized experiences." },
  { id: 'video', label: 'Video', icon: Video, color: '#3861FB', bg: 'bg-[#3861FB]', x: 650, y: 250, z: 40, description: "Engage audiences visually through short-form and long-form video content." },
  { id: 'social', label: 'Social', icon: Share2, color: '#FF5151', bg: 'bg-[#FF5151]', x: 400, y: 350, z: 60, description: "Build community and brand awareness across platforms like Instagram, LinkedIn, and TikTok." },
  { id: 'keywords', label: 'Keywords', icon: Search, color: '#C6F91F', bg: 'bg-[#C6F91F]', x: 250, y: 500, z: 80, description: "Optimize for search engines (SEO/SEM) to capture high-intent traffic." },
  { id: 'email', label: 'Email', icon: Mail, color: '#FF90E8', bg: 'bg-[#FF90E8]', x: 550, y: 500, z: 80, description: "Nurture leads and drive conversions with personalized, automated email sequences." },
];

const paths = [
  // Strategy to Mobile
  { d: 'M 400 100 L 400 155 Q 400 175 380 175 L 170 175 Q 150 175 150 195 L 150 250', color: '#FAE414' },
  // Strategy to Video
  { d: 'M 400 100 L 400 155 Q 400 175 420 175 L 630 175 Q 650 175 650 195 L 650 250', color: '#3861FB' },
  // Strategy to Social
  { d: 'M 400 100 L 400 350', color: '#FF5151' },
  // Social to Keywords
  { d: 'M 400 350 L 400 405 Q 400 425 380 425 L 270 425 Q 250 425 250 445 L 250 500', color: '#C6F91F' },
  // Social to Email
  { d: 'M 400 350 L 400 405 Q 400 425 420 425 L 530 425 Q 550 425 550 445 L 550 500', color: '#FF90E8' },
];

export function InteractiveWorkflow() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  return (
    <div className="w-full">
      <FadeUp>
        <div className="text-center mb-16">
           <div className="inline-block px-4 py-2 border-4 border-black bg-[#FF90E8] font-black uppercase tracking-widest text-sm mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Omnichannel Network
           </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#909090] mb-6 tracking-tighter uppercase leading-none">
            Digital Marketing <br className="md:hidden" />
            <span className="text-black bg-[#FAE414] px-4 py-1 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] inline-block ml-2 mt-4 md:mt-0">
              Workflow
            </span>
          </h2>
          <p className="text-black max-w-2xl mx-auto text-lg md:text-xl font-bold mt-8 bg-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Explore interconnected campaigns executing simultaneously across all channels.
          </p>
        </div>
      </FadeUp>

      <div className="w-full flex justify-center mt-10 overflow-x-auto py-10 px-4">
        <motion.div 
          className="relative min-w-[800px] w-full max-w-[800px] h-[600px]"
          initial={{ scale: 0.9 }}
          animate={{ 
            scale: activeNode ? 0.95 : 1 
          }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          {/* Base grid / shadow plane */}
          <div 
             className="absolute inset-0 bg-white border-8 border-black rounded-none shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
          >
             <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          </div>

          {/* SVG Connecting Paths */}
          <svg 
            viewBox="0 0 800 600"
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          >
            {paths.map((p, i) => (
              <g key={i}>
                {/* Outline Path */}
                <path 
                  d={p.d} 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="14"
                  strokeLinejoin="round" 
                  strokeLinecap="round"
                />
                {/* Inner Path */}
                <path 
                  d={p.d} 
                  fill="none" 
                  stroke={p.color} 
                  strokeWidth="8"
                  strokeLinejoin="round" 
                  strokeLinecap="round"
                  className="animate-pulse"
                  style={{ animationDuration: `${2 + i * 0.5}s` }}
                />
              </g>
            ))}
            
            {/* Central data hub background */}
            <circle cx="400" cy="350" r="100" fill="#FF5151" fillOpacity="0.2" stroke="black" strokeWidth="4" strokeDasharray="10 10" />
          </svg>

          {/* Nodes */}
          {nodes.map((node, i) => {
            const Icon = node.icon;
            const isActive = activeNode === node.id;
            
            return (
              <motion.div
                key={node.id}
                className={`absolute flex flex-col items-center justify-center p-4 lg:p-6 border-4 border-black cursor-pointer origin-center transition-colors duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${isActive ? 'bg-white' : node.bg}`}
                style={{ 
                  left: `${(node.x / 800) * 100}%`,
                  top: `${(node.y / 600) * 100}%`,
                  zIndex: isActive ? 100 : node.z,
                }}
                initial={{ translateX: "-50%", translateY: "-50%" }}
                animate={{ 
                  scale: isActive ? 1.2 : 1
                }}
                onHoverStart={() => setActiveNode(node.id)}
                onHoverEnd={() => setActiveNode(null)}
                onClick={() => setSelectedNodeId(node.id)}
              >
                <div className="bg-white p-3 md:p-4 border-4 border-black mb-2 md:mb-3 shadow-[inset_0px_4px_0px_0px_rgba(0,0,0,0.1)]">
                  <Icon size={24} className="md:w-8 md:h-8" />
                </div>
                <span className="font-black uppercase tracking-wider text-xs md:text-sm text-black bg-white px-2 py-1 border-2 border-black whitespace-nowrap">
                  {node.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedNodeId && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNodeId(null)}
          >
            <motion.div
              className="bg-white border-8 border-black p-8 max-w-md w-full shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: "spring", bounce: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-black hover:text-[#FF5151] transition-colors"
                onClick={() => setSelectedNodeId(null)}
              >
                <X size={24} strokeWidth={4} />
              </button>
              
              {(() => {
                const node = nodes.find(n => n.id === selectedNodeId);
                if (!node) return null;
                const Icon = node.icon;
                return (
                  <div className="flex flex-col items-center text-center mt-4">
                    <div className={`p-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 ${node.bg}`}>
                      <Icon size={40} className="text-black" />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{node.label}</h3>
                    <p className="text-lg font-bold text-black leading-relaxed border-t-4 border-dashed border-black pt-6 mt-2">
                       {node.description}
                    </p>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
