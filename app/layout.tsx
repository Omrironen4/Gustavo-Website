// app/layout.tsx
import './globals.css'
import Image from 'next/image'
import logo from '../public/gustavo-logo.png' // import the image

export const metadata = {
  title: 'Gustavo Website',
  description: 'Website for Gustavo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center bg-white">
        <div className="my-4 w-48 relative h-48">
          <Image src={logo} alt="Gustavo Logo" layout="fill" objectFit="contain" />
        </div>
        {children}
      </body>
    </html>
  )
}