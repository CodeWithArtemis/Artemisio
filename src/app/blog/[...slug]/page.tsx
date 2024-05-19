
import React from 'react'

import {posts, Post } from '#site/content'
import { MDXContent,Mdx } from '@/components/mdx-components'
import { Code } from 'lucide-react';


async function getPost(params: {params: {slug: string}}) {
    const post= posts.find((post:Post)=>post.slug.split("/").pop()===params.params.slug[0])
return post;
}
export default async function page  (params: {params: {slug: string}})  {
   
    const post = await getPost(params);
    return (


        <div className='flex flex-col gap-2 py-3 max-w-5xl mx-auto'>
            <div className=' mt-4 flex items-center flex-col '>

            <Mdx code={post?.body} />
            
            </div>
            

        </div>
  )
}

