import { FadePhoto } from '../components/PhotoWall'
import hawaii from '../../public/gustavo-hawaii.png'
import classPhoto from '../../public/gustavo-class-photo.png'
import joe from '../../public/gustavo-joe.png'
import competing from '../../public/gustavo-competing.png'
import uncleGus from '../../public/uncle-gus.png'
import shaka from '../../public/gutavo-shaka.png'
import pose from '../../public/gustavo-pose.png'

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-12">
      <p className="text-[#1ab3e8] text-xs tracking-[0.4em] uppercase mb-5">About</p>
      <h1 className="text-5xl font-black tracking-tight mb-10">Gustavo Froes</h1>

      <div className="space-y-10 text-gray-400 leading-relaxed text-lg">

        {/* Early life */}
        <p>
          Master Gustavo Froes was born in <span className="text-white font-semibold">1969 in Rio de Janeiro, Brazil</span>,
          where his journey in martial arts began at a very young age. He started training in Judo at just
          four years old at an academy called Acadepol, building a strong foundation in discipline and
          technique early in life.
        </p>

        <FadePhoto src={hawaii} alt="Young Gustavo Froes" rotate="rotate(-2deg)" heightClass="h-[512px]" />

        {/* Strauch Academy */}
        <p>
          In 1984, Gustavo transitioned into <span className="text-white font-semibold">Brazilian Jiu-Jitsu</span>,
          training at <span className="text-white font-semibold">Strauch Academy in Copacabana</span> under
          <span className="text-white font-semibold">Grandmaster Paulo Mauricio Strauch</span>. There, he developed his skills and deepened his understanding
          of the art, becoming part of a lineage rooted in traditional Brazilian Jiu-Jitsu.
        </p>

        <FadePhoto src={classPhoto} alt="Gustavo Froes at Strauch Academy" rotate="rotate(1.5deg)" widthClass="w-72 sm:w-96" heightClass="h-64 sm:h-80" />

        {/* Moving to the US */}
        <p>
          At the age of 22, in <span className="text-white font-semibold">December of 1992</span>, Gustavo
          moved to the United States, where he continued his training at
          <span className="text-white font-semibold"> Joe Moreira Jiu Jitsu de Brazil Academy</span>. His
          time there further refined his technique and expanded his experience within the growing
          Jiu-Jitsu community in America.
        </p>

        <FadePhoto src={joe} alt="Gustavo Froes with Joe Moreira" rotate="rotate(-1deg)" widthClass="w-72 sm:w-96" heightClass="h-60 sm:h-72" />

        {/* Competition */}
        <p>
          During his early years in the United States, Gustavo competed and trained alongside some of the
          most influential figures in the sport — sharpening his game on and off the mat.
        </p>

        <FadePhoto src={shaka} alt="Gustavo Froes celebrating" rotate="rotate(-1.5deg)" />

        <FadePhoto src={competing} alt="Gustavo Froes competing" rotate="rotate(2deg)" widthClass="w-72 sm:w-96" heightClass="h-60 sm:h-72" />

        {/* Santa Cruz */}
        <p>
          In <span className="text-white font-semibold">1994</span>, Gustavo brought his knowledge and
          passion to <span className="text-white font-semibold">Santa Cruz, California</span>, where he
          began his teaching journey and dedicated himself to sharing Brazilian Jiu-Jitsu with the local
          community. Since then, he has played a pivotal role in the growth of Jiu-Jitsu in Santa Cruz
          County, impacting generations of students through his instruction, leadership, and commitment
          to the art.
        </p>

        <FadePhoto src={uncleGus} alt="Gustavo Froes teaching in Santa Cruz" rotate="rotate(-1.5deg)" />

        {/* Coral belt */}
        <p>
          On <span className="text-white font-semibold">December 14, 2024</span>, Master Gustavo Froes
          was awarded his <span className="text-white font-semibold">Coral Belt</span> — a rare and
          prestigious honor that reflects a lifetime dedicated to Brazilian Jiu-Jitsu and the profound
          impact he has made on the art and his community.
        </p>

        <FadePhoto src={pose} alt="Gustavo Froes coral belt" rotate="rotate(1deg)" heightClass="h-[480px]" />

      </div>
    </main>
  )
}
