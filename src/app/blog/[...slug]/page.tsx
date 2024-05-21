
import React from 'react'
import { Callout } from '@/components/alert'
import {posts, Post } from '#site/content'
import {  Mdx } from '@/components/mdx-components'

async function getPost(params: {params: {slug: string}}) {
    const post= posts.find((post:Post)=>post.slug.split("/").pop()===params.params.slug[0])
return post;
}
export default async function page  (params: {params: {slug: string}})  {
   
    const post = await getPost(params);
    return (


        <div className='flex flex-col gap-2 py-3 max-w-5xl mx-auto'>
            <div className=' mt-4 flex items-center flex-col '>

            <Mdx code={post?.body} components={{}}   /> 
            
            </div>
            

        </div>
  )
}

