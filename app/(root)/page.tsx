import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = await [
    {
      _createdAt: new Date(),
      views: 15068,
      author: {
        _id: 1,
        name: "DhavalKurkutiya",
       image: "https://avatars.githubusercontent.com/u/57305529?v=4",

      },
      _id: 1,
      image: "https://avatars.githubusercontent.com/u/57305529?v=4",
      description: "Visionary AI is a startup that is building the future of AI.",
      category: "Technology",
      title: "Visionary AI",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.map((post) => (
            <StartupCard key={post?._id} post={post} />
          ))}
        </ul>
        
      </section>
    </>
  );
}
