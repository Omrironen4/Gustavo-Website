'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        background: scrolled ? 'rgba(10,15,30,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : '1px solid transparent',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
      }}
    >
      {/* Logo / Wordmark */}
      <Link href="#home" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.25em',
            color: 'var(--white)',
            textTransform: 'uppercase',
          }}>
            Pacific Beach
          </span>
          <span style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontWeight: 300,
            fontSize: '0.7rem',
            letterSpacing: '0.35em',
            color: 'var(--sand)',
            textTransform: 'uppercase',
          }}>
            Jiu Jitsu
          </span>
        </div>
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--white)',
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'opacity 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.opacity = '1'; (e.target as HTMLElement).style.color = 'var(--sand)' }}
            onMouseLeave={e => { (e.target as HTMLElement).style.opacity = '0.8'; (e.target as HTMLElement).style.color = 'var(--white)' }}
          >
            {l.label}
          </Link>
        ))}
        <a
          href="#contact"
          style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--navy)',
            background: 'var(--sand)',
            padding: '0.55rem 1.2rem',
            textDecoration: 'none',
            fontWeight: 700,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.target as HTMLElement).style.background = 'var(--sand-light)'}
          onMouseLeave={e => (e.target as HTMLElement).style.background = 'var(--sand)'}
        >
          Join Now
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{ display: 'block', width: '24px', height: '1.5px', background: 'var(--white)' }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '72px',
          left: 0,
          right: 0,
          background: 'rgba(10,15,30,0.97)',
          borderBottom: '1px solid rgba(201,169,110,0.2)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 2rem',
          gap: '1.5rem',
        }}>
          {[...links, { label: 'Join Now', href: '#contact' }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
