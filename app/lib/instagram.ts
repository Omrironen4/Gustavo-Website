// Latest posts from @ubjj_community, via a Behold (behold.so) JSON feed connected to the account.
const FEED_URL = 'https://feeds.behold.so/2MiyRyASwRef1IPNbx2D'
export const INSTAGRAM_URL = 'https://www.instagram.com/ubjj_community/'

export type InstagramPost = {
  id: string
  permalink: string
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  mediaUrl: string
  thumbnailUrl?: string
  prunedCaption?: string
  sizes: { medium: { mediaUrl: string }; large: { mediaUrl: string } }
}

// Refetched at most once an hour; the video links Instagram hands out expire after a few days.
export async function getInstagramPosts(): Promise<InstagramPost[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const feed = await res.json()
    return feed.posts ?? []
  } catch {
    return []
  }
}
