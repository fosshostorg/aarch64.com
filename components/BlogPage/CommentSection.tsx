const CommentSection = () => (
  <section
    ref={(elem) => {
      if (!elem) {
        return;
      }
      const scriptElem = document.createElement("script");
      scriptElem.src = "https://utteranc.es/client.js";
      scriptElem.async = true;
      scriptElem.crossOrigin = "anonymous";
      scriptElem.setAttribute("repo", "fosshostorg/arm-64.com");
      scriptElem.setAttribute("issue-term", "pathname");
      scriptElem.setAttribute("label", "blog-comment");
      scriptElem.setAttribute("theme", "github-light");
      elem.appendChild(scriptElem);
    }}
  />
);

export default CommentSection;
