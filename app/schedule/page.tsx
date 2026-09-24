import Image from 'next/image'
import firstFridaysFlyer from '../../public/first-fridays-flyer.jpg'

type ClassItem = {
  label: string
  time: string
  days: string
  note?: string
}

type Location = {
  name: string
  url?: string
  address: string
  classes: ClassItem[]
  kidsNote?: { title: string; body: string }
}

const locations: Location[] = [
  {
    name: 'Santa Cruz Martial Arts Academy',
    url: 'https://www.santacruzmartialartsacademy.com/',
    address: '6116 CA-9, Felton, CA 95018',
    classes: [
      { label: 'Kids', time: '3:30 – 4:00 pm', days: 'Tue & Thu' },
      { label: 'Kids', time: '4:00 – 5:00 pm', days: 'Tue & Thu' },
      { label: 'Adults & Teens', time: '5:00 – 6:00 pm', days: 'Tue & Thu' },
      { label: 'Adults', time: '6:00 – 7:00 pm', days: 'Tue & Thu' },
      { label: 'Adults & Teens', time: '9:00 – 10:00 am', days: 'Saturday' },
    ],
  },
  {
    name: 'Lone Wolf Kenpo Academy',
    address: '13089 Highway 9, Boulder Creek, CA 95006',
    classes: [
      { label: 'Kids', time: '3:15 – 4:00 pm', days: 'Monday' },
      { label: 'Kids', time: '3:30 – 4:30 pm', days: 'Friday' },
      { label: 'Adults & Teens', time: '6:30 – 7:30 pm', days: 'Wed & Fri' },
    ],
    kidsNote: {
      title: 'Walk-down service from Boulder Creek Elementary',
      body: "We'll pick up your child from Boulder Creek Elementary and walk them to class!",
    },
  },
]

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="inline-block w-4 h-4 ml-1.5 -mt-0.5 text-[#1ab3e8]"
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

function FirstFridays() {
  return (
    <section
      aria-labelledby="first-fridays-heading"
      className="border border-[#1ab3e8]/40 p-5 sm:p-6 mb-10"
      style={{ background: 'rgba(26,179,232,0.06)' }}
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex-1">
          <p className="text-[#1ab3e8] text-xs tracking-[0.2em] uppercase mb-2">Community Event</p>
          <h2 id="first-fridays-heading" className="text-2xl font-bold text-white mb-1">
            Boulder Creek First Fridays
          </h2>
          <p className="text-white font-medium mb-4">Free 30-minute drop-in classes</p>

          <dl className="text-sm space-y-1 mb-4">
            <div className="flex gap-2">
              <dt className="text-gray-500 w-14 shrink-0">When</dt>
              <dd className="text-white">First Friday of the month, April – December</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-gray-500 w-14 shrink-0">Time</dt>
              <dd className="text-white">5:00 – 5:30 pm</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-gray-500 w-14 shrink-0">Where</dt>
              <dd>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('13089 Highway 9, Boulder Creek, CA 95006')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1ab3e8] hover:underline"
                >
                  13089 Highway 9, Boulder Creek
                </a>
              </dd>
            </div>
          </dl>

          <p className="text-gray-400 text-sm leading-relaxed">
            Come experience Brazilian Jiu-Jitsu! A welcoming, beginner-friendly class open to all. Meet our
            community, learn about the ethos and style of Master Gustavo Froes, and see how BJJ can help you
            build confidence on and off the mats.
          </p>
          <p className="text-[#1ab3e8] text-xs tracking-[0.15em] uppercase mt-4">
            Kids · Teens · Adults · All levels welcome
          </p>
        </div>

        <a
          href="/first-fridays-flyer.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-40 sm:w-44 mx-auto sm:mx-0 shrink-0 group"
          aria-label="Open the First Fridays flyer"
        >
          <Image
            src={firstFridaysFlyer}
            alt="Ultimate BJJ Boulder Creek First Fridays flyer"
            sizes="176px"
            className="w-full h-auto border border-white/10 group-hover:border-[#1ab3e8] transition-colors"
          />
          <span className="block text-center text-gray-500 group-hover:text-[#1ab3e8] text-xs mt-2 transition-colors">
            View flyer
          </span>
        </a>
      </div>
    </section>
  )
}

export default function Schedule() {
  return (
    <main className="max-w-3xl mx-auto px-8 py-12">
      <FirstFridays />

      <p className="text-[#1ab3e8] text-3xl tracking-[0.1em] uppercase mb-8">Classes</p>

      <div className="space-y-8">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className=" border-[#1ab3e8]/20 p-1"
            style={{ background: 'rgba(26,179,232,0.03)' }}
          >
            <h2 className="text-xl font-bold mb-1 text-white">
              {loc.url ? (
                <a
                  href={loc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1ab3e8] underline decoration-[#1ab3e8]/40 underline-offset-4 hover:decoration-[#1ab3e8] transition-colors"
                >
                  {loc.name.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="whitespace-nowrap">
                    {loc.name.split(' ').slice(-1)}
                    <ExternalLinkIcon />
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                loc.name
              )}
            </h2>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[#1ab3e8] sm:text-gray-500
                text-sm mb-8 block
                sm:hover:text-[#1ab3e8]
                transition-colors
              "
            >
              {loc.address}
            </a>

            <div className="divide-y divide-white/5">
              {loc.classes.map((cls, i) => {
                const lastKidsIndex = loc.classes.map((c) => c.label).lastIndexOf('Kids')
                return (
                <div key={i} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white font-medium">{cls.label}</span>
                      <br />
                      <span className="text-gray-500 text-sm">{cls.time}</span>
                    </div>
                    <span className="text-[#1ab3e8] text-sm font-medium tracking-wide">{cls.days}</span>
                  </div>
                  {cls.note && <p className="text-gray-400 text-sm mt-2">{cls.note}</p>}
                  {loc.kidsNote && i === lastKidsIndex && (
                    <div
                      className="flex gap-3 items-start mt-3 p-3 border-l-2 border-[#1ab3e8]"
                      style={{ background: 'rgba(26,179,232,0.08)' }}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 shrink-0 mt-0.5 text-[#1ab3e8]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="13" cy="4" r="2" />
                        <path d="m9 20 3-6 3 2v6" />
                        <path d="m6 12 2-3 4-1 3 3 3 1" />
                        <path d="M12 8 10 14" />
                      </svg>
                      <div>
                        <p className="text-white text-sm font-semibold">{loc.kidsNote.title}</p>
                        <p className="text-gray-400 text-sm">{loc.kidsNote.body}</p>
                      </div>
                    </div>
                  )}
                </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
