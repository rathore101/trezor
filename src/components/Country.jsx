// "use client";
// import React, { useState, useEffect } from "react";

// const CountrySelector = () => {
//   const [countries, setCountries] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) =>
//         setCountries(
//           data.map((country) => ({
//             name: country.name.common,
//             flag: country.flags.svg,
//           }))
//         )
//       )
//       .catch(console.error);
//   }, []);

//   return (
//     <div className="relative">
//       {/* Toggle Button */}
//       <button
//         onClick={() => setShowDropdown(!showDropdown)}
//         className="flex items-center gap-2 border px-4 py-2 rounded"
//       >
//         {selectedCountry ? (
//           <img
//             src={selectedCountry.flag}
//             alt={selectedCountry.name}
//             className="w-5 h-5"
//           />
//         ) : (
//           "Select Country"
//         )}
//       </button>

//       {/* Dropdown */}
//       {showDropdown && (
//         <div className="absolute mt-2 w-64 bg-white border rounded shadow-lg max-h-64 overflow-y-auto">
//           {countries.map((country) => (
//             <div
//               key={country.name}
//               onClick={() => {
//                 setSelectedCountry(country);
//                 setShowDropdown(false);
//               }}
//               className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
//             >
//               <img src={country.flag} alt={country.name} className="w-5 h-5" />
//               <span>{country.name}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CountrySelector;

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
