import fs from "fs";
import matter from "gray-matter";
import { Post } from "types/index";

const getAllPosts = (): Post[] => {
  let posts = fs.readdirSync("posts");
  return posts
    .map((post): Post => {
      let file = fs.readFileSync(`posts/${post}`).toString();
      let frontmatter = matter(file);
      return {
        title: frontmatter.data.title,
        author: frontmatter.data.author,
        thumbnail: frontmatter.data.thumbnail,
        description: frontmatter.data.description
          ? frontmatter.data.description
          : frontmatter.data.summary
          ? frontmatter.data.summary
          : frontmatter.content
              .split(/\.(\s|\n)+/)
              .slice(0, 2)
              .map((sentence) => sentence.trim())
              .join(". "),
        date: frontmatter.data.date,
        slug: post.replace(".md", ""),
      };
    })
    .sort((a, b) => {
      let a_date = new Date(a.date);
      let b_date = new Date(b.date);
      if (a_date.getTime() > b_date.getTime()) {
        return -1;
      } else if (a_date.getTime() < b_date.getTime()) {
        return 1;
      } else {
        return 0;
      }
    });
};

export default getAllPosts;
