import InstagramFeed from '../components/InstagramFeed'
import { getInstagramPosts } from '../lib/instagram'

export const metadata = {
  title: 'Videos',
  description: 'The latest technique and self-defense videos from Master Gustavo Froes and Ultimate BJJ on Instagram (@ubjj_community).',
}

export default async function Videos() {
  const posts = await getInstagramPosts()

  return (
    <main className="max-w-3xl mx-auto px-5 sm:px-8 py-4 md:py-8">
      {/* On shorter desktop screens the grid narrows so the page still fits above the footer */}
      <div className="md:mx-auto md:w-[min(100%,calc(150svh-37.5rem))]">
        <p className="text-[#1ab3e8] text-xs tracking-[0.4em] uppercase mb-2 md:mb-4">Instagram</p>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 md:mb-6">Latest Videos</h1>
        <InstagramFeed posts={posts} />
      </div>
    </main>
  )
}
