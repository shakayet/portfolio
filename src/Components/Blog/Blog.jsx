import React from "react";
import { data } from "./blogdata";
import Markdown from "react-markdown";
import "./blog.css";
import gfm from "remark-gfm";

const Blog = () => {
  const blogs = data.blogs;

  return (
    <div className="container m-2">
      <div className="animate__animated animate__pulse flex flex-col justify-center items-center min-h-[90vh]">
        {blogs.map((blog) => (
          <div  key={blog.id} className="mb-8 d-flex justify-center">
            <h2 className="text-2xl">{blog.title}</h2>
            <img 
              src={blog.imageUrl}
              alt={blog.title}
              className="max-w-full mb-4 m-auto"
            />
            <div >
              {/* <Markdown  remarkPlugins={[gfm]} children={blog.content} /> */}
              {blog.content}
            </div>

            <ul className="list-disc pl-6">
              {blog.references.map((reference, index) => (
                <li key={index}>
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {reference.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
