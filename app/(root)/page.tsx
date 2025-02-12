import StartupCard, { StartupTypeCard } from "@/Components/StartupCard";
import SearchForm from "@/Components/SearchForm";
import { STARTUPS_QUERY } from "@/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const {data: posts} = await sanityFetch({ query: STARTUPS_QUERY });

  // const posts = [
  //   {
  //     _createdAt: "2022-01-01",
  //     title: "Startup 1",
  //     category: "robots",
  //     _id: "1",
  //     author: {_id: 1, name:"Muhammad Uzair", image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6fb99e81-6f93-4f25-8cd1-486b53f05e73/anim=false,width=450/03770-2683377594-solo,%20%20WHITE%20hair,%20%201boy,%20BLACK%20eyes,%20male%20focus,%20plaid%20shirt,%20plaid,%20shirt,%20simple%20background,%20smile,%20male%20child,%20round%20eyewear.jpeg"},
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FZRYVUj7JVeuJcMIpMTybtN80FQkQa0pIQ&s",
  //     description: "This is a description of startup 1",
  //     views: 55,
  //   },
  //   {
  //     _createdAt: "2022-01-01",
  //     title: "Startup 2",
  //     category: "robots",
  //     _id: "2",
  //     author: {id: 2, name:"Muhammad Uzair", image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6fb99e81-6f93-4f25-8cd1-486b53f05e73/anim=false,width=450/03770-2683377594-solo,%20%20WHITE%20hair,%20%201boy,%20BLACK%20eyes,%20male%20focus,%20plaid%20shirt,%20plaid,%20shirt,%20simple%20background,%20smile,%20male%20child,%20round%20eyewear.jpeg"},
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FZRYVUj7JVeuJcMIpMTybtN80FQkQa0pIQ&s",
  //     description: "This is a description of startup 2",
  //     views: 55,
  //   },
  //   {
  //     _createdAt: "2022-01-01",
  //     title: "Startup 3",
  //     category: "robots",
  //     _id: "3",
  //     author: {id: 3, name:"Muhammad Uzair", image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6fb99e81-6f93-4f25-8cd1-486b53f05e73/anim=false,width=450/03770-2683377594-solo,%20%20WHITE%20hair,%20%201boy,%20BLACK%20eyes,%20male%20focus,%20plaid%20shirt,%20plaid,%20shirt,%20simple%20background,%20smile,%20male%20child,%20round%20eyewear.jpeg"},
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FZRYVUj7JVeuJcMIpMTybtN80FQkQa0pIQ&s",
  //     description: "This is a description of startup 3",
  //     views: 55,
  //   }
  // ];
  return (
    <div>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Connect with Next-App
        </h1>
        <p className="sub-heading !max-w-3xl">
          Next-App is a platform for startups to pitch their ideas and connect
          with investors
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `search results form "${query}"` : "All Startups"}{" "}
        </p>

        <ul className="card_grid mt-7">
          {posts.length > 0 ? (
            posts.map((post: StartupTypeCard) => <StartupCard key={post._id} post={post} />)
          ) : (
            <p>No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </div>
  );
}
