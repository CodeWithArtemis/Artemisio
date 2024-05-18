import Link from "next/link";

interface PostItemProps {
    slug:string,
    title:string,
    description:string,
    

}
export function PostItem({slug,title,description}:PostItemProps) {
    return(
        <article className="flex flex-col gap-2 border-border border-b py-3 bg-mantle px-4">
            <div className="hover:text-primary font-bold text-2xl transition-all duration-100 hover:underline inline-block">
                <Link href={`/${slug}`}>{title}</Link>

            </div>
            <div className="max-w-none text-muted-foreground">
                {description}
            </div>
            <Link className="flex justify-end hover:text-primary" href={`/${slug}`}>
                Read More...

                </Link>

        </article>
    )
}