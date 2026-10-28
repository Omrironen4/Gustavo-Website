'use client'

import { useEffect, useState } from 'react'
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

function PostTile({ post, onOpen, tall = false }: { post: InstagramPost; onOpen: (post: InstagramPost) => void; tall?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(post)}
      className={`group relative block w-full overflow-hidden rounded-md border border-[#1ab3e8]/20 bg-white/5 ${
        tall ? 'h-[calc(100svh-21.25rem)]' : 'aspect-square'
      }`}
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
          <span className="w-14 h-14 rounded-full bg-black/55 flex items-center justify-center text-white transition-colors group-hover:bg-[#1ab3e8]/80">
            <svg viewBox="0 0 24 24" className="w-6 h-6 ml-0.5" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      )}
    </button>
  )
}

// Latest Instagram posts: a swipe carousel on phones, a grid from md up. Tapping one opens it in a popup; videos play right there.
export default function InstagramFeed({ posts }: { posts: InstagramPost[] }) {
  const [open, setOpen] = useState<InstagramPost | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  if (posts.length === 0) return null

  return (
    <>
      {/* Phones: one post per slide, sized so the whole page and footer fit on one screen */}
      <div className="md:hidden">
        <SwipeCarousel labels={posts.map((p, i) => `Post ${i + 1}`)}>
          {posts.map((post) => (
            <PostTile key={post.id} post={post} onOpen={setOpen} tall />
          ))}
        </SwipeCarousel>
      </div>

      <div className="hidden md:grid grid-cols-3 gap-3">
        {posts.map((post) => (
          <PostTile key={post.id} post={post} onOpen={setOpen} />
        ))}
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

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Instagram post"
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-sm flex flex-col items-center">
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute -top-11 right-0 w-10 h-10 flex items-center justify-center text-white/80 hover:text-[#1ab3e8] text-3xl leading-none"
            >
              ×
            </button>
            {open.mediaType === 'VIDEO' ? (
              <video
                key={open.id}
                src={open.mediaUrl}
                poster={open.thumbnailUrl}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[75svh] rounded-md bg-black object-contain"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={open.mediaUrl} alt="" className="w-full max-h-[75svh] rounded-md object-contain" />
            )}
            <a
              href={open.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-[#1ab3e8] text-xs tracking-[0.2em] uppercase hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              View on Instagram
            </a>
          </div>
        </div>
      )}
    </>
  )
}
