import { ArrowRight } from "lucide-react";
import { LiquidButton } from "./ui/button";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#FAE414] pt-24 pb-8 px-6 lg:px-12 text-black border-t-8 border-black font-playful relative overflow-hidden bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="max-w-[1400px] mx-auto relative z-10 bg-white border-8 border-black p-8 md:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left Column */}
          <div className="flex flex-col items-start justify-between">
            <div className="max-w-sm mb-20 lg:mb-32">
              <p className="text-xl font-bold bg-[#C6F91F] p-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] mb-8">
                Have a project in mind? We'd love to hear what you're working on and show you how we can help. Whether you're exploring a new market or launching your next product, we're ready when you are.
              </p>
              <LiquidButton className="h-auto flex items-center space-x-3 bg-black text-white px-8 py-6 uppercase font-black tracking-widest text-lg border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:bg-[#FF90E8] hover:text-black hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                <span>Get a quote</span>
                <span className="bg-white rounded-full p-1 flex items-center justify-center border-2 border-black ml-4">
                  <ArrowRight className="w-5 h-5 text-black" strokeWidth={3} />
                </span>
              </LiquidButton>
            </div>
            
            <h2 className="text-7xl md:text-[110px] font-black uppercase tracking-tighter leading-[0.9] drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
              Let's <br />
              Connect
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex lg:justify-end">
            <div className="w-full lg:w-3/4 xl:w-2/3 border-l-0 lg:border-l-8 border-black lg:pl-12">
              <div className="grid grid-cols-2 gap-8 lg:gap-12 mb-16 font-bold uppercase tracking-widest">
                <div className="flex flex-col space-y-4">
                  <a href="#" className="hover:bg-black hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-colors w-max">Services</a>
                  <a href="#" className="hover:bg-black hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-colors w-max">Methodology</a>
                  <a href="#" className="hover:bg-black hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-colors w-max">Industry Sectors</a>
                  <a href="#" className="hover:bg-black hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-colors w-max">Network</a>
                  <a href="#" className="hover:bg-black hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-colors w-max">About Us</a>
                </div>
                <div className="flex flex-col space-y-4">
                  <a href="#" className="hover:bg-black hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-colors w-max">Insights</a>
                  <a href="#" className="hover:bg-black hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-colors w-max">Contact</a>
                  <a href="#" className="hover:bg-black hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-colors w-max">Privacy Policy</a>
                  <a href="#" className="hover:bg-black hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-colors w-max">Cookie Preferences</a>
                </div>
              </div>

              <div className="flex flex-col space-y-10">
                <div className="bg-neutral-100 border-4 border-black p-4">
                  <p className="font-black uppercase tracking-widest text-lg mb-2">Dubai</p>
                  <p className="text-lg font-bold">
                    Dubai Silicon Oasis, DDP,<br />
                    Building A2, 341041 Dubai, UAE<br />
                    Mon-Fri 10:00 am - 7:00 pm (GST)
                  </p>
                </div>
                <div className="bg-neutral-100 border-4 border-black p-4">
                  <p className="font-black uppercase tracking-widest text-lg mb-2">London</p>
                  <p className="text-lg font-bold">
                    3rd Floor, 86-90 Paul Street,<br />
                    London EC2A 4NE, UK<br />
                    Mon-Fri 9:00 am - 6:00 pm (GMT)
                  </p>
                </div>
                <div>
                  <a href="mailto:curious@mindmarket.com" className="inline-block bg-black text-white font-black uppercase text-xl px-6 py-4 border-4 border-black hover:bg-[#FAE414] hover:text-black transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    curious@mindmarket.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-black uppercase border-t-8 border-black pt-8 pb-4">
          <p className="mb-4 md:mb-0 bg-[#C6F91F] px-4 py-2 border-4 border-black">Copyright &copy; 2026 Reelywood Agency</p>
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
             <span className="bg-black text-white px-3 py-1 text-sm tracking-widest border-2 border-black">REELYWOOD</span>
             <span className="bg-white px-3 py-1 border-4 border-black text-sm">CORPORATE 2026</span>
          </div>
          <a href="#" className="hover:bg-black hover:text-white px-4 py-2 border-4 border-black transition-colors bg-[#FF90E8]">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
