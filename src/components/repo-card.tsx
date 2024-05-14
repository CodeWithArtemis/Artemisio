import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Link from "next/link";

type ProjectPrp = {
    name:string,
    description:string,
    html_url:string,
    language:string,
}
const RepoCard = ({props}:{props:ProjectPrp}) => {
  return (
    <Link href={props.html_url} className='text-mauve/80 hover:text-mauve hover:scale-105 duration-200  transition-transform'> 

    <Card className='bg-base shadow-md  rounded-lg overflow-hidden'>
  <CardHeader className='flex  justify-between flex-1  text-wrap '>

    <div className='flex '>
      <div className='text-sm   font-bold mr-2 mb- text-maroon'> 
      {props.name}

      </div>
    </div>
    <CardDescription className='min-h-12 text-subtext1 flex text-wrap text-sm flex-1 '>
      {props.description}
    </CardDescription>
  </CardHeader>
  <CardFooter className='flex  items-center justify-between px-2 py-2 border-b-4'>
    <p className='text-subtext0 flex justify-end text-sm bg-mantle border-b-2 px-2 py-1 rounded-full'>
      {props.language}
    </p>
  </CardFooter>
</Card>
</Link>

  )
}

export default RepoCard