import Link from 'next/link'

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
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ background: accent }} />
      {/* Header */}
      <div
        className="px-6 pt-6 pb-5"
        style={{ background: `linear-gradient(180deg, ${accent}1f 0%, transparent 100%)` }}
      >
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2" style={{ color: accent }}>
          {school.town}
        </p>
        <h2 id={`school-${school.town}`} className="text-2xl font-bold text-white leading-tight">
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
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <span style={{ color: accent }}>
            <PinIcon />
          </span>
          {school.address}
        </a>
      </div>

      {/* Schedule */}
      <div className="px-6 pb-6">
        {school.schedule.map((block) => (
          <div key={block.days} className="pt-5 first:pt-1">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">
              {block.days}
            </h3>
            <ul className="divide-y divide-white/5 border-y border-white/5">
              {block.classes.map((cls, i) => (
                <li key={i} className="flex items-center justify-between gap-4 py-3">
                  <span className={`text-sm font-medium px-2.5 py-1 rounded-md ${labelStyles[cls.label]}`}>
                    {cls.label}
                  </span>
                  <span className="text-white font-medium tabular-nums">{cls.time}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {school.note && (
          <a
            href={school.note.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/note flex gap-3 items-start mt-6 p-4 rounded-xl border border-transparent transition-colors hover:border-[var(--accent)]"
            style={{ background: `${accent}14` }}
          >
            <WalkIcon color={accent} />
            <div>
              <p className="text-white text-sm font-semibold">{school.note.title}</p>
              <p className="text-gray-400 text-sm">{school.note.body}</p>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase mt-2" style={{ color: accent }}>
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

function EventsPromo() {
  return (
    <Link
      href="/events"
      className="group mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#1ab3e8]/40 px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1ab3e8] hover:shadow-[0_10px_40px_-12px_rgba(26,179,232,0.5)]"
      style={{ background: 'linear-gradient(90deg, rgba(26,179,232,0.12) 0%, rgba(26,179,232,0.02) 100%)' }}
    >
      <div>
        <p className="text-[#1ab3e8] text-xs font-bold tracking-[0.3em] uppercase mb-1">New · Boulder Creek</p>
        <p className="text-white text-lg font-bold">First Friday drop-in classes &amp; Kids BJJ</p>
        <p className="text-gray-400 text-sm">Community events, flyers, and our after-school walk-down service.</p>
      </div>
      <span className="shrink-0 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#1ab3e8] group-hover:gap-3 transition-all">
        See events <span aria-hidden="true">→</span>
      </span>
    </Link>
  )
}

export default function Schedule() {
  return (
    <main className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
      <header className="mb-10">
        <p className="text-[#1ab3e8] text-xs tracking-[0.4em] uppercase mb-3">Schedule</p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Class Schedule</h1>
        <p className="text-gray-400 mt-3">Two locations in the Santa Cruz Mountains. Kids, teens, and adults welcome.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        {schools.map((school) => (
          <SchoolCard key={school.town} school={school} />
        ))}
      </div>

      <EventsPromo />
    </main>
  )
}
