import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <RotatingLines
        visible={true}
        height="60"
        width="60"
        color="blue"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
