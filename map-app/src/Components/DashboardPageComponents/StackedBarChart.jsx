// import React from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//     {
//       name: 'Q1',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Q2',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Q3',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Q4',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     }
//   ];

// const StackedBarChart = ({ width, height,fontSize }) => {
//   return (
   
//         <BarChart
//           width={width}
//           height={height}
//           data={data}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" fontSize={fontSize}/>
//           <YAxis fontSize={fontSize}/>
//           <Tooltip />
//           <Legend wrapperStyle={{fontSize:fontSize}}/>
//           <Bar  dataKey="pv" stackId="a" fill="#8884d8" />
//           <Bar  dataKey="uv" stackId="a" fill="#82ca9d" />
//         </BarChart>
     
//   )
// }

// export default StackedBarChart

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Q1',
    AirStrike: 4000,
    Armed_Clashes: 2400,
    Massacre: 1800,
    Casualty: 3200,
    Arrest: 2600,
  },
  {
    name: 'Q2',
    AirStrike: 3000,
    Armed_Clashes: 1398,
    Massacre: 2100,
    Casualty: 2900,
    Arrest: 3400,
  },
  {
    name: 'Q3',
    AirStrike: 2000,
    Armed_Clashes: 9800,
    Massacre: 6700,
    Casualty: 4600,
    Arrest: 3300,
  },
  {
    name: 'Q4',
    AirStrike: 2780,
    Armed_Clashes: 3908,
    Massacre: 4800,
    Casualty: 2400,
    Arrest: 1900,
  },
];


const StackedBarChart = ({ width, height, fontSize, isFullWidth  }) => {
  return (
    <BarChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" fontSize={fontSize} />
      <YAxis fontSize={fontSize} />
    {isFullWidth && <Tooltip/>}
      <Legend wrapperStyle={{ fontSize: fontSize }} />
      <Bar dataKey="AirStrike" stackId="a" fill="#8884d8" />
      <Bar dataKey="Armed_Clashes" stackId="a" fill="#82ca9d" />
      <Bar dataKey="Massacre" stackId="a" fill="#ffc658" />
      <Bar dataKey="Casualty" stackId="a" fill="#ff6384" />
      <Bar dataKey="Arrest" stackId="a" fill="#36a2eb" />
    </BarChart>
  );
};

export default StackedBarChart;