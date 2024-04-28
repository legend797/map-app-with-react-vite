import React from 'react';
import { useState } from 'react';
import DataMap3 from "../Components/DashboardPageComponents/DataMap3";

const TabletSize = () => {

    const [activeChart, setActiveChart] = useState(0); // 0, 1, or 2 for the three charts
  const [isFullWidth, setIsFullWidth] = useState(false);

  const [isDefaultLayout, setIsDefaultLayout] = useState(true);

  const [smallChartWidth, setSmallChartWidth] = useState(300);
  const [smallChartHeight, setSmallChartHeight] = useState(220);
  const [smallChartWidthTwo, setSmallChartWidthTwo] = useState(330);
  const [smallChartHeightTwo, setSmallChartHeightTwo] = useState(220);
  const [mediumChartWidth, setMediumChartWidth] = useState(820);
  const [mediumChartHeight, setMediumChartHeight] = useState(230);
  const [fullChartWidth, setFullChartWidth] = useState(900);
  const [fullChartHeight, setFullChartHeight] = useState(250);

  const handleChartClick = (chartIndex) => {
    setActiveChart(chartIndex);
    setIsFullWidth(!isFullWidth);
  };
  let chartFontSize = 12;
  return (
    <>
    {isDefaultLayout ? (
          <>
            {/* Left Container */}
            <div className="w-[360px] ">
              <div className="bg-[#161616]  w-[360px] h-[640px] mr-[16px]">
                <DataMap3 width={"360px"} height={"640px"} />
              </div>
            </div>
            {/* Parent Right Container */}
            <div className=" w-[875px]">
              {/*Top Right Container */}

              <div
                className={`relative p-[5px] bg-[#161616] w-full h-[240px] rounded-md flex justify-center items-center  mb-[16px]`}
              >
                {!isFullWidth && (
                  <>
                    {/*1 container */}
                    <div
                      className="w-1/3  p-[5px] hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer  flex justify-center"
                      onClick={() => handleChartClick(0)}
                    >
                      <SimpleLineChart
                        width={smallChartWidth}
                        height={smallChartHeight}
                        fontSize={chartFontSize}
                        isFullWidth={false}
                      />
                    </div>
                    <div className="w-[1px] h-full bg-[#4d5eb2]">---</div>
                    {/*2 container */}
                    <div
                      className="w-1/3   p-[5px]  hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer flex justify-center"
                      onClick={() => handleChartClick(1)}
                    >
                      <ScatterChartComponent
                        width={smallChartWidth}
                        height={smallChartHeight}
                        fontSize={chartFontSize}
                        isFullWidth={false}
                      />
                    </div>
                    <div className="w-[1px] h-full bg-[#4d5eb2]">---</div>
                    {/* 3 container */}
                    <div
                      className="w-1/3  p-[5px]  hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer flex justify-center"
                      onClick={() => handleChartClick(2)}
                    >
                      <StackedBarChart
                        width={smallChartWidth}
                        height={smallChartHeight}
                        fontSize={chartFontSize}
                        isFullWidth={false}
                      />
                    </div>
                  </>
                )}
                {isFullWidth && (
                  <>
                    <div className="w-[868px] h-[230px] flex justify-center items-center p-[20px]">
                      {/* Left Navigate button */}
                      <button
                        className="text-[30px] text-blue-500 font-bold hover:text-[#32daff] focus:outline-none"
                        onClick={() =>
                          setActiveChart((activeChart - 1 + 3) % 3)
                        }
                      >
                        {/* &#8592; */}
                        &lt;
                      </button>
                      <div
                        className={`chart-transition ${
                          activeChart === 0 ? "active" : ""
                        }`}
                      >
                        {activeChart === 0 && (
                          <SimpleLineChart
                            width={mediumChartWidth}
                            height={mediumChartHeight}
                            fontSize={chartFontSize}
                            isFullWidth={true}
                          />
                        )}
                      </div>
                      <div
                        className={`chart-transition ${
                          activeChart === 1 ? "active" : ""
                        }`}
                      >
                        {activeChart === 1 && (
                          <ScatterChartComponent
                            width={mediumChartWidth}
                            height={mediumChartHeight}
                            fontSize={chartFontSize}
                            isFullWidth={true}
                          />
                        )}
                      </div>
                      <div
                        className={`chart-transition ${
                          activeChart === 2 ? "active" : ""
                        }`}
                      >
                        {activeChart === 2 && (
                          <StackedBarChart
                            width={mediumChartWidth}
                            height={mediumChartHeight}
                            fontSize={chartFontSize}
                            isFullWidth={true}
                          />
                        )}
                      </div>
                      {/* Right Navigate Button */}
                      <button
                        className="text-[30px] text-blue-500 font-bold hover:text-[#32daff] focus:outline-none"
                        onClick={() => setActiveChart((activeChart + 1) % 3)}
                      >
                        {/* &#8594; */}
                        &gt;
                      </button>
                    </div>

                    {/* <div className=" hidden">
                      <button
                        onClick={() =>
                          setActiveChart((activeChart - 1 + 3) % 3)
                        }
                        className="slide-nav-arrow left "
                      >
                        <img src={L} className="w-[25px] h-[25px]" />
                      </button>

                      <button
                        onClick={() => setActiveChart((activeChart + 1) % 3)}
                        className="slide-nav-arrow right"
                      >
                        <img src={R} className="w-[25px] h-[25px]" />
                      </button>
                    </div> */}
                  </>
                )}
                <button
                  className="absolute bottom-0  right-[2px] w-[50px] h-[50px]  font-bold py-2 px-4 rounded"
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
              <div className="bg-[#161616] w-full h-[393px] flex items-center rounded-md px-[20px] py-[10px]">
                <div className="w-full h-[360px] bg-[#000000] rounded flex justify-between items-center py-[20px] ">
                  {/* Inner Left Container */}
                  <div className="w-2/5  flex flex-col gap-[16px]   pl-[20px]">
                    <div className="flex items-center justify-between mr-1">
                      <h2 className="text-white">မြန်မာ</h2>
                      <div className=" flex justify-end p-0">
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
                    <div className="mb-[7px] bg-[#000000] w-[210px] h-[35px] border rounded-3xl px-3 flex items-center">
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

                    {/* <div className="text-[#7EADE3] w-[274px] h-[183px] bg-[#303d4c] px-[20px] py-[7px]">
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
                    </div> */}
                    <div>
                      <TextSectionCard />
                    </div>
                  </div>

                  {/* Vertical Dashed Line */}
                  <div className="relative w-[1px] h-full bg-gray-300">
                    <div className="absolute  h-full border-dashed border-gray-300"></div>
                  </div>

                  {/* Inner Right Container */}
                  <div className="w-3/5 flex flex-col  gap-[16px]   px-[20px] ">
                    {/* top */}
                    <div className="lg:w-[360px] xl:w-[444px] h-[58px] border-[1px] border-[#1e1835] bg-[#000000] rounded-md flex justify-around items-center">
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
                      <div className="w-[264px] h-[220px] border-[1px] border-[#1e1835] bg-[#000000] flex items-center  rounded-md">
                        <Data />
                      </div>
                      <div className="w-[170px] h-[220px] border-[1px] border-[#1e1835] bg-[#000000] rounded-md flex justify-center items-center">
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
                className={`relative bg-[#161616] w-full h-[240px] rounded-md flex justify-center items-center gap-[10px] p-[5px] mb-[10px]`}
              >
                {!isFullWidth && (
                  <>
                    {/*1 container */}
                    <div
                      className="w-1/3  p-[5px] hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer  flex justify-center"
                      onClick={() => handleChartClick(0)}
                    >
                      <SimpleLineChart
                        width={smallChartWidthTwo}
                        height={smallChartHeightTwo}
                        fontSize={chartFontSize}
                        isFullWidth={false}
                      />
                    </div>
                    <div className="w-[1px] h-full bg-[#4d5eb2]">---</div>
                    {/*2 container */}
                    <div
                      className="w-1/3   p-[5px]  hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer flex justify-center"
                      onClick={() => handleChartClick(1)}
                    >
                      <ScatterChartComponent
                        width={smallChartWidthTwo}
                        height={smallChartHeightTwo}
                        fontSize={chartFontSize}
                        isFullWidth={false}
                      />
                    </div>
                    <div className="w-[1px]  h-full bg-[#4d5eb2]">---</div>
                    {/* 3 container */}
                    <div
                      className="w-1/3  p-[5px]  hover:bg-[#233141] hover:bg-opacity-50 rounded cursor-pointer flex justify-center"
                      onClick={() => handleChartClick(2)}
                    >
                      <StackedBarChart
                        width={smallChartWidthTwo}
                        height={smallChartHeightTwo}
                        fontSize={chartFontSize}
                        isFullWidth={false}
                      />
                    </div>
                  </>
                )}
                {isFullWidth && (
                  <>
                    <div className="w-[868px] h-[230px] flex justify-center items-center p-[10px]">
                      {/* Left Navigate button */}
                      <button
                        className="mr-[170px] text-[40px] text-blue-500 font-bold hover:text-[#32daff] focus:outline-none"
                        onClick={() =>
                          setActiveChart((activeChart - 1 + 3) % 3)
                        }
                      >
                        {/* &#8592; */}
                        &lt;
                      </button>
                      <div
                        className={`chart-transition ${
                          activeChart === 0 ? "active" : ""
                        }`}
                      >
                        {activeChart === 0 && (
                          <SimpleLineChart
                            width={fullChartWidth}
                            height={fullChartHeight}
                            fontSize={chartFontSize}
                            isFullWidth={true}
                          />
                        )}
                      </div>
                      <div
                        className={`chart-transition ${
                          activeChart === 1 ? "active" : ""
                        }`}
                      >
                        {activeChart === 1 && (
                          <ScatterChartComponent
                            width={fullChartWidth}
                            height={fullChartHeight}
                            fontSize={chartFontSize}
                            isFullWidth={true}
                          />
                        )}
                      </div>
                      <div
                        className={`chart-transition ${
                          activeChart === 2 ? "active" : ""
                        }`}
                      >
                        {activeChart === 2 && (
                          <StackedBarChart
                            width={fullChartWidth}
                            height={fullChartHeight}
                            fontSize={chartFontSize}
                            isFullWidth={true}
                          />
                        )}
                      </div>
                      {/* Right Navigate Button */}
                      <button
                        className="ml-[170px] text-[40px] text-blue-500 font-bold hover:text-[#32daff] focus:outline-none"
                        onClick={() => setActiveChart((activeChart + 1) % 3)}
                      >
                        {/* &#8594; */}
                        &gt;
                      </button>
                    </div>
                    <div className="hidden">
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
                <div className="bg-[#161616] w-[440px] h-[600px] mr-[16px]">
                  <DataMap3 width={"440px"} height={"600px"} />
                </div>

                {/*Bottom Right Container  */}
                <div className="bg-[#161616] w-[880px] h-[600px] flex justify-center items-center rounded-md  px-[20px]">
                  <div className="w-[830px] h-[570px] bg-[#000000] rounded flex justify-between items-center p-[40px]">
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
                      <div className="mb-[7px] bg-[#000000] w-[210px] h-[35px] border rounded-3xl px-3 flex items-center">
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

                      {/* <div className="text-[#7EADE3] w-[379px] h-[321px] bg-[#303d4c] px-[40px] py-[20px]">
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
                      </div> */}

                      <div>
                        <TextSectionCard2 />
                      </div>
                    </div>

                    {/* Vertical Dashed Line */}
                    <div className="relative w-[1px] h-full bg-gray-300">
                      <div className="absolute  h-full border-dashed border-gray-300"></div>
                    </div>

                    {/* Inner Right Container */}
                    <div className="w-1/2 flex flex-col justify-center   px-[20px] ">
                      {/* top */}
                      <div className="w-[369px] h-[154px] border-[1px] border-[#1e1835] bg-[#000408] rounded-md grid grid-cols-3 justify-center items-center pl-[25px]">
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
                        <div className="w-full h-[227px] border-[1px] border-[#1e1835] bg-[#000408]  rounded-md">
                          <Data />
                        </div>
                        <div className="w-full h-[100px] border-[1px] border-[#1e1835] bg-[#000408] rounded-md flex justify-center items-center">
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
    </>
  )
}

export default TabletSize