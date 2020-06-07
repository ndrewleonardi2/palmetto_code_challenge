import React from "react";
import SaveButton from "./SaveButton";

export default ({ id, comments, likes, webformatURL, tags }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={webformatURL}></img>
        <SaveButton id={id} />
      </div>

      <div className="card-tags">
        <ul>
          {tags.split(",").map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="card-stars">
        <span data-testid="comments">{comments}</span>
        <i className="icon-star"></i>
      </div>
      <div className="card-comments">
        <span data-testid="likes">{likes}</span>
        <i className="icon-thumbsup"></i>
      </div>
    </div>
  );
};
