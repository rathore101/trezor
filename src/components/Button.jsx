import React from "react";

function Button({ type, variant, className, id, onClick, children }) {
  return (
    <div>
      <button
        type={type ? type : "button"}
        variant={variant}
        className={
          className
            ? `  px-5  rounded-full py-4 ${className}`
            : "bg-[#0f6148] px-5 text-white rounded-full py-4"
        }
        id={id}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
