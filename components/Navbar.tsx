/* eslint-disable prettier/prettier */
'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

import {
  HomeIcon,
  MoonIcon,
  SunIcon,
  ReaderIcon,
  ArrowTopRightIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const isDarkMode = theme === 'dark'
  const themeAriaLabel = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'

  const navItems = [
    {
      href: '/',
      icon: HomeIcon,
      label: 'Home',
      isActive: pathname === '/',
      isExternal: false,
      showLabel: true,
      showArrow: false,
    },
    {
      href: '/blog',
      icon: ReaderIcon,
      label: 'Blog',
      isActive: pathname === '/blog',
      isExternal: false,
      showLabel: true,
      showArrow: false,
    },
    {
      href: '/contact',
      icon: EnvelopeClosedIcon,
      label: 'Contact',
      isActive: pathname === '/contact',
      isExternal: false,
      showLabel: true,
      showArrow: false,
    },
  ]

  return (
    <nav className="mb-5 flex w-full py-6">
      <div className="bg-background flex items-center gap-5 py-2">
        {navItems.map((item, index) => (
          <div key={index} className="relative flex items-center">
            <Link
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              className={`hover:text-foreground/80 flex items-center gap-2 text-sm transition-colors ${
                item.isActive
                  ? 'font-medium text-gray-900 dark:text-white'
                  : 'font-sm text-gray-500 dark:text-gray-400'
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.showLabel && <span>{item.label}</span>}
            </Link>
            {item.showArrow && <ArrowTopRightIcon className="h-2.5 w-2.5 text-gray-500" />}
          </div>
        ))}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="group relative transition-all duration-300"
          aria-label={themeAriaLabel}
        >
          <div className="relative h-4 w-4">
            <MoonIcon
              className={`absolute h-4 w-4 text-gray-500 transition-all duration-300 ease-in-out dark:text-gray-400 ${
                isDarkMode ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0'
              }`}
            />
            <SunIcon
              className={`absolute h-4 w-4 text-gray-500 transition-all duration-300 ease-in-out dark:text-gray-400 ${
                isDarkMode ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
              }`}
            />
          </div>
        </button>
      </div>
    </nav>
  )
}
