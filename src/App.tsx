import { useState } from 'react';
import { motion } from 'motion/react';
import { StoryView } from './components/StoryView';
import { AnalysisPanel } from './components/AnalysisPanel';

export default function App() {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E4E3E0] selection:bg-[#F27D26] selection:text-black font-sans">
      {/* Background Grid Accent */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* System Header */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-white/5 bg-black/50 backdrop-blur-md z-40 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-[#F27D26] animate-pulse" />
          <h1 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
            Forensic Analysis Terminal <span className="text-white/10 mx-2">|</span> 
            <span className="text-white/60">Case: Load-Bearing-Man</span>
          </h1>
        </div>
        <div className="flex items-center gap-8 font-mono text-[9px] text-white/30 uppercase tracking-widest">
          <div className="hidden md:block">Status: <span className="text-emerald-500">Active</span></div>
          <div className="hidden md:block">Uptime: 142:12:04</div>
          <div>{new Date().toISOString().split('T')[0]}</div>
        </div>
      </header>

      <main className="relative z-10 pt-16">
        <StoryView onTermClick={(id) => setSelectedTerm(id)} />
      </main>

      <AnalysisPanel 
        termId={selectedTerm} 
        onClose={() => setSelectedTerm(null)} 
      />

      {/* Progress Indicator */}
      <motion.div 
        className="fixed bottom-0 left-0 h-1 bg-[#F27D26] z-50"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
      />
    </div>
  );
}
