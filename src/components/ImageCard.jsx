import React from "react";

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <li
      className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <img src={src} alt={alt} className="w-full h-48 object-cover" />
    </li>
  );
};

export default ImageCard;
