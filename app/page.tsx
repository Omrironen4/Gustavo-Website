import Link from 'next/link'
import FlipCard from './components/FlipCard'

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-[calc(100vh-65px)] px-4 text-center"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, rgba(26,179,232,0.08) 0%, transparent 70%)',
      }}
    >
      <p className="text-[#1ab3e8] text-xs tracking-[0.4em] uppercase mb-5">
        7th Degree Coral Belt
      </p>

      <FlipCard />

      <p className="text-[#1ab3e8] text-xs tracking-[0.4em] uppercase mb-5">
        I am a diamond maker, take the pressure &#128160;
      </p>



      <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-3">
        GUSTAVO
        <br />
        FROES
      </h1>

      <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-12">Ultimate BJJ</p>

      <Link
        href="/schedule"
        className="border border-[#1ab3e8] text-[#1ab3e8] font-bold px-10 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#1ab3e8] hover:text-black transition-all duration-200"
      >
        View Schedule
      </Link>
    </main>
  )
}
