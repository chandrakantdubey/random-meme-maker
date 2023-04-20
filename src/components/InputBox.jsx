import React from "react";
import { Input } from "./Input";

export const InputBox = ({ meme, handleChange, getMemeImage }) => {
  return (
    <div className="input-text">
      <Input value={meme.topText} handleChange={handleChange} name="topText" />
      <Input
        value={meme.bottomText}
        handleChange={handleChange}
        name="bottomText"
      />
      <button className="input-btn btn" onClick={getMemeImage}>
        Get new meme
      </button>
    </div>
  );
};
