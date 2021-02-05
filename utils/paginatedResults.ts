import getAllPosts from "./getAllPosts";

const LIMIT = 4; // Number of posts per page

const paginatedResults = (page) => {
  page = parseInt(page);

  let sorted_posts = getAllPosts();

  const totalPages = Math.round(
    sorted_posts.length / LIMIT + (sorted_posts.length % LIMIT !== 0 ? 0.5 : 0)
  );
  let pages = [...Array(totalPages !== 0 ? totalPages : 1)].map(
    (k, i) => i + 1
  );
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
