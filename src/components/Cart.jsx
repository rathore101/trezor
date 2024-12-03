"use client";
import React from "react";
import { useState } from "react";

function Cart() {
  const [count, setCount] = useState(0);
  return (
    <div
      onClick={() => setCount((count) => count + 1)}
      className="flex gap-2 items-center"
    >
      Cart{" "}
      <div className="bg-[#efefef] rounded-full p-1 flex items-center justify-center size-7">
        {count}
      </div>
    </div>
  );
}

export default Cart;
