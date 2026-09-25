'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/events', label: 'Events' },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="flex gap-4 sm:gap-8">
      {links.map(({ href, label }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`text-[11px] sm:text-xs tracking-wider sm:tracking-widest uppercase transition-colors hover:text-[#1ab3e8] ${
              active
                ? 'text-[#1ab3e8] sm:text-gray-200'
                : 'text-gray-200'
            }`}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}
