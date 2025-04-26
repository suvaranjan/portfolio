/* eslint-disable prettier/prettier */
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

const Contact = () => {
  const email = 'suvaranjan01@gmail.com'

  return (
    <div className="pt-12" id="contact">
      <div className="rounded-2xl bg-gray-100 p-8 shadow-lg dark:bg-neutral-900">
        {/* Modern Minimalist Heading */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-px w-16 bg-neutral-300 dark:bg-neutral-600" />
          </div>
          {/* <h2 className="font-medium tracking-widest uppercase"> Get in touch</h2> */}
          <h2 className="font-medium tracking-widest uppercase">
            <span className="relative mr-2 inline-block h-3 w-3">
              <span className="absolute inset-0 rounded-full bg-blue-500 opacity-80" />
              <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-30" />
            </span>
            Get in touch
          </h2>
          <p className="mx-auto mt-2 max-w-md text-neutral-600 dark:text-neutral-400">
            Let's create something remarkable together.
          </p>
        </div>

        {/* Email Card */}
        <div className="flex justify-center">
          <a
            href={`mailto:${email}`}
            className="group flex w-full max-w-md items-center gap-6 rounded-xl bg-neutral-50 p-6 transition-all hover:bg-neutral-100 dark:bg-neutral-800/50 dark:hover:bg-neutral-700"
          >
            <div>
              <div className="flex items-center gap-4">
                <EnvelopeClosedIcon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                <p className="text-sm font-semibold">Email me at</p>
              </div>

              <p className="mt-1 text-sm tracking-widest text-neutral-600">{email}</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-auto h-5 w-5 text-neutral-400 transition-transform group-hover:translate-x-1 dark:text-neutral-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-12">
          <div className="flex justify-center gap-6">
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          </div>
          <p className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
            I'll get back to you within 24 hours
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
