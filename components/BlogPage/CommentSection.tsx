import { useEffect, useRef } from "react";
import ReactUtterances from "react-utterances";

const CommentSection = () => {
  return (
    <section>
      <ReactUtterances
        repo="fosshostorg/arm-64.com"
        type="pathname"
        label="blog-comment"
        theme="github-select"
      />
    </section>
  );
};

export default CommentSection;
