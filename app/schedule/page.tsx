import Image from 'next/image'
import Link from 'next/link'
import SwipeCarousel from '../components/SwipeCarousel'
import feltonBoulderCreekFlyer from '../../public/felton-boulder-creek-flyer.jpg'
import firstFridaysFlyer from '../../public/first-fridays-flyer.jpg'
import kidsFlyer from '../../public/kids-bjj-flyer.jpg'

export const metadata = {
  title: 'Schedule',
  description:
    'Class schedule for Ultimate BJJ with Master Gustavo Froes at Santa Cruz Martial Arts Academy (Felton) and Lone Wolf Kenpo Academy (Boulder Creek).',
}

type ClassItem = {
  label: 'Kids' | 'Adults & Teens' | 'Adults'
  time: string
}

type DayBlock = {
  days: string
  classes: ClassItem[]
}

type School = {
  town: string
  name: string
  url?: string
  address: string
  accent: string
  schedule: DayBlock[]
  note?: { title: string; body: string; href: string }
}

const schools: School[] = [
  {
    town: 'Felton',
    name: 'Santa Cruz Martial Arts Academy',
    url: 'https://www.santacruzmartialartsacademy.com/',
    address: '6116 CA-9, Felton, CA 95018',
    accent: '#1ab3e8',
    schedule: [
      {
        days: 'Tue & Thu',
        classes: [
          { label: 'Kids', time: '3:30 – 4:00 pm' },
          { label: 'Kids', time: '4:00 – 5:00 pm' },
          { label: 'Adults & Teens', time: '5:00 – 6:00 pm' },
          { label: 'Adults', time: '6:00 – 7:00 pm' },
        ],
      },
      {
        days: 'Saturday',
        classes: [{ label: 'Adults & Teens', time: '9:00 – 10:00 am' }],
      },
    ],
  },
  {
    town: 'Boulder Creek',
    name: 'Lone Wolf Kenpo Academy',
    address: '13089 Highway 9, Boulder Creek, CA 95006',
    accent: '#f5a524',
    schedule: [
      {
        days: 'Monday',
        classes: [{ label: 'Kids', time: '3:15 – 4:00 pm' }],
      },
      {
        days: 'Wednesday',
        classes: [{ label: 'Adults & Teens', time: '6:30 – 7:30 pm' }],
      },
      {
        days: 'Friday',
        classes: [
          { label: 'Kids', time: '3:30 – 4:30 pm' },
          { label: 'Adults & Teens', time: '6:30 – 7:30 pm' },
        ],
      },
    ],
    note: {
      title: 'Walk-down service from Boulder Creek Elementary',
      body: "We'll pick up your child from Boulder Creek Elementary and walk them to class!",
      href: '/kids-bjj-flyer.jpg',
    },
  },
]

