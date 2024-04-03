import React, { useState } from "react";
import RadarChartComponent from "./Lists/RadarChartComponent";
// import MonthYearSlider from './Lists/MonthYearSlider'
import Dates from "./Lists/Dates";
import BarLine from "./Lists/BarLine";
// Added Logo
import L1 from "./../../assets/airStrike.svg";
import L2 from './../../assets/armed.svg';
import L3 from './../../assets/massacre.svg';
import L4 from './../../assets/casualty.svg';
import L5 from './../../assets/arrest.svg';

const DataTable2 = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const data = [
    { logo:L1,name: 'Airstrike', number: 10 },
    { logo:L2, name: 'Armed Clashes', number: 20 },
    { logo:L3, name: 'Massacre', number: 30 },
    {  logo:L4,name: 'Casualty', number: 40 },
    {  logo:L5,name: 'Arrest', number: 50 },
  ];

  return (
    <div className="w-[255px] h-[620px] px-[10px]  flex flex-col justify-start items-center rounded-lg bg-[#3551a4]">
      {/* <div className='text-white'>DataTable</div> */}
      {/* <div className="w-[200px] h-[220px]">
        <RadarChartComponent />
      </div> */}
      <div className="w-full mb-[10px]">
        <Dates />
      </div>
      <div className="w-full mb-[5px]">
        <BarLine />
      </div>

      {/* Datas */}
      <div className=" w-full px-[10px]">
      {data.map(({ name, number ,logo}, index) => (
        <div key={index} className="flex justify-between items-center space-y-[8px]">
          <div className="flex items-center px-[6px] py-[8px] rounded-[3px] gap-[10px] hover:bg-white hover:bg-opacity-[0.1] cursor-pointer">
            <div>
          <img src={logo} alt="logo" className="w-[15px] h-[15px]" />
          </div>
          <div>
           <div className="text-[13px] text-white"
           
           
          >
            {name}
          </div>
          </div>
          </div>
          <div  className="text-[13px] text-white">{number} Cases</div>
         
        </div>
      ))}
    </div>

    <div className="w-full mt-[20px]">
        <BarLine />
      </div>
    </div>
  );
};

export default DataTable2;
