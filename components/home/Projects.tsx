/* eslint-disable prettier/prettier */

import Image from 'next/image'
import Link from 'next/link'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import profile from '@/data/profile.json' // Correct profile import

const ProjectCard = ({
  project,
}: {
  project: { title: string; description: string; slug: string }
}) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-0 rounded-xl border border-neutral-200 dark:border-neutral-800" />
        <div className="pointer-events-none absolute inset-1 rounded-lg border border-neutral-200 dark:border-neutral-800" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10 dark:bg-[radial-gradient(#374151_1px,transparent_1px)] dark:opacity-5" />
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 dark:bg-gray-800">
            <Image
              src={`/static/images/${project.slug}.avif`}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-black/10" />
          </div>
          <div className="flex flex-1 flex-col p-5 pt-4">
            <div className="flex items-start justify-between">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">{project.title}</h3>
              <ArrowTopRightIcon className="mt-0.5 h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-gray-500" />
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Projects() {
  return (
    <section className="mx-auto max-w-7xl py-5">
      <h2 className="text-muted-foreground mb-10 text-sm font-medium tracking-widest uppercase">
        Selected Work
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {profile.projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  )
}
