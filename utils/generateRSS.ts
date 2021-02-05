import { Post } from "types/index";

const generateRSSItem = (post: Post): string => `
  <item>
    <guid>https://aarch64.com/post/${post.slug}</guid>
    <title>${post.title}</title>
    <link>https://aarch64.comm/post/${post.slug}</link>
    <description>${post.description}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`;

const generateRSS = (posts: Post[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Aarch64.com - Blog</title>
      <link>https://aarch64.com/blog</link>
      <description>Daily blog, run by experts, on the challenges of planning, coordinating and managing 50 units of Arm-based hardware in multiple, global locations.</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://aarch64.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRSSItem).join("")}
    </channel>
  </rss>
`;

export default generateRSS;
