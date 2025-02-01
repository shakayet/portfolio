import React from "react";
import { data } from "./blogdata";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import "./blog.css";

const Blog = () => {
  const blogs = data.blogs;

  return (
    <div className="relative z-30 max-w-4xl mx-auto px-4 py-8 overflow-hidden">
      <h1 className="text-4xl text-center font-bold mb-6 text-white">My Blog Posts</h1>

      {/* Blog Posts List */}
      <div className="flex flex-col gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-900 shadow-lg rounded-lg p-6 w-full">
            {/* Blog Image */}
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-auto object-cover rounded-lg"
            />

            {/* Blog Title */}
            <h2 className="text-2xl font-semibold text-white mt-4">{blog.title}</h2>

            {/* Blog Content */}
            <div className="text-gray-300 mt-2">
              <Markdown remarkPlugins={[gfm]}>{blog.content}</Markdown>
            </div>

            {/* References */}
            {blog.references.length > 0 && (
              <div className="mt-4 text-blue-400 text-sm">
                <h3 className="font-semibold text-white">References:</h3>
                <ul className="list-disc pl-5">
                  {blog.references.map((reference, index) => (
                    <li key={index}>
                      <a href={reference.url} target="_blank" rel="noopener noreferrer">
                        {reference.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
