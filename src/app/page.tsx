import Bio from "@/components/bio";
import Link from "next/link";
export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Navigation */}

      {/* Main content */}
      <div className="flex-1 flex flex-col ">
        {/* Description */}
      <Bio/>
        {/* Projects */}
        <div className="flex-1 bg-surface0 flex items-center justify-center">
          Projects
        </div>

        {/* Blogs */}
        <div className="h-40 bg-surface2 flex items-center justify-center">
          BLOGS
        </div>
      </div>
    </main>
  );
}
