import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto h-screen flex flex-col max-w-5xl">
      {/* Navigation */}
      <nav className="h-10 bg-gray-200 flex items-center justify-between px-4">
        <div className="text-2xl font-bold text-text">Artemisio</div>
        <div className="bg-slate-700 px-5 py-2 text-white">Links, Theme changer</div>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Description */}
        <div className="h-30 bg-slate-500 flex items-center justify-center px-4 py-10 text-2xl ">
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
    </div>
  );
}
