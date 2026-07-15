import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { AgentData } from '../types';
import { LiquidButton, MetalButton } from '../components/ui/button';
import { Settings, ShieldAlert, Loader2, User, Search, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';

import { PricingSection } from '../components/PricingSection';

export function AgentDirectory() {
  const [agents, setAgents] = useState<AgentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const { data, error } = await supabase
        .from('agents')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setAgents(data || []);
    } catch (err) {
      console.error("Error fetching agents:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-neutral-100 font-display selection:bg-black selection:text-white bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 border-b-8 border-black pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-black drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
              Agent Directory
            </h1>
            <p className="mt-4 text-sm md:text-xl font-bold bg-[#C6F91F] text-black inline-block px-3 md:px-4 py-2 border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              Authorized Personnel Only
            </p>
          </div>
          <LiquidButton asChild variant="outline" className="h-auto bg-white border-4 border-black hover:bg-black hover:text-white transition-colors uppercase font-black text-sm md:text-xl py-3 md:py-4 px-6 md:px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Link to="/admin">
              <Settings className="mr-2 w-4 h-4 md:w-6 md:h-6" strokeWidth={3} /> Admin Panel
            </Link>
          </LiquidButton>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center h-64 border-[6px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <Loader2 className="animate-spin" size={48} strokeWidth={3} />
            <span className="ml-4 text-3xl font-black uppercase">Loading Grid...</span>
          </div>
        ) : agents.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 border-[6px] border-black bg-[#FF5151] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-white p-8 text-center">
            <ShieldAlert size={64} strokeWidth={3} className="mb-4 text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" />
            <h2 className="text-4xl font-black uppercase tracking-widest drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">No Agents Found</h2>
            <p className="text-xl font-bold mt-2 text-white">Contact terminal administrator or initiate via Admin Panel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <div 
                key={agent.id} 
                className="bg-white border-[6px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col relative group transition-transform hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* Visual Flair */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#3861FB] border-4 border-black flex items-center justify-center rotate-12 z-10">
                  <User className="text-white" size={24} strokeWidth={3} />
                </div>
                
                <h3 className="text-3xl font-black uppercase tracking-tight text-black border-b-4 border-black pb-2 mb-4 pr-6">
                  {agent.name}
                </h3>
                
                <div className="inline-flex max-w-max mb-4 bg-black text-[#FAE414] font-black uppercase text-sm px-3 py-1 border-2 border-black tracking-widest">
                  Type: {agent.type || "General"}
                </div>
                
                <p className="text-lg font-bold text-neutral-700 leading-snug mb-8 flex-grow">
                  {agent.description}
                </p>

                <LiquidButton asChild className="w-full bg-[#FF90E8] text-black border-4 border-black font-black uppercase text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-[#C6F91F]">
                  <Link to={`/agent/${agent.id}`}>
                    <Fingerprint className="mr-2" strokeWidth={3} /> Connect
                  </Link>
                </LiquidButton>
              </div>
            ))}
          </div>
        )}

        <PricingSection />
      </div>
    </div>
  );
}
