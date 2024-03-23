// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// // import { faker } from 'faker';
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//       display:false
//     },
//     title: {
//       display: false,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ["AS", "AC", "M", "C", "A"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => 100 ), 
//       // faker.datatype.number({ min: -1000, max: 1000 })
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => 200),
//       // faker.datatype.number({ min: -1000, max: 1000 })
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export default function LineChart() {
//   return <Line options={options} data={data} />;
// }



import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
        offset: true, // Add offset to the x-axis
        type: 'linear', // Set the x-axis scale type to 'linear'
      },
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 20,
        bottom: 20,
      },
    }
  },
};

const labels = [10, 20, 30, 40, 50]; // Numerical labels for the x-axis

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 20, 30, 40, 50], // Numerical data for the chart
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      
    },
    {
      label: 'Dataset 2',
      data: [10, 20, 30, 40, 50], // Numerical data for the chart
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function LineChart() {
  return (
    <Line
      options={{
        ...options,
        scales: {
          y: {
            ticks: {
              callback: (value, index, values) => {
                const labels = ["AS", "AC", "M", "C", "A"]; // Labels for the y-axis
                return labels[index];
              },
            },
          },
        },
      }}
      data={data}
    />
  );
}