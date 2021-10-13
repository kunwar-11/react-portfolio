import React from "react";
import { blogs } from "../data/blogs";
export const Blogs = () => {
  return (
    <>
      <h1 className="text-3xl text-center py-8">BLOGS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 mx-4 sm:mx-8">
        {blogs.map((each) => (
          <div
            key={each.bId}
            className="flex flex-col shadow pt-3"
            style={{ width: "fit-content" }}
          >
            <div>
              <img
                src={each.coverPage}
                alt="project-desc"
                className="w-2/5 m-auto"
              />
            </div>
            <div className="flex flex-col flex-grow mb-3 mt-3">
              <h3 className="mb-3">{each.topicName}</h3>
              <p className="mb-3">{each.initialLines}</p>
              <p className="mb-3">{each.date}</p>
            </div>
            <div className="flex justify-evenly pb-4">
              <a href={each.blogLink} className="text-purple-500">
                To The Blog
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
