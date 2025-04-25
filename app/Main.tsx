'use client' // If you're using the app directory

import RecentPosts from '@/components/RecentPosts'
import Image from 'next/image'
import Link from 'next/link'
import Projects from '@/components/Projects'
// Constants
const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <div className="mx-auto max-w-3xl">
      <Profile />
      <RecentPosts posts={posts} />
      <Projects />
    </div>
  )
}

// --- Profile Section ---
function Profile() {
  return (
    <div className="space-y-4 py-10">
      {/* Avatar */}
      <div className="relative h-16 w-16 rounded-md">
        <Image
          src="https://github.com/shadcn.png"
          alt="Suvaranjan Avatar"
          width={64}
          height={64}
          className="rounded-md object-cover"
        />
        <span className="absolute right-0 bottom-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white dark:ring-gray-900" />
      </div>

      {/* Name + Role */}
      <div className="space-y-1">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Suvaranjan Pradhan
        </h1>
        <p className="text-gray-700 dark:text-gray-400">Full Stack Engineer</p>
      </div>

      {/* About */}
      <p className="max-w-prose text-gray-600 dark:text-gray-300">
        I build Full Stack web apps that feel smooth and a bit magical. I care deeply about the
        small details, and I love creating things that make people feel something.
      </p>

      <SocialLinks />
    </div>
  )
}

// --- Social Links ---
function SocialLinks() {
  return (
    <div className="flex gap-1 text-sm tracking-wider text-gray-600 uppercase dark:text-gray-400">
      <Link
        href="mailto:suvaranjan01@gmail.com"
        className="hover:text-primary-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        EMAIL
      </Link>
      <span className="px-1">/</span>
      <Link
        href="https://github.com/suvaranjan"
        className="hover:text-primary-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        GITHUB
      </Link>
      <span className="px-1">/</span>
      <Link
        href="https://twitter.com/suvaranjan"
        className="hover:text-primary-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        TWITTER
      </Link>
    </div>
  )
}

// // --- Recent Posts Section ---
// function RecentPosts({ posts }) {
//   return (
//     <section className="space-y-8">
//       <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Recent Blogs</h2>

//       <ul className="space-y-8">
//         {posts.slice(0, MAX_DISPLAY).map((post) => (
//           <li key={post.slug} className="border-b border-gray-200 pb-4 dark:border-gray-700">
//             <Link href={`/blog/${post.slug}`}>
//               <h3 className="text-lg font-semibold text-gray-900 hover:underline dark:text-white">
//                 {post.title}
//               </h3>
//             </Link>
//             <p className="mt-2 text-gray-600 dark:text-gray-400">
//               {getTrimmedSummary(post.summary)}{' '}
//               <Link
//                 href={`/blog/${post.slug}`}
//                 className="text-primary-500 hover:underline"
//                 aria-label={`Read more: "${post.title}"`}
//               >
//                 read more →
//               </Link>
//             </p>
//           </li>
//         ))}
//       </ul>

//       {posts.length > MAX_DISPLAY && (
//         <div>
//           <Link href="/blog" className="text-primary-500 hover:underline" aria-label="All posts">
//             View All Posts →
//           </Link>
//         </div>
//       )}
//     </section>
//   )
// }

// // --- Helper: Trim summary to 15 words ---
// function getTrimmedSummary(summary: string, wordCount = 15) {
//   const words = summary.trim().split(/\s+/)
//   return words.length > wordCount ? words.slice(0, wordCount).join(' ') + '...' : summary
// }
