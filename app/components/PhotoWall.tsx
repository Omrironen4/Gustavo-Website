'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

type Photo = {
  src: StaticImageData
  alt: string
  rotate: string
}

function Photo({ src, alt, rotate }: Photo) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transform: `${rotate} ${visible ? 'translateY(0)' : 'translateY(24px)'}`,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
      className="relative bg-white p-3 pb-10 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
    >
      <div className="relative w-64 h-80 overflow-hidden bg-black">
        <Image src={src} alt={alt} fill sizes="256px" style={{ objectFit: 'cover' }} />
      </div>
      <p className="absolute bottom-3 left-0 right-0 text-center text-gray-400 text-xs tracking-widest uppercase font-medium">
        
      </p>
    </div>
  )
}

import pose from '../../public/gustavo-pose.png'
import poseLogo from '../../public/gustavo-pose-logo.png'

export default function PhotoWall() {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-16 mb-4">
      <Photo src={pose} alt="Gustavo Froes" rotate="rotate(-2deg)" />
      <Photo src={poseLogo} alt="Gustavo Froes" rotate="rotate(2deg)" />
    </div>
  )
}
