import PhotoWall from '../components/PhotoWall'

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-24">
      <p className="text-[#1ab3e8] text-xs tracking-[0.4em] uppercase mb-5">About</p>
      <h1 className="text-5xl font-black tracking-tight mb-10">Gustavo Froes</h1>
      <div className="space-y-5 text-gray-400 leading-relaxed text-lg">
        <p>
          Gustavo Froes holds the rank of <span className="text-white font-semibold">7th Degree Coral Belt</span> in
          Brazilian Jiu-Jitsu — one of the highest honors in the art, awarded to those who have
          dedicated their lives to the practice and teaching of BJJ.
        </p>
        <p>
          Under the banner of <span className="text-white font-semibold">Ultimate BJJ</span>, Gustavo teaches
          classes throughout the <span className="text-white font-semibold">Santa Cruz Mountains</span>, offering programs for kids, teens, women,
          and adults at two dedicated academy locations.
        </p>
        <p>
          His classes emphasize technical precision, discipline, and a welcoming environment for
          practitioners of all experience levels.
        </p>
      </div>

      <PhotoWall />
    </main>
  )
}
