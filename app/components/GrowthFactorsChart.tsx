"use client"

import { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const presetValues = [
  { label: "Optimal", data: [85, 90, 80, 75, 70] },
  { label: "Drought", data: [40, 95, 60, 80, 65] },
  { label: "Overwatered", data: [95, 70, 75, 65, 50] },
  { label: "Low Nutrients", data: [80, 85, 40, 70, 60] },
  { label: "Cold Stress", data: [75, 60, 70, 40, 65] },
]

const GrowthFactorsChart = () => {
  const [currentPreset, setCurrentPreset] = useState(0)

  const chartData = {
    labels: ["Water", "Sunlight", "Nutrients", "Temperature", "Soil Quality"],
    datasets: [
      {
        label: presetValues[currentPreset].label,
        data: presetValues[currentPreset].data,
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPreset((prev) => (prev + 1) % presetValues.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Factors Affecting Plant Growth",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  }

  return (
    <div className="w-full min-w-[600px]">
      <Bar data={chartData} options={options} />
    </div>
  )
}

export default GrowthFactorsChart
