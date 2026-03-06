import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");

  return rss({
    title: "Raúl Martín Guerrero",
    description: "Blog sobre software libre, tecnología y negocio",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}