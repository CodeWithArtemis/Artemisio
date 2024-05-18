import Bio from "@/components/bio/bio";
import LatestRepositories from "@/components/repositories/page";
import {posts} from "#site/content"
import { PostItem } from "@/components/post-item";
export default function HomePage() {
  return (
 
 <main className="flex-1">
      {/* Main content */}
        {/* Description */}
      <Bio/>
      <LatestRepositories/>
        {/* Blogs */}
        <div className="h-40 bg-surface2 flex justify-center">
          {posts.map((post,index)=>{
            return(
              <PostItem key={index}  slug={post.slug} title={post.title} description={post.description} />
            )
          })}
        </div>
    </main>
  );
}
