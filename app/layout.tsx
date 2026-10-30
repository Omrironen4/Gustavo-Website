import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/gustavo-logo-layer.png'
import NavLinks from './components/NavLinks'

export const metadata = {
  metadataBase: new URL('https://ultimatebjj.vercel.app'),
  verification: {
    google: 'PswyU_u1r_0wzgJnqyTGQ9OZw9vqGGM-vgQ9v-9J5i0',
  },
  title: {
    default: 'Ultimate BJJ | Brazilian Jiu-Jitsu with Gustavo Froes',
    template: '%s | Ultimate BJJ',
  },
  description: 'Ultimate BJJ (UBJJ, Ultimate Brazilian Jiu-Jitsu): Santa Cruz Jiu-Jitsu school with Master Gustavo Froes — 7th Degree Coral Belt. Kids Jiu-Jitsu, teen, and adult programs in Felton and Boulder Creek, Northern California.',
  keywords: ['Brazilian Jiu-Jitsu', 'BJJ', 'Santa Cruz', 'Felton', 'Boulder Creek', 'martial arts', 'Gustavo Froes', 'Ultimate BJJ', 'Ultimate Brazilian Jiu-Jitsu', 'Ultimate Brazilian Jiujitsu', 'UBJJ', 'Ultimate Jiu-Jitsu', 'Ultimate JiuJitsu', 'Gustavo Froes Jiu-Jitsu', 'Santa Cruz Jiu-Jitsu', 'Santa Cruz JiuJitsu', 'UBJJ Santa Cruz', 'Jiu-Jitsu school Santa Cruz', 'Northern California Jiu-Jitsu', 'Kids Jiu-Jitsu', 'kids BJJ', 'adult BJJ'],
  openGraph: {
    title: 'Ultimate BJJ | Brazilian Jiu-Jitsu with Gustavo Froes',
    description: 'Ultimate BJJ (UBJJ Santa Cruz): Santa Cruz Jiu-Jitsu and Kids Jiu-Jitsu classes with Master Gustavo Froes — 7th Degree Coral Belt.',
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
        <nav className="relative flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 border-b border-[#1ab3e8]/20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src={logo} alt="Ultimate BJJ" fill sizes="40px" style={{ objectFit: 'contain' }} />
            </div>
            <span className="font-bold tracking-wider sm:tracking-widest text-white uppercase text-xs sm:text-sm">
              Ultimate BJJ
            </span>
          </Link>
          <NavLinks />
        </nav>
        {children}
        <footer className="w-full py-4 sm:py-6 px-4 text-center border-t border-[#1ab3e833] mt-7">
          <p className="text-[9px] tracking-[0.12em] sm:text-xs sm:tracking-[0.2em] uppercase text-[white]/50">
            © {new Date().getFullYear()} Ultimate BJJ · All Rights Reserved
          </p>
        </footer>
      </body>
    </html>
  )
}
