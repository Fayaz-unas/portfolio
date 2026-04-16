import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Layout, Database, Terminal, ArrowRight } from 'lucide-react'

const About = React.memo(() => {
  const bentoItems = [
    {
      title: "Full-Stack Systems",
      desc: "Building resilient, end-to-end applications using React, Node.js, and cloud-native technologies.",
      icon: <Layout className="text-black" />,
      color: "bg-primary",
      className: "lg:col-span-4"
    },
    {
      title: "Hardware-Software Co-Design",
      desc: "Optimizing RISC-V architectures and developing low-level interfaces for maximum hardware utilization.",
      icon: <Cpu className="text-black" />,
      color: "bg-secondary",
      className: "lg:col-span-8"
    },
    {
      title: "Performance Engineering",
      desc: "Developing mission-critical software in C/C++, focusing on algorithmic efficiency and system-level performance.",
      icon: <Terminal className="text-black" />,
      color: "bg-accent",
      className: "lg:col-span-7"
    },
    {
      title: "Distributed Systems",
      desc: "Architecting high-throughput infrastructure designed for low latency and seamless scalability.",
      icon: <Database className="text-black" />,
      color: "bg-success",
      className: "lg:col-span-5"
    }
  ]

  return (
    <div id="about" className="w-full py-[4vh] md:py-[6vh] px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-10 lg:mb-12">
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-2 md:mb-4">
              <div className="w-[clamp(40px,8vw,50px)] h-[clamp(20px,4vw,25px)] bg-black flex items-center justify-center shadow-neo-sm">
                <span className="text-white text-[7px] font-black tracking-widest uppercase">SYSLOG</span>
              </div>
              <span className="text-black font-black tracking-[0.3em] text-[7px] uppercase underline decoration-[2px] underline-offset-[4px]">Identity.01</span>
            </div>
            <h2 className="text-[clamp(2rem,8vw,4.5rem)] font-black font-heading mb-2 tracking-tighter leading-[0.85] text-black">
              ENGINEERING <br />
              <span className="bg-primary border-[clamp(3px,0.4vw,6px)] border-black px-4 shadow-neo-md inline-block -rotate-1 mt-1">EXCELLENCE.</span>
            </h2>
          </motion.div>
        </div>
        <div className="lg:col-span-5 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="bg-black text-white p-6 md:p-8 border-[clamp(3px,0.4vw,6px)] border-black shadow-neo-md rotate-1 relative"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-primary" />
            <p className="text-[clamp(0.95rem,2vw,1.25rem)] font-black font-body leading-tight">
              Software Engineer at <span className="text-primary underline decoration-[2px] underline-offset-4">Model Engineering College</span>. 
              I bridge the gap between low-level hardware optimization and high-level application architecture.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 text-left">
        {bentoItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.01, rotate: i % 2 === 0 ? 0.3 : -0.3 }}
            className={`${item.className} ${item.color} border-4 md:border-[6px] border-black shadow-neo p-6 md:p-8 flex flex-col justify-between group cursor-pointer active:shadow-none transition-all relative overflow-hidden min-h-[clamp(200px,30vh,320px)]`}
          >
            <div className="absolute top-0 right-0 p-4 md:p-6 opacity-0 md:group-hover:opacity-100 transition-all group-hover:translate-x-[-10px] group-hover:translate-y-[10px]">
              <ArrowRight size={24} className="-rotate-45 md:w-8 md:h-8" />
            </div>

            <div className="bg-white border-4 border-black p-3 md:p-4 w-fit shadow-neo-sm group-hover:-translate-y-1 group-hover:bg-black group-hover:text-white transition-all">
              {React.cloneElement(item.icon, { className: "w-6 h-6 md:w-8 md:h-8 text-black group-hover:text-white transition-colors", strokeWidth: 3 })}
            </div>
            
            <div className="mt-6">
              <div className="text-[7px] font-black uppercase tracking-[0.2em] text-black/40 mb-1">Core_Competency v2.4</div>
              <h3 className="text-[clamp(1.5rem,4vw,2.25rem)] font-black font-heading mb-1 text-black tracking-tighter uppercase leading-[0.9]">{item.title}</h3>
              <p className="text-black font-black font-body text-[clamp(0.9rem,1.8vw,1.1rem)] leading-tight opacity-90 max-w-md">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
})

export default About
