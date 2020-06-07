import React from "react";
import Card from "./Card";
import { AppContext } from "../context/store";

export default () => {
  return (
    <AppContext.Consumer>
      {({ state: { error, images, loading } }) => (
        <div className="list">
          {loading ? (
            <p>Loading ... </p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            images.map((item, i) => <Card key={i} {...item} />)
          )}
        </div>
      )}
    </AppContext.Consumer>
  );
};
