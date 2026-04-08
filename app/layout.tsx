import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/gustavo-logo.png'

export const metadata = {
  title: 'Gustavo Froes | Ultimate BJJ',
  description: 'Gustavo Froes — 7th Degree Coral Belt, Ultimate BJJ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 border-b border-[#1ab3e8]/20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src={logo} alt="Ultimate BJJ" fill sizes="40px" style={{ objectFit: 'contain' }} />
            </div>
            <span className="font-bold tracking-wider sm:tracking-widest text-white uppercase text-xs sm:text-sm">
              Ultimate BJJ
            </span>
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-xs tracking-widest uppercase text-gray-400 hover:text-[#1ab3e8] transition-colors">Home</Link>
            <Link href="/about" className="text-xs tracking-widest uppercase text-gray-400 hover:text-[#1ab3e8] transition-colors">About</Link>
            <Link href="/schedule" className="text-xs tracking-widest uppercase text-gray-400 hover:text-[#1ab3e8] transition-colors">Schedule</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
