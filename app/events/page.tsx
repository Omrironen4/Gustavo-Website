import Image, { type StaticImageData } from 'next/image'
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
// Each slide gets its own accent color, set as --accent on the card
const ACCENTS = {
  blue: '#1ab3e8',
  yellow: '#f5c542',
  green: '#3ddc84',
  purple: '#c4a7ff',
}

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
  accent: string
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
    accent: ACCENTS.blue,
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
    accent: ACCENTS.yellow,
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
    accent: ACCENTS.green,
  },
]

const cardClass =
  'relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] scroll-mt-24 transition-all duration-300 ease-out hover:border-white/20 hover:shadow-[0_18px_50px_-20px_color-mix(in_srgb,var(--accent)_45%,transparent)]'

// On phones the image height is sized from the viewport so each card fits one screen;
// `phoneHeight` leaves room for the text above it
function FlyerLink({
  href,
  image,
  alt,
  label,
  cta,
  phoneHeight = 'h-[max(9rem,calc(100svh-28.5rem))]',
}: {
  href: string
  image: StaticImageData
  alt: string
  label: string
  cta: string
  phoneHeight?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-auto md:mt-0 md:self-start flex flex-col items-center md:block"
      aria-label={`Open the ${label}`}
    >
      <Image
        src={image}
        alt={alt}
        sizes="(min-width: 768px) 240px, 60vw"
        className={`w-auto ${phoneHeight} md:w-full md:h-auto rounded-lg border border-white/10 group-hover:border-[var(--accent)] transition-all duration-300 group-hover:scale-[1.02]`}
      />
      <span className="block text-center text-[var(--accent)] md:text-gray-500 group-hover:text-[var(--accent)] text-xs font-semibold md:font-normal tracking-[0.15em] md:tracking-normal uppercase md:normal-case mt-3 md:mt-2 transition-colors">
        {cta}
        <span aria-hidden="true" className="md:hidden"> →</span>
      </span>
    </a>
  )
}

function EventCard({ event }: { event: Event }) {
  return (
    <article
      id={event.id}
      aria-labelledby={`${event.id}-title`}
      className={cardClass}
      style={{ ['--accent' as string]: event.accent }}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" />
      <div className="flex flex-col h-full md:grid md:grid-cols-[1fr_240px] gap-4 md:gap-8 p-5 md:p-6">
        <div>
          <p className="text-[var(--accent)] text-xs font-bold tracking-[0.3em] uppercase mb-2">{event.tag}</p>
          <h2 id={`${event.id}-title`} className="text-xl md:text-2xl font-black tracking-tight text-white">
            {event.title}
          </h2>
          <p className="text-white/90 text-sm md:text-base font-medium mt-1 md:mb-4">{event.subtitle}</p>

          {/* On phones the flyer carries the details, so the card fits one screen */}
          <dl className="hidden md:grid gap-1.5 text-sm mb-4">
            {event.details.map((d) => (
              <div key={d.label} className="flex gap-3">
                <dt className="text-gray-500 w-28 shrink-0">{d.label}</dt>
                <dd className="text-white">
                  {d.address ? (
                    <a href={mapsUrl(d.address)} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <p className="hidden md:block text-gray-400 text-sm leading-relaxed">{event.body}</p>

          {event.highlight && (
            <p className="hidden md:block mt-4 p-3 rounded-xl bg-[var(--accent)]/10 text-gray-400 text-sm">
              <span className="text-white font-semibold">{event.highlight.title}.</span> {event.highlight.body}
            </p>
          )}

          <p className="hidden md:block text-[var(--accent)] text-xs tracking-[0.15em] uppercase mt-4">{event.footer}</p>
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
              <td key={i} className={`py-1.5 md:py-2 ${i === 0 ? 'text-white' : 'text-right text-gray-300 tabular-nums'}`}>
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
    <section
      id="private-lessons"
      aria-labelledby="private-lessons-title"
      className={cardClass}
      style={{ ['--accent' as string]: ACCENTS.purple }}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" />
      <div className="flex flex-col h-full md:grid md:grid-cols-[1fr_240px] gap-4 md:gap-8 p-5 md:p-6">
        <div>
          <p className="text-[var(--accent)] text-xs font-bold tracking-[0.3em] uppercase mb-2">Private Lessons</p>
          <h2 id="private-lessons-title" className="text-lg md:text-2xl font-black tracking-tight text-white">
            One-on-one with Master Gustavo
          </h2>
          <p className="hidden md:block text-white/90 font-medium mt-1 mb-4">
            Personalized instruction tailored to your goals and skill level.
          </p>

          <p className="md:hidden text-white/90 text-sm font-medium mt-1">Adults from $100 · Kids 7+ from $50</p>

          {/* On phones the PDF carries the pricing detail, so the card fits one screen */}
          <div className="hidden md:grid grid-cols-[2fr_3fr] gap-6">
            <div>
              <h3 className="text-white text-sm md:text-base font-bold">
                Adults <span className="text-gray-500 font-normal">· 60 min</span>
              </h3>
              <PriceTable
                headers={['Option', 'Price']}
                rows={[
                  { cells: ['Single session', '$120'] },
                  { cells: ['4-pack', '$400'] },
                ]}
              />
            </div>

            <div>
              <h3 className="text-white text-sm md:text-base font-bold">
                Kids, ages 7+ <span className="text-gray-500 font-normal">· 60 min</span>
              </h3>
              <PriceTable
                headers={['Kids', 'Lesson', 'Each']}
                rows={[
                  { cells: ['1 child', '$70', '$70'] },
                  { cells: ['2 children', '$120', '$60'] },
                  { cells: ['3 children', '$150', '$50'] },
                ]}
              />
            </div>
          </div>

          <p className="hidden md:block text-gray-500 text-xs mt-3">
            Billed monthly · By appointment · Felton &amp; Boulder Creek · Full details in the PDF
          </p>

          <div className="mt-3 md:mt-4 md:flex md:items-center md:gap-4">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent('Private lesson inquiry')}`}
              className="shrink-0 inline-block text-center rounded-full bg-[var(--accent)] text-black font-bold px-5 md:px-8 py-2 md:py-3 text-[11px] md:text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-200"
            >
              Book a private lesson
            </a>
            <p className="hidden md:block text-gray-500 text-xs">
              Or email{' '}
              <a href={`mailto:${EMAIL}`} className="text-[var(--accent)] hover:underline">
                {EMAIL}
              </a>{' '}
              to discuss availability, scheduling, and lesson goals.
            </p>
          </div>
        </div>

        <FlyerLink
          href="/ultimate-bjj-private-lessons.pdf"
          image={privateLessonsPreview}
          alt="Ultimate BJJ private lessons pricing sheet"
          label="private lessons pricing PDF"
          cta="View full PDF"
          phoneHeight="h-[max(9rem,calc(100svh-31.5rem))]"
        />
      </div>
    </section>
  )
}

export default function Events() {
  return (
    <main className="max-w-4xl mx-auto px-5 sm:px-8 py-4 md:py-6">
      <header className="mb-4 md:mb-5">
        <h1 className="text-2xl md:text-4xl font-black tracking-tight text-white">Programs &amp; Events</h1>
      </header>

      <SwipeCarousel labels={[...events.map((e) => e.title), 'Private Lessons']}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        <PrivateLessons />
      </SwipeCarousel>
    </main>
  )
}
