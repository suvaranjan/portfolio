/* eslint-disable prettier/prettier */
import Image from 'next/image'
import profile from '@/data/profile.json'
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex flex-col-reverse items-start justify-between gap-6 py-5 sm:flex-row sm:items-start sm:gap-8 md:py-10 xl:py-10">
      {/* Text Content */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {profile.about.name}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="none"
              className="ml-1 h-5 w-5 text-blue-500"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8.9991 1.3923L6.5871 0L5.2497 2.3175H2.4444V5.1768L0 6.588L1.3923 9L0 11.4115L2.4444 12.8232V15.4805H5.13315L6.5871 18L8.9991 16.6077L11.4111 18L12.8655 15.48H15.6384V12.7755L18 11.4115L16.6072 9L18 6.58845L15.6384 5.22495V2.31795H12.7498L11.4111 0L8.9991 1.3923ZM12.3358 6.44355L13.3501 7.4727L8.20665 12.6477L5.1309 9.5292L6.1407 8.5131L8.20485 10.5745L12.3358 6.44355Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-md text-gray-700 dark:text-gray-400">{profile.about.title}</p>
        </div>

        {profile.about.description.map((para, idx) => (
          <p key={idx} className="max-w-xl text-gray-600 dark:text-gray-300">
            {para}
          </p>
        ))}

        <p className="max-w-xl text-gray-600 dark:text-gray-300">
          Currently Looking for work as developer.
          <Link className="ml-2 text-sm font-semibold" href="#contact">
            Hire me?
          </Link>
        </p>
      </div>

      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image
          src={profile.about.avatar}
          alt={`${profile.about.name} Avatar`}
          width={75}
          height={75}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  )
}
