import Bio from "@/components/bio/bio";
import Repositories from "@/components/repositories/githubRepos";
import Link from "next/link";
import LatestRepositories from "@/components/repositories/page";
export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Main content */}
        {/* Description */}
      <Bio/>
      <LatestRepositories/>
        {/* Blogs */}
        <div className="h-40 bg-surface2 flex items-center justify-center">
          BLOGS
        </div>
    </main>
  );
}
