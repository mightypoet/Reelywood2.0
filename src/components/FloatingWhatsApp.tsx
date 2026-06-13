import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100]">
      <a 
        href="#"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#1ebe57] rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
        aria-label="Chat with Reelywood on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white fill-white" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black font-semibold text-sm px-4 py-2 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl">
          Chat with Reelywood!
          {/* Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45"></div>
        </div>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></div>
      </a>
    </div>
  );
}
