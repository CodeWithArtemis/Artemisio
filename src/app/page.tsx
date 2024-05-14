import Bio from "@/components/bio";
import Repositories from "@/components/githubRepos";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Main content */}
      <div className="flex-1 flex flex-col ">
        {/* Description */}
      <Bio/>
      <div className=" py-2 flex justify-between items-center">
        <span className="text-2xl font-bold">Latest Repositories </span>
        <Link href="https://github.com/CodeWithArtemis" className="text-mauve hover:text-mauve/100">
        See More..
        </Link>
      </div>
        {/* Projects */}

<Repositories/>
        {/* Blogs */}
        <div className="h-40 bg-surface2 flex items-center justify-center">
          BLOGS
        </div>
      </div>
    </main>
  );
}
