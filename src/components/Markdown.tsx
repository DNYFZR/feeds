import "./Markdown.css"
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from 'remark-gfm';
import rehypeHighlight from "rehype-highlight";

interface MarkdownFile {
  path: string;
}

const Render:React.FC<MarkdownFile> = ({ path }) => {
  const [content, setContent] = useState("");
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    link.target = '_blank';
  });

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [path]);

  return (
    <div className="markdown-ui">
      <Markdown 
        className="markdown-body" 
        children={content}
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeHighlight]}
      />
    </div>
  );
};

export default Render