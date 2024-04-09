import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Quarterly Financial Data",
    },
  },
};

const FinancialChart = ({ chartData }) => {
  if (!chartData || Object.keys(chartData).length === 0) return null;
  return <Bar options={options} data={chartData} />;
};

export default FinancialChart;
