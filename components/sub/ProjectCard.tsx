import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: any;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="relative z-20 cursor-pointer overflow-hidden h-96 w-80 rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full  object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
