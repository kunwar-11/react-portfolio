import React from "react";
import { projects } from "../data/project";

let id = 0;
export const Projects = () => {
  return (
    <>
      <h1 className="text-3xl text-center py-8">PROJECTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 mx-4 sm:mx-8">
        {projects.map((each) => (
          <div
            key={each.pid}
            className="flex flex-col shadow pt-3"
            style={{ width: "fit-content" }}
          >
            <div>
              <img
                src={each.image}
                alt="project-desc"
                className="w-2/5 m-auto"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3>{each.projectName}</h3>
              <p>{each.ProjectDetails}</p>
              <div className="flex flex-row items-center justify-center pt-4">
                {each.TechStack.map((item) => [
                  <p key={++id} className="ml-2">
                    {item}
                  </p>,
                ])}
              </div>
            </div>
            <div className="flex justify-evenly pb-4">
              <a href={each.liveLink} className="text-purple-500">
                Live
              </a>
              <a href={each.repo} className="text-purple-500">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
