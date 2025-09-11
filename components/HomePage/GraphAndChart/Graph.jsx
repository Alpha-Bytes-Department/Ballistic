"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, // x-axis
  LinearScale, // y-axis
  PointElement, // points
  LineElement, // line
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false, text: "Projectile Drop Chart" },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Distance (yds)",
      },
      grid: {
        display: false, // Show vertical grid lines
        drawOnChartArea: false, // Draw grid lines on the chart area
        drawTicks: false, // Draw ticks on the axis
      },
    },
    y: {
      title: {
        display: true,
        text: "Drop (in.)",
      },
      grid: {
        display: true, // Hide horizontal grid lines
        drawOnChartArea: true, // Do not draw grid lines on the chart area
        drawTicks: true, // Do not draw ticks on the axis
      },
      afterBuildTicks: (axis) => {
        axis.ticks = [
          { value: -2.5 },
          { value: -2.0 },
          { value: -1.5 },
          { value: -1 },
          { value: -0.5 },
          { value: 0 },
          { value: 0.5 },
          { value: 1 },
          { value: 1.5 },
          { value: 2.0 },
          { value: 2.5 },
        ];
      },
    },
  },
};

const data = {
  labels: ["0", "50", "100", "150", "200", "250", "300"],
  datasets: [
    {
      label: "Sales",
      data: [-2.5,-2.0,-0.7,2.5,1.5,-1.5,-2.5],
      borderColor: "rgb(75, 75, 75)",
      backgroundColor: "rgba(75, 75, 75, 0.5)",
      pointBackgroundColor: "black",
      tension: 0.5,
    },
  ],
};

const Graph = () => {
  return (
    <div>
      <Line width={400} height={400} data={data} options={options} />
    </div>
  );
};

export default Graph;
