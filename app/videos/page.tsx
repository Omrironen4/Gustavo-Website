import InstagramFeed from '../components/InstagramFeed'
import { getInstagramPosts } from '../lib/instagram'

export const metadata = {
  title: 'Videos',
  description: 'The latest technique and self-defense videos from Master Gustavo Froes and Ultimate BJJ on Instagram (@ubjj_community).',
}

export default async function Videos() {
  const posts = await getInstagramPosts()

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-8 py-6 sm:py-12">
      <p className="text-[#1ab3e8] text-xs tracking-[0.4em] uppercase mb-3 sm:mb-5">Instagram</p>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-5 sm:mb-8">Latest Videos</h1>
      <InstagramFeed posts={posts} />
    </main>
  )
}
