'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { INSTAGRAM_URL, type InstagramPost } from '../lib/instagram'
import SwipeCarousel from './SwipeCarousel'

function InstagramIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function PostTile({
  post,
  onOpen,
  tall = false,
  small = false,
  playing = false,
}: {
  post: InstagramPost
  onOpen: (post: InstagramPost) => void
  tall?: boolean
  small?: boolean
  playing?: boolean
}) {
  const box = `relative block w-full overflow-hidden rounded-md border border-[#1ab3e8]/20 ${tall ? 'h-[calc(100svh-21.25rem)] md:h-[min(calc(100svh-28.5rem),36rem)]' : 'aspect-square'}`

  if (playing) {
    return (
      <div className={`${box} bg-black`}>
        <InlineVideo post={post} />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(post)}
      className={`group ${box} bg-white/5`}
      aria-label={post.prunedCaption?.split('\n')[0] || 'Instagram post'}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tall ? post.thumbnailUrl ?? post.mediaUrl : post.sizes.medium.mediaUrl}
        alt=""
        loading="lazy"
        // Instagram's own image links expire; fall back to Behold's square copy
        onError={(e) => {
          if (e.currentTarget.src !== post.sizes.large.mediaUrl) e.currentTarget.src = post.sizes.large.mediaUrl
        }}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {post.mediaType === 'VIDEO' && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span
            className={`rounded-full bg-black/55 flex items-center justify-center text-white transition-colors group-hover:bg-[#1ab3e8]/80 ${
              small ? 'w-8 h-8' : 'w-14 h-14'
            }`}
          >
            <svg viewBox="0 0 24 24" className={`ml-0.5 ${small ? 'w-4 h-4' : 'w-6 h-6'}`} fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      )}
    </button>
  )
}

// Plays a video in place; pauses once it is scrolled or swiped out of view
function InlineVideo({ post }: { post: InstagramPost }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // The phone carousel and desktop grid are both in the page; only start the copy that's on screen
    if (video.offsetParent !== null) video.play().catch(() => {})
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause()
    }, { threshold: 0.5 })
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={post.mediaUrl}
      poster={post.thumbnailUrl}
      controls
      playsInline
      className="w-full h-full object-contain"
    />
  )
}

// Full-screen popup for one post; videos play right there
function PostPopup({ post, onClose }: { post: InstagramPost; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Instagram post"
      onClick={() => onClose()}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-sm flex flex-col items-center">
        <button
          type="button"
          onClick={() => onClose()}
          aria-label="Close"
          className="absolute -top-11 right-0 w-10 h-10 flex items-center justify-center text-white/80 hover:text-[#1ab3e8] text-3xl leading-none"
        >
          ×
        </button>
        {post.mediaType === 'VIDEO' ? (
          <video
            key={post.id}
            src={post.mediaUrl}
            poster={post.thumbnailUrl}
            controls
            autoPlay
            playsInline
            className="w-full max-h-[75svh] rounded-md bg-black object-contain"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.mediaUrl} alt="" className="w-full max-h-[75svh] rounded-md object-contain" />
        )}
        <a
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-[#1ab3e8] text-xs tracking-[0.2em] uppercase hover:text-white transition-colors"
        >
          <InstagramIcon className="w-4 h-4" />
          View on Instagram
        </a>
      </div>
    </div>
  )
}

