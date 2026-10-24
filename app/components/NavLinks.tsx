'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/schedule', label: 'Schedule' },
  // Long label gets tighter letter spacing so it doesn't look stretched on desktop
  { href: '/events', label: 'Programs & Events', tight: true },
]

export default function NavLinks() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <div className="hidden md:flex gap-8">
        {links.map(({ href, label, tight }) => (
          <Link
            key={href}
            href={href}
            className={`text-xs uppercase text-gray-200 transition-colors hover:text-[#1ab3e8] ${
              tight ? 'tracking-wide' : 'tracking-widest'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="md:hidden relative w-10 h-10 -mr-2 flex items-center justify-center text-gray-200 hover:text-[#1ab3e8] transition-colors"
      >
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-6 bg-current transition-transform duration-200 ${open ? 'rotate-45' : '-translate-y-2'}`}
        />
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-6 bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
        />
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-6 bg-current transition-transform duration-200 ${open ? '-rotate-45' : 'translate-y-2'}`}
        />
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden absolute inset-x-0 top-full z-50 bg-black border-b border-[#1ab3e8]/20"
      >
        <ul className="flex flex-col px-4 sm:px-6 py-2">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`block py-3 text-sm tracking-widest uppercase transition-colors hover:text-[#1ab3e8] ${
                    active ? 'text-[#1ab3e8]' : 'text-gray-200'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
