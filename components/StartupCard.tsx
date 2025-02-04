import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Author, Startup } from "@/sanity/types";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = React.memo(({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views = 0,
    author,
    title = "Untitled Startup",
    category = "Uncategorized",
    _id,
    image,
    description = "No description available.",
  } = post;

  return (
    <li className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md dark:border-neutral-800">
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image || "/placeholder.jpg"}
          alt={`Image of ${title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-4">
        {/* Header Section */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <time className="flex items-center gap-1">
            {formatDate(_createdAt)}
          </time>
          <div className="flex items-center gap-1">
            <EyeIcon className="h-4 w-4" />
            <span>{views}</span>
          </div>
        </div>

        {/* Title Section */}
        <Link
          href={`/startup/${_id || "#"}`}
          className="mt-4 block hover:underline"
        >
          <h3 className="line-clamp-2 text-xl font-semibold leading-tight tracking-tight text-foreground">
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {description}
        </p>

        {/* Footer Section */}
        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {/* Author Avatar */}
            <Link
              href={`/user/${author?._id || "#"}`}
              className="shrink-0 rounded-full"
            >
              <Image
                src={author?.image || "/placeholder-avatar.jpg"}
                alt={author?.name || "Author Image"}
                width={32}
                height={32}
                className="rounded-full border"
                loading="lazy"
              />
            </Link>
            {/* Author Name */}
            <Link
              href={`/user/${author?._id || "#"}`}
              className="text-sm font-medium hover:underline"
            >
              {author?.name || "Unknown Author"}
            </Link>
          </div>

          {/* Category Badge */}
          <Link
            href={`/?query=${category.toLowerCase()}`}
            className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent/80"
          >
            {category}
          </Link>
        </div>
      </div>

      {/* Hover Overlay */}
      <Link
        href={`/startup/${_id || "#"}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${title}`}
      >
        <span className="sr-only">View {title}</span>
      </Link>
    </li>
  );
});

StartupCard.displayName = "StartupCard";

export const StartupCardSkeleton = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm"
      >
        <Skeleton className="aspect-video w-full" />
        <div className="flex flex-1 flex-col p-4">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="mt-4 h-6 w-3/4" />
          <div className="mt-4 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default StartupCard;