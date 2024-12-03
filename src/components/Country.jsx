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
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Country;

// "use client";
// import React, { useEffect, useState } from "react";
// import DownArrow from "@/assets/DownArrow";
// import SearchIcon from "@/assets/SearchIcon";

// function Country1() {
//   const [countries, setCountries] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [selected, setSelected] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:3000/countries")
//       .then((res) => res.json())
//       .then(({ data }) => {
//         console.log("data", Object.entries(data));
//         setCountries(Object.entries(data));
//       });
//   }, []);
//   return (
//     <div className="">
//       <div
//         className="flex items-center justify-center gap-1 w-full "
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="bg-white shadow">
//           {selected
//             ? selected?.length > 8
//               ? selected?.substring(0, 8) + "..."
//               : selected
//             : "Country"}
//         </div>
//         <DownArrow />
//       </div>
//       <ul
//         className={` bg-white shadow mt-7 p-5 right-0 rounded-2xl absolute ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         <h2 className="flex items-center justify-center text-2xl pb-4">
//           Country of Delivery
//         </h2>
//         <div className="overflow-auto overflow-y-scroll h-[400px] w-[400px]  scrollbar-hidden ">
//           <div className=" flex items-center sticky top-0 mb-2 bg-[#f6f6f6] px-3 py-2 rounded-lg ">
//             <div className="">
//               <SearchIcon />
//             </div>
//             <input
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value.toLowerCase())}
//               type="text"
//               placeholder="Enter Country"
//               className="w-full focus:outline-none px-3 placeholder:text-gray-500 sty py-2 bg-[#f6f6f6]"
//             />
//           </div>
//           {countries?.map(([code, dataObj]) => (
//             <li
//               key={code}
//               value={code}
//               className={`px-5 py-2 ${
//                 dataObj?.country?.toLowerCase().startsWith(inputValue)
//                   ? "block"
//                   : "hidden"
//               } ${dataObj?.country === selected && "bg-[#f6f6f6] "}`}
//               onClick={() => setSelected(dataObj?.country)}
//             >
//               {dataObj.country}
//             </li>
//           ))}
//         </div>
//       </ul>
//     </div>
//   );
// }

// export default Country1;

// {
//   /* <ul className="bg-white shadow mt-7 overflow-hidden overflow-y-scroll h-[200px] absolute ">
//   <div className="flex sticky top-0 mb-2 bg-white px-2 py-2">
//     <input
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value.toLowerCase())}
//       type="text"
//       placeholder="Enter Country"
//       className="w-full focus:outline-none px-3 placeholder:text-gray-500 sty"
//     />
//   </div>
//   {countries?.map(([code, dataObj]) => (
//     <li
//       key={code}
//       value={code}
//       className={`px-5 ${
//         dataObj?.country?.toLowerCase().startsWith(inputValue)
//           ? "block"
//           : "hidden"
//       }`}
//       onClick={() => setSelected(dataObj?.country)} // Update the selected state
//     >
//       {dataObj.country}
//     </li>
//   ))}
// </ul>; */
// }
