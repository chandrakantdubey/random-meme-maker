import React from "react";

export const Input = ({ value, handleChange, name }) => {
  return (
    <input
      type="text"
      className="top-text"
      value={value}
      name={name}
      onChange={handleChange}
    />
  );
};
