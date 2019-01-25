import React from "react";
const SearchBox = ({ value, handleChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--greeen bg-lightest-blue"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="search robots"
      />
    </div>
  );
};

export default SearchBox;
