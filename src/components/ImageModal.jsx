import React, { useEffect } from "react";

const ImageModal = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
      onClick={onClose}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className="max-h-[90%] max-w-[90%] rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()} // Resmin üstüne tıklayınca kapanmasın
      />
    </div>
  );
};

export default ImageModal;
