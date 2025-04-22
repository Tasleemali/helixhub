'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="sticky top-0 bg-[#1e2a33] text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className='text-white font-semibold text-2xl md:text-3xl'>
            Helix<span className='text-blue-300'>Hub</span>
          </h1>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-semibold text-white">
          <Link href="/" className="hover:text-blue-300">Home</Link>
          <Link href="#about" className="hover:text-blue-300">About</Link>
          <Link href="#services" className="hover:text-blue-300">Services</Link>
          <Link href="#contact" className="hover:text-blue-300">Contact</Link>
        </nav>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#16202c] transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-40 px-6 py-12 space-y-6`}
      >
        <button onClick={toggleMenu} className="text-white text-lg font-semibold absolute top-6 right-6">
          <X />
        </button>
        <Link href="/" onClick={toggleMenu} className="block text-white font-semibold">Home</Link>
        <Link href="#about" onClick={toggleMenu} className="block text-white font-semibold">About</Link>
        <Link href="#services" onClick={toggleMenu} className="block text-white font-semibold">Services</Link>
        <Link href="#contact" onClick={toggleMenu} className="block text-white font-semibold">Contact</Link>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 md:hidden z-30"
          onClick={toggleMenu}
        />
      )}
    </header>
  )
}
