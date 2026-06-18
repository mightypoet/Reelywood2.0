import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { Agent } from './pages/Agent';
import { VoiceAgent } from './pages/VoiceAgent';
import { AgentDirectory } from './pages/AgentDirectory';
import { Admin } from './pages/Admin';
import { PortfolioAdmin } from './pages/PortfolioAdmin';
import { Portfolio } from './pages/Portfolio';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 font-sans selection:bg-brand-neon selection:text-black flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/agent" element={<Agent />} />
            <Route path="/agents" element={<AgentDirectory />} />
            <Route path="/agent/:id" element={<VoiceAgent />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/portfolio" element={<PortfolioAdmin />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

