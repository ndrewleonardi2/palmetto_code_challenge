import React from "react";

const types = new Map([
  ["save", "save-button"],
  ["saved", "saved-button"],
]);

export default ({ title, type }) => (
  <button className={types.get(type)}>{title}</button>
);
