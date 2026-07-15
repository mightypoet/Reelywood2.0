import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import { PortfolioItem } from '../types';
import { Loader2, TrendingUp, Play, Image as ImageIcon, BarChart, Film } from 'lucide-react';

const ReelCard: React.FC<{ item: PortfolioItem; onClick: (url: string) => void }> = ({ item, onClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.error("Video play failed:", err));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="bg-black border-[6px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all flex flex-col group relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(item.media_url)}
    >
       <div className="absolute top-4 right-4 z-20 bg-[#C6F91F] text-black w-10 h-10 flex flex-col items-center justify-center border-4 border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,1)] group-hover:bg-[#FF90E8] group-hover:scale-110 transition-transform">
         <Play size={18} className="ml-1" strokeWidth={3} />
       </div>
       <div className="absolute top-4 left-4 z-20 bg-white text-black font-black uppercase px-3 py-1 border-4 border-black text-xs shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
         AIGC Reel
       </div>
       <div className="relative aspect-[9/16] bg-neutral-900 border-b-[6px] border-black overflow-hidden flex items-center justify-center">
         <video 
           ref={videoRef}
           src={item.media_url} 
           className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
           muted
           loop
           playsInline
         />
       </div>
       <div className="p-4 bg-white grow flex flex-col justify-between">
         <h3 className="text-xl font-black uppercase leading-tight line-clamp-2">{item.title}</h3>
         {item.description && <p className="text-sm font-bold opacity-70 mt-2 line-clamp-2">{item.description}</p>}
       </div>
    </div>
  );
};

export function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data, error } = await supabase
          .from('portfolio_items')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setItems(data || []);
      } catch (err) {
        console.error("Error fetching portfolio items:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  const creatives = items.filter(i => i.category === 'creative');
  const reels = items.filter(i => i.category === 'reel');
  const stats = items.filter(i => i.category === 'stats');

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-neutral-100 font-display selection:bg-black selection:text-white bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] bg-[size:24px_24px]" style={{ backgroundColor: '#040404' }}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 border-b-8 border-black pb-8">
          <div className="inline-block bg-[#FAE414] text-black font-black text-sm uppercase px-4 py-1 mb-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[-2deg]">
            Public Archive
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
            Portfolio
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-bold text-black max-w-3xl leading-snug">
            A curated collection of creatives, performance reports, and generated AIGC reels.
          </p>
        </header>

        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-64 border-[6px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <Loader2 className="animate-spin text-[#3861FB] mb-4" size={64} strokeWidth={3} />
            <span className="text-3xl font-black uppercase text-black tracking-tight">Decentralizing Assets...</span>
          </div>
        ) : (
          <div className="space-y-24">
            
            {/* CREATIVES SECTION */}
            {creatives.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#FF90E8] border-4 border-black p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    <ImageIcon strokeWidth={3} size={32} />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Creatives</h2>
                </div>
                
                <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
                  {creatives.map(item => (
                    <div key={item.id} className="break-inside-avoid bg-white border-[6px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all">
                      <div className="border-b-[6px] border-black overflow-hidden relative group">
                        <img 
                          src={item.media_url} 
                          alt={item.title} 
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute top-4 left-4 bg-black text-white font-black uppercase px-3 py-1 text-xs tracking-widest">
                          Creative Asset
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-black uppercase leading-tight mb-3 border-b-4 border-black pb-2">{item.title}</h3>
                        {item.description && <p className="text-lg font-bold opacity-80">{item.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* AIGC REELS SECTION */}
            {reels.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#C6F91F] border-4 border-black p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    <Film strokeWidth={3} size={32} />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">AIGC Reels</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {reels.map(item => (
                    <ReelCard key={item.id} item={item} onClick={setSelectedVideo} />
                  ))}
                </div>
              </section>
            )}

            {/* PERFORMANCE SECTION */}
            {stats.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#3861FB] text-white border-4 border-black p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    <BarChart strokeWidth={3} size={32} />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Performance Reports</h2>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {stats.map(item => (
                    <div key={item.id} className="bg-[#3861FB] border-[6px] border-black p-6 shadow-[12px_12px_0_0_rgba(0,0,0,1)] text-white relative hover:-translate-y-2 transition-transform">
                      <div className="absolute -top-6 -right-6 bg-[#FAE414] text-black w-16 h-16 flex items-center justify-center border-[6px] border-black rotate-[12deg] shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-10 hidden sm:flex">
                        <TrendingUp size={32} strokeWidth={3} />
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        {item.media_url && (
                          <div className="w-full md:w-1/3 aspect-square bg-black border-4 border-black overflow-hidden flex-shrink-0">
                             <img src={item.media_url} alt="Report Cover" className="w-full h-full object-cover opacity-80" />
                          </div>
                        )}
                        
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-3xl font-black uppercase mb-4 text-[#C6F91F] border-b-4 border-black pb-2 sm:pr-12">{item.title}</h3>
                          
                          <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="bg-white border-4 border-black p-3 text-black text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col justify-center">
                              <div className="text-xs font-black uppercase opacity-60 mb-1">ROAS</div>
                              <div className="text-2xl sm:text-3xl font-black">{item.marketing_metrics?.roas || '-'}</div>
                            </div>
                            <div className="bg-white border-4 border-black p-3 text-black text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col justify-center">
                              <div className="text-xs font-black uppercase opacity-60 mb-1">Spend</div>
                              <div className="text-xl sm:text-2xl font-black px-1">{item.marketing_metrics?.ad_spend || '-'}</div>
                            </div>
                            <div className="bg-white border-4 border-black p-3 text-black text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col justify-center">
                              <div className="text-xs font-black uppercase opacity-60 mb-1">CTR</div>
                              <div className="text-2xl sm:text-3xl font-black">{item.marketing_metrics?.ctr || '-'}</div>
                            </div>
                          </div>

                          <div className="bg-black/20 p-4 border-4 border-black text-lg font-bold flex-1">
                            {item.description || "No analysis details provided for this campaign."}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {items.length === 0 && !isLoading && (
               <div className="flex flex-col justify-center items-center h-64 border-[6px] border-black bg-[#FF5151] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-white p-8 text-center">
                 <h2 className="text-4xl font-black uppercase tracking-widest drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Empty Archive</h2>
                 <p className="text-xl font-bold mt-2">No portfolio items have been published to the database yet.</p>
               </div>
            )}
          </div>
        )}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white border-[6px] border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] max-w-4xl w-full relative">
            <button 
              className="absolute -top-6 -right-6 bg-[#FF5151] border-[4px] border-black text-white w-12 h-12 flex items-center justify-center font-black cursor-pointer hover:scale-110 transition-transform z-10 text-xl"
              onClick={() => setSelectedVideo(null)}
            >
              X
            </button>
            <div className="w-full aspect-video bg-black flex items-center border-[6px] border-black">
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Keeping the container brutal to match modal styling */}
          </div>
        </div>
      )}
    </div>
  );
}
