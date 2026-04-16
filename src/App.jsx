import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import HorizontalSection from './components/HorizontalSection'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Notification from './components/Notification'

function App() {
  const [notification, setNotification] = useState(null)

  return (
    <div className="relative bg-white font-body antialiased">
      <CustomCursor />
      
      <AnimatePresence>
        {notification && (
          <Notification 
            {...notification} 
            onClose={() => setNotification(null)} 
          />
        )}
      </AnimatePresence>
      
      <main className="relative">
        <Hero setNotification={setNotification} />
        <div className="bg-white border-t-[12px] border-black">
          <div className="w-full">
            <About />
          </div>
        </div>
        <HorizontalSection />
        <div className="relative z-10 bg-white border-t-[12px] border-black">
          <Contact setNotification={setNotification} />
        </div>
      </main>
      
      <footer className="bg-black text-white py-12 lg:py-16 px-4 md:px-8 lg:px-12 border-t-[12px] border-black overflow-hidden relative z-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="w-full flex flex-col gap-12 md:gap-16 relative z-10">
          {/* Directory and Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            <div className="space-y-6">
              <div className="bg-primary text-black inline-block px-6 py-2 font-black text-2xl border-4 border-white shadow-[6px_6px_0px_white] -rotate-1">
                FAYAZ.UNAS
              </div>
              <p className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px] leading-relaxed max-w-xs">
                Architecting high-precision digital environments where logic is the only constant. Focused on systems that scale.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px] border-b-4 border-primary w-fit pb-2">DIRECTORY</h4>
              <nav className="flex flex-col gap-4 font-black text-base md:text-lg uppercase tracking-widest">
                <a href="#about" className="hover:text-primary transition-all hover:translate-x-3 inline-block">01_IDENTITY</a>
                <a href="#projects" className="hover:text-primary transition-all hover:translate-x-3 inline-block">02_ARTIFACTS</a>
                <a href="#contact" className="hover:text-primary transition-all hover:translate-x-3 inline-block">03_CONNECT</a>
              </nav>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px] border-b-4 border-secondary w-fit pb-2">ENDPOINTS</h4>
              <nav className="flex flex-col gap-4 font-black text-base md:text-lg uppercase tracking-widest text-white/60">
                <a href="https://github.com/Fayaz-unas" target="_blank" rel="noreferrer" className="hover:text-secondary transition-all hover:translate-x-3 inline-block">GITHUB.EXE</a>
                <a href="https://linkedin.com/in/fayaz-unas" target="_blank" rel="noreferrer" className="hover:text-secondary transition-all hover:translate-x-3 inline-block">LINKEDIN.COM</a>
                <a href="mailto:fayazunas@gmail.com" className="hover:text-secondary transition-all hover:translate-x-3 inline-block">MAIL_TERMINAL</a>
              </nav>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h4 className="text-success font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px] border-b-4 border-success w-fit pb-2">LOCATION</h4>
              <div className="text-base md:text-lg font-black uppercase tracking-[0.2em] text-white/60 leading-tight">
                KOCHI, KERALA<br/>
                INDIA [UTC+5:30]<br/>
              </div>
              <div className="pt-4 flex gap-4">
                <div className="w-10 h-10 border-2 border-white/20 flex items-center justify-center font-black text-xs hover:border-primary hover:text-primary transition-colors cursor-help">KCH</div>
                <div className="w-10 h-10 border-2 border-white/20 flex items-center justify-center font-black text-xs hover:border-secondary hover:text-secondary transition-colors cursor-help">IND</div>
              </div>
            </div>
          </div>

          {/* Final Baseline */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t-2 border-white/5 opacity-30">
            <span className="text-[9px] font-black uppercase tracking-[0.5em]">© 2026 FAYAZ_UNAS // ALL_RIGHTS_RESERVED</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
