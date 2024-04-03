import React, { useState } from "react";

import HorizonBarChart from "../Components/DashboardPageComponents/Lists/BarChart";
import LineChart from "../Components/DashboardPageComponents/Lists/LineChart";

import DataMap3 from "../Components/DashboardPageComponents/DataMap3";
import DataTable2 from "../Components/DashboardPageComponents/DataTable2";
import Cicon from "./../assets/calendar.svg";
import M from "./../assets/map.svg";
import Data from "../Components/DashboardPageComponents/Data";
import Dates from "../Components/DashboardPageComponents/Lists/Dates";
import Dates2 from "../Components/DashboardPageComponents/Lists/Dates2";
// import { ZoomControl } from "react-leaflet";

const Dashboard2 = () => {
  //   let largeComponentWidth = "1000px";
  //   let largeComponentHeight = "480px";
  //   let smallComponentWidth = "240px";
  //   let smallComponentHeight = "120px";

  //   const [one, setOne] = useState(<LineChart />);
  //   const [two, setTwo] = useState(<LineChart />);
  //   const [three, setThree] = useState(<div className="w-[220px] h-[100px]"><HorizonBarChart  /></div>);
  //   //<DataMap3 width={`${largeComponentWidth}`} height={`${largeComponentHeight}`}/>
  //   const [four, setFour] = useState(
  //     <DataMap3
  //       width={`${largeComponentWidth}`}
  //       height={`${largeComponentHeight}`}
  //     />
  //   );
  //   const DataMap = <DataMap3 />;
  // console.log(DataMap)
  // console.log(one.type)
  // if (one.type.name === DataMap.type.name ){
  // 	setOne(<DataMap3 width={`${smallComponentWidth}`} height={`${smallComponentHeight}`}/>)
  // }
  // if (four.type.name === DataMap.type.name){
  // 	console.log("four");
  // 	setFour(<DataMap3 width={`${largeComponentWidth}`} height={`${largeComponentHeight}`}/>)
  // }

  return (
    // <section className="bg-[#132442] pt-[8vh] px-[40px] w-full pb-12">
    //   <div className="flex justify-between gap-x-5">
    //     {/* Left Container */}
    //     <div className="w-[1000px]">
    //       <div className="mb-[8px]  ">
    //         {/* Top main  container */}
    //         <div className="w-full h-auto flex justify-between items-center ">
    //           {/* Top no1 container */}
    //           <div
    //             onClick={() => {
    //               setOne(four);
    //               setFour(one);
    //             }}
    //             className={`w-${smallComponentWidth} h-${smallComponentHeight}`}
    //           >
    //             {console.log(one.type.name)}

    //             {one.type.name === DataMap.type.name ? (
    //               <>
    //                 <DataMap3
    //                   width={`${smallComponentWidth}`}
    //                   height={`${smallComponentHeight}`}
    //                   zoom={false}
    //                 />
    //               </>
    //             ) : (
    //               <>
    //                 ${one}

    //               </>
    //             )}
    //           </div>
    //           {/* Top no2 container */}
    //           <div
    //             onClick={() => {
    //               setTwo(four);
    //               setFour(two);
    //             }}
    //             className={`w-${smallComponentWidth} h-${smallComponentHeight}`}
    //           >
    //             {two.type.name === DataMap.type.name ? (
    //               <>
    //                 <DataMap3
    //                   width={`${smallComponentWidth}`}
    //                   height={`${smallComponentHeight}`}
    //                   zoom={false}
    //                 />
    //               </>
    //             ) : (
    //               <>
    //                 ${two}

    //               </>
    //             )}
    //           </div>
    //           {/* Top no3 container */}
    //           <div
    //             onClick={() => {
    //               setThree(four);
    //               setFour(three);
    //             }}
    //             className={`w-${smallComponentWidth} h-${smallComponentHeight} flex justify-end`}
    //           >
    //             {three.type.name === DataMap.type.name ? (
    //               <>
    //                 <DataMap3
    //                   width={`${smallComponentWidth}`}
    //                   height={`${smallComponentHeight}`}
    //                   zoom={false}
    //                 />
    //               </>
    //             ) : (
    //               <>
    //                 ${three}
    //               </>
    //             )}
    //           </div>
    //         </div>
    //       </div>

    //       {/* Dynamic container */}
    //       <div className={`w-${largeComponentWidth} h-${largeComponentHeight}`}>
    //         {four}
    //       </div>
    //     </div>

    //     {/* Right Container */}
    //     <div className="w1/4">
    //       <DataTable2/>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-[#010101] pt-[8vh] p-[10px] w-full pb-12">
      <div className="flex justify-center ">
        {/* Left Container */}
        <div className="bg-[#161616] w-[424px] h-[640px] mr-[16px]">
          <DataMap3 height={"640px"} />
        </div>

        {/* Parent Right Container */}
        <div className="">
          {/* Top Right Container */}
          <div className="bg-[#161616] w-[868px] h-[230px] rounded-md flex justify-center items-center gap-[10px] px-[5px] mb-[16px]">
            {/* top 1 container */}
            <div className="w-1/3  p-[5px] flex justify-center">
              <LineChart />
            </div>
            {/* top 2 container */}
            <div className="w-1/3   p-[5px] flex justify-center">
              <LineChart />
            </div>
            {/* top 3 container */}
            <div className="w-1/3  p-[5px] flex justify-center">
              <HorizonBarChart />
            </div>
          </div>

          {/*Under Right Container  */}
          <div className="bg-[#161616] w-[868px] h-[393px] flex items-center rounded-md px-[20px] py-[10px]">
            <div className="w-full h-[360px] bg-[#233141] rounded flex justify-between items-center  ">
              {/* Inner Left Container */}
              <div className="w-2/5  flex flex-col gap-[16px]   pl-[20px]">
                <h2 className="text-white">မြန်မာ</h2>
                <div className="mb-[7px] bg-[#2a333e] w-[210px] h-[35px] border rounded-3xl px-3 flex items-center">
                  <img src={Cicon} className="w-[15px] h-[15px] text-white" />
                  <p className="text-white text-[12px] ml-[16px]">
                    4 June 2020 - 17 June 2020
                  </p>
                </div>

                <div className="flex items-center mb-[7px]">
                  <img src={M} className="w-[15px] h-[15px] text-white" />
                  <p className="text-white text-[11px] ml-[10px]">
                    22.635687837958972,95.46938926418544
                  </p>
                </div>

                <div className="text-[#7EADE3] w-[274px] h-[183px] bg-[#303d4c] px-[20px] py-[7px]">
                  <p className="font-[700] mb-[7px]">
                    The massacre of the military group
                  </p>
                  <p className="text-[11px]">
                    Between September and December 2023, the military group
                    committed at least (37) mass killings in which five (5) or
                    more people were killed, and a total of (283) civilians were
                    killed.2021 From February 2023 As of December, the military
                    group has committed at least (210){" "}
                  </p>
                </div>
              </div>

               {/* Vertical Dashed Line */}
      <div className="relative w-[1px] h-full bg-gray-300">
        <div className="absolute  h-full border-dashed border-gray-300"></div>
      </div>


              {/* Inner Right Container */}
              <div className="w-3/5 flex flex-col  gap-[16px]   px-[20px] ">
                {/* top */}
                <div className="w-[444px] h-[58px] bg-[#303d4c] rounded-md flex justify-around items-center">
                  <div className="flex flex-col ">
                    <p className="text-[12px] text-[#A6A1C0]">Price</p>
                    <p className="text-[13px] text-white">$9,542.39</p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-[12px] text-[#A6A1C0]">Price</p>
                    <p className="text-[13px] text-white">$9,542.39</p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-[12px] text-[#A6A1C0]">Price</p>
                    <p className="text-[13px] text-white">$9,542.39</p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-[12px] text-[#A6A1C0]">Price</p>
                    <p className="text-[13px] text-white">$9,542.39</p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-[12px] text-[#A6A1C0]">Price</p>
                    <p className="text-[13px] text-white">$9,542.39</p>
                  </div>
                </div>

                 {/* Horizontal Dashed Line */}
        <div className="relative h-[1px] mt-[10px] bg-gray-300">
          <div className="absolute w-full h-[1px] border-dashed border-gray-300"></div>
        </div>

                {/* bottom  */}
                <div className="flex  items-center mt-[10px] gap-[10px]">
                  <div className="w-[264px] h-[200px] bg-[#303d4c]  rounded-md">
                    <Data />
                  </div>
                  <div className="w-[170px] h-[200px] bg-[#303d4c] rounded-md flex justify-center items-center">
                    <Dates2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard2;
