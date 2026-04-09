'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../public/gustavo-logo-layer.png'
import photo from '../../public/uncle-gus.png'

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((f) => !f)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative w-72 h-72 mb-8 drop-shadow-[0_0_40px_rgba(26,179,232,0.3)]"
      style={{ perspective: '800px' }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 2.7s cubic-bezier(0.4, 0.2, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front — logo */}
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden' }}>
          <Image
            src={logo}
            alt="Ultimate BJJ"
            fill
            sizes="288px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Back — photo */}
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderRadius: '105px', overflow: 'hidden' }}>
          <Image
            src={photo}
            alt="Gustavo Froes"
            fill
            sizes="288px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  )
}
