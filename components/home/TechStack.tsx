/* eslint-disable prettier/prettier */
import Image from 'next/image'
import { Marquee } from './Marquee'
import profile from '@/data/profile.json'

const TechIcon = ({ tech }: { tech: { name: string; icon: string } }) => {
  return (
    <div className="mx-0 flex items-center justify-center rounded-lg bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20">
      <Image
        src={tech.icon}
        alt={tech.name}
        width={40}
        height={40}
        className="opacity-90 transition-opacity hover:opacity-100"
      />
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="mt-10" id="tech-stack">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-[0.7px] flex-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        <h2 className="px-2 text-xs font-semibold tracking-widest whitespace-nowrap text-gray-500 uppercase">
          Tech stack
        </h2>
        <div className="h-[0.7px] flex-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      </div>

      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="py-2 [--duration:25s]">
          {profile.skills.map((tech, index) => (
            <TechIcon key={index} tech={tech} />
          ))}
        </Marquee>

        {/* Left and Right Fade */}
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l" />
      </div>
    </section>
  )
}
