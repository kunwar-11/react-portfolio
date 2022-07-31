import React from "react";

export const Profile = () => {
  return (
    <div className="flex flex-col justify-center sm:flex-row items-center sm:max-w-screen-sm sm:mx-auto sm:mt-32 mt-8">
      <img
        src="/profile.jfif"
        alt="profile"
        className="rounded-full w-3/5 sm:w-2/5 mr-3 p-1 sm:p-1.5 border-2 border-purple-500 mb-3 sm:mb-0"
      />
      <div>
        <h2 className="text-xl pb-4 sm:pb-6 sm:text-2xl">Hello,</h2>
        <h1 className="text-2xl pb-4 sm:pb-6 sm:text-3xl text-purple-500">
          I am Rishabh Kunwar
        </h1>
        <h2 className="text-xl pb-4 sm:pb-6 sm:text-2xl">
          Full Stack Web Developer
        </h2>
        <h2 className="mx-2">
          Familiar With :-{" "}
          <span className="text-purple-500 font-medium">
            {" "}
            React js , Javascript , Express js , node js , mongoose , Github,
            tailwind css HTML5 , CSS3 , redux-toolkit
          </span>
        </h2>
      </div>
    </div>
  );
};
