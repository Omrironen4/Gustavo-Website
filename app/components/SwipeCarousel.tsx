'use client'

import { Children, useRef, useState, type ReactNode } from 'react'

// Horizontal swipe carousel on mobile (one item per screen), plain vertical stack from md up
export default function SwipeCarousel({ labels, children }: { labels: string[]; children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const items = Children.toArray(children)

  function onScroll() {
    const track = trackRef.current
    if (!track) return
    setActive(Math.round(track.scrollLeft / track.clientWidth))
  }

  function goTo(i: number) {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-5 sm:-mx-8 md:mx-0 md:block md:overflow-visible md:space-y-10"
      >
        {items.map((child, i) => (
          <div key={i} className="w-full shrink-0 snap-center px-5 sm:px-8 md:px-0">
            {child}
          </div>
        ))}
      </div>

      <div className="md:hidden flex justify-center gap-2 mt-5" role="tablist" aria-label="Programs and events">
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={label}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${active === i ? 'w-6 bg-[#1ab3e8]' : 'w-2 bg-white/25'}`}
          />
        ))}
      </div>
    </div>
  )
}
