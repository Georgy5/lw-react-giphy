/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */
import React from 'react';

const Gif = ({ id, selectGif }) => {
  const handleClick = () => {
    console.log('clicked Homer');
    console.log(selectGif);
    if (selectGif) {
      console.log('selected GIF');
      selectGif(id);
    }
  };
  const src = `https://media.giphy.com/media/${id}/giphy.gif`;
  return (
    <img
      src={src}
      className="gif"
      onClick={handleClick}
    />
  );
};

export default Gif;
