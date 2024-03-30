// import React, { useState } from "react";

// import DataTable from "../Components/DashboardPageComponents/DataTable";
// import HorizonBarChart from "../Components/DashboardPageComponents/Lists/BarChart";
// import LineChart from "../Components/DashboardPageComponents/Lists/LineChart";

// import DataMap3 from "../Components/DashboardPageComponents/DataMap3";

// const Dashboard = () => {
//   return (
//     <section className="bg-[#132442] pt-[8vh] px-[40px] w-full pb-12">
//       <div className="flex justify-between gap-x-5">
//         {/* Left Container */}
//         <div className="w-[1000px]">

//           <div className="mb-[8px]  ">
// 		{/* Top main  container */}
//             <div className="w-full h-auto flex justify-between items-center ">
// 		{/* Top no1 container */}
//               <div className="w-[600px] h-[120px]">
//                 <LineChart />
//               </div>
// 		{/* Top no2 container */}
//               <div className="w-[600px] h-[120px]">
//                 <LineChart />
//               </div>
// 		{/* Top no3 container */}
//               <div className="w-[300px] h-[100px] flex justify-end">
//                 <HorizonBarChart />
//               </div>
//             </div>
//           </div>

// 		{/* Dynamic container */}
//           <div className="w-[1000px] h-[480px]">
//             <DataMap3 />
//           </div>
//         </div>

//         {/* Right Container */}
//         <div className="w1/4">
//           <DataTable />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import DataTable from "../Components/DashboardPageComponents/DataTable";
// import HorizonBarChart from "../Components/DashboardPageComponents/Lists/BarChart";
// import LineChart from "../Components/DashboardPageComponents/Lists/LineChart";
// import DataMap3 from "../Components/DashboardPageComponents/DataMap3";

// const Dashboard = () => {
//   const [dynamicContainer, setDynamicContainer] = useState(<DataMap3 size="large" />);
//   const [topContainers, setTopContainers] = useState([
//     <LineChart size="small" key="chart1" />,
//     <LineChart size="small" key="chart2" />,
//     <HorizonBarChart size="small" key="chart3" />,
//   ]);

//   const handleChartClick = (chartComponent, index) => {
//     setDynamicContainer(chartComponent);
//     const updatedTopContainers = [...topContainers];
//     updatedTopContainers[index] = <DataMap3 size="small" key="map" />;
//     setTopContainers(updatedTopContainers);
//   };

//   return (
//     <section className="bg-[#132442] pt-[8vh] px-[40px] w-full pb-12">
//       <div className="flex justify-between gap-x-5">
//         {/* Left Container */}
//         <div className="w-[1000px]">
//           <div className="mb-[8px]">
//             {/* Top main container */}
//             <div className="w-full h-auto flex justify-between items-center">
//               {/* Top no1 container */}
//               <div
//                 className="w-[240px] h-[120px]"
//                 onClick={() => handleChartClick(<LineChart size="large" />, 0)}
//               >
//                 {topContainers[0]}
//               </div>
//               {/* Top no2 container */}
//               <div
//                 className="w-[240px] h-[120px]"
//                 onClick={() => handleChartClick(<LineChart size="large" />, 1)}
//               >
//                 {topContainers[1]}
//               </div>
//               {/* Top no3 container */}
//               <div
//                 className="w-[200px] h-[100px] flex justify-end"
//                 onClick={() => handleChartClick(<HorizonBarChart size="large" />, 2)}
//               >
//                 {topContainers[2]}
//               </div>
//             </div>
//           </div>
//           {/* Dynamic container */}
//           <div className="w-[1000px] h-[480px]">{dynamicContainer}</div>
//         </div>
//         {/* Right Container */}
//         <div className="w1/4">
//           <DataTable />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";

import DataTable from "../Components/DashboardPageComponents/DataTable";
import HorizonBarChart from "../Components/DashboardPageComponents/Lists/BarChart";
import LineChart from "../Components/DashboardPageComponents/Lists/LineChart";

import DataMap3 from "../Components/DashboardPageComponents/DataMap3";
// import { ZoomControl } from "react-leaflet";

const Dashboard = () => {
  let largeComponentWidth = "1000px";
  let largeComponentHeight = "480px";
  let smallComponentWidth = "240px";
  let smallComponentHeight = "120px";

  const [one, setOne] = useState(<LineChart />);
  const [two, setTwo] = useState(<LineChart />);
  const [three, setThree] = useState(<div className="w-[220px] h-[100px]"><HorizonBarChart  /></div>);
  //<DataMap3 width={`${largeComponentWidth}`} height={`${largeComponentHeight}`}/>
  const [four, setFour] = useState(
    <DataMap3
      width={`${largeComponentWidth}`}
      height={`${largeComponentHeight}`}
    />
  );
  const DataMap = <DataMap3 />;
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
    <section className="bg-[#132442] pt-[8vh] px-[40px] w-full pb-12">
      <div className="flex justify-between gap-x-5">
        {/* Left Container */}
        <div className="w-[1000px]">
          <div className="mb-[8px]  ">
            {/* Top main  container */}
            <div className="w-full h-auto flex justify-between items-center ">
              {/* Top no1 container */}
              <div
                onClick={() => {
                  setOne(four);
                  setFour(one);
                }}
                className={`w-${smallComponentWidth} h-${smallComponentHeight}`}
              >
                {console.log(one.type.name)}

                {one.type.name === DataMap.type.name ? (
                  <>
                    <DataMap3
                      width={`${smallComponentWidth}`}
                      height={`${smallComponentHeight}`}
                      zoom={false}
                    />
                  </>
                ) : (
                  <>
                    ${one}
                  
                  </>
                )}
              </div>
              {/* Top no2 container */}
              <div
                onClick={() => {
                  setTwo(four);
                  setFour(two);
                }}
                className={`w-${smallComponentWidth} h-${smallComponentHeight}`}
              >
                {two.type.name === DataMap.type.name ? (
                  <>
                    <DataMap3
                      width={`${smallComponentWidth}`}
                      height={`${smallComponentHeight}`}
                      zoom={false}
                    />
                  </>
                ) : (
                  <>
                    ${two}

                  </>
                )}
              </div>
              {/* Top no3 container */}
              <div
                onClick={() => {
                  setThree(four);
                  setFour(three);
                }}
                className={`w-${smallComponentWidth} h-${smallComponentHeight} flex justify-end`}
              >
                {three.type.name === DataMap.type.name ? (
                  <>
                    <DataMap3
                      width={`${smallComponentWidth}`}
                      height={`${smallComponentHeight}`}
                      zoom={false}
                    />
                  </>
                ) : (
                  <>
                    ${three}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Dynamic container */}
          <div className={`w-${largeComponentWidth} h-${largeComponentHeight}`}>
            {four}
          </div>
        </div>

        {/* Right Container */}
        <div className="w1/4">
          <DataTable />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
