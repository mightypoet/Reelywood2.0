import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { AgentData } from '../types';
import { LiquidButton, MetalButton } from '../components/ui/button';
import { Trash2, Edit2, Plus, LogIn, Save, ArrowLeft, ShieldAlert, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  const [agents, setAgents] = useState<AgentData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const [loginError, setLoginError] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [tableError, setTableError] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    type: '',
    vani_agent_id: '',
    vani_workspace_id: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    // Ultra-basic mock auth as requested
    if (password === 'admin123') {
      setIsAuthenticated(true);
      fetchAgents();
    } else {
      setLoginError("Invalid credentials");
    }
  };

  const fetchAgents = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('agents')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setAgents(data || []);
    } catch (err: any) {
      console.error(err);
      setTableError(err.message || "Error fetching agents");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Confirm termination of agent node.")) return;
    try {
      const { error } = await supabase.from('agents').delete().eq('id', id);
      if (error) throw error;
      setAgents(agents.filter(a => a.id !== id));
    } catch (err: any) {
      console.error(err);
      setTableError(err.message || "Failed to delete agent");
    }
  };

  const handleEdit = (agent: AgentData) => {
    setFormData({
      id: agent.id,
      name: agent.name,
      description: agent.description,
      type: agent.type,
      vani_agent_id: agent.vani_agent_id,
      vani_workspace_id: agent.vani_workspace_id
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClear = () => {
    setFormData({
      id: '', name: '', description: '', type: '', vani_agent_id: '', vani_workspace_id: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitLoading(true);
    setFormError('');
    setFormSuccess('');
    try {
      const payload = {
        name: formData.name,
        description: formData.description,
        type: formData.type,
        vani_agent_id: formData.vani_agent_id,
        vani_workspace_id: formData.vani_workspace_id
      };

      if (formData.id) {
        // Update
        const { error } = await supabase.from('agents').update(payload).eq('id', formData.id);
        if (error) throw error;
        setFormSuccess("Agent node updated successfully.");
      } else {
        // Insert
        const { error } = await supabase.from('agents').insert([payload]);
        if (error) throw error;
        setFormSuccess("New agent node deployed successfully.");
      }
      
      handleClear();
      fetchAgents();
    } catch (err: any) {
      console.error(err);
      setFormError(err.message || "Error saving agent data");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAE414] font-display p-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkFFNDE0Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')]">
        <form onSubmit={handleLogin} className="bg-white border-[8px] border-black p-8 md:p-12 max-w-md w-full shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative">
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#FF5151] border-4 border-black rotate-[12deg] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ShieldAlert className="text-white" size={32} strokeWidth={3} />
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 text-black border-b-8 border-black pb-4">Auth Required</h2>
          
          <div className="mb-6">
            <label className="block text-2xl font-black uppercase mb-3">Passcode</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-[4px] border-black p-4 text-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#3861FB] bg-neutral-100"
              placeholder="••••••••"
            />
          </div>
          
          {loginError && <div className="mb-6 p-4 bg-[#FF5151] text-white border-4 border-black font-bold uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)]">{loginError}</div>}

          <LiquidButton type="submit" className="w-full bg-black text-white hover:bg-[#C6F91F] hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase font-black text-2xl h-16 border-[4px] border-black transition-all">
            <LogIn className="mr-3" strokeWidth={3} /> Access System
          </LiquidButton>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-neutral-100 font-display">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="flex flex-col gap-4 bg-black text-white p-6 md:p-8 border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
          <div className="flex justify-between items-center w-full">
            <div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#C6F91F]">Agent Admin Console</h1>
              <p className="text-xl font-bold uppercase tracking-widest opacity-80 mt-2">Vani API + Supabase Control Panel</p>
            </div>
            <div className="flex gap-4">
              <Link to="/admin/portfolio" className="bg-white text-black p-3 md:px-6 md:py-3 border-4 border-white font-black uppercase hover:bg-[#3861FB] hover:text-white transition-colors flex items-center text-sm md:text-base">
                Portfolio Admin
              </Link>
              <Link to="/agents" className="bg-white text-black p-3 md:px-6 md:py-3 border-4 border-white font-black uppercase hover:bg-[#FF90E8] transition-colors flex items-center text-sm md:text-base">
                <ArrowLeft className="mr-2 hidden md:block" /> Directory
              </Link>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-1 bg-white border-[6px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-fit relative">
            <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-3">
              {formData.id ? 'Edit Agent' : 'Deploy New Agent'}
            </h2>

            {formError && (
              <div className="mb-6 p-4 bg-[#FF5151] text-white border-4 border-black font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] uppercase">
                <ShieldAlert className="inline mb-1 mr-2" />
                Error: {formError}
              </div>
            )}
            
            {formSuccess && (
              <div className="mb-6 p-4 bg-[#C6F91F] text-black border-4 border-black font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] uppercase">
                {formSuccess}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-lg font-black uppercase mb-2">Agent Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border-4 border-black p-3 font-bold bg-neutral-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C6F91F] transition-all" />
              </div>
              <div>
                <label className="block text-lg font-black uppercase mb-2">Description</label>
                <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full border-4 border-black p-3 font-bold bg-neutral-50 h-24 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C6F91F] transition-all" />
              </div>
              <div>
                <label className="block text-lg font-black uppercase mb-2">Role Type (e.g. Sales, Tech)</label>
                <input required type="text" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full border-4 border-black p-3 font-bold bg-neutral-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C6F91F] transition-all" />
              </div>
              <div className="pt-4 border-t-4 border-dashed border-black">
                <label className="block text-lg font-black uppercase mb-2 text-[#3861FB]">Vani Agent ID</label>
                <input required type="text" value={formData.vani_agent_id} onChange={e => setFormData({...formData, vani_agent_id: e.target.value})} className="w-full border-4 border-black p-3 font-bold bg-neutral-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#3861FB] transition-all" />
              </div>
              <div>
                <label className="block text-lg font-black uppercase mb-2 text-[#FF5151]">Vani Workspace ID</label>
                <input required type="text" value={formData.vani_workspace_id} onChange={e => setFormData({...formData, vani_workspace_id: e.target.value})} className="w-full border-4 border-black p-3 font-bold bg-neutral-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FF5151] transition-all font-mono text-sm" />
              </div>
              
              <div className="flex gap-4 pt-4 mt-8">
                <LiquidButton type="submit" disabled={isSubmitLoading} className="flex-1 bg-[#C6F91F] border-4 border-black text-black font-black uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  {isSubmitLoading ? <Loader2 className="animate-spin" /> : formData.id ? <><Save className="mr-2" /> Update</> : <><Plus className="mr-2" /> Deploy</>}
                </LiquidButton>
                {formData.id && (
                  <button type="button" onClick={handleClear} className="px-6 border-4 border-black font-black uppercase bg-white hover:bg-neutral-200">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Table */}
          <div className="lg:col-span-2">
            <div className="bg-white border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div className="bg-[#FAE414] border-b-[6px] border-black p-6 font-black uppercase text-3xl flex justify-between items-center">
                <span>Active Roster</span>
                <span className="bg-black text-white px-3 py-1 text-xl">{agents.length} Nodes</span>
              </div>

              {tableError && (
                <div className="p-6 bg-[#FF5151] text-white border-b-4 border-black font-bold flex flex-col gap-4">
                  <div className="flex items-center uppercase text-xl">
                    <ShieldAlert className="inline mr-3" size={28} />
                    Database Setup Required
                  </div>
                  <p className="text-lg">The <strong>agents</strong> table was not found in your Supabase project.</p>
                  <p>Please open the <a href="https://supabase.com/dashboard/project/_/sql" target="_blank" rel="noreferrer" className="underline hover:text-black">Supabase SQL Editor</a> and run the following command to create it:</p>
                  <pre className="bg-black text-[#C6F91F] p-4 font-mono text-sm overflow-x-auto border-4 border-black shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
{`CREATE TABLE public.agents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  type TEXT,
  vani_agent_id TEXT NOT NULL,
  vani_workspace_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public all access"
ON public.agents FOR ALL TO public
USING (true) WITH CHECK (true);`}
                  </pre>
                  <LiquidButton onClick={fetchAgents} className="self-start mt-2 bg-white text-black border-4 border-black uppercase font-black hover:bg-[#C6F91F]">
                    I've run the SQL - Retry
                  </LiquidButton>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full text-left font-bold border-collapse">
                  <thead>
                    <tr className="bg-neutral-100 border-b-4 border-black text-lg uppercase">
                      <th className="p-4 border-r-4 border-black w-1/4">Name / Type</th>
                      <th className="p-4 border-r-4 border-black w-2/4">Routing IDs</th>
                      <th className="p-4 w-1/4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <tr><td colSpan={3} className="p-12 text-center text-xl font-black uppercase"><Loader2 className="animate-spin inline mr-3" /> Fetching grid data...</td></tr>
                    ) : agents.length === 0 ? (
                      <tr><td colSpan={3} className="p-12 text-center text-xl font-black uppercase">No active nodes in database.</td></tr>
                    ) : (
                      agents.map(agent => (
                        <tr key={agent.id} className="border-b-4 border-black hover:bg-neutral-50 transition-colors group">
                          <td className="p-4 border-r-4 border-black">
                            <div className="font-black text-xl mb-1 uppercase">{agent.name}</div>
                            <div className="inline-block bg-black text-white text-xs px-2 py-1 uppercase tracking-widest">{agent.type || "General"}</div>
                          </td>
                          <td className="p-4 border-r-4 border-black font-mono text-sm leading-relaxed">
                            <div className="flex flex-col gap-1">
                              <div><span className="text-black/50 font-sans font-bold uppercase text-xs mr-2">A_ID:</span> {agent.vani_agent_id}</div>
                              <div><span className="text-black/50 font-sans font-bold uppercase text-xs mr-2">W_ID:</span> {agent.vani_workspace_id}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2 justify-center">
                              <button onClick={() => handleEdit(agent)} className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center hover:bg-[#C6F91F] transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                <Edit2 size={20} strokeWidth={3} className="text-black" />
                              </button>
                              <button onClick={() => handleDelete(agent.id)} className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center hover:bg-[#FF5151] transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                <Trash2 size={20} strokeWidth={3} className="text-black" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
