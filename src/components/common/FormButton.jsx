import React from "react";

const FormButton = ({
  text = "Submit",
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {text}
    </button>
  );
};

export default FormButton;
