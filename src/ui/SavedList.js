import React from "react";
import { AppContext } from "../context/store";

export default () => (
  <AppContext.Consumer>
    {({ state: { saved } }) => (
      <div className="saved-list">
        <h4>Saved list</h4>
        <ul>
          {saved.map(({ id, largeImageURL }, i) => (
            <li key={i}>
              <a data-testid="saved-item" href={largeImageURL} target="_blank">
                {`#${id}`}
              </a>
              <i className="icon-tab"></i>
            </li>
          ))}
        </ul>
      </div>
    )}
  </AppContext.Consumer>
);
