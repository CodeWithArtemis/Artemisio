'use client';
import Link from "next/link";
import React from "react";
import renderIcon from "@/lib/iconUtils";
import data from "@/data/Header.json";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../theme/theme-button";

const Navbar = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    console.log(isActive("/"));
    const {links,socialLinks,}=data
    return (
        <header className=" sticky top-0 backdrop-blur-sm support-backdrop:bg-background/60 bg-background/80  border-b-2  h-[15v] w-full   flex justify-center flex-col  pt-4 ">
      <div className="mx-auto w-full  md:w-10/12 lg:w-8/12 " >

      <div className="  flex flex-row items-center  justify-between py-2">
        <Link className="font-bold" href="/">
          <div className="text-2xl font-bold flex  first-letter:text-3xl ">
            Artemisio

          </div>
        </Link>
        <nav className="flex justify-start space-x-2">
    <div  className="flex items-center space-x-2">
      {
        socialLinks.map((link,index)=>(
            <div className="" key={index}>
  <Link href={link.link} key={index}  className="flex cursor-pointer p-[0.65rem]    border-[1px] hover:text rounded-sm hover:bg-accent "> 
                    {renderIcon(link.icon)}
                </Link>
            </div>
             
        ))
        
      }
                      <ModeToggle />
                      </div>

      </nav>
      </div>
      <div className="flex items-center justify-start  space-x-2 ">
{
    links.map((link,index)=>(
<Link href={link.link} key={index}  className="flex cursor-pointer items-center  justify-center   space-x-1 py-3 "> 
    {renderIcon(link.icon)}
    <div className={cn("pt-1  text-2xl transition-all  duration-150 hover:text-accent-foreground",isActive(link.link)?"":"text-accent dark:text-surface2 dark:hover:text-subtext0")}>
        {link.title}

    </div>

</Link>
    ))
}
</div>
</div>

    </header>

    
  );
};

export default Navbar;
