import React from "react";

export default ({ defaultOption, options }) => (
  <select>
    <option value={defaultOption} disabled hidden>
      {defaultOption}
    </option>
    {options.map((option, i) => (
      <option key={i}>{option}</option>
    ))}
  </select>
);
