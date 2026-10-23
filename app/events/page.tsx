import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import SwipeCarousel from '../components/SwipeCarousel'
import firstFridaysFlyer from '../../public/first-fridays-flyer.jpg'
import kidsFlyer from '../../public/kids-bjj-flyer.jpg'
import feltonBoulderCreekFlyer from '../../public/felton-boulder-creek-flyer.jpg'
import privateLessonsPreview from '../../public/private-lessons-preview.jpg'

export const metadata = {
  title: 'Programs & Events',
  description:
    'Ultimate BJJ classes in Felton and Boulder Creek, First Fridays free drop-in BJJ classes, Kids BJJ with walk-down service from Boulder Creek Elementary, and private lessons with Master Gustavo Froes.',
}

const BOULDER_CREEK = '13089 Highway 9, Boulder Creek, CA 95006'
const FELTON = '6116 Highway 9, Felton, CA 95018'
const mapsUrl = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

type Detail = { label: string; value: string; address?: string }

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
    id: 'felton-boulder-creek',
    tag: 'Two Locations',
    title: 'Felton & Boulder Creek',
    subtitle: 'Same community. Same values.',
    details: [
      { label: 'Felton', value: '6116 Highway 9, Felton', address: FELTON },
      { label: 'Boulder Creek', value: '13089 Highway 9, Boulder Creek', address: BOULDER_CREEK },
      { label: 'Classes', value: 'Kids, teens & adults at both locations' },
    ],
    body:
      'All levels welcome. Build real skills, strength, coordination and problem-solving in a safe, inclusive community where everyone belongs, and gain the resilience, focus and self-confidence that Brazilian Jiu-Jitsu builds for life.',
    highlight: {
      title: 'Walk-down service from Boulder Creek Elementary',
      body: 'Provided for kids classes in Boulder Creek.',
    },
    footer: 'Skills for the mat · Confidence for life',
    flyer: feltonBoulderCreekFlyer,
    flyerHref: '/felton-boulder-creek-flyer.jpg',
    flyerAlt: 'Ultimate BJJ Felton and Boulder Creek flyer',
  },
  {
    id: 'first-fridays',
    tag: 'Community Event',
    title: 'Boulder Creek First Fridays',
    subtitle: 'Free 30-minute drop-in classes',
    details: [
      { label: 'When', value: 'First Friday of the month, April – December' },
      { label: 'Time', value: '5:00 – 5:30 pm' },
      { label: 'Where', value: '13089 Highway 9, Boulder Creek', address: BOULDER_CREEK },
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
      { label: 'Where', value: '13089 Highway 9, Boulder Creek', address: BOULDER_CREEK },
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

const cardClass =
  'relative h-full md:h-auto overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] scroll-mt-24 transition-all duration-300 ease-out hover:border-white/20 hover:shadow-[0_18px_50px_-20px_rgba(26,179,232,0.45)]'

function FlyerLink({ href, image, alt, label, cta }: { href: string; image: StaticImageData; alt: string; label: string; cta: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-auto md:mt-0 md:self-start flex items-center gap-4 md:block"
      aria-label={`Open the ${label}`}
    >
      <Image
        src={image}
        alt={alt}
        sizes="(min-width: 768px) 240px, 96px"
        className="w-20 md:w-full shrink-0 h-auto rounded-lg border border-white/10 group-hover:border-[#1ab3e8] transition-all duration-300 group-hover:scale-[1.02]"
      />
      <span className="block md:text-center text-[#1ab3e8] md:text-gray-500 group-hover:text-[#1ab3e8] text-xs font-semibold md:font-normal tracking-[0.15em] md:tracking-normal uppercase md:normal-case md:mt-2 transition-colors">
        {cta}
        <span aria-hidden="true" className="md:hidden"> →</span>
      </span>
    </a>
  )
}

function EventCard({ event }: { event: Event }) {
  return (
    <article id={event.id} aria-labelledby={`${event.id}-title`} className={cardClass}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#1ab3e8]" />
      <div className="flex flex-col h-full md:grid md:grid-cols-[1fr_240px] gap-5 md:gap-8 p-5 sm:p-8">
        <div>
          <p className="text-[#1ab3e8] text-xs font-bold tracking-[0.3em] uppercase mb-2">{event.tag}</p>
          <h2 id={`${event.id}-title`} className="text-2xl md:text-3xl font-black tracking-tight text-white">
            {event.title}
          </h2>
          <p className="text-white/90 font-medium mt-1 mb-4 md:mb-6">{event.subtitle}</p>

          <dl className="grid gap-2 text-sm mb-4 md:mb-6">
            {event.details.map((d) => (
              <div key={d.label} className="flex gap-3">
                <dt className="text-gray-500 w-24 md:w-28 shrink-0">{d.label}</dt>
                <dd className="text-white">
                  {d.address ? (
                    <a href={mapsUrl(d.address)} target="_blank" rel="noopener noreferrer" className="text-[#1ab3e8] hover:underline">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">{event.body}</p>

          {event.highlight && (
            <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-xl bg-[#1ab3e8]/10">
              <p className="text-white text-sm font-semibold">{event.highlight.title}</p>
              <p className="text-gray-400 text-sm">{event.highlight.body}</p>
            </div>
          )}

          <p className="hidden md:block text-[#1ab3e8] text-xs tracking-[0.15em] uppercase mt-6">{event.footer}</p>
        </div>

        <FlyerLink
          href={event.flyerHref}
          image={event.flyer}
          alt={event.flyerAlt}
          label={`${event.title} flyer`}
          cta="View full flyer"
        />
      </div>
    </article>
  )
}

const EMAIL = 'ultimatebjjfroes@gmail.com'

type PriceRow = { cells: string[] }

function PriceTable({ headers, rows }: { headers: string[]; rows: PriceRow[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-white/10">
          {headers.map((h, i) => (
            <th
              key={h}
              scope="col"
              className={`py-1.5 md:py-2 font-medium text-gray-500 ${i === 0 ? 'text-left' : 'text-right'}`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.cells[0]} className="border-b border-white/5 last:border-0">
            {row.cells.map((c, i) => (
              <td key={i} className={`py-1.5 md:py-2.5 ${i === 0 ? 'text-white' : 'text-right text-gray-300 tabular-nums'}`}>
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function PrivateLessons() {
  return (
    <section id="private-lessons" aria-labelledby="private-lessons-title" className={cardClass}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#1ab3e8]" />
      <div className="flex flex-col h-full md:grid md:grid-cols-[1fr_240px] gap-5 md:gap-8 p-5 sm:p-8">
        <div>
          <p className="text-[#1ab3e8] text-xs font-bold tracking-[0.3em] uppercase mb-2">Private Lessons</p>
          <h2 id="private-lessons-title" className="text-2xl md:text-3xl font-black tracking-tight text-white mb-4 md:mb-0">
            Train one-on-one with Master Gustavo
          </h2>
          <p className="hidden md:block text-white/90 font-medium mt-1 mb-6">
            Personalized instruction tailored to your goals and skill level.
          </p>

          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-white text-sm md:text-base font-bold">
                Adults <span className="text-gray-500 font-normal">· 60 min</span>
              </h3>
              <PriceTable
                headers={['Option', 'Price']}
                rows={[
                  { cells: ['Single session', '$120'] },
                  { cells: ['4-session bundle', '$400 ($100 each)'] },
                ]}
              />
              <p className="hidden md:block text-gray-500 text-xs mt-2">
                Bundles are paid in full upfront and valid for 2 months from purchase.
              </p>
            </div>

            <div>
              <h3 className="text-white text-sm md:text-base font-bold">
                Kids, ages 7+ <span className="text-gray-500 font-normal">· 60 min</span>
              </h3>
              <PriceTable
                headers={['Students', 'Per lesson', 'Per child']}
                rows={[
                  { cells: ['1 child', '$70', '$70'] },
                  { cells: ['2 children', '$120', '$60'] },
                  { cells: ['3 children', '$150', '$50'] },
                ]}
              />
              <p className="hidden md:block text-gray-500 text-xs mt-2">
                Siblings and friends are welcome to share a lesson. Groups of 4 or more may move to a standard group
                class. Not available for the Little Kids (ages 4–6) group.
              </p>
            </div>
          </div>

          <div className="hidden md:block mt-6 p-4 rounded-xl bg-[#1ab3e8]/10">
            <p className="text-white text-sm font-semibold">Payment &amp; booking</p>
            <ul className="text-gray-400 text-sm mt-1 space-y-1">
              <li>Billed monthly: payment is due on the 1st for all private lessons scheduled that month.</li>
              <li>All private lessons are by appointment and subject to instructor availability.</li>
              <li>Available at our Felton and Boulder Creek locations.</li>
            </ul>
          </div>

          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent('Private lesson inquiry')}`}
            className="mt-5 md:mt-6 block md:inline-block text-center rounded-full bg-[#1ab3e8] text-black font-bold px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-200"
          >
            Book a private lesson
          </a>
          <p className="hidden md:block text-gray-500 text-xs mt-3">
            Or email{' '}
            <a href={`mailto:${EMAIL}`} className="text-[#1ab3e8] hover:underline">
              {EMAIL}
            </a>{' '}
            to discuss availability, scheduling, and lesson goals.
          </p>
        </div>

        <FlyerLink
          href="/ultimate-bjj-private-lessons.pdf"
          image={privateLessonsPreview}
          alt="Ultimate BJJ private lessons pricing sheet"
          label="private lessons pricing PDF"
          cta="View full PDF"
        />
      </div>
    </section>
  )
}

export default function Events() {
  return (
    <main className="max-w-4xl mx-auto px-5 sm:px-8 py-6 md:py-12">
      <header className="mb-5 md:mb-10">
        <p className="hidden md:block text-[#1ab3e8] text-xs tracking-[0.4em] uppercase mb-3">Programs &amp; Events</p>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Programs &amp; Events</h1>
        <p className="text-gray-400 text-sm md:text-base mt-1 md:mt-3">
          What&apos;s happening in Felton and Boulder Creek.
        </p>
      </header>

      <SwipeCarousel labels={[...events.map((e) => e.title), 'Private Lessons']}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        <PrivateLessons />
      </SwipeCarousel>

      <div className="mt-8 md:mt-12 text-center">
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
