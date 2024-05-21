
import React from 'react'
import Image from 'next/image'
import {posts, Post } from '#site/content'
import {  Mdx } from '@/components/mdx-components'
import Link from 'next/link'

async function getPost(params: {params: {slug: string}}) {
    const post= posts.find((post:Post)=>post.slug.split("/").pop()===params.params.slug[0])
return post;
}
export default async function page  (params: {params: {slug: string}})  {
   
    const post = await getPost(params);
    return (


        <div className='flex flex-col gap-2 py-3 max-w-5xl mx-auto'>
            <div>
                <Image className='w-full h-full' src={post?.blogImage} alt={post?.title} width={400} objectFit='cover'  height={400} />
            </div>

            <div className=' mt-4 flex items-center flex-col '>

            <Mdx code={post?.body} components={{}}   /> 
            
            </div>
            <div className='border-t py-4 justify-end flex'>
                <Link href={'/blog'} className=' text-2xl rounded-lg text-text bg-lavender/80 py-3 px-6 hover:bg-lavender/100'>Read more blogs
                </Link>
                </div>


        </div>
  )
}

