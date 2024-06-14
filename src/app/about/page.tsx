import { Metadata } from "next";
import AboutPage from "./about";

export const metadata: Metadata = {
  title: "About",
  description: "webstudio tips",
};

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  });
  const data = await response.json();
  return data;
};

export default async function About() {
  const posts = await fetchData();

  return (
    <>
      <AboutPage data={posts} />
    </>
  );
}
