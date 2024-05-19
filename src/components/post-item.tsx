import Link from "next/link";

interface PostItemProps {
    slug:string,
    title:string,
    description:string,
    

}
export function PostItem({slug,title,description}:PostItemProps) {
    return(
        <article className="flex flex-col gap-2 border-border border-b py-3 bg-secondary rounded-lg px-4">
            <div className="hover:text-accent font-bold text-2xl transition-all duration-100 hover:underline inline-block">
                <Link href={`/${slug}`}>{title}</Link>

            </div>
            <div className="max-w-none text-muted-foreground">
                {description}
            </div>
            <Link className="block flex justify-end hover:text-accent" href={`/${slug}`}>
                Read More...

                </Link>


        </article>
    )
}