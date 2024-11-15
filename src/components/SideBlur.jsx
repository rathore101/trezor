import React from "react";

export default function SideBlur({ toggkeNavbar, isClick }) {
  return (
    <div className="sm:block md:hidden">
      <div
        className={`w-full h-screen ${
          isClick
            ? "bg-transparent backdrop-blur-sm"
            : "bg-transparent w-full  backdrop-blur-sm"
        } bg-transparent absolute top-0 left-0 `}
        onClick={toggkeNavbar}
      ></div>
    </div>
  );
}
