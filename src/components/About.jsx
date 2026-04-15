import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Code, Database, Shield } from 'lucide-react'

const About = () => {
  const skills = [
    { icon: <Cpu className="text-primary" />, title: "Computer Architecture", desc: "RISC-V, Digital Logic, gem5" },
    { icon: <Code className="text-primary" />, title: "Frontend", desc: "React, Vite, Tailwind CSS" },
    { icon: <Database className="text-primary" />, title: "Backend", desc: "Java, Python, C++, MySQL" },
    { icon: <Shield className="text-primary" />, title: "Cybersecurity", desc: "System security, RSA, AES" }
  ]

  return (
    <section id="about" className="h-full flex flex-col justify-center px-24 py-12">
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold font-heading mb-8">
            The <span className="text-primary">Vision</span>
          </h2>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl font-body">
            I'm a computer science student at Model Engineering College, Kochi. 
            My passion lies in understanding how things work from the ground up—whether 
            it's optimizing a RISC-V pipeline processor or building seamless web interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-2xl flex items-start gap-6 cursor-pointer"
            >
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
