import React from "react";
import Button from "./Button";

export default ({ comments, likes, webformatURL, tags }) => (
  <div className="card">
    <div className="card-image">
      <img src={webformatURL}></img>
      <Button title={`Save`} type="saved" />
    </div>

    <div className="card-tags">
      <ul>
        {tags.split(",").map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
    </div>
    <div className="card-stars">
      <span>{comments}</span>
      <i className="icon-star"></i>
    </div>
    <div className="card-comments">
      <span>{likes}</span>
      <i className="icon-thumbsup"></i>
    </div>
  </div>
);
