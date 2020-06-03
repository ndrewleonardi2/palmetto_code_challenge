import React from "react";

export default ({ data }) => (
  <div className="saved-list">
    <ul>
      {data.map(({ id, largeImageURL }, i) => (
        <li key={i}>
          <a href={largeImageURL} target="_blank">
            {`#${id}`}
          </a>
          <i className="icon-tab"></i>
        </li>
      ))}
    </ul>
  </div>
);
