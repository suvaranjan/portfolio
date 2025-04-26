/* eslint-disable prettier/prettier */
import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import profile from '@/data/profile.json'

const Contact = () => {
  const email = 'suvaranjan01@gmail.com'
  const whatsappLink = 'https://wa.me/6370342951' // Replace with your actual number

  return (
    <section
      id="contact"
      className="mt-16 flex flex-col items-center justify-center rounded-3xl border p-1 text-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:border-neutral-900"
    >
      {/* Outer wrapper */}
      <div className="w-full rounded-3xl border border-neutral-200 bg-white p-1 shadow-inner dark:border-neutral-800 dark:bg-neutral-900">
        {/* Inner container */}
        <div className="rounded-3xl bg-white px-2 py-10 sm:px-10 dark:bg-neutral-900">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <div className="mb-6">
              <Image
                src={profile.about.avatar}
                alt="Profile Picture"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
            </div>

            {/* Headline */}
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Ready to kick things off?
            </h2>

            {/* Paragraph */}
            <p className="mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
              Let's begin by discussing the details of the project to make sure we are on the same
              page. Once that's confirmed, we can move forward with the work.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {/* Email Button */}
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2 text-sm font-medium text-white shadow transition-transform hover:scale-105 hover:shadow-md dark:bg-white dark:text-black"
              >
                Email
                <EnvelopeClosedIcon className="h-4 w-4" />
              </a>

              {/* WhatsApp Button */}
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-400 px-3 py-2 text-sm font-medium text-neutral-700 transition-all hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="20"
                  height="20"
                  className="fill-current"
                >
                  <path
                    fill="#fff"
                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                  ></path>
                  <path
                    fill="#40c351"
                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
