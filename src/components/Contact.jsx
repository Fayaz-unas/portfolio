import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Instagram } from 'lucide-react'
import Magnetic from './Magnetic'
import { useContactForm } from '../hooks/useContactForm'

const Contact = React.memo(({ setNotification }) => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm(setNotification)

  return (
    <section id="contact" className="min-h-[100svh] flex items-center justify-center px-4 md:px-8 lg:px-12 py-[6vh] lg:py-[10vh] relative overflow-x-clip bg-white brutal-stripes">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-[6vh] lg:gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-4 bg-accent text-white px-6 py-2 border-[3px] border-black shadow-neo-sm mb-6 rotate-[-1deg]">
              <span className="text-[clamp(9px,1.8vw,12px)] font-black uppercase tracking-[0.4em]">COMM_CHANNEL.V3</span>
            </div>
            
            <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black font-heading mb-6 tracking-tighter leading-[0.8] text-black">
              STRATEGIC <br />
              <span className="bg-secondary border-[clamp(4px,0.7vw,8px)] border-black px-6 shadow-neo-md inline-block rotate-2 mt-2">INQUIRY.</span>
            </h2>
            
            <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-black font-black font-body leading-tight mb-8 max-w-sm border-l-[8px] border-black pl-8">
              Open to collaborations on complex engineering challenges and system architectures.
            </p>

            <div className="space-y-6 lg:space-y-8">
              <Magnetic strength={0.1} className="relative z-20 w-full">
                <a 
                  href="mailto:fayazunas96@gmail.com" 
                  aria-label="Send email to Fayaz Unas"
                  className="flex items-center gap-6 group bg-primary border-4 md:border-[6px] border-black p-6 shadow-neo hover:shadow-neo-hover active:translate-x-1 active:translate-y-1 transition-all w-full"
                >
                  <div className="p-4 bg-white border-4 border-black shadow-neo-sm group-hover:bg-black group-hover:text-white transition-colors">
                    <Mail className="w-8 h-8 text-black group-hover:text-white transition-colors" strokeWidth={3} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-black/50 uppercase tracking-[0.3em] mb-1">Professional_Endpoint</p>
                    <p className="text-[clamp(1rem,3vw,1.5rem)] font-black font-heading text-black tracking-tighter break-all">fayazunas96@gmail.com</p>
                  </div>
                </a>
              </Magnetic>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {[
                  { icon: <Github />, href: "https://github.com/Fayaz-unas", color: "bg-white", hover: "hover:bg-black", label: "Github Profile" },
                  { icon: <Linkedin />, href: "https://linkedin.com/in/fayaz-unas", color: "bg-accent", hover: "hover:bg-white", label: "Linkedin Profile" },
                  { icon: <Instagram />, href: "https://www.instagram.com/fayaz_unas", color: "bg-secondary", hover: "hover:bg-black", label: "Instagram Profile" }
                ].map((social, i) => (
                  <Magnetic key={i} strength={0.3}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className={`${social.color} ${social.hover} border-4 md:border-[6px] border-black p-5 md:p-6 shadow-neo hover:translate-y-[-6px] hover:shadow-neo-hover active:translate-y-0 transition-all block group/social flex items-center justify-center w-20 h-20 md:w-24 md:h-24`}
                    >
                      {React.cloneElement(social.icon, { className: `w-8 h-8 md:w-10 md:h-10 ${social.color === "bg-accent" ? "text-white group-hover/social:text-accent" : "text-black group-hover/social:text-white"} transition-colors`, strokeWidth: 3 })}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <form
              className="bg-white border-[clamp(4px,0.8vw,10px)] border-black p-8 md:p-12 lg:p-14 shadow-neo-lg space-y-8 relative z-10 brutal-grid overflow-hidden"
              onSubmit={handleSubmit}
            >
              {/* Terminal Title Bar */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-black flex items-center px-6 gap-3">
                <div className="w-3 h-3 rounded-full bg-danger border border-white/20" />
                <div className="w-3 h-3 rounded-full bg-warning border border-white/20" />
                <div className="w-3 h-3 rounded-full bg-success border border-white/20" />
                <span className="ml-auto text-[10px] font-black text-white/40 tracking-[0.5em]">MSG_UPLINK.EXE</span>
              </div>

              <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 text-left">
                  <label htmlFor="name" className="text-[10px] font-black text-black uppercase tracking-[0.3em] ml-2">Professional_Alias</label>
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="neo-input w-full py-4 px-6 text-base border-[3px] md:border-4" 
                    placeholder="ENTER NAME" 
                  />
                </div>
                <div className="space-y-3 text-left">
                  <label htmlFor="email" className="text-[10px] font-black text-black uppercase tracking-[0.3em] ml-2">Contact_Endpoint</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="neo-input w-full py-4 px-6 text-base border-[3px] md:border-4" 
                    placeholder="EMAIL@DOMAIN.COM" 
                  />
                </div>
              </div>
              
              <div className="space-y-3 text-left">
                <label htmlFor="message" className="text-[10px] font-black text-black uppercase tracking-[0.3em] ml-2">Project_Brief</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  className="neo-input w-full resize-none py-4 px-6 text-base border-[3px] md:border-4" 
                  placeholder="TRANSMIT INQUIRY DETAILS..."
                />
              </div>
              
              <Magnetic strength={0.1}>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="neo-button w-full h-[clamp(65px,12vw,90px)] bg-black text-white text-lg lg:text-xl group/submit overflow-hidden border-[clamp(4px,0.5vw,8px)] shadow-neo-lg active:shadow-neo disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-6 uppercase font-black tracking-[0.4em]">
                    {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT_INQUIRY'} <Send className="w-6 h-6 transition-transform group-hover/submit:translate-x-3 group-hover/submit:-translate-y-3" strokeWidth={4} />
                  </span>
                </button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default Contact
