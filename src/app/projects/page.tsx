import React from 'react'
import {posts} from "#site/content"
import { MDXContent } from '@/components/mdx-components'
const page = () => {
  return (
    <div>
      {posts.map((post)=>(

<div key={post.date}>
  <h1>{post.title}</h1>
  <MDXContent code={post.body} />
</div>
))}

    </div>
)

}

export default page