'use client'

import { Children, useRef, useState, type ReactNode } from 'react'

function Arrow({ dir }: { dir: 'prev' | 'next' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={dir === 'prev' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
    </svg>
  )
}

// Horizontal swipe carousel, one item per view. Dots on every screen size, arrows from md up.
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
    const next = Math.max(0, Math.min(items.length - 1, i))
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' })
  }

  const arrowClass =
    'hidden md:flex w-9 h-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-[#1ab3e8] hover:text-[#1ab3e8] disabled:opacity-30 disabled:pointer-events-none'

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-5 sm:-mx-8 md:mx-0 py-2 -my-2"
      >
        {items.map((child, i) => (
          <div key={i} className="w-full shrink-0 snap-center px-5 sm:px-8 md:px-0">
            {child}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-5">
        <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous" className={arrowClass}>
          <Arrow dir="prev" />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Slides">
          {labels.map((label, i) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={label}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${active === i ? 'w-6 bg-[#1ab3e8]' : 'w-2 bg-white/25 hover:bg-white/50'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active === items.length - 1}
          aria-label="Next"
          className={arrowClass}
        >
          <Arrow dir="next" />
        </button>
      </div>
    </div>
  )
}
