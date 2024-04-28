  {/*Tablet and Mobile Sizes Parent Container */}
  <div className="lg:hidden w-full flex flex-col justify-center items-center">
  {/* Top Container */}

  <div
    className={`relative bg-[#161616] w-full h-[130px] rounded-md flex justify-center items-center   mb-[10px]`}
  >
    <div>
      <div className="max-sm:w-[350px] md:max-lg:w-[716px] h-[130px] flex justify-center p-[7px]">
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
          {activeChart === 2 && <StackedBarChart />}
        </div>
      </div>
      <div className="slide-nav">
        <button
          onClick={() => setActiveChart((activeChart - 1 + 3) % 3)}
          className="slide-nav-arrow left "
        >
          {/* &lt; */}
          <img src={L} className="w-[17px] h-[17px]" />
        </button>

        <button
          onClick={() => setActiveChart((activeChart + 1) % 3)}
          className="slide-nav-arrow right"
        >
          {/* &gt; */}
          <img src={R} className="w-[17px] h-[17px]" />
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Parent Container */}
  <div className=" w-full flex flex-col justify-center items-center">
    {/*Bottom Left Container */}

    {/* i-pads and tablet sizes */}
    <div className="bg-[#161616] hidden md:block w-[716px] h-[520px]">
      <DataMap3 width={"716px"} height={"520px"} />
    </div>

    {/* i-phones and phones sizes */}
    <div className="bg-[#161616] block max-[424px]:hidden md:hidden w-[410px] h-[640px]">
      <DataMap3 width={"410px"} height={"640px"} />
    </div>

    <div className="bg-[#161616] block min-[424px]:hidden w-[350px] h-[640px]">
      <DataMap3 width={"350px"} height={"640px"} />
    </div>

    {/*Bottom Right Container  */}
    <div className="max-sm:hidden bg-[#161616] min-w-[716px] max-w-[768px] h-auto flex justify-center items-center rounded-md  p-[10px]">
      <div className="w-full h-[300px] bg-[#233141] rounded flex  justify-center items-center p-[7px]">
        {/* Inner Left Container */}
        <div className="w-2/5 flex flex-col gap-[7px]    ">
          <div className="flex items-center justify-between mr-1">
            <h2 className="text-white">မြန်မာ</h2>
          </div>
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

          <div className="text-[#7EADE3] w-[240px] h-[160px] bg-[#303d4c] px-[40px] py-[20px]">
            <p className="font-[700] mb-[7px] text-[12px]">
              The massacre of the military group
            </p>
            <p className="text-[10px]">
              Between September and December 2023, the military group
              committed at least (37) mass killings in which five (5) or
              more people were killed, and a total of (283) civilians were
              killed.
            </p>
          </div>
        </div>

        {/* Vertical Dashed Line */}
        <div className="relative w-[1px] h-full bg-gray-300">
          <div className="absolute  h-full border-dashed border-gray-300"></div>
        </div>

        {/* Inner Right Container */}
        <div className="w-3/5 flex flex-col justify-center   px-[10px] ">
          {/* top */}
          <div className="w-[400px] h-[59px] bg-[#303d4c] rounded-md flex justify-center items-center px-[7px] ">
            <div className="w-1/5  flex flex-col ">
              <p className="text-[10px] text-[#A6A1C0]">Price</p>
              <p className="text-[11px] text-white">$9,542.39</p>
            </div>
            <div className="w-1/5 flex flex-col ">
              <p className="text-[10px] text-[#A6A1C0]">Price</p>
              <p className="text-[11px] text-white">$9,542.39</p>
            </div>
            <div className="w-1/5 flex flex-col ">
              <p className="text-[10px] text-[#A6A1C0]">Price</p>
              <p className="text-[11px] text-white">$9,542.39</p>
            </div>
            <div className="w-1/5 flex flex-col ">
              <p className="text-[10px] text-[#A6A1C0]">Price</p>
              <p className="text-[11px] text-white">$9,542.39</p>
            </div>
            <div className="w-1/5 flex flex-col ">
              <p className="text-[10px] text-[#A6A1C0]">Price</p>
              <p className="text-[11px] text-white">$9,542.39</p>
            </div>
          </div>

          {/* bottom  */}
          <div className="w-full flex  items-center mt-[10px] gap-[10px]">
            <div className="w-[232px] h-[161px] bg-[#303d4c]  rounded-md">
              <Data />
            </div>
            <div className="w-[153px] h-[161px] bg-[#303d4c] rounded-md flex flex-col justify-center items-center">
              <Dates2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>






