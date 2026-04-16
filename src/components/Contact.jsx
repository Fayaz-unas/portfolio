import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Instagram } from 'lucide-react'
import Magnetic from './Magnetic'
import { useContactForm } from '../hooks/useContactForm'

const Contact = React.memo(({ setNotification }) => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm(setNotification)

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-[6vw] md:px-[8vw] lg:px-24 py-[8vh] lg:py-24 relative overflow-x-clip bg-white brutal-stripes">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-[6vh] lg:gap-20 items-start relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-[3vw] lg:gap-5 bg-accent text-white px-[5vw] lg:px-7 py-[2vw] lg:py-2.5 border-[clamp(3px,0.4vw,5px)] border-black shadow-neo-sm md:shadow-neo-md mb-[4vh] rotate-[-1deg]">
              <span className="text-[clamp(9px,2vw,11px)] font-black uppercase tracking-[0.4em]">COMM_CHANNEL.V3</span>
            </div>
            
            <h2 className="text-[clamp(2.5rem,10vw,6rem)] font-black font-heading mb-[4vh] tracking-tighter leading-[0.8] text-black">
              INITIATE <br />
              <span className="bg-secondary border-[clamp(4px,0.8vw,8px)] border-black px-[4vw] lg:px-7 shadow-neo-lg md:shadow-neo-xl inline-block rotate-2 mt-[1vh] lg:-ml-12">PROTOCOL.</span>
            </h2>
            
            <p className="text-[clamp(1.1rem,3vw,1.75rem)] text-black font-black font-body leading-tight mb-[6vh] max-w-sm border-l-[clamp(8px,1.5vw,12px)] border-black pl-[5vw] lg:pl-8">
              Available for systems architecture and high-precision collaboration.
            </p>

            <div className="space-y-[3vh] lg:space-y-8">
              <Magnetic strength={0.1} className="relative z-20 w-full">
                <a 
                  href="mailto:fayazunas@gmail.com" 
                  aria-label="Send email to Fayaz Unas"
                  className="flex items-center gap-[5vw] lg:gap-6 group bg-primary border-[clamp(4px,0.8vw,8px)] border-black p-[5vw] lg:p-8 shadow-neo-lg md:shadow-neo-xl hover:shadow-neo active:translate-x-1 active:translate-y-1 transition-all w-full"
                >
                  <div className="p-[3.5vw] lg:p-6 bg-white border-[clamp(3px,0.4vw,5px)] border-black shadow-neo-sm md:shadow-neo-md group-hover:bg-black group-hover:text-white transition-colors">
                    <Mail className="w-[clamp(24px,6vw,32px)] h-[clamp(24px,6vw,32px)] text-black group-hover:text-white transition-colors" strokeWidth={3} />
                  </div>
                  <div className="text-left">
                    <p className="text-[clamp(9px,2vw,11px)] font-black text-black/50 uppercase tracking-[0.3em] mb-1">Direct_Endpoint</p>
                    <p className="text-[clamp(1rem,4.5vw,1.75rem)] font-black font-heading text-black tracking-tighter break-all">fayazunas@gmail.com</p>
                  </div>
                </a>
              </Magnetic>
              <div className="flex gap-[4vw] lg:gap-6">
                {[
                  { icon: <Github />, href: "https://github.com/Fayaz-unas", color: "bg-white", hover: "hover:bg-black", label: "Github Profile" },
                  { icon: <Linkedin />, href: "https://linkedin.com/in/fayaz-unas", color: "bg-accent", hover: "hover:bg-white", label: "Linkedin Profile" },
                  { icon: <Instagram />, href: "https://www.instagram.com/fayaz_unas", color: "bg-secondary", hover: "hover:bg-black", label: "Instagram Profile" }
                ].map((social, i) => (
                  <Magnetic key={i} strength={0.3} className="flex-1">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className={`${social.color} ${social.hover} border-[clamp(4px,0.8vw,8px)] border-black p-[5vw] lg:p-8 shadow-neo-md md:shadow-neo-lg hover:translate-y-[-6px] hover:shadow-neo-xl active:translate-y-0 active:shadow-neo transition-all block group/social h-full w-full flex items-center justify-center`}
                    >
                      {React.cloneElement(social.icon, { className: `w-[clamp(24px,6vw,32px)] h-[clamp(24px,6vw,32px)] ${social.color === "bg-accent" ? "text-white group-hover/social:text-accent" : "text-black group-hover/social:text-white"} transition-colors`, strokeWidth: 3 })}
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
              className="bg-white border-[clamp(4px,0.8vw,10px)] border-black p-[8vw] md:p-12 lg:p-16 shadow-neo-lg md:shadow-neo-xl space-y-[4vh] lg:space-y-10 relative z-10 brutal-grid overflow-hidden"
              onSubmit={handleSubmit}
            >
              {/* Terminal Title Bar */}
              <div className="absolute top-0 left-0 right-0 h-[clamp(35px,7vw,45px)] bg-black flex items-center px-[4vw] lg:px-5 gap-[3vw] lg:gap-3">
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-danger border border-white/20" />
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-warning border border-white/20" />
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-success border border-white/20" />
                <span className="ml-auto text-[clamp(8px,1.5vw,9px)] font-black text-white/40 tracking-[0.5em]">MSG_UPLINK.EXE</span>
              </div>

              <div className="pt-[5vh] lg:pt-10 grid grid-cols-1 md:grid-cols-2 gap-[3vh] lg:gap-10">
                <div className="space-y-2 md:space-y-4 text-left">
                  <label htmlFor="name" className="text-[clamp(9px,2vw,11px)] font-black text-black uppercase tracking-[0.3em] ml-2">Identity_Alias</label>
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="neo-input w-full py-[4vw] md:py-4 lg:py-5 px-[5vw] md:px-6 lg:px-7 text-sm lg:text-base border-[3px] md:border-4" 
                    placeholder="ENTER NAME" 
                  />
                </div>
                <div className="space-y-2 md:space-y-4 text-left">
                  <label htmlFor="email" className="text-[clamp(9px,2vw,11px)] font-black text-black uppercase tracking-[0.3em] ml-2">Return_Address</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="neo-input w-full py-[4vw] md:py-4 lg:py-5 px-[5vw] md:px-6 lg:px-7 text-sm lg:text-base border-[3px] md:border-4" 
                    placeholder="EMAIL@SYSTEM.LOG" 
                  />
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-4 text-left">
                <label htmlFor="message" className="text-[clamp(9px,2vw,11px)] font-black text-black uppercase tracking-[0.3em] ml-2">Data_Payload</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  className="neo-input w-full resize-none py-[4vw] md:py-4 lg:py-5 px-[5vw] md:px-6 lg:px-7 text-sm lg:text-base border-[3px] md:border-4" 
                  placeholder="TRANSMIT MESSAGE CONTENT..."
                />
              </div>
              
              <Magnetic strength={0.1}>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? "Sending message..." : "Send message"}
                  className="neo-button w-full h-[clamp(65px,15vw,96px)] bg-black text-white text-[clamp(1.1rem,3vw,1.25rem)] group/submit overflow-hidden border-[clamp(3px,0.5vw,8px)] shadow-neo-lg md:shadow-neo-xl active:shadow-neo disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-[4vw] lg:gap-6 uppercase font-black tracking-[0.4em]">
                    {isSubmitting ? 'TRANSMITTING...' : 'EXECUTE_SEND'} <Send className="w-[clamp(20px,5vw,28px)] h-[clamp(20px,5vw,28px)] group-hover/submit:translate-x-3 group-hover/submit:-translate-y-3 transition-transform text-white group-hover/submit:text-black" strokeWidth={4} />
                  </span>
                  <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover/submit:translate-y-0 transition-transform duration-500 ease-in-out invisible group-hover/submit:visible" />
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
