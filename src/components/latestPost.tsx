import Link from 'next/link';
import React from 'react'
import { PostItem } from './post-item';
import { posts } from '#site/content';

const LatestPost = () => {
  return (
    <div className=' relative  flex-col '>
<div className=" justify-start gap-2 py-3 text-3xl font-bold">
          My latest Posts
        </div>
        <div className="flex flex-col gap-2 py-3">
          {posts.map((post, index) => {
            return (
              <PostItem
                key={index}
                slug={post.slug}
                title={post.title}
                description={post.description}
              />
            );
          })}

          <Link href="/blog">
            <div className="flex items-center justify-center gap-2 bg-primary/80  py-3 hover:bg-primary/40 transition-all duration-100 ">
              View All my blogs
            </div>
          </Link>
        </div>
    </div>

  )
}

export default LatestPost