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
    <li className="startup-card group">
      {/* Header Section */}
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" aria-hidden="true" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      {/* Author and Title Section */}
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id || "#"}`} aria-label={`Author: ${author?.name || "Unknown Author"}`}>
            <p className="text-16-medium line-clamp-1">{author?.name || "Unknown Author"}</p>
          </Link>
          <Link href={`/startup/${_id || "#"}`} aria-label={`View details of ${title}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id || "#"}`}>
          <Image
            src={author?.image || "/placeholder.jpg"}
            alt={author?.name || "Author Image"}
            width={48}
            height={48}
            className="rounded-full"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Description and Image Section */}
      <Link href={`/startup/${_id || "#"}`} aria-label={`View details of ${title}`}>
        <p className="startup-card_desc">{description}</p>
        <img
          src={image || "/placeholder.jpg"}
          alt={`Image of ${title}`}
          className="startup-card_img"
          loading="lazy"
        />
      </Link>

      {/* Footer Section */}
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`} aria-label={`Category: ${category}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id || "#"}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
});

StartupCard.displayName = "StartupCard";

export const StartupCardSkeleton = () => (
  <ul>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={index} className="skeleton">
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </ul>
);

export default StartupCard;
