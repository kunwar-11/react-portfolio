import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly p-4 mb-3 sticky top-0 left-0 bg-purple-500 text-white">
      <NavLink to="/" activeClassName="font-bold" end>
        <h2>Home</h2>
      </NavLink>
      <NavLink to="/projects" activeClassName="font-bold">
        <h2>Projects</h2>
      </NavLink>
      <NavLink to="/blogs" activeClassName="font-bold">
        <h2>Blogs</h2>
      </NavLink>
    </nav>
  );
};
