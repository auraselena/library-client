import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar h-screen px-12 py-60">
      <ul>
        <li className="mb-5 hover:block hover:rounded-full hover:border-primary hover:transition hover:duration-300">
          <a href="/">Home</a>
        </li>
        <li className="mb-5">
          <a href="/categories">Categories</a>
        </li>
        <li className="mb-5">
          <a href="/my-books">My Bookshelf</a>
        </li>
      </ul>

      <ul>
        <li className="mb-5">
          <a href="/profile"></a>Profile
        </li>
        <li>
          <a href="/">Sign Out</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
