export function PromoBanner() {
  return (
    <div className="bg-brand-neon py-3 px-4 relative z-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-black font-bold uppercase tracking-wider text-sm md:text-base flex flex-col sm:flex-row justify-center items-center gap-2">
          <span>Get 50% OFF - This Month Only.</span>
          <span className="bg-black text-brand-neon px-3 py-1 rounded-md text-xs font-black tracking-widest">CODE: REELY50</span>
        </p>
      </div>
    </div>
  );
}

export function SocialProof() {
  const PARTNERS = [
    "ADOBE", "NETFLIX", "AMAZON", "GOOGLE", "SPOTIFY", "META", "APPLE", "DISNEY", "TESLA", "HBO"
  ];
  return (
    <div className="py-12 bg-brand-green overflow-hidden border-y-[4px] border-black font-playful">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <span 
              key={index} 
              className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight"
            >
              {partner}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee whitespace-nowrap flex items-center gap-16 px-8" style={{marginLeft: "100%"}}>
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <span 
              key={index} 
              className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
