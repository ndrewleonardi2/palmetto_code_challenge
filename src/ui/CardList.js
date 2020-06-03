import React from "react";
import Card from "./Card";

export default ({ data }) => (
  <div className="list">
    {data.map((item, i) => (
      <Card key={i} {...item} />
    ))}
  </div>
);
