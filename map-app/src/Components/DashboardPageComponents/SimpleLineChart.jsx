// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];

// const SimpleLineChart = ({ width, height,fontSize }) => {
//   console.log('width and height:',width,height)

//   return (
//     <LineChart
//     width={width}
//     height={height}
//     data={data}
//     margin={{
//       top: 5,
//       right: 30,
//       left: 20,
//       bottom: 5,
//     }}
//   >
//     <CartesianGrid strokeDasharray="3 3" />
//     <XAxis dataKey="name" fontSize={fontSize} />
//     <YAxis fontSize={fontSize}/>
//     <Tooltip />
//     <Legend wrapperStyle={{fontSize:fontSize
//     }} />
//     <Line type="monotone"
//    dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//     <Line type="monotone"
//    dataKey="uv" stroke="#82ca9d" />
//   </LineChart>
//   )
// }

// export default SimpleLineChart;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    AirStrike: 4000,
    Armed_Clashes: 2400,
    Massacre: 1800,
    Casualty: 3200,
    Arrest: 2600,
  },
  {
    name: "Page B",
    AirStrike: 3000,
    Armed_Clashes: 1398,
    Massacre: 2100,
    Casualty: 2900,
    Arrest: 3400,
  },
  {
    name: "Page C",
    AirStrike: 2000,
    Armed_Clashes: 9800,
    Massacre: 6700,
    Casualty: 4600,
    Arrest: 3300,
  },
  {
    name: "Page D",
    AirStrike: 2780,
    Armed_Clashes: 3908,
    Massacre: 4800,
    Casualty: 2400,
    Arrest: 1900,
  },
  {
    name: "Page E",
    AirStrike: 1890,
    Armed_Clashes: 4800,
    Massacre: 3200,
    Casualty: 5400,
    Arrest: 2800,
  },
  {
    name: "Page F",
    AirStrike: 2390,
    Armed_Clashes: 3800,
    Massacre: 4300,
    Casualty: 3600,
    Arrest: 2700,
  },
  {
    name: "Page G",
    AirStrike: 3490,
    Armed_Clashes: 4300,
    Massacre: 2900,
    Casualty: 4200,
    Arrest: 3100,
  },
];

const SimpleLineChart = ({ width, height, fontSize, isFullWidth  }) => {
  console.log(
    "Rendering SimpleLineChart with width:",
    width,
    "height:",
    height
  );

  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={fontSize} />
        <YAxis fontSize={fontSize} />

        {isFullWidth && <Tooltip />}

        <Legend wrapperStyle={{ fontSize: fontSize }} />
        <Line
          type="monotone"
          dataKey="AirStrike"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Armed_Clashes" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Massacre" stroke="#ffc658" />
        <Line type="monotone" dataKey="Casualty" stroke="#ff6384" />
        <Line type="monotone" dataKey="Arrest" stroke="#36a2eb" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
