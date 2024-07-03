import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/Logo.png";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src={Logo}
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin mix-blend-screen"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Dev Amir
          </span>
        </Link>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Link key={social.key} href={social.link} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}

          <button className="text-white outline outline-1 p-1 h-6 flex items-center rounded-md outline-white">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/16Qkke2J56OG6Kyq5gnX4yt9SYIG44vwk/view"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
