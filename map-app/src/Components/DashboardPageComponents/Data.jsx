import React, { useState } from "react";

// Added Logo
import L1 from "./../../assets/airStrike.svg";
import L2 from "./../../assets/armed.svg";
import L3 from "./../../assets/massacre.svg";
import L4 from "./../../assets/casualty.svg";
import L5 from "./../../assets/arrest.svg";

const Data = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const data = [
    { logo: L1, name: "Airstrike", number: 10 },
    { logo: L2, name: "Armed Clashes", number: 20 },
    { logo: L3, name: "Massacre", number: 30 },
    { logo: L4, name: "Casualty", number: 40 },
    { logo: L5, name: "Arrest", number: 50 },
  ];

  return (
    <>
      {" "}
      {/* Datas */}
      <div className=" w-full h-full flex flex-col justify-center items-center px-[10px] gap-[10px]">
        {/* {data.map(({ name, number, logo }, index) => (
          <div
            key={index}
            className="flex justify-between items-center space-y-[8px]"
          >
            <div className="flex items-center px-[6px] py-[8px] rounded-[3px] gap-[10px] hover:bg-white hover:bg-opacity-[0.1] cursor-pointer">
              <div>
                <img src={logo} alt="logo" className="w-[15px] h-[15px]" />
              </div>
              <div>
                <div className="text-[13px] text-white">{name}</div>
              </div>
            </div>
            <div className="text-[13px] text-white">{number} Cases</div>
          </div>
        ))} */}

        {data.map(({ name, number, logo }, index) => (
          <div
            key={index}
            className="w-full hover:bg-gray-600 flex justify-between items-center py-[5px] px-[7px] rounded-md"
          >
            <div>
              <img src={logo} alt="logo" className="w-[15px] h-[15px]" />
            </div>

            <div className="text-[13px] text-[white]">{name}</div>

            <div className="text-[13px] text-white">{number} Cases</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Data;
