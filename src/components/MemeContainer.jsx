import React from "react";

export const MemeContainer = ({ meme }) => {
  return (
    <div className="meme-container">
      <h2>{meme.topText}</h2>
      <img src={meme.imgUrl} />
      <h2>{meme.bottomText}</h2>
    </div>
  );
};
