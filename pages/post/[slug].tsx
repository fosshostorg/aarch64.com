import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from "@/styles/Blog/Post.module.scss";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import TwitterIcon from "@/components/icons/Twitter";
import FacebookIcon from "@/components/icons/Facebook";
import LinkedInIcon from "@/components/icons/LinkedIn";
import Head from "next/head";
import MailIcon from "@/components/icons/Mail";
import authors from "@/data/authors";
import CommentSection from "@/components/BlogPage/CommentSection";

const Post = ({ frontmatter, markdownBody, shareUrl }) => (
  <>
    <Head>
      <title>{frontmatter.title}</title>
      <meta name="title" content={frontmatter.title} />
      <meta name="description" content={frontmatter.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={shareUrl} />
      <meta property="og:title" content={frontmatter.title} />
      <meta property="og:description" content={frontmatter.description} />
      <meta
        property="og:image"
        content={`https://arm-64.com/thumbnails/${frontmatter.thumbnail}`}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={shareUrl} />
      <meta property="twitter:title" content={frontmatter.title} />
      <meta property="twitter:description" content={frontmatter.description} />
      <meta
        property="twitter:image"
        content={`https://arm-64.com/thumbnails/${frontmatter.thumbnail}`}
      />
    </Head>
    <Header />
    <div className={styles.blogPost}>
      <div className={styles.thumbnail}>
        <picture>
          <source
            srcSet={require(`../../public/thumbnails/${frontmatter.thumbnail}?webp`)}
            type="image/webp"
          />
          <source
            srcSet={require(`../../public/thumbnails/${frontmatter.thumbnail}`)}
            type={`image/${
              frontmatter.thumbnail.includes(".png") ? "png" : "jpeg"
            }`}
          />
          <img
            src={require(`../../public/thumbnails/${frontmatter.thumbnail}`)}
            alt={`Thumbnail for ${frontmatter.title}`}
            loading="lazy"
          />
        </picture>
      </div>
      <main className={styles.post}>
        <div className={styles.shareButtons}>
          <div className={styles.shareHeading}>Share</div>
          <div className={styles.buttons}>
            <a
              href={`mailto:info@example.com?&subject=&body=${shareUrl}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <MailIcon />
              <span>Share Using E-mail</span>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <TwitterIcon />
              <span>Share Using Twitter</span>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FacebookIcon />
              <span>Share Using Facebook</span>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=&summary=&source=`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedInIcon />
              <span>Share Using LinkedIn</span>
            </a>
          </div>
        </div>
        <article className={styles.main}>
          <h1>{frontmatter.title}</h1>
          <div className={styles.date}>
            {new Date(frontmatter.date).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            })}
          </div>
          <div className={styles.meta}>
            <div className={styles.avatar}>
              <img
                src={`/avatars/${
                  authors.find((a) => a.id === frontmatter.author).img
                }`}
                alt="Photo of the Author"
              />
            </div>
            <div className={styles.author}>
              {authors.find((a) => a.id === frontmatter.author).name}
            </div>
          </div>
          <div className={styles.body}>
            <ReactMarkdown source={markdownBody} allowDangerousHtml />
          </div>
        </article>
      </main>
      <CommentSection />
    </div>
    <Footer />
  </>
);

export const getStaticProps = async (context) => {
  const { slug } = context.params;

  const content = await import(`posts/${slug}.md`);

  const data = matter(content.default);

  if (!data.data.description) {
    data.data.description = data.content
      .split(".")
      .slice(0, 2)
      .map((sentence) => sentence.trim())
      .join(". ");
  }

  const shareUrl = "https://arm-64.com/post/" + slug;

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
      shareUrl,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = fs.readdirSync("posts");
  const slugs = posts.map((file) => file.replace(".md", ""));
  const paths = slugs.map((slug) => `/post/${slug}`);
  return {
    paths,
    fallback: false,
  };
};

export default Post;
