import React from 'react'

const Footer = React.memo(() => {
  return (
    <footer className="bg-black text-white py-12 lg:py-16 px-4 md:px-8 lg:px-12 border-t-[12px] border-black overflow-hidden relative z-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-secondary/8 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="w-full flex flex-col gap-12 md:gap-16 relative z-10">
        {/* Directory and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div className="space-y-6 lg:col-span-2">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none group cursor-default">
              <span className="inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent hover:from-secondary hover:via-primary hover:to-secondary transition-all duration-500">
                FAYAZ
              </span>
              <br />
              <span className="text-white hover:text-primary transition-colors duration-300">
                UNAS
              </span>
            </h2>
            <p className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px] leading-relaxed max-w-xs">
              Building at the intersection of hardware and software. Every system deserves precision engineering.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 flex flex-col items-start lg:items-end text-left lg:text-right lg:col-span-1">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px] border-b-4 border-primary w-fit pb-2">DIRECTORY</h4>
            <nav className="flex flex-col items-start lg:items-end gap-4 font-black text-base md:text-lg uppercase tracking-widest">
              <a href="#about" className="hover:text-primary transition-all hover:translate-x-3 lg:hover:-translate-x-3 inline-block animate-left-slide" aria-label="Navigate to About section">01_IDENTITY</a>
              <a href="#projects" className="hover:text-primary transition-all hover:translate-x-3 lg:hover:-translate-x-3 inline-block animate-left-slide" aria-label="Navigate to Projects section">02_ARTIFACTS</a>
              <a href="#contact" className="hover:text-primary transition-all hover:translate-x-3 lg:hover:-translate-x-3 inline-block" aria-label="Navigate to Contact section">03_CONNECT</a>
            </nav>
          </div>

          <div className="space-y-6 md:space-y-8 flex flex-col items-start lg:items-end text-left lg:text-right lg:col-span-1">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px] border-b-4 border-secondary w-fit pb-2">ENDPOINTS</h4>
            <nav className="flex flex-col items-start lg:items-end gap-4 font-black text-base md:text-lg uppercase tracking-widest text-white/60">
              <a href="https://github.com/Fayaz-unas" target="_blank" rel="noreferrer" className="hover:text-secondary transition-all hover:translate-x-3 lg:hover:-translate-x-3 inline-block" aria-label="Visit GitHub Profile">GITHUB.COM</a>
              <a href="https://linkedin.com/in/fayaz-unas" target="_blank" rel="noreferrer" className="hover:text-secondary transition-all hover:translate-x-3 lg:hover:-translate-x-3 inline-block" aria-label="Visit LinkedIn Profile">LINKEDIN.COM</a>
              <a href="https://www.instagram.com/fayaz_unas" target="_blank" rel="noreferrer" className="hover:text-secondary transition-all hover:translate-x-3 lg:hover:-translate-x-3 inline-block" aria-label="Visit Instagram Profile">INSTAGRAM.COM</a>
              <a href="https://x.com/fayaz_unas" target="_blank" rel="noreferrer" className="hover:text-secondary transition-all hover:translate-x-3 lg:hover:-translate-x-3 inline-block" aria-label="Visit X Profile">X.COM</a>
            </nav>
          </div>
        </div>

        {/* Final Baseline */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-10 border-t-2 border-white/10">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/50">© 2026 FAYAZ UNAS — ENGINEERED WITH PRECISION</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-black border-2 border-white/30 hover:border-primary px-6 py-2 font-black uppercase tracking-widest text-xs hover:text-primary transition-all group"
            aria-label="Scroll back to top"
          >
            <span className="inline-block group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform">↑ BACK TO TOP</span>
          </button>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
