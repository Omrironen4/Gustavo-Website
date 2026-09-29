'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../public/gustavo-logo-layer.png'
import photo from '../../public/gustavo-pose-logo.jpg'

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
      className="relative w-[245px] h-[245px] md:size-[clamp(220px,calc(100svh-490px),320px)] lg:size-[clamp(220px,calc(100svh-490px),380px)] mb-7.5 md:mb-4 drop-shadow-[0_0_40px_rgba(26,179,232,0.3)]"
      style={{ perspective: '800px' }}
    >
      <div
        style={{
          width: '100%',
          height: '90%',
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
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 320px, 245px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Back — photo */}
        <div
          style={{ position: 'absolute', inset: 0, borderRadius: '42.9% / 47.6%', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', overflow: 'hidden' }}
        >
          <Image
            src={photo}
            alt="Gustavo Froes"
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 320px, 245px"
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            priority
          />
        </div>
      </div>
    </div>
  )
}
