

import React, { useState } from "react";

// Added Logo
import L1 from "./../../assets/airStrike.svg";
import L2 from "./../../assets/armed.svg";
import L3 from "./../../assets/massacre.svg";
import L4 from "./../../assets/casualty.svg";
import L5 from "./../../assets/arrest.svg";

const Data2 = () => {
  const [selectedData, setSelectedData] = useState([]);

  const handleDataClick = (data) => {
    setSelectedData((prevSelectedData) => {
      if (prevSelectedData.some((d) => d.id === data.id)) {
        return prevSelectedData.filter((d) => d.id !== data.id);
      } else {
        return [...prevSelectedData, data];
      }
    });
  };

  const handleSelectAll = () => {
    setSelectedData(data);
  };

  const handleClearAll = () => {
    setSelectedData([]);
  };

  const data = [
    { id: 1, logo: L1, name: "Airstrike", number: 10 },
    { id: 2, logo: L2, name: "Armed Clashes", number: 20 },
    { id: 3, logo: L3, name: "Massacre", number: 30 },
    { id: 4, logo: L4, name: "Casualty", number: 40 },
    { id: 5, logo: L5, name: "Arrest", number: 50 },
  ];

  const isAllSelected = data.every((d) =>
    selectedData.some((sd) => sd.id === d.id)
  );

  return (
    <>
      {/* Datas */}
      <div className=" w-full h-full flex flex-col justify-center items-center px-[10px] py-[15px] gap-[5px]">
        <div className="w-full flex justify-between text-[11px] px-[5px]">
          <div className=" text-white text-left">Filter By</div>
          <div>
            {isAllSelected ? (
              <button
                className="text-white hover:text-blue-500"
                onClick={handleClearAll}
              >
                clear all
              </button>
            ) : (
              <button
                className="text-white hover:text-blue-500"
                onClick={handleSelectAll}
              >
                select all
              </button>
            )}
          </div>
        </div>
        {data.map(({ id, name, number, logo }) => (
          <div
            key={id}
            className={`w-full cursor-pointer border-[1px] border-[#1e1835] flex justify-between items-center py-[2px] px-[3px] rounded-md ${
              selectedData.some((d) => d.id === id) ? "bg-[#0f007b]" : ""
            }`}
            onClick={() => handleDataClick({ id, name, number, logo })}
          >
            <div>
              <img src={logo} alt="logo" className="w-[10px] h-[10px]" />
            </div>
            <div className="text-[10px] text-left text-[white]">{name}</div>
            <div className="text-[10px] text-left text-white">{number} Cases</div>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Data2;






