"use client";
import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart elements
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

// Define prop type
type Props = {
  emotion_score: number[];
};

const EmotionRadarChart: React.FC<Props> = ({ emotion_score }) => {
  const data = {
    labels: [
      "joy",
      "trust",
      "fear",
      "surprise",
      "sadness",
      "disgust",
      "anger",
      "anticipation",
    ],
    datasets: [
      {
        label: "Emotion Score",
        data: emotion_score,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            family: "'Pixelify Sans', monospace",
            size: 14,
          },
        },
      },
    },

    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 1,
        pointLabels: {
          font: {
            family: "'Pixelify Sans', monospace",
            size: 14,
          },
          color: "#222222",
        },
        ticks: {
          display: true,
          font: {
            family: "'Pixelify Sans', monospace",
            size: 12,
          },
          color: "#333333",
          backdropColor: "transparent",
        },
        grid: {
          color: "#c0c0c0",
        },
        angleLines: {
          color: "#999999",
        },
      },
    },
  };

  return (
    <div className="w-[350px] h-[350px] font-pixelify">
      <Radar data={data} options={options} />
    </div>
  );
};

export default EmotionRadarChart;
