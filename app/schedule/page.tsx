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

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'

type DayBlock = {
  days: string
  weekdays: Weekday[]
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
        weekdays: ['Tue', 'Thu'],
        classes: [
          { label: 'Kids', time: '3:30 – 4:00 pm' },
          { label: 'Kids', time: '4:00 – 5:00 pm' },
          { label: 'Adults & Teens', time: '5:00 – 6:00 pm' },
          { label: 'Adults', time: '6:00 – 7:00 pm' },
        ],
      },
      {
        days: 'Saturday',
        weekdays: ['Sat'],
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
        weekdays: ['Mon'],
        classes: [{ label: 'Kids', time: '3:15 – 4:00 pm' }],
      },
      {
        days: 'Wednesday',
        weekdays: ['Wed'],
        classes: [{ label: 'Adults & Teens', time: '6:30 – 7:30 pm' }],
      },
      {
        days: 'Friday',
        weekdays: ['Fri'],
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

const WEEK: Weekday[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Split "3:30 – 4:00 pm" into the range and the am/pm suffix so the range can be set large
function splitTime(time: string) {
  const m = time.match(/^(.*)\s(am|pm)$/)
  return m ? { range: m[1], suffix: m[2] } : { range: time, suffix: '' }
}

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
      className="school-card relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
      style={{ ['--accent' as string]: accent }}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ background: accent }} />
      {/* Header */}
      <div
        className="px-5 pt-5 pb-4 md:px-8 md:pt-7 md:pb-6 md:flex md:items-end md:justify-between md:gap-6"
        style={{ background: `linear-gradient(180deg, ${accent}1f 0%, transparent 100%)` }}
      >
        <div>
          <p className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase mb-1.5 md:mb-2" style={{ color: accent }}>
            {school.town}
          </p>
          <h2 id={`school-${school.town}`} className="text-lg md:text-3xl font-bold md:font-black md:tracking-tight text-white leading-tight">
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
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 md:mt-0 shrink-0 inline-flex items-center gap-1.5 text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
        >
          <span style={{ color: accent }}>
            <PinIcon />
          </span>
          {school.address}
        </a>
      </div>

      <div className="px-5 pb-5 md:px-8 md:pb-8">
        {/* Phones: day headings above their classes */}
        <div className="md:hidden grid gap-4">
          {school.schedule.map((block) => (
            <div key={block.days}>
              <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-1">{block.days}</h3>
              <ul className="divide-y divide-white/5 border-t border-white/5">
                {block.classes.map((cls, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 py-1.5">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${labelStyles[cls.label]}`}>{cls.label}</span>
                    <span className="text-white text-sm font-medium tabular-nums">{cls.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Desktop: a Mon–Sat week, each day a column of class tiles */}
        <div className="hidden md:grid grid-cols-6 gap-3 [&:not(:last-child)]:mb-6">
          {WEEK.map((day) => {
            const classes = school.schedule.filter((b) => b.weekdays.includes(day)).flatMap((b) => b.classes)
            const open = classes.length > 0
            return (
              <div key={day}>
                <h3
                  className={`text-xs font-black tracking-[0.25em] uppercase pb-2 mb-3 border-b-2 ${open ? 'text-white' : 'text-gray-600 border-white/5'}`}
                  style={open ? { borderColor: accent } : undefined}
                >
                  {day}
                </h3>
                {open ? (
                  <ul className="space-y-2">
                    {classes.map((cls, i) => {
                      const { range, suffix } = splitTime(cls.time)
                      const kids = cls.label === 'Kids'
                      return (
                        <li
                          key={i}
                          className="rounded-lg bg-white/[0.04] border border-white/10 border-l-[3px] px-3 py-2.5"
                          style={{ borderLeftColor: kids ? accent : 'rgba(255,255,255,0.55)' }}
                        >
                          <p className="text-white text-[15px] font-black tabular-nums leading-tight whitespace-nowrap">
                            {range}
                            <span className="text-gray-400 text-[11px] font-semibold ml-1">{suffix}</span>
                          </p>
                          <p
                            className="text-[11px] font-bold tracking-[0.06em] uppercase mt-1 whitespace-nowrap"
                            style={{ color: kids ? accent : '#d1d5db' }}
                          >
                            {cls.label}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <p className="rounded-lg border border-dashed border-white/10 py-4 text-center text-gray-600 text-xs tracking-[0.2em] uppercase">
                    Rest
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {school.note && (
          <a
            href={school.note.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/note flex gap-3 items-start mt-4 md:mt-0 p-3 md:p-4 rounded-xl border border-transparent transition-colors hover:border-[var(--accent)]"
            style={{ background: `${accent}14` }}
          >
            <WalkIcon color={accent} />
            <div className="md:flex md:items-center md:justify-between md:gap-6 md:flex-1">
              <div>
                <p className="text-white text-xs md:text-sm font-semibold">{school.note.title}</p>
                <p className="text-gray-400 text-xs md:text-sm">{school.note.body}</p>
              </div>
              <p className="shrink-0 text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase mt-1.5 md:mt-0" style={{ color: accent }}>
                View kids flyer{' '}
                <span aria-hidden="true" className="inline-block transition-transform group-hover/note:translate-x-1">→</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </p>
            </div>
          </a>
        )}
      </div>
    </section>
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
