/* eslint-disable prettier/prettier */

import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export function BlogNav() {
  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <nav className="flex items-center justify-between gap-2 px-4">
        {/* Tags Link */}
        <Link
          href="/tags"
          className="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-black dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white"
        >
          Tags
        </Link>

        {/* Search */}
        <SearchButtonWrapper aria-label="Search">
          <div className="relative flex cursor-pointer items-center rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-black sm:w-30 md:w-48 lg:w-64 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white">
            <MagnifyingGlassIcon className="mr-2 h-4 w-4 sm:hidden" />

            {/* Ensure the 'Search' placeholder is always visible */}
            <span className="flex-1 truncate text-left">Search</span>

            {/* ⌘+K shortcut - hidden on small screens */}
            <div className="ml-2 hidden items-center gap-0.5 rounded bg-teal-500 px-1.5 py-0.5 text-xs text-white sm:flex dark:bg-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              <span className="ml-0.5">K</span>
            </div>
          </div>
        </SearchButtonWrapper>
      </nav>
    )
  }

  return null
}
