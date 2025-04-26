/* eslint-disable prettier/prettier */
'use client'

import Link from 'next/link'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  CheckIcon, // Import CheckIcon for the tick
  CopyIcon, // Import CopyIcon for the copy action
} from '@radix-ui/react-icons'
import { useState } from 'react'

export default function Contact() {
  const email = 'suvaranjan01@gmail.com' // Replace with your actual email
  const [emailCopied, setEmailCopied] = useState(false)

  // Explicitly typing the function
  const handleCopyEmail: () => void = () => {
    navigator.clipboard.writeText(email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <section className="py-10">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-4xl font-medium tracking-tight text-gray-900 dark:text-white">
            Let's connect
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I'm open to collaborations, freelance work, or just a friendly chat.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="space-y-8">
          {/* Email */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
            <p className="mt-1 flex items-center text-lg font-medium text-gray-900 dark:text-white">
              {email}
              <button
                onClick={handleCopyEmail}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleCopyEmail()
                }}
                aria-label="Copy email"
                className="ml-4 cursor-pointer text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {emailCopied ? (
                  <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <CopyIcon className="h-4 w-4" />
                )}
              </button>
            </p>
          </div>

          {/* Social */}
          <div className="group flex items-start gap-5">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Social</h3>
              <div className="mt-3 flex gap-5">
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <GitHubLogoIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <TwitterLogoIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <LinkedInLogoIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="border-t border-gray-100 pt-8 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Based in{' '}
            <span className="font-medium text-gray-700 dark:text-gray-300">[Your Location]</span> —
            usually working from local coffee shops.
          </p>
        </div>
      </div>
    </section>
  )
}
