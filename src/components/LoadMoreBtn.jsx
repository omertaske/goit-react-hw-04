import React from "react";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Daha Fazla Yükle
      </button>
    </div>
  );
};

export default LoadMoreBtn;
