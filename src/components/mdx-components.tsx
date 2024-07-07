import * as React from "react";
import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Callout } from "@/components/alert";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "hover  mt-4 flex  items-center justify-center whitespace-pre-wrap text-5xl font-extrabold leading-tight tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-8 border-b-2  pb-4 text-4xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn("mt-6 text-2xl font-medium tracking-tight", className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn("mt-6 text-xl font-medium tracking-tight", className)}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn("mt-6 text-lg font-medium tracking-tight", className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn("mt-6 text-base font-medium tracking-tight", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn(
        "text-text transition-all duration-100 hover:text-blue hover:underline",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(
        "line-height-[1.5] mt-4  text-xl leading-relaxed text-subtext0",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        "my-6 ml-6 list-disc space-y-2 text-lg text-subtext0 ",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        "my-6 ml-6 list-decimal space-y-2 text-lg text-subtext0 ",
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("mt-2 text-subtext0 ", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn("text-gray mt-6 border-l-4 pl-4 italic", className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ), 
  hr: ({ ...props }) => <hr className="my-6 border-t-2" {...props} />,
  table: ({ className, ...props }) => (
    <div className="my-6 overflow-x-auto">
      <table className={cn("w-full table-auto", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }) => (
    <tr
      className={cn("odd:bg-gray-100 even:bg-gray-200", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn("bg-gray-300 px-4 py-2 text-left font-bold", className)}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td className={cn("border-t px-4 py-2", className)} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "my-4 overflow-x-auto rounded-lg  bg-gray-900 p-4 text-gray-100 shadow-inner",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(" rounded px-1 py-0.5 text-sm ", className)}
      {...props}
    />
  ),
  Image,
};

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export function MDXContent({ code, components }: MdxProps) {
  const Component = useMDXComponent(code);
  return;
  <div className="prose prose-lg mx-auto">
    <Component components={{ Image, ...components }} />;
  </div>;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose prose-lg mx-auto">
      <Component components={components} />
    </div>
  );
}