<div
className={`relative bg-[#161616] w-full h-[254px] rounded-md flex justify-center items-center   mb-[10px]`}
>
<div>
  <div className="max-sm:w-[350px] md:max-lg:w-[716px] h-[130px] flex justify-center p-[7px]">
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
      {activeChart === 2 && <StackedBarChart />}
    </div>
  </div>
  <div className="slide-nav">
    <button
      onClick={() => setActiveChart((activeChart - 1 + 3) % 3)}
      className="slide-nav-arrow left "
    >
      {/* &lt; */}
      <img src={L} className="w-[17px] h-[17px]" />
    </button>

    <button
      onClick={() => setActiveChart((activeChart + 1) % 3)}
      className="slide-nav-arrow right"
    >
      {/* &gt; */}
      <img src={R} className="w-[17px] h-[17px]" />
    </button>
  </div>
</div>
</div>






{/* Bottom Parent Container */}
<div className=" w-full flex flex-col justify-center items-center">
{/*Bottom Left Container */}

{/* i-pads and tablet sizes */}
<div className="bg-[#161616] hidden md:block w-[716px] h-[520px]">
  <DataMap3 width={"716px"} height={"520px"} />
</div>

{/* i-phones and phones sizes */}
<div className="bg-[#161616] block max-[424px]:hidden md:hidden w-[410px] h-[640px]">
  <DataMap3 width={"410px"} height={"640px"} />
</div>

<div className="bg-[#161616] block min-[424px]:hidden w-[350px] h-[640px]">
  <DataMap3 width={"350px"} height={"640px"} />
</div>



{/*Bottom Right Container  */}
<div className="max-sm:hidden bg-[#161616] w-full h-auto flex justify-center items-center rounded-md  p-[10px]">
              <div className="w-full h-[300px] bg-[#233141] rounded flex  p-[20px]">
                {/* Inner Left Container */}
                <div className="w-[40%] flex flex-col gap-[10px]    ">
                  <div className="flex items-center justify-between mr-1">
                    <h2 className="text-white">မြန်မာ</h2>
                  </div>
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

                  {/* <div className="text-[#7EADE3] w-[240px] h-[160px] bg-[#303d4c] px-[40px] py-[20px]">
                    <p className="font-[700] mb-[7px] text-[12px]">
                      The massacre of the military group
                    </p>
                    <p className="text-[10px]">
                      Between September and December 2023, the military group
                      committed at least (37) mass killings in which five (5) or
                      more people were killed, and a total of (283) civilians
                      were killed.
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
                <div className="w-[60%] flex flex-col justify-center   px-[10px] ">
                  {/* top */}
                  <div className="w-[400px] h-[59px] bg-[#303d4c] rounded-md flex justify-center items-center px-[7px] ">
                    <div className="w-1/5  flex flex-col ">
                      <p className="text-[10px] text-[#A6A1C0]">Price</p>
                      <p className="text-[11px] text-white">$9,542.39</p>
                    </div>
                    <div className="w-1/5 flex flex-col ">
                      <p className="text-[10px] text-[#A6A1C0]">Price</p>
                      <p className="text-[11px] text-white">$9,542.39</p>
                    </div>
                    <div className="w-1/5 flex flex-col ">
                      <p className="text-[10px] text-[#A6A1C0]">Price</p>
                      <p className="text-[11px] text-white">$9,542.39</p>
                    </div>
                    <div className="w-1/5 flex flex-col ">
                      <p className="text-[10px] text-[#A6A1C0]">Price</p>
                      <p className="text-[11px] text-white">$9,542.39</p>
                    </div>
                    <div className="w-1/5 flex flex-col ">
                      <p className="text-[10px] text-[#A6A1C0]">Price</p>
                      <p className="text-[11px] text-white">$9,542.39</p>
                    </div>
                  </div>

                  {/* bottom  */}
                  <div className="w-full flex  items-center mt-[10px] gap-[10px]">
                    <div className="w-[232px] h-[161px] bg-[#303d4c]  rounded-md">
                      <Data />
                    </div>
                    <div className="w-[153px] h-[161px] bg-[#303d4c] rounded-md flex flex-col justify-center items-center">
                      <Dates2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>