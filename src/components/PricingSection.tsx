import React from 'react';
import { Check } from 'lucide-react';
import { LiquidButton } from './ui/button';

export function PricingSection() {
  return (
    <div className="mt-24 mb-12 font-display">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0 mb-8 border-b-8 border-black pb-4">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">
          Volume Pricing
        </h2>
        <p className="text-sm md:text-lg font-bold bg-[#C6F91F] px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] uppercase">
          Buy more, pay less per minute
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {/* Bronze */}
        <div className="bg-black text-white p-6 border-[6px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
          <div className="text-sm font-black uppercase tracking-widest text-[#FF90E8] mb-4">Bronze</div>
          <div className="text-4xl font-black mb-2">₹7.00 <span className="text-lg font-bold text-gray-400">/min</span></div>
          <div className="text-gray-400 font-bold">₹500—₹4,999.99</div>
        </div>

        {/* Silver */}
        <div className="bg-white p-6 border-[6px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform relative">
          <div className="absolute top-4 right-4 text-sm font-black text-[#3861FB]">-17%</div>
          <div className="text-sm font-black uppercase tracking-widest text-black mb-4">Silver</div>
          <div className="text-4xl font-black mb-2 text-black">₹6.00 <span className="text-lg font-bold text-gray-500">/min</span></div>
          <div className="text-gray-500 font-bold">₹5,000—₹24,999.99</div>
        </div>

        {/* Gold */}
        <div className="bg-white p-6 border-[6px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform relative">
          <div className="absolute top-4 right-4 text-sm font-black text-[#FF5151]">-25%</div>
          <div className="text-sm font-black uppercase tracking-widest text-black mb-4">Gold</div>
          <div className="text-4xl font-black mb-2 text-black">₹5.50 <span className="text-lg font-bold text-gray-500">/min</span></div>
          <div className="text-gray-500 font-bold">₹25,000—₹99,999.99</div>
        </div>

        {/* Platinum */}
        <div className="bg-white p-6 border-[6px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform relative">
          <div className="absolute top-4 right-4 text-sm font-black text-[#FF5151]">-33%</div>
          <div className="text-sm font-black uppercase tracking-widest text-black mb-4">Platinum</div>
          <div className="text-4xl font-black mb-2 text-black">₹5.00 <span className="text-lg font-bold text-gray-500">/min</span></div>
          <div className="text-gray-500 font-bold">₹1,00,000+</div>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Pay As You Go */}
        <div className="bg-white border-[6px] border-black p-6 flex flex-col shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative">
          <h3 className="text-2xl font-black uppercase mb-2 text-black">Pay As You Go</h3>
          <p className="text-gray-600 font-bold mb-6 min-h-[48px]">Perfect for testing and occasional use</p>
          
          <div className="bg-neutral-100 border-4 border-black p-4 mb-6 text-center">
            <div className="text-4xl font-black mb-1">₹7.00/min</div>
            <div className="text-xs font-black uppercase tracking-widest text-gray-500">Platform Fee Per Minute</div>
          </div>

          <div className="mb-6 font-bold text-black border-b-2 border-dashed border-gray-300 pb-6">
            <div className="mb-1">No monthly commitment</div>
            <div className="text-gray-600">Pay only for what you use</div>
          </div>

          <ul className="space-y-3 font-bold text-sm mb-8 flex-grow">
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#3861FB]" strokeWidth={3} /> Standard providers (Deepgram + Google TTS + GPT-4o-mini)</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#3861FB]" strokeWidth={3} /> Basic analytics</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#3861FB]" strokeWidth={3} /> Community support</li>
          </ul>

          <LiquidButton className="w-full bg-white text-black border-4 border-black font-black uppercase tracking-widest hover:bg-[#C6F91F]">
            Get Started Free
          </LiquidButton>
        </div>

        {/* Pro */}
        <div className="bg-white border-[6px] border-black p-6 flex flex-col shadow-[16px_16px_0_0_rgba(0,0,0,1)] relative lg:-translate-y-4">
          <div className="absolute -top-4 left-4 bg-black text-white px-3 py-1 font-black uppercase tracking-widest text-xs border-2 border-black">Popular</div>
          <h3 className="text-2xl font-black uppercase mb-2 text-black">Pro</h3>
          <p className="text-gray-600 font-bold mb-6 min-h-[48px]">Best for startups and small businesses</p>
          
          <div className="bg-neutral-100 border-4 border-black p-4 mb-6 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
            <div className="text-4xl font-black mb-1 relative z-10">₹6.00/min</div>
            <div className="text-xs font-black uppercase tracking-widest text-gray-500 relative z-10">Platform Fee Per Minute</div>
          </div>

          <div className="mb-6 font-bold text-black border-b-2 border-dashed border-gray-300 pb-6">
            <div className="text-3xl font-black mb-1">₹1,500 <span className="text-sm font-bold text-gray-500">/mo</span></div>
            <div className="text-gray-600 flex items-center gap-1 text-sm"><span className="inline-block w-4 h-4 border-2 border-black rounded-full flex items-center justify-center text-[8px]">⏱</span> 300 mins included</div>
          </div>

          <ul className="space-y-3 font-bold text-sm mb-8 flex-grow">
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-black" strokeWidth={3} /> Standard providers included</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-black" strokeWidth={3} /> Premium add-ons available</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-black" strokeWidth={3} /> Unlimited agents</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-black" strokeWidth={3} /> API access</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-black" strokeWidth={3} /> Basic analytics</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-black" strokeWidth={3} /> CRM integrations</li>
          </ul>

          <LiquidButton className="w-full bg-black text-white border-4 border-black font-black uppercase tracking-widest hover:bg-[#FF90E8] hover:text-black hover:shadow-none hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all">
            Select Plan
          </LiquidButton>
        </div>

        {/* Max */}
        <div className="bg-white border-[6px] border-black p-6 flex flex-col shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative">
          <h3 className="text-2xl font-black uppercase mb-2 text-black">Max</h3>
          <p className="text-gray-600 font-bold mb-6 min-h-[48px]">For growing businesses and sales teams</p>
          
          <div className="bg-neutral-100 border-4 border-black p-4 mb-6 text-center">
            <div className="text-4xl font-black mb-1">₹5.50/min</div>
            <div className="text-xs font-black uppercase tracking-widest text-gray-500">Platform Fee Per Minute</div>
          </div>

          <div className="mb-6 font-bold text-black border-b-2 border-dashed border-gray-300 pb-6">
            <div className="text-3xl font-black mb-1">₹5,000 <span className="text-sm font-bold text-gray-500">/mo</span></div>
            <div className="text-gray-600 flex items-center gap-1 text-sm mb-1"><span className="inline-block w-4 h-4 border-2 border-black rounded-full flex items-center justify-center text-[8px]">⏱</span> 1,100 mins included</div>
            <div className="text-gray-600 text-sm">% 20% off add-ons</div>
          </div>

          <ul className="space-y-3 font-bold text-sm mb-8 flex-grow">
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#FF5151]" strokeWidth={3} /> Everything in Pro</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#FF5151]" strokeWidth={3} /> 20% off all premium add-ons</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#FF5151]" strokeWidth={3} /> Advanced analytics</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#FF5151]" strokeWidth={3} /> Webhook callbacks</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#FF5151]" strokeWidth={3} /> Priority support (4hr response)</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#FF5151]" strokeWidth={3} /> CRM integrations</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#FF5151]" strokeWidth={3} /> Workflow automation</li>
          </ul>

          <LiquidButton className="w-full bg-white text-black border-4 border-black font-black uppercase tracking-widest hover:bg-[#FAE414]">
            Select Plan
          </LiquidButton>
        </div>

        {/* Ultra */}
        <div className="bg-white border-[6px] border-black p-6 flex flex-col shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative">
          <h3 className="text-2xl font-black uppercase mb-2 text-black">Ultra</h3>
          <p className="text-gray-600 font-bold mb-6 min-h-[48px]">For enterprises and high-volume operations</p>
          
          <div className="bg-neutral-100 border-4 border-black p-4 mb-6 text-center">
            <div className="text-4xl font-black mb-1">₹5.00/min</div>
            <div className="text-xs font-black uppercase tracking-widest text-gray-500">Platform Fee Per Minute</div>
          </div>

          <div className="mb-6 font-bold text-black border-b-2 border-dashed border-gray-300 pb-6">
            <div className="text-3xl font-black mb-1">₹15,000 <span className="text-sm font-bold text-gray-500">/mo</span></div>
            <div className="text-gray-600 flex items-center gap-1 text-sm mb-1"><span className="inline-block w-4 h-4 border-2 border-black rounded-full flex items-center justify-center text-[8px]">⏱</span> 3,500 mins included</div>
            <div className="text-gray-600 text-sm">% 30% off add-ons</div>
          </div>

          <ul className="space-y-3 font-bold text-sm mb-8 flex-grow">
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#C6F91F]" strokeWidth={3} /> Everything in Max</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#C6F91F]" strokeWidth={3} /> 30% off all premium add-ons</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#C6F91F]" strokeWidth={3} /> Custom integrations support</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#C6F91F]" strokeWidth={3} /> SLA guarantee (99.9% uptime)</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#C6F91F]" strokeWidth={3} /> Priority support (1hr response)</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#C6F91F]" strokeWidth={3} /> CRM integrations</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#C6F91F]" strokeWidth={3} /> Workflow automation</li>
            <li className="flex gap-2 items-start"><Check className="w-5 h-5 flex-shrink-0 text-[#C6F91F]" strokeWidth={3} /> Dedicated support</li>
          </ul>

          <LiquidButton className="w-full bg-white text-black border-4 border-black font-black uppercase tracking-widest hover:bg-[#3861FB] hover:text-white">
            Select Plan
          </LiquidButton>
        </div>

      </div>
    </div>
  );
}
