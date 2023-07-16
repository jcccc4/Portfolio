import React from "react";
import Image from "next/image";
type Props = {
  title: string;
  link: string;
  children: React.ReactNode;
};

export default function Card({ children, title, link }: Props) {
  return (
    <div className="border border-black rounded-md p-6 flex flex-col">
      <a href={link} className="flex flex-row items-center font-bold">{title}<Image height={18}  width={18} src={"/icons/link.svg"} alt={"Link logo"}/></a>
      <p>{children}</p>
    </div>
  );
}
