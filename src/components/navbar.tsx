'use client';
import Link from "next/link";
import React from "react";
import Image from "next/image";
import renderIcon from "@/lib/iconUtils";
import {FaGithub, FaTwitter, FaYoutube} from "react-icons/fa";
import data from "@/data/Header.json";
import { MdDarkMode } from "react-icons/md";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const {links,socialLinks,}=data
    return (
    <header className=" mx-auto h-[15v] w-full items-center  justify-between  pt-4">
      <div className="mx-auto flex flex-row items-center  justify-between  py-2">
        <Link className="font-bold" href="/">
          <div className="text-2xl font-bold first-letter:text-3xl ">
            Artemisio
          </div>
        </Link>
        <nav className="flex items-center space-x-2">
      {
        socialLinks.map((link,index)=>(
                <Link href={link.link} key={index}  className="flex cursor-pointer ">
                    {renderIcon(link.icon)}
                </Link>
        ))
      }
      </nav>
      </div>
      <div className="flex items-center justify-start  space-x-2 ">
{
    links.map((link,index)=>(
<Link href={link.link} key={index}  className="flex cursor-pointer items-center  justify-center  space-x-1 py-3">
    {renderIcon(link.icon)}
    <div className="pt-1  transition-all duration-150 hover:text-subtext0">
        {link.title}
    </div>

</Link>
    ))
}
</div>

    </header>
  );
};

export default Navbar;
