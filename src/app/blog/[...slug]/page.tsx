
import React from 'react'

import {posts, Post } from '#site/content'
import { MDXContent,Mdx } from '@/components/mdx-components'


async function getPost(params: {params: {slug: string}}) {
    const post= posts.find((post:Post)=>post.slug.split("/").pop()===params.params.slug[0])
return post;
}
export default async function page  (params: {params: {slug: string}})  {
   
    const post = await getPost(params);
    return (


        <div className='flex flex-col gap-2 py-3 max-w-4xl mx-auto'>
            <div className='text-3xl font-bold text-center'>
                {post?.title}
                </div>
            <div className='text-1xl text-center '>
                {post?.description}

            </div>
            <div className=' mt-4 flex items-center flex-col '>

            <Mdx code={post?.body} />

            </div>
            

        </div>
  )
}

