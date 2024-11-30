import React, { useState, useEffect } from "react";
import GoToTopIcon from "@/assets/GoToTopIcon";

function GoToTop() {
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    const TopListener = () => {
      if (window.scrollY > 96) {
        setIsDown(true);
      } else {
        setIsDown(false);
      }
    };
    window.addEventListener("scroll", TopListener);
  }, []);

  const GoToBtn = () => {
    window.scrollTo({ top: 0, right: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`top-btn  flex justify-center items-center  bg-[#0f6148] rounded-full p-3 text-white md:h-14 md:w-14 lg:h-16 lg:w-16 ${
        isDown ? "" : "hidden"
      }`}
      onClick={GoToBtn}
    >
      <div className=" md:hover:-mt-5 hover:-mt-2 ">
        <GoToTopIcon />
      </div>
    </div>
  );
}

export default GoToTop;
