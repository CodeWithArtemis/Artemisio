'use client';
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { usePathname } from "next/navigation";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
    const pathName=usePathname();
    return (
    <header className=" mx-auto h-[15v] w-full items-center  justify-between border-b-2 pt-4">
      <div className="mx-auto flex flex-row items-center  justify-between  py-2">
        <Link className="font-bold" href="/">
          <div className="text-2xl font-bold first-letter:text-3xl ">
            Artemisio
          </div>
        </Link>
        <nav className="flex items-center space-x-2 ">
          <Link href="github.com">
            <FaGithub />
          </Link>
          
            <a>
            <FaTwitter />

            </a>
            <a>
            <FaYoutube />

            </a>
            <MdDarkMode />

        </nav>
      </div>
      <div className="bg-red">
        <div className="flex items-center justify-start  space-x-2 ">
          <Link
            href="/"
            className="flex cursor-pointer items-center  justify-center  space-x-1 py-3    "
          >
            <FaHome className="text-[1.4vw] " />
            <div className="pt-1  transition-all duration-150 hover:text-subtext0">
              Home
            </div>
          </Link>
          <Link
            href="/"
            className="flex cursor-pointer items-center  justify-center  space-x-1 py-3    "
          >
            <FaCode className="text-[1.4vw] " />
            <div className="pt-1  transition-all duration-150 hover:text-subtext0">
              Projects
            </div>
          </Link>
          <Link
            href="/"
            className="flex cursor-pointer items-center  justify-center  space-x-1 py-3    "
          >
            <MdArticle className="text-[1.4vw] " />
            <div className="pt-1  transition-all duration-150 hover:text-subtext0">
              Blogs
            </div>
            </Link>
          <Link
            href="/"
            className="flex cursor-pointer items-center  justify-center  space-x-1 py-3    ">
            <MdConnectWithoutContact className="text-[1.4vw] " />
            <div className="pt-1  transition-all duration-150 hover:text-subtext0 ">
              Contacts
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
