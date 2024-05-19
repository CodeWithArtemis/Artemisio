import Bio from "@/components/bio/bio";
import LatestRepositories from "@/components/repositories/page";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import Link from "next/link";
export default function HomePage() {
  return (
    <main className="flex-1 ">
      {/* Main content */}
      {/* Description */}
      <Bio />
      <LatestRepositories />
      {/* Blogs */}
      <div>
        <div className="flex items-center justify-start gap-2 py-3 text-2xl font-bold">
          My latest Posts
        </div>
        <div className="flex flex-col gap-2 border-b border-border py-3">
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
            <div className="flex items-center justify-center gap-2 bg-mantle py-3 hover:bg-mantle/20">
              View All my blogs
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
