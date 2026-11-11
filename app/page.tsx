import Link from 'next/link'
import { Caveat } from 'next/font/google'
import FlipCard from './components/FlipCard'
import { LatestVideos } from './components/InstagramFeed'
import { getInstagramPosts } from './lib/instagram'

// Handwritten font for the "diamond maker" quote
const script = Caveat({ subsets: ['latin'], weight: '600' })
const scriptBold = Caveat({ subsets: ['latin'], weight: '700' })

const SITE = 'https://ultimatebjj.vercel.app'

const hours = (days: string[], opens: string, closes: string) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: days,
  opens,
  closes,
})

// One organization with a local business entry per academy, so Google can tie
// "BJJ Felton" / "BJJ Boulder Creek" style searches to a real address
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SportsOrganization',
      '@id': `${SITE}/#organization`,
      name: 'Ultimate BJJ',
      alternateName: ['UBJJ', 'UBJJ SC', 'UBJJ Santa Cruz', 'Ultimate Brazilian Jiu-Jitsu', 'Ultimate Jiu-Jitsu', 'Gustavo Froes Jiu-Jitsu'],
      description: 'Brazilian Jiu-Jitsu school in Santa Cruz County, CA, with classes in Felton and Boulder Creek led by Master Gustavo Froes — 7th Degree Coral Belt.',
      sport: 'Brazilian Jiu-Jitsu',
      url: SITE,
      logo: `${SITE}/gustavo-logo.png`,
      image: `${SITE}/gustavo-logo.png`,
      sameAs: ['https://www.instagram.com/ubjj_community/'],
      areaServed: ['Santa Cruz, CA', 'Felton, CA', 'Boulder Creek, CA', 'Ben Lomond, CA', 'Scotts Valley, CA', 'Santa Cruz County, CA'],
      founder: {
        '@type': 'Person',
        '@id': `${SITE}/#gustavo-froes`,
        name: 'Gustavo Froes',
        url: SITE,
        jobTitle: '7th Degree Coral Belt, Brazilian Jiu-Jitsu',
      },
    },
    {
      '@type': 'SportsActivityLocation',
      '@id': `${SITE}/#felton`,
      name: 'Ultimate BJJ Felton',
      alternateName: ['UBJJ Felton', 'Ultimate BJJ at Santa Cruz Martial Arts Academy'],
      description: 'Brazilian Jiu-Jitsu classes for kids, teens, and adults in Felton, CA (Santa Cruz) with Master Gustavo Froes.',
      url: `${SITE}/schedule`,
      image: `${SITE}/gustavo-logo.png`,
      parentOrganization: { '@id': `${SITE}/#organization` },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6116 CA-9',
        addressLocality: 'Felton',
        addressRegion: 'CA',
        postalCode: '95018',
        addressCountry: 'US',
      },
      openingHoursSpecification: [
        hours(['Tuesday', 'Thursday'], '15:30', '19:00'),
        hours(['Saturday'], '09:00', '10:00'),
      ],
    },
    {
      '@type': 'SportsActivityLocation',
      '@id': `${SITE}/#boulder-creek`,
      name: 'Ultimate BJJ Boulder Creek',
      alternateName: ['UBJJ Boulder Creek', 'Ultimate BJJ at Lone Wolf Kenpo Academy'],
      description: 'Brazilian Jiu-Jitsu classes for kids, teens, and adults in Boulder Creek, CA (Santa Cruz Mountains) with Master Gustavo Froes.',
      url: `${SITE}/schedule`,
      image: `${SITE}/gustavo-logo.png`,
      parentOrganization: { '@id': `${SITE}/#organization` },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '13089 Highway 9',
        addressLocality: 'Boulder Creek',
        addressRegion: 'CA',
        postalCode: '95006',
        addressCountry: 'US',
      },
      openingHoursSpecification: [
        hours(['Monday'], '15:15', '16:00'),
        hours(['Wednesday'], '18:30', '19:30'),
        hours(['Friday'], '15:30', '16:30'),
        hours(['Friday'], '18:30', '19:30'),
      ],
    },
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ultimate BJJ',
  alternateName: ['UBJJ', 'UBJJ SC', 'UBJJ Santa Cruz', 'Ultimate Brazilian Jiu-Jitsu', 'Ultimate Jiu-Jitsu', 'Gustavo Froes Jiu-Jitsu'],
  url: `${SITE}/`,
  publisher: { '@id': `${SITE}/#organization` },
}

export default async function Home() {
  const posts = await getInstagramPosts()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <main
        className="flex flex-col items-center justify-center min-h-[calc(100svh-166px)] px-4 md:pt-6 text-center"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(26,179,232,0.08) 0%, transparent 70%)',
        }}
      >
        {/* Main content takes the free space, centered; Latest Videos sits at the bottom, just above the footer */}
        <div className="flex-1 flex flex-col items-center justify-center">
         <h1 className="text-[#1ab3e8] text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase mb-3 md:mb-4 mt-3">
          Gustavo Froes
        </h1>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg tracking-[0.3em] uppercase mb-5 md:mb-5">
          7th Degree Coral Belt
        </p>

        <FlipCard />

        <p className={`${script.className} text-[#1ab3e8] text-[clamp(1.05rem,5.4vw,1.6rem)] md:text-4xl whitespace-nowrap leading-relaxed mb-7 md:mb-7`}>
          &ldquo;I am a diamond maker, take the pressure&rdquo; <span className="inline-block ml-1 text-[0.8em]">💎</span>
        </p>


        <Link
          href="/schedule"
          className={`${scriptBold.className} group inline-flex items-center gap-2 md:gap-3 text-[#1ab3e8] text-3xl md:text-4xl leading-none tracking-[0.02em] [text-shadow:0_0_18px_rgba(26,179,232,0.55)] hover:text-white transition-colors duration-200`}
        >
          View Schedule
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </Link>
        </div>

        <LatestVideos posts={posts} />

      </main>
    </>
  )
}
