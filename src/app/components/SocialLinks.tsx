import React from 'react'
import Image from 'next/image'


export default function SocialLinks() {
  return (
    <section className="flex gap-x-4 mt-4">
          <a href="https://github.com/jcccc4">
            <Image
              src="/icons/github.svg"
              width={32}
              height={32}
              alt="Github Icon"
            />
          </a>
          <a href="https://www.instagram.com/jcsacra4/">
            <Image
              src="/icons/instagram.svg"
              width={32}
              height={32}
              alt="Github Icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/johncarlosacramento/">
            <Image
              src="/icons/linkedin.svg"
              width={32}
              height={32}
              alt="Github Icon"
            />
          </a>
          <a href="https://www.frontendmentor.io/profile/jcccc4">
            <Image
              src="/icons/frontendmentor.svg"
              width={24}
              height={24}
              alt="Github Icon"
              className="mt-1"
            />
          </a>
        </section>
  )
}