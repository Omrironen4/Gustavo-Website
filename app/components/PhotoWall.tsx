'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

type FadePhotoProps = {
  src: StaticImageData
  alt: string
  rotate: string
}

export function FadePhoto({ src, alt, rotate }: FadePhotoProps) {
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
      className="relative bg-white p-3 pb-4 shadow-[0_8px_30px_rgba(0,0,0,0.6)] mx-auto w-fit"
    >
      <div className="relative w-64 h-80 overflow-hidden bg-black">
        <Image src={src} alt={alt} fill sizes="256px" style={{ objectFit: 'cover' }} />
      </div>
    </div>
  )
}
