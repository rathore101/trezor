"use client";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function Country() {
  const [selected, setSelected] = useState("");
  const [showFlag, setShowFlag] = useState(false);
  const flagShow = () => setShowFlag(!showFlag);

  return (
    <div>
      <div className=" rounded-full">
        <ReactFlagsSelect
          selected={selected}
          onSelect={(code) => setSelected(code)}
          searchable
          showSelectedLabel={false}
          showOptionLabel={true}
          className=" rounded-full"
        />
      </div>
      <div></div>
    </div>
  );
}

export default Country;
