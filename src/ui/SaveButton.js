import React from "react";
import { AppContext } from "../context/store";

export default ({ id }) => (
  <AppContext.Consumer>
    {({ state: { saved }, dispatch }) => {
      const isSaved = saved.map(({ id }) => id).includes(id);
      return (
        <button
          data-testid="save-button"
          className={isSaved ? `saved-button` : `save-button`}
          onClick={() => {
            dispatch({
              type: isSaved ? "UNSAVE_IMAGE" : "SAVE_IMAGE",
              payload: id,
            });
          }}
        >
          {isSaved ? "Unsave" : "Save"}
        </button>
      );
    }}
  </AppContext.Consumer>
);
