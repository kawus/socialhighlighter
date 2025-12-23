"use client";

const mockPosts = [
  {
    id: 1,
    username: "sunday_league_legend",
    avatar: "SL",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop",
    caption: "Top bins from 25 yards out 🎯 Finally got it on video!",
    likes: 847,
    comments: 42,
    timeAgo: "3h",
  },
  {
    id: 2,
    username: "grassroots_fc",
    avatar: "GF",
    imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=400&fit=crop",
    caption: "Team goal of the season. One touch football 👏",
    likes: 1243,
    comments: 89,
    timeAgo: "5h",
  },
  {
    id: 3,
    username: "keeper_kings",
    avatar: "KK",
    imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=400&fit=crop",
    caption: "Double save. They thought it was in twice 🧤",
    likes: 562,
    comments: 28,
    timeAgo: "1d",
  },
];

export default function SocialProof() {
  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-6">
            While You&apos;re Still at the{" "}
            <span className="text-accent-primary">Pitch</span>
          </h2>
          <p className="hidden md:block max-w-2xl mx-auto text-lg text-text-secondary">
            Share while the hype is alive. Your best moments, getting the recognition they deserve.
          </p>
        </div>

        {/* Mock Instagram feed - horizontal scroll on mobile, grid on desktop */}
        <p className="text-xs text-text-muted text-center mb-4">Examples</p>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 max-w-5xl mx-auto -mx-6 px-6 md:mx-auto md:px-0">
          {mockPosts.map((post, index) => (
            <div
              key={post.id}
              className="card overflow-hidden animate-fade-up flex-shrink-0 w-[70vw] snap-center md:w-auto md:flex-shrink"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Post header */}
              <div className="flex items-center gap-3 p-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm">{post.username}</p>
                  <p className="text-xs text-text-muted">{post.timeAgo} ago</p>
                </div>
                <svg className="w-5 h-5 text-text-muted" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>

              {/* Post image */}
              <div className="aspect-square bg-bg-tertiary relative overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt="Football highlight"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Veo watermark */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/50 backdrop-blur-sm">
                  <span className="text-xs font-bold text-white/80">VEO</span>
                </div>
              </div>

              {/* Post actions */}
              <div className="p-4">
                <div className="flex items-center gap-4 mb-3">
                  <button className="text-energy-hot">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                  <button className="text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <button className="text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>

                {/* Likes */}
                <p className="font-bold text-white text-sm mb-2">
                  {post.likes.toLocaleString()} likes
                </p>

                {/* Caption */}
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-white">{post.username}</span>{" "}
                  {post.caption}
                </p>

                {/* Comments */}
                <p className="text-xs text-text-muted mt-2">
                  View all {post.comments} comments
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Powered by Veo credibility */}
        <div className="mt-10 md:mt-16 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 p-6 md:p-8 rounded-2xl bg-bg-tertiary/50 border border-white/5">
            {/* Veo logo placeholder */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-xl font-black text-white">V</span>
              </div>
              <div>
                <p className="font-bold text-white">Built on Veo</p>
                <p className="text-sm text-text-secondary">Match analysis technology</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div className="md:hidden w-full h-px bg-white/10" />

            {/* Stats */}
            <div className="flex items-center gap-8 md:gap-12 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">60s</p>
                <p className="text-xs text-text-muted">Delivery</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">50K+</p>
                <p className="text-xs text-text-muted">Veo cameras worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
