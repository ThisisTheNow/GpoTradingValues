'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, User } from 'lucide-react'

const navLinks = [
  { name: 'Values', href: '/values' },
  { name: 'Calculator', href: '/calculator' },
  { name: 'Trade', href: '/trade' },
  { name: 'Docs', href: '/docs' },
]

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6"
    >
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-md border border-black/5 rounded-2xl shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="font-bold tracking-tighter text-xl">GPO VALUES</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-black/60 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors text-black/60">
            <Search className="w-5 h-5" />
          </button>
          <div className="h-4 w-[1px] bg-black/10 mx-1" />
          <Link 
            href="/login" 
            className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-bold rounded-xl hover:bg-black/80 transition-all active:scale-95"
          >
            <User className="w-4 h-4" />
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

