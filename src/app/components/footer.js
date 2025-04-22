'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <div className="flex-grow">
        {/* Your main content goes here */}
      </div>

      {/* Footer */}
      <footer className="bg-[#1e2a33] text-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <p className="text-sm">
            &copy; April 21, 2025 HelixHub
          </p>

          {/* Links (Responsive) */}
          <nav className="flex space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-blue-300">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-300">Terms</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
