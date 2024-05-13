import Navbar from "@/components/navbar";
import Link from "next/link";
export default function HomePage() {
  return (
    <main className="flex-1 md:w-10/12 lg:w-8/12 mx-auto">
      {/* Navigation */}
      <Navbar/>

      {/* Main content */}
      <div className="flex-1 flex flex-col ">
        {/* Description */}
        <div className="h-30 bg-slate-500 flex items-center justify-center px-4 py-10 text-2xl  border-b-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          corporis laboriosam quidem maxime adipisci cumque praesentium deserunt
          repellat repudiandae reiciendis ipsam mollitia nisi voluptatibus,
          veniam dolorum incidunt aut quam vitae.
        </div>

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
