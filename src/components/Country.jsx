"use client";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function Country() {
  const [selected, setSelected] = useState("IN");

  const handleSelect = (code) => {
    setSelected(code);
  };

  return (
    <div>
      <div className={`rounded-full `}>
        <ReactFlagsSelect
          selected={selected}
          onSelect={handleSelect}
          searchable
          showSelectedLabel={false}
          showOptionLabel={true}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Country;
