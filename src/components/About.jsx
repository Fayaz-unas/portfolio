import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Layout, Database, Terminal, ArrowRight } from 'lucide-react'

const About = React.memo(() => {
  const bentoItems = [
    {
      title: "Full-Stack Engineering",
      desc: "Architecting scalable web applications with React, Node.js, and modern ecosystems.",
      icon: <Layout className="text-black" />,
      color: "bg-primary",
      className: "lg:col-span-4"
    },
    {
      title: "Computer Architecture",
      desc: "Designing and optimizing RISC-V based systems and hardware-software interfaces.",
      icon: <Cpu className="text-black" />,
      color: "bg-secondary",
      className: "lg:col-span-8"
    },
    {
      title: "Low-Level Development",
      desc: "Writing performance-critical code in C/C++ from firmware to high-speed algorithms.",
      icon: <Terminal className="text-black" />,
      color: "bg-accent",
      className: "lg:col-span-7"
    },
    {
      title: "Systems Optimization",
      desc: "Fine-tuning digital infrastructure for maximum throughput and minimal latency.",
      icon: <Database className="text-black" />,
      color: "bg-success",
      className: "lg:col-span-5"
    }
  ]

  return (
    <div id="about" className="w-full py-[5vh] md:py-[8vh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[4vh] lg:gap-12 items-start mb-[6vh] lg:mb-16">
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-[clamp(40px,10vw,60px)] h-[clamp(20px,5vw,30px)] bg-black flex items-center justify-center shadow-neo-sm">
                <span className="text-white text-[clamp(7px,1.5vw,9px)] font-black tracking-widest uppercase">SYSLOG</span>
              </div>
              <span className="text-black font-black tracking-[0.3em] text-[clamp(7px,1.5vw,9px)] uppercase underline decoration-[clamp(2px,0.4vw,4px)] underline-offset-[clamp(4px,0.8vw,6px)]">Identity.01</span>
            </div>
            <h2 className="text-[clamp(2.5rem,10vw,5.5rem)] font-black font-heading mb-4 md:mb-8 tracking-tighter leading-[0.85] text-black">
              THE ENGINEERING <br />
              <span className="bg-primary border-[clamp(4px,0.5vw,8px)] border-black px-[4vw] md:px-6 shadow-neo-md md:shadow-neo-lg inline-block -rotate-1 mt-2">MINDSET.</span>
            </h2>
          </motion.div>
        </div>
        <div className="lg:col-span-5 lg:pt-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="bg-black text-white p-[8vw] md:p-8 border-[clamp(4px,0.5vw,8px)] border-black shadow-neo-md md:shadow-neo-lg rotate-1 relative"
          >
            <div className="absolute top-0 left-0 w-full h-[clamp(4px,0.8vw,6px)] bg-primary" />
            <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-black font-body leading-tight">
              Based at <span className="text-primary underline decoration-[clamp(2px,0.4vw,4px)] underline-offset-4">Model Engineering College</span>. 
              I specialize in deconstructing complex systems and rebuilding them with extreme mathematical and logical precision.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[3vh] md:gap-6 text-left">
        {bentoItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
            className={`${item.className} ${item.color} border-[clamp(4px,0.5vw,8px)] border-black shadow-neo-md md:shadow-neo-lg p-[8vw] md:p-8 flex flex-col justify-between group cursor-pointer active:shadow-none transition-all relative overflow-hidden min-h-[clamp(180px,30vh,350px)]`}
          >
            <div className="absolute top-0 right-0 p-[5vw] md:p-6 opacity-0 md:group-hover:opacity-100 transition-all group-hover:translate-x-[-10px] group-hover:translate-y-[10px]">
              <ArrowRight size={24} className="-rotate-45 md:w-8 md:h-8" />
            </div>

            <div className="bg-white border-[clamp(3px,0.4vw,5px)] border-black p-[3.5vw] md:p-4 w-fit shadow-neo-sm group-hover:-translate-y-2 group-hover:bg-black group-hover:text-white transition-all">
              {React.cloneElement(item.icon, { className: "w-[clamp(1.8rem,4vw,2.2rem)] h-[clamp(1.8rem,4vw,2.2rem)] text-black group-hover:text-white transition-colors", strokeWidth: 3 })}
            </div>
            
            <div className="mt-[3vh] md:mt-8">
              <div className="text-[clamp(8px,1.8vw,10px)] font-black uppercase tracking-[0.2em] text-black/40 mb-2 md:mb-3">Core_Competency v2.4</div>
              <h3 className="text-[clamp(1.75rem,5vw,2.5rem)] font-black font-heading mb-2 md:mb-4 text-black tracking-tighter uppercase leading-[0.9]">{item.title}</h3>
              <p className="text-black font-black font-body text-[clamp(1rem,2.2vw,1.2rem)] leading-tight opacity-90 max-w-md">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
})

export default About
