/* eslint-disable prettier/prettier */
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const MAX_DISPLAY = 3

export default function RecentPosts({ posts }) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)

  return (
    <section className="w-full max-w-3xl py-8">
      <div className="mb-8">
        <h2 className="text-xl font-normal text-gray-900 dark:text-white">Writtings</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Ideas, experiments, and reflections
        </p>
      </div>

      <div className="grid gap-6">
        {posts.slice(0, MAX_DISPLAY).map((post) => (
          <article
            key={post.slug}
            className="group relative"
            onMouseEnter={() => setHoveredSlug(post.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            <div className="absolute -inset-2 rounded-lg bg-gray-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-gray-800/30" />

            <Link href={`/blog/${post.slug}`} className="relative block rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                    {post.summary.split(' ').slice(0, 10).join(' ')}...
                  </p>
                </div>
                <div
                  className={`mt-1 ml-4 transition-transform ${hoveredSlug === post.slug ? 'translate-x-0' : '-translate-x-1'} text-gray-400 dark:text-gray-500`}
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          Browse all articles
          <ArrowRightIcon className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
