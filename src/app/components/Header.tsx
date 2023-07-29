"use client";
import React from "react";
import SocialLinks from "@/app/components/SocialLinks";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); //prevent the default behavior
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="mt-10 lg:w-[100]  lg:sticky lg:self-start lg:top-10">
      <h1>
        <span>John Carlo </span>
        <span className="text-accent-blue">Sacramento</span>
      </h1>
      <h2 className="mt-0.5 relative text-[#2c2c2c] ">Full-Stack Developer</h2>
      <p className="mt-2 w-[272px]  lg:w-[320px]">
        I specialize in building robust and scalable applications from front-end
        to back-end.
      </p>
      <SocialLinks />
      <ul className="hidden lg:flex mt-10 flex-col gap-4 text-h3-lg">
        <li>
          <Link href="#experience" onClick={handleScroll} className="hover:text-accent-blue active:text-slate-500">
            Experience
          </Link>
        </li>
        <li>
          <Link href="#projects" onClick={handleScroll} className="hover:text-accent-blue active:text-slate-500">
            Project
          </Link>
        </li>
        <li>
          <Link href="#contacts" onClick={handleScroll} className="hover:text-accent-blue active:text-slate-500">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
