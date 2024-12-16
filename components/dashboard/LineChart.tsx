"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [55, 70, 60, 20, 90, 200, 250, 220, 240, 260, 300, 400],
      borderColor: "#57CADB",
      backgroundColor: function (context: any) {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "#57CADB");
        gradient.addColorStop(1, "#C4E8EE00");
        return gradient;
      },
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  type: "line",
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return `N ${tooltipItem.raw.toLocaleString()}k`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        callback: function (value: any) {
          return `N${value}k`;
        },
      },
      grid: {
        display: false,
      },
    },
  },
};

function LineChart() {
  return (
    <Line data={data} options={options} />
    );
}

export default LineChart