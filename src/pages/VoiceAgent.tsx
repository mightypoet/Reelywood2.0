import React, { useState, useEffect, useRef } from 'react';
import { LiquidButton, MetalButton } from '../components/ui/button';
import { Phone, PhoneOff, Send, MessageSquare, Loader2 } from 'lucide-react';

export function VoiceAgent() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [callSid, setCallSid] = useState<string | null>(null);

  const [chatSessionId, setChatSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Chat Session
    const initChat = async () => {
      try {
        const res = await fetch("/api/voice-agent/test-chat/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ agent_id: 16676, workspace_id: "cmpzuuz7v0ko6ur1osqdbn324" })
        });
        const data = await res.json();
        if (data.session_id) {
          setChatSessionId(data.session_id);
          setMessages([{ role: 'assistant', content: 'Hello! I am ready to help. How can I assist you today?' }]);
        }
      } catch (err) {
        console.error("Failed to init chat", err);
      }
    };
    initChat();
  }, []);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleInitiateCall = async () => {
    if (!phoneNumber) return;
    setIsCalling(true);
    try {
      const res = await fetch("/api/voice-agent/initiate-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone_number: phoneNumber,
          agent_id: 16676,
          workspace_id: "cmpzuuz7v0ko6ur1osqdbn324"
        })
      });
      const data = await res.json();
      if (data.call_sid) {
        setCallSid(data.call_sid);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEndCall = async () => {
    if (!callSid) return;
    try {
      await fetch("/api/voice-agent/end-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ call_sid: callSid })
      });
      setCallSid(null);
      setIsCalling(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim() || !chatSessionId) return;

    const userMessage = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const res = await fetch("/api/voice-agent/test-chat/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: chatSessionId,
          workspace_id: "cmpzuuz7v0ko6ur1osqdbn324",
          message: userMessage
        })
      });
      const data = await res.json();
      const responseText = data.message || data.response || "No response received";
      setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-brand-yellow font-display selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
            Vani AI Agent
          </h1>
          <p className="mt-4 text-xl font-bold bg-black text-white inline-block px-4 py-2 border-4 border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            Voice & Chat Interface Workspace
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Column 1: Voice Caller */}
          <div className="flex flex-col gap-8">
            <div className="bg-white border-[6px] border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              {/* Decorative tape */}
              <div className="absolute -top-4 -left-4 w-16 h-8 bg-[#FF5151] border-4 border-black rotate-[-15deg] z-10"></div>
              
              <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-4">
                <div className="w-12 h-12 bg-[#C6F91F] border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Phone className="text-black" size={24} strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-black uppercase text-black tracking-tight">Initiate Voice Call</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xl font-bold uppercase mb-2 text-black">Target Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-neutral-100 border-4 border-black p-4 text-xl font-bold text-black focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3861FB] transition-all shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.1)] placeholder-neutral-400"
                  />
                  <p className="mt-2 text-sm font-bold text-neutral-600 uppercase tracking-widest">* Include country code</p>
                </div>

                <div className="pt-4 flex flex-col gap-4">
                  {!callSid ? (
                    <LiquidButton
                      onClick={(e) => { e.preventDefault(); handleInitiateCall(); }}
                      disabled={isCalling || !phoneNumber}
                      className="w-full bg-[#C6F91F] text-black border-4 border-black font-black uppercase text-2xl h-16 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed group/call"
                      variant="default"
                    >
                      <div className="flex items-center justify-center group-hover/call:translate-x-1 group-hover/call:translate-y-1 transition-transform">
                        <Phone className="mr-3" strokeWidth={3} />
                        Call Now
                      </div>
                    </LiquidButton>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <div className="bg-[#FAE414] border-4 border-black p-4 font-bold flex items-center justify-center gap-3 animate-pulse">
                        <Loader2 className="animate-spin text-black" size={24} strokeWidth={3} />
                        <span className="text-lg uppercase text-black tracking-widest">Call in Progress...</span>
                      </div>
                      <MetalButton
                        onClick={(e) => { e.preventDefault(); handleEndCall(); }}
                        variant="error"
                        className="w-full h-16 text-xl md:text-2xl uppercase tracking-widest font-black"
                      >
                        <PhoneOff className="mr-3" strokeWidth={3} />
                        End Call
                      </MetalButton>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Voice Settings Reference */}
            <div className="bg-[#3861FB] border-[6px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white relative">
              <h3 className="font-black uppercase text-xl mb-4 text-white border-b-4 border-black pb-2">Configuration Context</h3>
              <ul className="space-y-4 font-bold tracking-wide mt-4">
                <li className="flex justify-between items-center bg-white p-3 border-4 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="opacity-70">Agent ID</span> <span className="text-xl">16676</span>
                </li>
                <li className="flex justify-between items-center bg-white p-3 border-4 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="opacity-70">Provider</span> <span className="text-xl">Default</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: AI Chat Interface */}
          <div className="bg-[radial-gradient(#000_2px,transparent_2px)] bg-[size:16px_16px] bg-white border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] h-[700px] md:h-[800px] flex flex-col relative overflow-hidden">
            
            {/* Terminal Header */}
            <div className="bg-black text-[#C6F91F] p-4 flex items-center justify-between border-b-4 border-black shrink-0 relative z-20">
              <div className="flex items-center gap-3">
                <MessageSquare size={20} strokeWidth={3} />
                <span className="font-mono font-bold tracking-widest uppercase text-sm md:text-base">System._Terminal / Chat</span>
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-[#FF5151] border-2 border-white"></div>
                <div className="w-4 h-4 rounded-full bg-[#FAE414] border-2 border-white"></div>
                <div className="w-4 h-4 rounded-full bg-[#3861FB] border-2 border-white"></div>
              </div>
            </div>

            {/* Chat History Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 flex flex-col scroll-smooth relative z-10 bg-white/95" ref={chatScrollRef}>
              {messages.length === 0 && !chatSessionId && (
                <div className="flex-1 flex items-center justify-center h-full">
                  <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 font-bold uppercase">
                    <Loader2 className="animate-spin" />
                    Initializing Connection...
                  </div>
                </div>
              )}
              
              {messages.map((msg, idx) => (
                <div key={idx} className={`w-full flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[90%] md:max-w-[75%] p-4 border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] break-words font-sans text-base md:text-lg font-bold leading-relaxed
                      ${msg.role === 'user' ? 'bg-[#C6F91F] rounded-t-2xl rounded-l-2xl rounded-br-none' : 'bg-white rounded-t-2xl rounded-r-2xl rounded-bl-none'}
                    `}
                  >
                    <div className="font-black text-xs uppercase tracking-widest mb-1 opacity-50 block font-mono">
                      {msg.role === 'user' ? 'CLIENT_USER' : 'VANI_AGENT_16676'}
                    </div>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="w-full flex justify-start">
                  <div className="bg-white border-[4px] border-black p-4 rounded-t-2xl rounded-r-2xl rounded-bl-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-[#FF90E8] border-t-6 border-black flex flex-col md:flex-row gap-4 shrink-0 shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)] z-20">
              <input
                type="text"
                placeholder="TYPE MESSAGE..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 bg-white border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-[#3861FB] transition-all font-mono placeholder:font-mono"
                disabled={!chatSessionId}
              />
              <button 
                type="submit"
                disabled={!inputMessage.trim() || !chatSessionId}
                className="bg-black text-white px-8 py-4 border-4 border-black hover:bg-[#FF5151] transition-colors flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed group h-[64px]"
              >
                <span className="md:hidden font-bold uppercase tracking-widest mr-2">SEND</span>
                <Send size={24} strokeWidth={3} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

          </div>

        </div>
      </div>
    </div>
  );
}
