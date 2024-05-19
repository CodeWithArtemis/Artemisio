import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import React from 'react'
import { Button } from "./button"
import { FaBars } from "react-icons/fa";
import data from "@/data/Header.json";
import Link from "next/link";
  const SideNavigation = () => {
    const {links}=data;
    return (
<Sheet>
  <SheetTrigger asChild>
    <Button><FaBars/></Button>
  </SheetTrigger>

  <SheetContent className="flex flex-col items-center justify-center w-full h-full">
{links.map((item,index)=>(

<SheetDescription key={index} className="items-center justify-center text-2xl py-3 text-primary-foreground">
    <Link href={item.link}>
        {item.title}
        </Link>
        
        </SheetDescription>
    
))}



  
  </SheetContent>
</Sheet>

    )
  }
  
  export default SideNavigation