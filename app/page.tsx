import Link from 'next/link'
import FlipCard from './components/FlipCard'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Ultimate BJJ',
  description: 'Brazilian Jiu-Jitsu classes in the Santa Cruz Mountains with Master Gustavo Froes — 7th Degree Coral Belt.',
  url: 'https://ultimatebjj.vercel.app',
  image: 'https://ultimatebjj.vercel.app/gustavo-logo.png',
  founder: {
    '@type': 'Person',
    name: 'Gustavo Froes',
    jobTitle: '7th Degree Coral Belt, Brazilian Jiu-Jitsu',
  },
  location: [
    {
      '@type': 'Place',
      name: 'Santa Cruz Martial Arts Academy',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6116 CA-9',
        addressLocality: 'Felton',
        addressRegion: 'CA',
        postalCode: '95018',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Lone Wolf Kenpo Academy',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '13089 Highway 9',
        addressLocality: 'Boulder Creek',
        addressRegion: 'CA',
        postalCode: '95006',
        addressCountry: 'US',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="flex flex-col items-center justify-center min-h-[calc(100vh-210px)] px-4 md:py-12 text-center"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(26,179,232,0.08) 0%, transparent 70%)',
        }}
      >
         <h1 className="text-[#1ab3e8] text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase mb-3 md:mb-4 mt-3">
          Gustavo Froes
        </h1>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg tracking-[0.3em] uppercase mb-5 md:mb-7">
          7th Degree Coral Belt
        </p>

        <FlipCard />

        <p className="text-[#1ab3e8] text-sm md:text-lg lg:text-xl tracking-[0.1em] uppercase leading-relaxed mb-8 md:mb-10">
          &ldquo;I am a diamond maker
          <br />
          take the pressure&rdquo; <span className="text-lg md:text-2xl">💎</span>
        </p>


        <Link
          href="/schedule"
          className="border border-[#1ab3e8] text-[#1ab3e8] font-bold px-10 py-3 md:px-12 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-[#1ab3e8] hover:text-black transition-all duration-200"
        >
          View Schedule
        </Link>

      </main>
    </>
  )
}
