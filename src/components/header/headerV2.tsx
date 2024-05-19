"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "@/data/Header.json";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import SideNavigation from "../ui/sideNav";
import { GoDownload } from "react-icons/go";

const HeaderV2 = () => {
    const pathname = usePathname();
    const { links, socialLinks } = data;
    const isActive = (path: string) => pathname === path;
  
    return (
      <div className='sticky top-0 backdrop-blur-xl supports-[backdrop-blur]: flex border-b flex-row gap-3  max-width-3xl py-3 px-3 text-2xl mx-auto my-auto md:justify-evenly md:items-center'>
        <div className='mx-auto lg:mx-0  text-6xl md:text-4xl     '>
          𝕬𝖗𝖙𝖊𝖒𝖎𝖘𝖎𝖔
        </div>
        <div>
          
          <div className="hidden md:flex space-x-6 items-center justify-center">
            {links.map((link, index) => (
              <Link href={link.link} key={index} className="flex cursor-pointer items-center justify-center space-x-1 py-3">
                <div className={cn("pt-1 text-xl transition-all duration-150 hover:text-accent-foreground", isActive(link.link) ? "" : "text-accent dark:text-surface2 dark:hover:text-subtext0")}>
                  {link.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
<div className="flex md:hidden items-center justify-center gap-4 py-3 ">
  <SideNavigation/>
  
</div>

        <div className="hidden items-center md:flex justify-center gap-4 py-3 ">
        {/* <button className=" rounded:lg px-4   cursor-pointer items-center justify-center space-x-1 py-3 bg-lavender"> */}
          {/* Resume */}
          <Button variant="secondary" className="flex gap-2 text-lg py-3 px-5">
            Resume
          <GoDownload/>  
          </Button>

        {/* </button> */}
        </div>
      </div>
    );
  }
  export default HeaderV2;