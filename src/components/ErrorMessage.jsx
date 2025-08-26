import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <p className="text-red-500 text-center mt-6 font-semibold">
      {message || "Bir şeyler yanlış gitti..."}
    </p>
  );
};

export default ErrorMessage;
