/* eslint-disable prettier/prettier */
'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const MAX_DISPLAY = 3

export default function RecentPosts({ posts }) {
  return (
    <section className="w-full max-w-3xl py-5">
      <h2 className="mb-8 font-medium tracking-widest uppercase">Blogs</h2>

      <div className="grid gap-6">
        {posts.slice(0, MAX_DISPLAY).map((post) => (
          <article key={post.slug} className="group relative">
            <div className="absolute -inset-2 rounded-lg bg-gray-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-gray-800/30" />

            <Link href={`/blog/${post.slug}`} className="relative block rounded-lg">
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{post.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {post.summary.split(' ').slice(0, 10).join(' ')}...
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1 text-sm font-medium text-gray-500"
        >
          Browse all blogs
          <ArrowRightIcon className="h-4 w-4 opacity-50 transition-transform duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
        </Link>
      </div>
    </section>
  )
}
