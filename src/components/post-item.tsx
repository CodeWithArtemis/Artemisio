import Link from "next/link";

interface PostItemProps {
    slug:string,
    title:string,
    description:string,
    

}
export function PostItem({slug,title,description}:PostItemProps) {
    return(
        <article className="flex flex-col gap-2 border-border border-b py-3">
            <h2 className="font-bold text-2xl">
                <Link href={`/${slug}`}>{title}</Link>

            </h2>
            <div className="max-w-none text-muted-foreground">
                {description}
            </div>
            <Link href={`/${slug}`}>
                Read More...
                </Link>


        </article>
    )
}