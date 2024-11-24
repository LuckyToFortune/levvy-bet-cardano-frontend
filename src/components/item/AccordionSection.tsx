"use client";
import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

interface AccordionSectionProps {
  items: {
    imageUrl: string;
    title: string;
    chance: string;
    chartData: { labels: string[]; values: number[] };
  }[];
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ items }) => {
  const [selectedRanges, setSelectedRanges] = useState<Record<number, string>>(
    () =>
      items.reduce((acc, _, index) => {
        acc[index] = "ALL";
        return acc;
      }, {} as Record<number, string>)
  );

  const handleTimeRangeClick = (index: number, range: string) => {
    setSelectedRanges((prev) => ({
      ...prev,
      [index]: range,
    }));
  };

  const generateChartData = (labels: string[], values: number[]) => ({
    labels,
    datasets: [
      {
        label: "Chance",
        data: values,
        borderColor: "#FFA500",
        backgroundColor: "rgba(255,165,0,0.1)",
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: "#FFA500",
      },
    ],
  });

  return (
    <Accordion.Root type="single" collapsible className="space-y-4 w-full">
      {items.map(({ imageUrl, title, chance, chartData }, index) => (
        <Accordion.Item
          value={`item-${index}`}
          key={index}
          className="rounded-lg w-full"
        >
          <Accordion.Header className="w-full">
            <Accordion.Trigger className="flex justify-between items-center bg-stone-800 px-4 py-2 rounded-lg w-full font-bold text-white focus:outline-none">
              <div className="flex items-center gap-4">
                <Image
                  src={imageUrl}
                  alt={title}
                  width={50}
                  height={50}
                  className="rounded-full size-12"
                />
                <span>{title}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-lg text-orange-500">
                  {chance}
                </span>
              </div>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="bg-stone-900 p-6 rounded-lg">
            <p className="font-bold text-lg text-white">YES</p>
            <p className="font-semibold text-2xl text-orange-500">
              {chance} Chance
            </p>

            <div className="mt-4">
              <div className="flex justify-end gap-2 mb-4">
                {["1H", "1D", "1W", "1M", "ALL"].map((range) => (
                  <button
                    key={range}
                    onClick={() => handleTimeRangeClick(index, range)}
                    className={`px-4 py-2 rounded-lg ${
                      selectedRanges[index] === range
                        ? "bg-orange-500 text-white font-bold"
                        : "bg-stone-800 text-gray-400 hover:bg-stone-700"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>

              <div className="relative p-4 rounded-lg w-full h-64">
                <Line
                  data={generateChartData(chartData.labels, chartData.values)}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      tooltip: {
                        enabled: true,
                      },
                    },
                    scales: {
                      x: {
                        ticks: { color: "#FFF" },
                        grid: { display: false },
                      },
                      y: {
                        ticks: { color: "#FFF" },
                        grid: { color: "rgba(255,255,255,0.1)" },
                      },
                    },
                  }}
                  className="w-full h-full"
                />
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionSection;
