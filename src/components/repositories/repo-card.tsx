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

    <Card className='dark:bg-base bg-card  shadow-md  rounded-lg overflow-hidden'>
  <CardHeader className='flex  justify-between flex-1  text-wrap '>
<CardTitle className='text-sm font-bold text-primary  dark:text-mauve/80 flex '>
{props.name}

</CardTitle>

    </CardHeader>
    <CardContent className='min-h-20 text-secondary-foreground dark:text-secondary-foreground flex text-wrap text-sm flex-1 '>
      {props.description}
    </CardContent>

  <CardFooter className='flex  items-center justify-between px-2 py-2 border-b-4'>
    <p className='text-accent dark:text-accent flex justify-end text-sm bg-card-foreground  border-b-2 px-2 py-1 rounded-full'>
      {props.language}
    </p>
  </CardFooter>
</Card>
</Link>

  )
}

export default RepoCard