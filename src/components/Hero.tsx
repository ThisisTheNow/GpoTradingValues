'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Rocket, Shield, Zap } from 'lucide-react'
import { handleGetStarted, handleViewDocs } from '@/lib/logic'

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-black">
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 p-2 bg-black/5 rounded-full"
        >
          
        </motion.div>
        
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
          GPO TRADING <br />
          <span className="text-black/50">VALUES</span>
        </h1>

        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={handleGetStarted}
            className="px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-black/80 transition-colors"
          >
            Get Started
          </button>
          <button 
            onClick={handleViewDocs}
            className="px-8 py-4 bg-white border border-black/10 rounded-xl font-bold hover:bg-black/5 transition-colors"
          >
            View Docs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            { icon: Zap, title: 'TrustWorthy', desc: 'Our Values are based on actual trades' },
            { icon: Shield, title: 'Secure', desc: 'NextAuth + PostgreSQL' },
            { icon: Rocket, title: 'Fast', desc: 'Redis + Edge Caching' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
              className="p-8 rounded-2xl border border-black/5 bg-black/[0.02]"
            >
              <feature.icon className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-black/40 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
