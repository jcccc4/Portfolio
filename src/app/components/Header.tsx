import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="mt-10">
      <h1>
        <span>John Carlo </span>
        <span className="text-accent-blue">Sacramento</span>
      </h1>
      <h2 className="mt-0.5 relative text-[#2c2c2c] ">Full-Stack Developer</h2>
      <p className="mt-2 w-[272px]">
        I specialize in building robust and scalable applications from front-end
        to back-end.
      </p>
    </header>
  );
}
