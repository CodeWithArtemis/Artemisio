import renderIcon from "@/lib/iconUtils";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import data from "@/data/Header.json";
import { render } from "react-dom";
import Image from "next/image";
const Bio = () => {
  const { socialLinks } = data;
  return (
    <div className="my-10  flex ">
      <div className="my-auto flex flex-col lg:w-3/5">
        <div className="text-5xl md:text-6xl ">
          Hello I'am <span className="text-mauve">Apurva Narayan Pradhan.</span>
        </div>
        <div className="text-5xl md:text-6xl ">
          A Developer based in <span className="gradient-text ">India</span>.
        </div>
        <div className="mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
          hic. Labore dignissimos praesentium unde. Numquam vitae animi
          assumenda natus a mollitia hic neque eveniet at, placeat molestias eum
          veniam distinctio!
        </div>
        <div className=" hidden   flex-col    rounded-lg   mt-4 md:flex"> 
          <div className="min-h-[10dvh] flex  items-center justify-start    ">
            {socialLinks.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="flex cursor-pointer items-center  justify-center space-x-4 pr-5   transition-all duration-100 hover:text-primary "
              >
                {renderIcon(link.icon)}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-5 hidden items-center justify-center  lg:flex lg:w-2/5">
        <Image
          src="/Profile.jpeg"
          objectFit="cover"
          className="rounded-full"
          alt="Apurva Narayan Pradhan"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Bio;
