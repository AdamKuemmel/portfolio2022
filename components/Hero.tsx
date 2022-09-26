import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name is ${pageInfo?.name}`,
      "drinks-too-much-coffee.tsx",
      "<CodeAllDay />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        alt="aklogo"
        className="object-cover h-32 mx-auto"
      />
      <div className="z-20">
        <h2 className="text-gray-500 uppercase tracking-[11px]">
          {pageInfo?.role}
        </h2>
        <h1 className="px-10 py-5 text-5xl font-semibold lg:text-6xl">
          <span className="mr-4">{text}</span>
          <Cursor cursorColor="lightGreen" />
        </h1>
        <div className="z-20 pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
