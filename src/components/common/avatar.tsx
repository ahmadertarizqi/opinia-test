import { HTMLAttributes } from "react"
import clsx from "clsx";

interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  size?: "sm" | "lg";
  src: string;
  alt?: string;
}

export function Avatar({ size, className, alt, src, ...rest }: AvatarProps) {
  const sizeVariants = (
    (size === "sm") ? "w-8 h-8" :
    (size === "lg") ? "w-16 h-16" : 
    "w-12 h-12"
  );

  return (
    <figure 
      className={clsx("overflow-hidden rounded-full", sizeVariants, className)}
      {...rest}
    >
      <img src={src} className="object-cover w-full h-full" alt={alt} />
    </figure>
  )
}
