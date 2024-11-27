import { STARTUP_BY_ID_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import React from "react";

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;


  const post = await client.fetch(STARTUP_BY_ID_QUERY, { params: { id } });
  if (!post) notFound();

  return (
    <>
      <h1 className="text-30-semibold">{post.title}</h1>
    </>
  );
};

export default page;
