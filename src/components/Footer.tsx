import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#FAE414] pt-24 pb-8 px-6 lg:px-12 text-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left Column */}
          <div className="flex flex-col items-start justify-between">
            <div className="max-w-sm mb-20 lg:mb-32">
              <p className="text-[17px] leading-relaxed mb-8 font-medium">
                Have a project in mind? We'd love to hear what you're working on and show you how we can help. Whether you're exploring a new market or launching your next product, we're ready when you are.
              </p>
              <button className="flex items-center space-x-3 bg-white hover:bg-neutral-50 px-5 py-2.5 rounded-full text-black font-semibold transition-colors duration-200">
                <span>Get a quote</span>
                <span className="bg-[#FAE414] rounded-full p-1 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-black" />
                </span>
              </button>
            </div>
            
            <h2 className="text-7xl md:text-[110px] font-medium leading-[0.9] tracking-tighter">
              Let's <br />
              Connect
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex lg:justify-end">
            <div className="w-full lg:w-3/4 xl:w-2/3">
              <div className="grid grid-cols-2 gap-8 lg:gap-12 mb-16">
                <div className="flex flex-col space-y-3.5">
                  <a href="#" className="text-[15px] font-medium hover:underline underline-offset-4">Services</a>
                  <a href="#" className="text-[15px] font-medium hover:underline underline-offset-4">Methodology</a>
                  <a href="#" className="text-[15px] font-medium hover:underline underline-offset-4">Industry Sectors</a>
                  <a href="#" className="text-[15px] font-medium hover:underline underline-offset-4">Network</a>
                  <a href="#" className="text-[15px] font-medium hover:underline underline-offset-4">About Us</a>
                </div>
                <div className="flex flex-col space-y-3.5">
                  <a href="#" className="text-[15px] font-medium hover:underline underline-offset-4">Insights</a>
                  <a href="#" className="text-[15px] font-medium hover:underline underline-offset-4">Contact</a>
                  <a href="#" className="text-[15px] font-medium hover:underline underline-offset-4">Privacy Policy</a>
                  <a href="#" className="text-[15px] font-medium hover:underline underline-offset-4">Cookie Preferences</a>
                </div>
              </div>

              <div className="flex flex-col space-y-10">
                <div>
                  <p className="font-semibold text-[15px] mb-2">Dubai</p>
                  <p className="text-[15px] leading-relaxed">
                    Dubai Silicon Oasis, DDP,<br />
                    Building A2, 341041 Dubai, UAE<br />
                    Mon-Fri 10:00 am - 7:00 pm (GST)
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[15px] mb-2">London</p>
                  <p className="text-[15px] leading-relaxed">
                    3rd Floor, 86-90 Paul Street,<br />
                    London EC2A 4NE, UK<br />
                    Mon-Fri 9:00 am - 6:00 pm (GMT)
                  </p>
                </div>
                <div>
                  <a href="mailto:curious@mindmarket.com" className="font-semibold text-[16px] hover:underline underline-offset-4">
                    curious@mindmarket.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium border-t border-black/10 pt-8 pb-4">
          <p className="text-[13px] mb-4 md:mb-0">Copyright &copy; 2026 MindMarket International</p>
          <div className="flex items-center space-x-1.5 mb-4 md:mb-0">
             <span className="bg-black text-white px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase">esomar</span>
             <span className="border border-black px-2 py-0.5 rounded text-[11px] font-semibold">corporate 2024</span>
          </div>
          <a href="#" className="text-[13px] hover:underline underline-offset-4">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
