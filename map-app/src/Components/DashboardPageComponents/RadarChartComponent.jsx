import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  // {
  //   subject: 'History',
  //   A: 65,
  //   B: 85,
  //   fullMark: 150,
  // },
];
 const  RadarChartComponent = () =>{

 
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart  cx="50%" cy="50%" outerRadius="80%" data={data} width={197} height={215}>
          <PolarGrid />
          <PolarAngleAxis  dataKey="subject" tick={{ fill: 'white' }}  />
          {/* <PolarRadiusAxis  tick={false} /> */}
          <Radar  name="Mike" dataKey="A" stroke="#D6E264" strokeWidth={2} fill="#F5F5F5" fillOpacity={0.4} />
        </RadarChart>
      </ResponsiveContainer>
    );
}
export default RadarChartComponent;

