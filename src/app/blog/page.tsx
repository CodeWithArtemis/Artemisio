import React from 'react'
import {posts} from '#site/content'
import { PostItem } from '@/components/post-item'
const page = () => {
  return (
<div>
    <div className='text-3xl font-bold text-center py-4'>
        My Blog Posts
    </div>
    
<div className='flex flex-col gap-2  py-3'>
{posts.map((post,index)=>{
        return(
            
          <PostItem key={index}  slug={post.slug} title={post.title} description={post.description} Banner={post.blogImage} />
        )
        
      })}

</div>
 </div>
  )

}

export default page