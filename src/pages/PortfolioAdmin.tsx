import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { PortfolioItem } from '../types';
import { LiquidButton, MetalButton } from '../components/ui/button';
import { Trash2, Edit2, Plus, LogIn, Save, ArrowLeft, Upload, Loader2, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PortfolioAdmin() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [tableError, setTableError] = useState('');

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'creative' | 'reel' | 'stats'>('creative');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState('');
  const [roas, setRoas] = useState('');
  const [adSpend, setAdSpend] = useState('');
  const [ctr, setCtr] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setItems(data || []);
    } catch (err: any) {
      console.error(err);
      setTableError(err.message || "Error fetching items");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (itemId: string) => {
    if (!window.confirm("Confirm deletion of portfolio item.")) return;
    try {
      const { error } = await supabase.from('portfolio_items').delete().eq('id', itemId);
      if (error) throw error;
      setItems(items.filter(i => i.id !== itemId));
    } catch (err: any) {
      console.error(err);
      setTableError(err.message || "Failed to delete item");
    }
  };

  const handleEdit = (item: PortfolioItem) => {
    setId(item.id);
    setTitle(item.title);
    setCategory(item.category);
    setDescription(item.description || '');
    setMediaUrl(item.media_url);
    if (item.marketing_metrics) {
      setRoas(item.marketing_metrics.roas || '');
      setAdSpend(item.marketing_metrics.ad_spend || '');
      setCtr(item.marketing_metrics.ctr || '');
    } else {
      setRoas(''); setAdSpend(''); setCtr('');
    }
    setFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClear = () => {
    setId('');
    setTitle('');
    setCategory('creative');
    setDescription('');
    setMediaUrl('');
    setFile(null);
    setRoas('');
    setAdSpend('');
    setCtr('');
    setFormError('');
    setFormSuccess('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitLoading(true);
    setFormError('');
    setFormSuccess('');
    try {
      let finalMediaUrl = mediaUrl;
      
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;
        
        const { error: uploadError } = await supabase.storage
          .from('portfolio-media')
          .upload(filePath, file);

        if (uploadError) {
          throw new Error("Failed to upload file: " + uploadError.message);
        }

        const { data } = supabase.storage.from('portfolio-media').getPublicUrl(filePath);
        finalMediaUrl = data.publicUrl;
      }

      if (!finalMediaUrl && !id) {
        throw new Error("Please provide a media file or URL.");
      }

      const payload: any = {
        title,
        category,
        description,
        media_url: finalMediaUrl,
      };

      if (category === 'stats') {
        payload.marketing_metrics = { roas, ad_spend: adSpend, ctr };
      } else {
        payload.marketing_metrics = {};
      }

      if (id) {
        const { error } = await supabase.from('portfolio_items').update(payload).eq('id', id);
        if (error) throw error;
        setFormSuccess("Portfolio item updated successfully.");
      } else {
        const { error } = await supabase.from('portfolio_items').insert([payload]);
        if (error) throw error;
        setFormSuccess("Portfolio item deployed successfully.");
      }
      
      handleClear();
      fetchItems();
    } catch (err: any) {
      console.error(err);
      setFormError(err.message || "Error saving portfolio item");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-neutral-100 font-display">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="flex flex-col gap-4 bg-black text-white p-6 md:p-8 border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
          <div className="flex justify-between items-center w-full">
            <div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#C6F91F]">Portfolio Manager</h1>
              <p className="text-xl font-bold uppercase tracking-widest opacity-80 mt-2">Manage Projects & Visual Assets</p>
            </div>
            <Link to="/admin" className="bg-white text-black p-3 md:px-6 md:py-3 border-4 border-white font-black uppercase hover:bg-[#FF5151] hover:text-white transition-colors flex items-center text-sm md:text-base">
              Agent Admin
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Form */}
          <div className="xl:col-span-1 bg-white border-[6px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-fit relative">
            <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-3">
              {id ? 'Edit Entry' : 'New Entry'}
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
                <label className="block text-lg font-black uppercase mb-2">Title</label>
                <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full border-4 border-black p-3 font-bold bg-neutral-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C6F91F] transition-all" />
              </div>
              
              <div>
                <label className="block text-lg font-black uppercase mb-2">Category</label>
                <select 
                  value={category} 
                  onChange={e => setCategory(e.target.value as any)} 
                  className="w-full border-4 border-black p-3 font-bold bg-neutral-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C6F91F] transition-all uppercase"
                >
                  <option value="creative">Creative</option>
                  <option value="reel">Reel</option>
                  <option value="stats">Stats</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-black uppercase mb-2">Description</label>
                <textarea required={category !== 'stats'} value={description} onChange={e => setDescription(e.target.value)} className="w-full border-4 border-black p-3 font-bold bg-neutral-50 h-24 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C6F91F] transition-all" />
              </div>

              <div className="pt-4 border-t-4 border-dashed border-black">
                <label className="block text-lg font-black uppercase mb-2">Media File</label>
                {mediaUrl && <p className="mb-2 text-sm font-bold opacity-75 truncate" title={mediaUrl}>Current: {mediaUrl}</p>}
                <div className="relative group overflow-hidden border-4 border-black bg-neutral-50 hover:bg-[#3861FB] transition-colors cursor-pointer">
                  <input 
                    type="file" 
                    onChange={e => setFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                  />
                  <div className="flex flex-col items-center justify-center p-6 text-center group-hover:text-white">
                    <Upload size={32} className="mb-2" strokeWidth={2.5} />
                    <span className="font-black uppercase text-sm">{file ? file.name : (mediaUrl ? "Replace File" : "Choose File")}</span>
                  </div>
                </div>
              </div>

              {category === 'stats' && (
                <div className="p-4 bg-[#FAE414] border-4 border-black mt-4 space-y-4">
                  <h3 className="font-black uppercase text-xl border-b-4 border-black pb-2">Marketing Metrics</h3>
                  <div>
                    <label className="block text-sm font-black uppercase mb-1">ROAS</label>
                    <input type="text" placeholder="e.g. 4.5x" value={roas} onChange={e => setRoas(e.target.value)} className="w-full border-4 border-black p-2 font-bold bg-white focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-black uppercase mb-1">Ad Spend</label>
                    <input type="text" placeholder="e.g. $10k/mo" value={adSpend} onChange={e => setAdSpend(e.target.value)} className="w-full border-4 border-black p-2 font-bold bg-white focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-black uppercase mb-1">CTR</label>
                    <input type="text" placeholder="e.g. 3.2%" value={ctr} onChange={e => setCtr(e.target.value)} className="w-full border-4 border-black p-2 font-bold bg-white focus:outline-none" />
                  </div>
                </div>
              )}
              
              <div className="flex gap-4 pt-4 mt-8">
                <LiquidButton type="submit" disabled={isSubmitLoading} className="flex-1 bg-[#C6F91F] border-4 border-black text-black font-black uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  {isSubmitLoading ? <Loader2 className="animate-spin" /> : id ? <><Save className="mr-2" /> Update</> : <><Plus className="mr-2" /> Publish</>}
                </LiquidButton>
                {id && (
                  <button type="button" onClick={handleClear} className="px-6 border-4 border-black font-black uppercase bg-white hover:bg-neutral-200">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Table */}
          <div className="xl:col-span-2">
            <div className="bg-white border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div className="bg-[#FAE414] border-b-[6px] border-black p-6 font-black uppercase text-3xl flex justify-between items-center">
                <span>Database Entries</span>
                <span className="bg-black text-white px-3 py-1 text-xl">{items.length} Items</span>
              </div>

              {tableError && (
                <div className="p-6 bg-[#FF5151] text-white border-b-4 border-black font-bold flex flex-col gap-4">
                  <div className="flex items-center uppercase text-xl">
                    <ShieldAlert className="inline mr-3" size={28} />
                    Database Setup Required
                  </div>
                  <p className="text-lg">The <strong>portfolio_items</strong> table was not found in your Supabase project.</p>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full text-left font-bold border-collapse">
                  <thead>
                    <tr className="bg-neutral-100 border-b-4 border-black text-lg uppercase">
                      <th className="p-4 border-r-4 border-black w-1/3">Item Details</th>
                      <th className="p-4 border-r-4 border-black w-1/3">Media</th>
                      <th className="p-4 w-1/3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <tr><td colSpan={3} className="p-12 text-center text-xl font-black uppercase"><Loader2 className="animate-spin inline mr-3" /> Fetching grid data...</td></tr>
                    ) : items.length === 0 ? (
                      <tr><td colSpan={3} className="p-12 text-center text-xl font-black uppercase">No active items in database.</td></tr>
                    ) : (
                      items.map(item => (
                        <tr key={item.id} className="border-b-4 border-black hover:bg-neutral-50 transition-colors group">
                          <td className="p-4 border-r-4 border-black">
                            <div className="font-black text-xl mb-1 uppercase">{item.title}</div>
                            <div className="inline-block bg-black text-white text-xs px-2 py-1 uppercase tracking-widest">{item.category}</div>
                            {item.category === 'stats' && item.marketing_metrics && (
                              <div className="mt-2 text-sm font-mono opacity-80">
                                <div>ROAS: {item.marketing_metrics.roas}</div>
                                <div>Spend: {item.marketing_metrics.ad_spend}</div>
                                <div>CTR: {item.marketing_metrics.ctr}</div>
                              </div>
                            )}
                          </td>
                          <td className="p-4 border-r-4 border-black">
                            {item.media_url ? (
                              <div className="bg-black text-white p-2 font-mono text-xs truncate max-w-xs">{item.media_url.split('/').pop()}</div>
                            ) : (
                              <span className="text-neutral-400">No media</span>
                            )}
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2 justify-center">
                              <button onClick={() => handleEdit(item)} className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center hover:bg-[#C6F91F] transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                <Edit2 size={20} strokeWidth={3} className="text-black" />
                              </button>
                              <button onClick={() => handleDelete(item.id)} className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center hover:bg-[#FF5151] transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
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
