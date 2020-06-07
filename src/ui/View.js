import React from "react";

const d = new Date();
const year = d.getFullYear();

export default ({ children, title, sideContent }) => {
  return (
    <div className="container">
      <header>
        <h4>{title}</h4>
      </header>
      <main>{children}</main>
      <aside>{sideContent}</aside>
      <footer>
        <span>&#169;{` Palmetto ${year}`}</span>
      </footer>
    </div>
  );
};
