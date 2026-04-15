import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold font-heading mb-8">
            Let's <span className="text-primary">Connect.</span>
          </h2>
          <p className="text-xl text-gray-400 font-body max-w-2xl mx-auto">
            Whether you want to talk about computer architecture, 
            a potential collaboration, or just say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-left space-y-8"
          >
            <div className="flex items-center gap-6 group">
              <div className="p-4 glass rounded-2xl group-hover:border-primary/50 transition-all">
                <Mail className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Email Me</p>
                <a href="mailto:fayazunas@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">fayazunas@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 glass rounded-2xl group-hover:border-primary/50 transition-all">
                <MessageSquare className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Socials</p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/fayaz-unas" className="text-xl font-bold hover:text-primary transition-colors">LinkedIn</a>
                  <span className="text-gray-700">/</span>
                  <a href="https://github.com/Fayaz-unas" className="text-xl font-bold hover:text-primary transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-10 rounded-3xl space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Your Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Message</label>
              <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none transition-all resize-none" placeholder="Let's build something cool..."></textarea>
            </div>
            
            <button className="w-full bg-primary text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 hover:scale-[1.02] transition-all group">
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
