/* eslint-disable prettier/prettier */
'use client'

import Link from 'next/link'
import { ArrowTopRightIcon, MixerHorizontalIcon, CodeIcon } from '@radix-ui/react-icons'

export default function MinimalProjects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Project 1 description.',
      slug: 'oklch',
      icon: <MixerHorizontalIcon className="h-6 w-6" />,
    },
    {
      title: 'Project 2',
      description: 'Project 2 description.',
      slug: 'emjis',
      icon: <CodeIcon className="h-6 w-6" />,
    },
    // Add more projects as needed
  ]

  return (
    <section className="mx-auto max-w-7xl py-12">
      <div className="mb-10 space-y-2">
        <h2 className="mb-2 text-sm font-medium tracking-widest text-gray-900 uppercase dark:text-white">
          Works
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-400">will be added soon..</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-300 bg-white transition-all hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50"
    >
      {/* Preview Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-neutral-300 dark:border-neutral-800">
        {/* Cross Lines SVG */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            stroke="currentColor"
            strokeWidth="0.2"
            className="stroke-neutral-300 dark:stroke-neutral-800"
          />
          <line
            x1="100"
            y1="0"
            x2="0"
            y2="100"
            stroke="currentColor"
            strokeWidth="0.2"
            className="stroke-neutral-300 dark:stroke-neutral-800"
          />
        </svg>

        {/* Icon Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm dark:bg-neutral-800/80">
            {project.icon}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 p-5">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{project.title}</h3>
          <ArrowTopRightIcon className="mt-1 h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-gray-500" />
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
      </div>
    </Link>
  )
}
