import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import firstFridaysFlyer from '../../public/first-fridays-flyer.jpg'
import kidsFlyer from '../../public/kids-bjj-flyer.jpg'

export const metadata = {
  title: 'Events',
  description:
    'Boulder Creek First Fridays free drop-in BJJ classes and Kids BJJ with walk-down service from Boulder Creek Elementary.',
}

const BOULDER_CREEK = '13089 Highway 9, Boulder Creek, CA 95006'
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BOULDER_CREEK)}`

type Detail = { label: string; value: string }

type Event = {
  id: string
  tag: string
  title: string
  subtitle: string
  details: Detail[]
  body: string
  highlight?: { title: string; body: string }
  footer: string
  flyer: StaticImageData
  flyerHref: string
  flyerAlt: string
}

const events: Event[] = [
  {
    id: 'first-fridays',
    tag: 'Community Event',
    title: 'Boulder Creek First Fridays',
    subtitle: 'Free 30-minute drop-in classes',
    details: [
      { label: 'When', value: 'First Friday of the month, April – December' },
      { label: 'Time', value: '5:00 – 5:30 pm' },
      { label: 'Where', value: '13089 Highway 9, Boulder Creek' },
    ],
    body:
      'Come experience Brazilian Jiu-Jitsu! A welcoming, beginner-friendly class open to all. Meet our community, learn about the ethos and style of Master Gustavo Froes, and see how BJJ can help you build confidence on and off the mats.',
    footer: 'Kids · Teens · Adults · All levels welcome',
    flyer: firstFridaysFlyer,
    flyerHref: '/first-fridays-flyer.jpg',
    flyerAlt: 'Ultimate BJJ Boulder Creek First Fridays flyer',
  },
  {
    id: 'kids-bjj',
    tag: 'Kids Program',
    title: 'Boulder Creek Kids BJJ',
    subtitle: 'Skills for the mat. Confidence for life.',
    details: [
      { label: 'Monday', value: '3:15 – 4:00 pm' },
      { label: 'Friday', value: '3:30 – 4:30 pm' },
      { label: 'Where', value: '13089 Highway 9, Boulder Creek' },
    ],
    body:
      'Fundamental skills in a fun, supportive environment. Engaging games build focus and teamwork, with plenty of mat time plus Brazilian parables and real-world lessons that build confidence and safety on and off the mat.',
    highlight: {
      title: 'Walk-down service from Boulder Creek Elementary',
      body: "We'll pick up your child from Boulder Creek Elementary and walk them to class!",
    },
    footer: 'BJJ essentials · Play & movement · Life lessons',
    flyer: kidsFlyer,
    flyerHref: '/kids-bjj-flyer.jpg',
    flyerAlt: 'Ultimate BJJ Boulder Creek Kids BJJ flyer',
  },
]

function EventCard({ event }: { event: Event }) {
  return (
    <article
      id={event.id}
      aria-labelledby={`${event.id}-title`}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] scroll-mt-24 transition-all duration-300 ease-out hover:border-white/20 hover:shadow-[0_18px_50px_-20px_rgba(26,179,232,0.45)]"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#1ab3e8]" />
      <div className="grid md:grid-cols-[1fr_240px] gap-8 p-6 sm:p-8">
        <div>
          <p className="text-[#1ab3e8] text-xs font-bold tracking-[0.3em] uppercase mb-2">{event.tag}</p>
          <h2 id={`${event.id}-title`} className="text-3xl font-black tracking-tight text-white">
            {event.title}
          </h2>
          <p className="text-white/90 font-medium mt-1 mb-6">{event.subtitle}</p>

          <dl className="grid gap-2 text-sm mb-6">
            {event.details.map((d) => (
              <div key={d.label} className="flex gap-3">
                <dt className="text-gray-500 w-20 shrink-0">{d.label}</dt>
                <dd className="text-white">
                  {d.label === 'Where' ? (
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#1ab3e8] hover:underline">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <p className="text-gray-400 leading-relaxed">{event.body}</p>

          {event.highlight && (
            <div className="mt-6 p-4 rounded-xl bg-[#1ab3e8]/10">
              <p className="text-white text-sm font-semibold">{event.highlight.title}</p>
              <p className="text-gray-400 text-sm">{event.highlight.body}</p>
            </div>
          )}

          <p className="text-[#1ab3e8] text-xs tracking-[0.15em] uppercase mt-6">{event.footer}</p>
        </div>

        <a
          href={event.flyerHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-48 md:w-full mx-auto group"
          aria-label={`Open the ${event.title} flyer`}
        >
          <Image
            src={event.flyer}
            alt={event.flyerAlt}
            sizes="240px"
            className="w-full h-auto rounded-lg border border-white/10 group-hover:border-[#1ab3e8] transition-all duration-300 group-hover:scale-[1.02]"
          />
          <span className="block text-center text-gray-500 group-hover:text-[#1ab3e8] text-xs mt-2 transition-colors">
            View full flyer
          </span>
        </a>
      </div>
    </article>
  )
}

export default function Events() {
  return (
    <main className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
      <header className="mb-10">
        <p className="text-[#1ab3e8] text-xs tracking-[0.4em] uppercase mb-3">Events</p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Events &amp; Programs</h1>
        <p className="text-gray-400 mt-3">What&apos;s happening at Ultimate BJJ Boulder Creek.</p>
      </header>

      <div className="space-y-10">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/schedule"
          className="inline-block rounded-full border border-[#1ab3e8] text-[#1ab3e8] font-bold px-10 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#1ab3e8] hover:text-black transition-all duration-200"
        >
          View full schedule
        </Link>
      </div>
    </main>
  )
}
