// import React from 'react';
// import { ScatterChart,Legend, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

// const data = [
//     { x: 100, y: 200, z: 200 },
//     { x: 120, y: 100, z: 260 },
//     { x: 170, y: 300, z: 400 },
//     { x: 140, y: 250, z: 280 },
//     { x: 150, y: 400, z: 500 },
//     { x: 110, y: 280, z: 200 },
//   ];
//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const ScatterChartComponent = ({ width, height,fontSize }) => {
//   return (
//     <ScatterChart
//       width={width}
//       height={height}
//       margin={{
//         top: 20,
//         right: 20,
//         bottom: 20,
//         left: 20,
//       }}
//     >
//       <CartesianGrid />
//       <XAxis type="number" dataKey="x" name="stature" unit="cm" fontSize={fontSize} />
//       <YAxis type="number" dataKey="y" name="weight" unit="kg" fontSize={fontSize}/>
//       <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//       <Scatter name="A school" data={data} fill="#8884d8">
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Scatter>
//       <Legend wrapperStyle={{fontSize:fontSize}}/>
//     </ScatterChart>
//   )
// }

// export default ScatterChartComponent;

import React from 'react';
import { ScatterChart, Legend, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

const data1 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
];

const data2 = [
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const data3 = [
  { x: 180, y: 150, z: 350 },
  { x: 160, y: 220, z: 420 },
  { x: 190, y: 380, z: 480 },
];

const data4 = [
  { x: 130, y: 170, z: 270 },
  { x: 125, y: 190, z: 310 },
  { x: 145, y: 230, z: 360 },
];

const data5 = [
  { x: 210, y: 420, z: 630 },
  { x: 195, y: 380, z: 575 },
  { x: 220, y: 450, z: 670 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const ScatterChartComponent = ({ width, height, fontSize, isFullWidth }) => {
  return (
    <ScatterChart
      width={width}
      height={height}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="stature" unit="cm" fontSize={fontSize} />
      <YAxis type="number" dataKey="y" name="weight" unit="kg" fontSize={fontSize} />
      {/* <Tooltip cursor={{ strokeDasharray: '3 3' }} /> */}
      <Scatter name="AirStrike" data={data1} fill="#8884d8">
        {data1.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Scatter>
      <Scatter name="Armed_Clashes" data={data2} fill="#82ca9d">
        {data2.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[(index + data1.length) % COLORS.length]} />
        ))}
      </Scatter>
      <Scatter name="Massacre" data={data3} fill="#ffc658">
        {data3.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[(index + data1.length + data2.length) % COLORS.length]} />
        ))}
      </Scatter>
      <Scatter name="Casualty" data={data4} fill="#ff6384">
        {data4.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[(index + data1.length + data2.length + data3.length) % COLORS.length]} />
        ))}
      </Scatter>
      <Scatter name="Arrest" data={data5} fill="#36a2eb">
        {data5.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[(index + data1.length + data2.length + data3.length + data4.length) % COLORS.length]} />
        ))}
      </Scatter>
      {isFullWidth && <Tooltip/>}
      <Legend wrapperStyle={{ fontSize: fontSize }}  />
    </ScatterChart>
  );
};

export default ScatterChartComponent;