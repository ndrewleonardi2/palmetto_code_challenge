import React from "react";

export default ({ defaultOption, options, handleChange }) => (
  <select
    data-testid="category-select"
    defaultValue={defaultOption}
    onChange={handleChange}
  >
    <option data-testid="defaultOption" value={defaultOption} disabled hidden>
      {defaultOption}
    </option>
    {options.map((option, i) => (
      <option key={i}>{option}</option>
    ))}
  </select>
);