const labelStyles: Record<ClassItem['label'], string> = {
  Kids: 'bg-white/10 text-white',
  'Adults & Teens': 'bg-white/5 text-gray-300',
  Adults: 'bg-white/5 text-gray-300',
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="inline-block w-4 h-4 ml-1.5 -mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

function WalkIcon({ color }: { color: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" style={{ color }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="4" r="2" />
      <path d="m9 20 3-6 3 2v6" />
      <path d="m6 12 2-3 4-1 3 3 3 1" />
      <path d="M12 8 10 14" />
    </svg>
  )
}

function SchoolCard({ school }: { school: School }) {
  const { accent } = school
  const nameWords = school.name.split(' ')
  return (
    <section
      aria-labelledby={`school-${school.town}`}
      className="school-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
      style={{ ['--accent' as string]: accent }}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 z-10" style={{ background: accent }} />
      <div className="md:grid md:grid-cols-[2fr_3fr]">
        {/* Location */}
        <div
          className="px-5 pt-5 pb-4 md:p-8 md:flex md:flex-col md:justify-center"
          style={{ background: `linear-gradient(180deg, ${accent}1f 0%, transparent 100%)` }}
        >
          <p className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase mb-1.5 md:mb-2" style={{ color: accent }}>
            {school.town}
          </p>
          <h2 id={`school-${school.town}`} className="text-lg md:text-2xl font-bold text-white leading-tight">
            {school.url ? (
              <a
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-white/30 hover:decoration-current transition-colors"
              >
                {nameWords.slice(0, -1).join(' ')}{' '}
                <span className="whitespace-nowrap">
                  {nameWords[nameWords.length - 1]}
                  <span style={{ color: accent }}>
                    <ExternalLinkIcon />
                  </span>
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              school.name
            )}
          </h2>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 md:mt-3 inline-flex items-center gap-1.5 text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
          >
            <span style={{ color: accent }}>
              <PinIcon />
            </span>
            {school.address}
          </a>

          {/* Desktop: the walk-down note sits under the address */}
          {school.note && (
            <div className="hidden md:block mt-6">
              <WalkDownNote note={school.note} accent={accent} />
            </div>
          )}
        </div>

        {/* Classes */}
        <div className="px-5 pb-5 md:p-8 grid gap-4 md:gap-5 content-center">
          {school.schedule.map((block) => (
            <div key={block.days}>
              <h3 className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-1 md:mb-1.5">
                {block.days}
              </h3>
              <ul className="divide-y divide-white/5 border-t border-white/5">
                {block.classes.map((cls, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 py-1.5 md:py-2.5">
                    <span className={`text-xs md:text-sm font-medium px-2 md:px-2.5 py-0.5 md:py-1 rounded md:rounded-md ${labelStyles[cls.label]}`}>
                      {cls.label}
                    </span>
                    <span className="text-white text-sm md:text-base font-medium tabular-nums">{cls.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Phones: the walk-down note sits under the classes */}
          {school.note && (
            <div className="md:hidden">
              <WalkDownNote note={school.note} accent={accent} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function WalkDownNote({ note, accent }: { note: NonNullable<School['note']>; accent: string }) {
  return (
    <a
      href={note.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/note flex gap-3 items-start p-3 md:p-4 rounded-xl border border-transparent transition-colors hover:border-[var(--accent)]"
      style={{ background: `${accent}14` }}
    >
      <WalkIcon color={accent} />
      <div>
        <p className="text-white text-xs md:text-sm font-semibold">{note.title}</p>
        <p className="text-gray-400 text-xs md:text-sm">{note.body}</p>
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase mt-1.5 md:mt-2" style={{ color: accent }}>
          View kids flyer{' '}
          <span aria-hidden="true" className="inline-block transition-transform group-hover/note:translate-x-1">→</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </p>
      </div>
    </a>
  )
}

const promoFlyers = [
  { image: firstFridaysFlyer, alt: 'First Fridays flyer' },
  { image: kidsFlyer, alt: 'Kids BJJ flyer' },
  { image: feltonBoulderCreekFlyer, alt: 'Felton and Boulder Creek flyer' },
]

function EventsSlide() {
  return (
    <Link
      href="/events"
      className="group relative h-full flex flex-col md:flex-row md:items-center gap-5 md:gap-8 overflow-hidden rounded-2xl border border-[#1ab3e8]/40 p-5 md:p-8 transition-all duration-300 hover:border-[#1ab3e8] hover:shadow-[0_10px_40px_-12px_rgba(26,179,232,0.5)]"
      style={{ background: 'linear-gradient(180deg, rgba(26,179,232,0.12) 0%, rgba(26,179,232,0.02) 100%)' }}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#1ab3e8]" />
      <div className="md:flex-1">
        <p className="text-[#1ab3e8] text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase mb-1.5 md:mb-2">New · Programs &amp; Events</p>
        <h2 className="text-white text-lg md:text-2xl font-bold leading-tight">First Fridays, Kids BJJ &amp; private lessons</h2>
        <p className="text-gray-400 text-xs md:text-sm mt-2">
          Free First Friday drop-in classes, after-school Kids BJJ with walk-down from Boulder Creek Elementary, and
          one-on-one lessons with Master Gustavo.
        </p>
        <span className="mt-4 md:mt-6 inline-flex items-center gap-2 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#1ab3e8] group-hover:gap-3 transition-all">
          See programs &amp; events <span aria-hidden="true">→</span>
        </span>
      </div>
      <div className="my-auto md:my-0 grid grid-cols-3 gap-3 md:w-[22rem] shrink-0">
        {promoFlyers.map((f) => (
          <Image
            key={f.alt}
            src={f.image}
            alt={f.alt}
            sizes="(min-width: 768px) 112px, 30vw"
            className="w-full h-auto rounded-md border border-white/10 transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ))}
      </div>
    </Link>
  )
}

export default function Schedule() {
  return (
    <main className="max-w-5xl mx-auto px-5 sm:px-8 py-4 md:py-8">
      <header className="mb-4 md:mb-8">
        <h1 className="text-2xl sm:text-5xl font-black tracking-tight text-white">Class Schedule</h1>
        <p className="hidden md:block text-gray-400 mt-3">
          Two locations in the Santa Cruz Mountains. Kids, teens, and adults welcome.
        </p>
      </header>

      <SwipeCarousel fitHeight labels={[...schools.map((s) => s.town), 'Programs & Events']}>
        {schools.map((school) => (
          <SchoolCard key={school.town} school={school} />
        ))}
        <EventsSlide />
      </SwipeCarousel>
    </main>
  )
}
