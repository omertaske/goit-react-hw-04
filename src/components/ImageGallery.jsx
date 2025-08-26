import React from "react";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((img) => (
        <div
          key={img.id}
          className="cursor-pointer rounded-lg overflow-hidden shadow-fuchsia-800 shadow-md hover:shadow-lg transition transform hover:scale-105"
          onClick={() => onImageClick(img)}
        >
          <img
            src={img.urls.small}
            alt={img.alt_description}
            className="w-full h-60 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
