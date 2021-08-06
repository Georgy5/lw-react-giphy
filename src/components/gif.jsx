import React from 'react';

const Gif = ({ id }) => {
  const src = `https://media.giphy.com/media/${id}/giphy.gif`;
  return (
    <img src={src} alt="" className="gif" />
  );
};

export default Gif;
