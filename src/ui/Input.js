import React, { useContext } from "react";
import { AppContext } from "../context/store";

export default ({ placeholder }) => {
  const { dispatch } = useContext(AppContext);

  const handleChange = ({ target: { value } }) =>
    dispatch({ type: "SAVE_TERM", payload: value.trim().toLowerCase() });

  return (
    <div className="input-container">
      <input
        data-testid="search-input"
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
