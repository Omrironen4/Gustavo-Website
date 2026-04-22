import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/gustavo-logo-layer.png'

export const metadata = {
  metadataBase: new URL('https://ultimatebjj.vercel.app'),
  verification: {
    google: 'PswyU_u1r_0wzgJnqyTGQ9OZw9vqGGM-vgQ9v-9J5i0',
  },
  title: {
    default: 'Ultimate BJJ | Gustavo Froes',
    template: '%s | Ultimate BJJ',
  },
  description: 'Brazilian Jiu-Jitsu classes in the Santa Cruz Mountains with Master Gustavo Froes — 7th Degree Coral Belt. Kids, teens, women, and adult programs in Felton and Boulder Creek, CA.',
  keywords: ['Brazilian Jiu-Jitsu', 'BJJ', 'Santa Cruz', 'Felton', 'Boulder Creek', 'martial arts', 'Gustavo Froes', 'Ultimate BJJ', 'kids BJJ', 'adult BJJ'],
  openGraph: {
    title: 'Ultimate BJJ | Gustavo Froes',
    description: 'BJJ classes in the Santa Cruz Mountains with Master Gustavo Froes — 7th Degree Coral Belt.',
    url: 'https://ultimatebjj.vercel.app',
    siteName: 'Ultimate BJJ',
    images: [{ url: '/gustavo-logo.png' }],
    locale: 'en_US',
    type: 'website',
  },
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