// Latest Instagram posts: a swipe carousel on phones, a grid from md up.
export default function InstagramFeed({ posts }: { posts: InstagramPost[] }) {
  const [open, setOpen] = useState<InstagramPost | null>(null)
  // Videos play inside their own tile, one at a time; photos still open in the popup
  const [playing, setPlaying] = useState<string | null>(null)
  const onOpen = (post: InstagramPost) => (post.mediaType === 'VIDEO' ? setPlaying(post.id) : setOpen(post))

  if (posts.length === 0) return null

  const pages = Array.from({ length: Math.ceil(posts.length / 3) }, (_, i) => posts.slice(i * 3, i * 3 + 3))

  return (
    <>
      {/* Phones: one post per slide, sized so the whole page and footer fit on one screen */}
      <div className="md:hidden">
        <SwipeCarousel labels={posts.map((p, i) => `Post ${i + 1}`)}>
          {posts.map((post) => (
            <PostTile key={post.id} post={post} onOpen={onOpen} playing={playing === post.id} tall />
          ))}
        </SwipeCarousel>
      </div>

      {/* Desktop: tall tiles, three per slide */}
      <div className="hidden md:block">
        <SwipeCarousel labels={pages.map((_, i) => `Videos ${i * 3 + 1}–${i * 3 + pages[i].length}`)}>
          {pages.map((page, i) => (
            <div key={i} className="grid grid-cols-3 gap-4">
              {page.map((post) => (
                <PostTile key={post.id} post={post} onOpen={onOpen} playing={playing === post.id} tall />
              ))}
            </div>
          ))}
        </SwipeCarousel>
      </div>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 md:mt-6 mx-auto flex w-fit items-center gap-2 border border-[#1ab3e8] px-5 py-2.5 text-[#1ab3e8] text-xs sm:text-sm tracking-[0.2em] uppercase transition-colors hover:bg-[#1ab3e8] hover:text-black"
      >
        <InstagramIcon className="w-4 h-4" />
        Follow @ubjj_community
      </a>

      {open && <PostPopup post={open} onClose={() => setOpen(null)} />}
    </>
  )
}

// Home page teaser: the 3 latest posts in a row, with a link to the Videos page.
// The thumbnails start hidden under shimmering "invisible ink"; swiping a finger
// (or moving the mouse) over them wipes the ink away right where it touches.
export function LatestVideos({ posts }: { posts: InstagramPost[] }) {
  const [open, setOpen] = useState<InstagramPost | null>(null)

  if (posts.length === 0) return null

  return (
    <div className="mt-5 md:mt-6 w-full flex justify-center">
      <div className="dream-bubble relative rounded-3xl px-3 pt-2.5 pb-3 md:px-4 md:pt-3 md:pb-4">
        <Link
          href="/videos"
          className="group inline-block mb-3 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase"
        >
          <span className="shine-text relative inline-block pb-0.5 after:absolute after:left-0 after:right-[0.26em] after:bottom-0 after:h-px after:bg-[#1489b3]">Latest Videos</span>
        </Link>
        <InvisibleInk className="w-[min(calc(100vw-4rem),20rem)] md:w-[clamp(15rem,calc(100svh-38rem),24rem)] mx-auto">
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {posts.slice(0, 3).map((post) => (
              <PostTile key={post.id} post={post} onOpen={setOpen} small />
            ))}
          </div>
        </InvisibleInk>
      </div>
      {open && <PostPopup post={open} onClose={() => setOpen(null)} />}
    </div>
  )
}

// Hides its children under twinkling particles until they are wiped away by touch or mouse
function InvisibleInk({ children, className }: { children: ReactNode; className: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const box = wrap.current
    const inner = content.current
    const cvs = canvas.current
    if (!box || !inner || !cvs) return
    const ctx = cvs.getContext('2d')
    if (!ctx) return

    // Low-res record of what has been wiped; it doubles as the CSS mask for the thumbnails
    const mask = document.createElement('canvas')
    const mctx = mask.getContext('2d')!
    const MASK_W = 96

    let w = 0
    let h = 0
    let dpr = 1
    let tiles: { x: number; y: number; w: number; h: number }[] = []
    let dots: { x: number; y: number; vx: number; vy: number; phase: number; speed: number; size: number }[] = []
    let frame = 0
    let visible = false
    let done = false
    let maskDirty = false

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return // no veil at all: thumbnails just show

    const applyMask = () => {
      const url = `url(${mask.toDataURL()})`
      inner.style.maskImage = url
      inner.style.webkitMaskImage = url
      maskDirty = false
    }

    const resize = () => {
      const r = box.getBoundingClientRect()
      if (!r.width || !r.height) return
      const oldW = mask.width
      const oldH = mask.height
      const prev = oldW ? mctx.getImageData(0, 0, oldW, oldH) : null
      w = r.width
      h = r.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      cvs.width = Math.round(w * dpr)
      cvs.height = Math.round(h * dpr)
      mask.width = MASK_W
      mask.height = Math.max(1, Math.round((MASK_W * h) / w))
      if (prev) {
        const tmp = document.createElement('canvas')
        tmp.width = oldW
        tmp.height = oldH
        tmp.getContext('2d')!.putImageData(prev, 0, 0)
        mctx.drawImage(tmp, 0, 0, mask.width, mask.height)
      }
      // The ink takes the shape of each thumbnail, so it reads as three hidden cards
      tiles = Array.from(inner.querySelectorAll('.grid > *')).map((el) => {
        const t = el.getBoundingClientRect()
        return { x: t.left - r.left, y: t.top - r.top, w: t.width, h: t.height }
      })
      const count = Math.round((w * h) / 13)
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.004,
        size: Math.random() < 0.15 ? 1.6 : 1,
      }))
      applyMask()
    }

    const draw = (now: number) => {
      frame = 0
      if (!visible || done) return
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.globalCompositeOperation = 'source-over'
      ctx.clearRect(0, 0, w, h)
      ctx.save()
      ctx.beginPath()
      for (const t of tiles) ctx.roundRect(t.x, t.y, t.w, t.h, 6)
      ctx.clip()
      for (const d of dots) {
        d.x += d.vx + Math.sin(now / 900 + d.phase) * 0.08
        d.y += d.vy + Math.cos(now / 1100 + d.phase) * 0.08
        if (d.x < 0) d.x += w
        else if (d.x > w) d.x -= w
        if (d.y < 0) d.y += h
        else if (d.y > h) d.y -= h
        const a = 0.15 + 0.8 * Math.abs(Math.sin(now * d.speed + d.phase))
        ctx.fillStyle = d.size > 1 ? `rgba(190,235,255,${a})` : `rgba(255,255,255,${a * 0.85})`
        ctx.fillRect(d.x, d.y, d.size, d.size)
      }
      ctx.restore()
      // Clear the ink wherever it has been wiped
      ctx.globalCompositeOperation = 'destination-out'
      ctx.drawImage(mask, 0, 0, w, h)
      if (maskDirty) applyMask()
      frame = requestAnimationFrame(draw)
    }
    const start = () => {
      if (!frame && visible && !done) frame = requestAnimationFrame(draw)
    }

    let last: { x: number; y: number } | null = null
    const wipe = (clientX: number, clientY: number) => {
      if (done || !w) return
      const r = box.getBoundingClientRect()
      const x = clientX - r.left
      const y = clientY - r.top
      if (x < -20 || y < -20 || x > w + 20 || y > h + 20) {
        last = null
        return
      }
      const scale = mask.width / w
      const radius = 30 * scale
      const from = last ?? { x, y }
      const steps = Math.max(1, Math.ceil(Math.hypot(x - from.x, y - from.y) / 8))
      for (let i = 1; i <= steps; i++) {
        const px = (from.x + ((x - from.x) * i) / steps) * scale
        const py = (from.y + ((y - from.y) * i) / steps) * scale
        const g = mctx.createRadialGradient(px, py, 0, px, py, radius)
        g.addColorStop(0, 'rgba(0,0,0,0.9)')
        g.addColorStop(0.55, 'rgba(0,0,0,0.5)')
        g.addColorStop(1, 'rgba(0,0,0,0)')
        mctx.fillStyle = g
        mctx.fillRect(px - radius, py - radius, radius * 2, radius * 2)
      }
      last = { x, y }
      maskDirty = true
      start()
    }

    // Once most of it is wiped, let the rest of the ink melt away
    const checkCleared = () => {
      last = null
      if (done || !mask.width) return
      const data = mctx.getImageData(0, 0, mask.width, mask.height).data
      let sum = 0
      for (let i = 3; i < data.length; i += 4) sum += data[i]
      if (sum / (data.length / 4) / 255 > 0.5) {
        done = true
        cancelAnimationFrame(frame)
        cvs.style.transition = 'opacity 0.8s ease'
        cvs.style.opacity = '0'
        const t0 = performance.now()
        const melt = (now: number) => {
          mctx.fillStyle = 'rgba(0,0,0,0.12)'
          mctx.fillRect(0, 0, mask.width, mask.height)
          applyMask()
          if (now - t0 < 800) requestAnimationFrame(melt)
          else {
            inner.style.maskImage = 'none'
            inner.style.webkitMaskImage = 'none'
          }
        }
        requestAnimationFrame(melt)
      }
    }

    const onPointer = (e: PointerEvent) => wipe(e.clientX, e.clientY)
    const onTouch = (e: TouchEvent) => {
      for (const t of Array.from(e.touches)) wipe(t.clientX, t.clientY)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(box)
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
    })
    io.observe(box)
    box.addEventListener('pointermove', onPointer)
    box.addEventListener('pointerdown', onPointer)
    box.addEventListener('touchstart', onTouch, { passive: true })
    box.addEventListener('touchmove', onTouch, { passive: true })
    box.addEventListener('pointerleave', checkCleared)
    box.addEventListener('pointerup', checkCleared)
    box.addEventListener('touchend', checkCleared)

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      io.disconnect()
      box.removeEventListener('pointermove', onPointer)
      box.removeEventListener('pointerdown', onPointer)
      box.removeEventListener('touchstart', onTouch)
      box.removeEventListener('touchmove', onTouch)
      box.removeEventListener('pointerleave', checkCleared)
      box.removeEventListener('pointerup', checkCleared)
      box.removeEventListener('touchend', checkCleared)
    }
  }, [])

  return (
    <div ref={wrap} className={`ink relative ${className}`}>
      <div ref={content} className="ink-content">{children}</div>
      <canvas ref={canvas} aria-hidden="true" className="ink-canvas pointer-events-none absolute inset-0 h-full w-full" />
    </div>
  )
}
