import React from "react";
import { AppContext } from "../context/store";
import { fetchData } from "../context/actionCreators";

export default ({ title }) => (
  <AppContext.Consumer>
    {({ state: { url, query }, dispatch }) => (
      <button
        onClick={() => {
          fetchData(url, query, dispatch);
        }}
      >
        {title}
      </button>
    )}
  </AppContext.Consumer>
);
