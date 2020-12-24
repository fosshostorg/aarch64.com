import fs from "fs";
import matter from "gray-matter";

const LIMIT = 4; // Number of posts per page

const paginatedResults = (page) => {
  page = parseInt(page);
  let posts = fs.readdirSync("posts");

  let sorted_posts = posts
    .map((post) => {
      let file = fs.readFileSync(`posts/${post}`).toString();
      let frontmatter = matter(file);
      return {
        ...frontmatter.data,
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

  let pages = [
    ...Array(
      Math.round(posts.length / LIMIT) !== 0
        ? Math.round(posts.length / LIMIT)
        : 1
    ),
  ].map((k, i) => i + 1);
  let prev = pages.indexOf(page - 1) !== -1 ? page - 1 : null;
  let next = pages.indexOf(page + 1) !== -1 ? page + 1 : null;
  let last = pages[pages.length - 1] ? pages[pages.length - 1] : 1;

  const startIndex = (page - 1) * LIMIT;
  const endIndex = page * LIMIT;

  let post_results = sorted_posts.slice(startIndex, endIndex);

  return {
    posts: post_results,
    last,
    prev,
    next,
  };
};

export default paginatedResults;
