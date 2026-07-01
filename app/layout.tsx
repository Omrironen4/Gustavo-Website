import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata = {
  title: 'Pacific Beach Jiu Jitsu',
  description: 'World-class Brazilian Jiu-Jitsu in Pacific Beach, San Diego.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'var(--navy)', color: 'var(--white)', minHeight: '100vh', margin: 0 }}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
