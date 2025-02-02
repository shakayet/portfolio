import React from "react";
import { data } from "./blogdata";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import "./blog.css";

const Blog = () => {
  const blogs = data.blogs;

  return (
    <div className="relative z-30 w-full min-h-screen overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl text-center font-bold mb-6 text-white">
          My Blog Posts
        </h1>

        {/* Blog Posts List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 shadow-lg rounded-lg p-6 w-full overflow-hidden break-words whitespace-normal"

            >
              {/* Blog Image */}
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-auto max-h-52 object-cover rounded-lg"
              />

              {/* Blog Title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-white mt-4 break-words">
                {blog.title}
              </h2>

              {/* Blog Content */}
              <div className="text-gray-300 mt-2 text-sm sm:text-base leading-relaxed break-words">
                <Markdown remarkPlugins={[gfm]}>{blog.content}</Markdown>
              </div>

              {/* References */}
              {blog.references.length > 0 && (
                <div className="mt-4 text-blue-400 text-sm">
                  <h3 className="font-semibold text-white">References:</h3>
                  <ul className="list-disc pl-5">
                    {blog.references.map((reference, index) => (
                      <li key={index} className="break-all">
                        <a
                          href={reference.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
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
    </div>
  );
};

export default Blog;
