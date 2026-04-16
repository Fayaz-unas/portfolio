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
        <Hero />
        <div className="bg-white px-6 md:px-12 lg:px-24 border-t-[12px] border-black">
          <div className="max-w-7xl mx-auto">
            <About />
          </div>
        </div>
        <HorizontalSection />
        <div className="relative z-10 bg-white border-t-[12px] border-black">
          <Contact setNotification={setNotification} />
        </div>
      </main>
      
      <footer className="bg-black text-white py-16 md:py-24 px-6 md:px-24 border-t-[12px] border-black overflow-hidden relative z-20">
        <div className="absolute top-0 left-0 w-full opacity-5 pointer-events-none select-none">
          <div className="text-[20rem] md:text-[30rem] font-black leading-none whitespace-nowrap -translate-y-1/2 tracking-tighter">
            SYSTEM_ERROR_SYSTEM_LOAD_SYSTEM_ONLINE
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-32 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
            <div className="space-y-6 md:space-y-10">
              <div className="bg-primary text-black inline-block px-6 py-3 md:px-8 md:py-4 font-black text-2xl md:text-4xl border-4 border-white shadow-[8px_8px_0px_white] -rotate-1">
                FAYAZ.UNAS
              </div>
              <div className="space-y-4 md:space-y-6">
                <p className="max-w-md text-white/60 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm leading-relaxed border-l-4 md:border-l-8 border-primary pl-4 md:pl-8">
                  Computer Science student at Model Engineering College. <br />
                  Architecting high-precision digital environments where logic is the only constant.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-40 w-full lg:w-auto">
              <div className="space-y-6 md:space-y-8">
                <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px] border-b-4 border-primary w-fit pb-2">DIRECTORY</h4>
                <div className="flex flex-col gap-4 md:gap-6 font-black text-base md:text-lg uppercase tracking-widest">
                  <a href="#about" aria-label="Go to Identity section" className="hover:text-primary transition-all hover:translate-x-3 inline-block">Identity</a>
                  <a href="#projects" aria-label="Go to Artifacts section" className="hover:text-primary transition-all hover:translate-x-3 inline-block">Artifacts</a>
                  <a href="#contact" aria-label="Go to Connect section" className="hover:text-primary transition-all hover:translate-x-3 inline-block">Connect</a>
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px] border-b-4 border-secondary w-fit pb-2">ENDPOINTS</h4>
                <div className="flex flex-col gap-4 md:gap-6 font-black text-base md:text-lg uppercase tracking-widest">
                  <a href="https://github.com/Fayaz-unas" target="_blank" rel="noreferrer" aria-label="Github Profile" className="hover:text-secondary transition-all hover:translate-x-3 inline-block">Github</a>
                  <a href="https://linkedin.com/in/fayaz-unas" target="_blank" rel="noreferrer" aria-label="Linkedin Profile" className="hover:text-secondary transition-all hover:translate-x-3 inline-block">Linkedin</a>
                  <a href="https://www.instagram.com/fayaz_unas" target="_blank" rel="noreferrer" aria-label="Instagram Profile" className="hover:text-secondary transition-all hover:translate-x-3 inline-block">Instagram</a>
                  <a href="mailto:fayazunas@gmail.com" aria-label="Send Email" className="hover:text-secondary transition-all hover:translate-x-3 inline-block">Email</a>
                </div>
              </div>
              <div className="space-y-6 md:space-y-8 hidden sm:block">
                <h4 className="text-success font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px] border-b-4 border-success w-fit pb-2">LOCATION</h4>
                <p className="text-base md:text-lg font-black uppercase tracking-[0.2em] text-white/60 leading-relaxed">
                  KOCHI, KERALA<br/>INDIA<br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
