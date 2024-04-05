import React, { useState } from "react";

import HorizonBarChart from "../Components/DashboardPageComponents/Lists/BarChart";
import LineChart from "../Components/DashboardPageComponents/Lists/LineChart";

import DataMap3 from "../Components/DashboardPageComponents/DataMap3";
// import DataTable2 from "../Components/DashboardPageComponents/DataTable2";
// Icons
import Cicon from "./../assets/calendar.svg";
import M from "./../assets/map.svg";
import Data from "../Components/DashboardPageComponents/Data";
import Max from "../assets/maximize.svg";
import Min from "../assets/minimize.svg";
import L from "../assets/left-arrow.svg";
import R from "../assets/right-arrow.svg";

// Slides
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

import Dates from "../Components/DashboardPageComponents/Lists/Dates";
import Dates2 from "../Components/DashboardPageComponents/Lists/Dates2";
// import { ZoomControl } from "react-leaflet";

const Dashboard2 = () => {
  const [activeChart, setActiveChart] = useState(0); // 0, 1, or 2 for the three charts
  const [isFullWidth, setIsFullWidth] = useState(false);

  const [isDefaultLayout, setIsDefaultLayout] = useState(true);

  
  const handleChartClick = (chartIndex) => {
    setActiveChart(chartIndex);
    setIsFullWidth(!isFullWidth);
  };

  return (
    <section className="bg-[#010101]  p-[10px] w-full ">
      <div className="flex justify-center  ">
        {isDefaultLayout ? (
          <>
            {/* Left Container */}
            <div className="bg-[#161616] w-[424px] h-[640px] mr-[16px]">
              <DataMap3 width={"424px"} height={"640px"} />
            </div>

            {/* Parent Right Container */}
            <div className="">
              {/*Top Right Container */}

              <div
                className={`relative bg-[#161616] w-[868px] h-[230px] rounded-md flex justify-center items-center gap-[10px] px-[20px] mb-[16px]`}
              >
                {!isFullWidth && (
                  <>
                    {/*1 container */}
                    <div
                      className="w-1/3  p-[5px] hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer  flex justify-center"
                      onClick={() => handleChartClick(0)}
                    >
                      <LineChart />
                    </div>
                    {/*2 container */}
                    <div
                      className="w-1/3   p-[5px]  hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer flex justify-center"
                      onClick={() => handleChartClick(1)}
                    >
                      <LineChart />
                    </div>
                    {/* 3 container */}
                    <div
                      className="w-1/3  p-[5px]  hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer flex justify-center"
                      onClick={() => handleChartClick(2)}
                    >
                      <HorizonBarChart />
                    </div>
                  </>
                )}
                {isFullWidth && (
                  <>
                    <div className="w-[868px] h-[230px] flex justify-center p-[20px]">
                      <div
                        className={`chart-transition ${
                          activeChart === 0 ? "active" : ""
                        }`}
                      >
                        {activeChart === 0 && <LineChart />}
                      </div>
                      <div
                        className={`chart-transition ${
                          activeChart === 1 ? "active" : ""
                        }`}
                      >
                        {activeChart === 1 && <LineChart />}
                      </div>
                      <div
                        className={`chart-transition ${
                          activeChart === 2 ? "active" : ""
                        }`}
                      >
                        {activeChart === 2 && <HorizonBarChart />}
                      </div>
                    </div>
                    <div className="slide-nav">
                      <button
                        onClick={() =>
                          setActiveChart((activeChart - 1 + 3) % 3)
                        }
                        className="slide-nav-arrow left "
                      >
                        {/* &lt; */}
                        <img src={L} className="w-[25px] h-[25px]" />
                      </button>

                      <button
                        onClick={() => setActiveChart((activeChart + 1) % 3)}
                        className="slide-nav-arrow right"
                      >
                        {/* &gt; */}
                        <img src={R} className="w-[25px] h-[25px]" />
                      </button>
                    </div>
                  </>
                )}
                <button
                  className="absolute bottom-0  right-4 w-[50px] h-[50px]  font-bold py-2 px-4 rounded"
                  onClick={() => setIsFullWidth(!isFullWidth)}
                >
                  {isFullWidth ? (
                    <img src={Min} className="w-[25px] h-[25px]" />
                  ) : (
                    <img src={Max} className="w-[25px] h-[25px]" />
                  )}
                </button>
              </div>

              {/*Under Right Container  */}
              <div className="bg-[#161616] w-[868px] h-[393px] flex items-center rounded-md px-[20px] py-[10px]">
                <div className="w-full h-[360px] bg-[#233141] rounded flex justify-between items-center py-[20px] ">
                  {/* Inner Left Container */}
                  <div className="w-2/5  flex flex-col gap-[16px]   pl-[20px]">
                    <div className="flex items-center justify-between mr-1">
                      <h2 className="text-white">မြန်မာ</h2>
                      <div className="flex justify-end p-0">
                        <button
                          className={`p-1 rounded mr-2 ${
                            isDefaultLayout
                              ? "bg-blue-500 text-white"
                              : "bg-gray-300"
                          }`}
                          onClick={() => setIsDefaultLayout(true)}
                        >
                          L1
                        </button>
                        <button
                          className={`p-1 rounded ${
                            isDefaultLayout
                              ? "bg-gray-300"
                              : "bg-blue-500 text-white"
                          }`}
                          onClick={() => setIsDefaultLayout(false)}
                        >
                          L2
                        </button>
                      </div>
                    </div>
                    <div className="mb-[7px] bg-[#2a333e] w-[210px] h-[35px] border rounded-3xl px-3 flex items-center">
                      <img
                        src={Cicon}
                        className="w-[15px] h-[15px] text-white"
                      />
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
                        committed at least (37) mass killings in which five (5)
                        or more people were killed, and a total of (283)
                        civilians were killed.2021 From February 2023 As of
                        December, the military group has committed at least
                        (210){" "}
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
                      <div className="w-[264px] h-[200px] bg-[#303d4c] flex items-center  rounded-md">
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
          </>
        ) : (
          <>
            {/* Parent Container */}
            <div className="max-w-[1329px] flex flex-col justify-center items-center">
              {/* Top Container */}

              <div
                className={`relative bg-[#161616] w-full h-[230px] rounded-md flex justify-center items-center gap-[10px]  mb-[10px]`}
              >
                {!isFullWidth && (
                  <>
                    {/*1 container */}
                    <div
                      className="w-1/3  p-[5px] hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer  flex justify-center"
                      onClick={() => handleChartClick(0)}
                    >
                      <LineChart />
                    </div>
                    {/*2 container */}
                    <div
                      className="w-1/3   p-[5px]  hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer flex justify-center"
                      onClick={() => handleChartClick(1)}
                    >
                      <LineChart />
                    </div>
                    {/* 3 container */}
                    <div
                      className="w-1/3  p-[5px]  hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer flex justify-center"
                      onClick={() => handleChartClick(2)}
                    >
                      <HorizonBarChart />
                    </div>
                  </>
                )}
                {isFullWidth && (
                  <>
                    <div className="w-[868px] h-[230px] flex justify-center p-[20px]">
                      <div
                        className={`chart-transition ${
                          activeChart === 0 ? "active" : ""
                        }`}
                      >
                        {activeChart === 0 && <LineChart />}
                      </div>
                      <div
                        className={`chart-transition ${
                          activeChart === 1 ? "active" : ""
                        }`}
                      >
                        {activeChart === 1 && <LineChart />}
                      </div>
                      <div
                        className={`chart-transition ${
                          activeChart === 2 ? "active" : ""
                        }`}
                      >
                        {activeChart === 2 && <HorizonBarChart />}
                      </div>
                    </div>
                    <div className="slide-nav">
                      <button
                        onClick={() =>
                          setActiveChart((activeChart - 1 + 3) % 3)
                        }
                        className="slide-nav-arrow left "
                      >
                        {/* &lt; */}
                        <img src={L} className="w-[25px] h-[25px]" />
                      </button>

                      <button
                        onClick={() => setActiveChart((activeChart + 1) % 3)}
                        className="slide-nav-arrow right"
                      >
                        {/* &gt; */}
                        <img src={R} className="w-[25px] h-[25px]" />
                      </button>
                    </div>
                  </>
                )}
                <button
                  className="absolute bottom-0  right-4 w-[50px] h-[50px]  font-bold py-2 px-4 rounded"
                  onClick={() => setIsFullWidth(!isFullWidth)}
                >
                  {isFullWidth ? (
                    <img src={Min} className="w-[25px] h-[25px]" />
                  ) : (
                    <img src={Max} className="w-[25px] h-[25px]" />
                  )}
                </button>
              </div>

              {/* Bottom Parent Container */}
              <div className="w-full flex justify-between">
                {/*Bottom Left Container */}
                <div className="bg-[#161616] w-[456px] h-[600px] mr-[16px]">
                  <DataMap3 width={'456px'} height={"600px"} />
                </div>

                {/*Bottom Right Container  */}
                <div className="bg-[#161616] w-[930px] h-[600px] flex justify-center items-center rounded-md  px-[40px]">
                  <div className="w-[880px] h-[570px] bg-[#233141] rounded flex justify-between items-center p-[40px]">
                    {/* Inner Left Container */}
                    <div className="w-1/2 flex flex-col gap-[16px]    ">
                    <div className="flex items-center justify-between mr-1">
                      <h2 className="text-white">မြန်မာ</h2>
                      <div className="flex justify-end p-0">
                        <button
                          className={`p-1 rounded mr-2 ${
                            isDefaultLayout
                              ? "bg-blue-500 text-white"
                              : "bg-gray-300"
                          }`}
                          onClick={() => setIsDefaultLayout(true)}
                        >
                          L1
                        </button>
                        <button
                          className={`p-1 rounded ${
                            isDefaultLayout
                              ? "bg-gray-300"
                              : "bg-blue-500 text-white"
                          }`}
                          onClick={() => setIsDefaultLayout(false)}
                        >
                          L2
                        </button>
                      </div>
                    </div>
                      <div className="mb-[7px] bg-[#2a333e] w-[210px] h-[35px] border rounded-3xl px-3 flex items-center">
                        <img
                          src={Cicon}
                          className="w-[15px] h-[15px] text-white"
                        />
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

                      <div className="text-[#7EADE3] w-[379px] h-[321px] bg-[#303d4c] px-[40px] py-[20px]">
                        <p className="font-[700] mb-[7px] text-[20px]">
                          The massacre of the military group
                        </p>
                        <p className="text-[14px]">
                          Between September and December 2023, the military
                          group committed at least (37) mass killings in which
                          five (5) or more people were killed, and a total of
                          (283) civilians were killed.2021 From February 2023 As
                          of December, the military group has committed at least
                          (210) Between September and December 2023, the
                          military group committed at least (37) mass killings
                          in which five (5) or more people were killed, and a
                          total of (283){" "}
                        </p>
                      </div>
                    </div>

                    {/* Vertical Dashed Line */}
                    <div className="relative w-[1px] h-full bg-gray-300">
                      <div className="absolute  h-full border-dashed border-gray-300"></div>
                    </div>

                    {/* Inner Right Container */}
                    <div className="w-1/2 flex flex-col justify-center   px-[20px] ">
                      {/* top */}
                      <div className="w-[369px] h-[154px] bg-[#303d4c] rounded-md grid grid-cols-3 justify-center items-center pl-[25px]">
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

                      {/* bottom  */}
                      <div className="w-[369px] flex flex-col items-center mt-[10px] gap-[10px]">
                        <div className="w-full h-[207px] bg-[#303d4c]  rounded-md">
                          <Data />
                        </div>
                        <div className="w-full h-[100px] bg-[#303d4c] rounded-md flex justify-center items-center">
                          <Dates />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Dashboard2;
