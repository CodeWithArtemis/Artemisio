import Bio from "@/components/bio/bio";
import LatestRepositories from "@/components/repositories/page";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import Link from "next/link";
import LatestPost from "@/components/latestPost";
import Footer from "@/components/footer";
export default function HomePage() {
  return (
    <main className="flex flex-col gap-10 py-10">
      <Bio/>
      <LatestPost/>   

      <LatestRepositories />
<Footer/>
    </main>
  );
}
