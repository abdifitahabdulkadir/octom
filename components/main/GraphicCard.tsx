"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartSwitchButton from "./ChartSwitchButton";

const dailyData = Array.from({ length: 6 }, (_, i) => ({
  hour: `${i * 4 < 10 ? "0" : ""}${i * 4}`,
  tasksPurple: Math.floor(Math.random() * 401),
  tasksBlue: Math.floor(Math.random() * 401),
}));

const weeklyData = Array.from({ length: 7 }, (_, i) => ({
  day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
  tasksPurple: Math.floor(Math.random() * 401),
  tasksBlue: Math.floor(Math.random() * 401),
}));

const monthlyData = [
  { month: "May", tasksPurple: 80, tasksBlue: 50 },
  { month: "Jun", tasksPurple: 150, tasksBlue: 120 },
  { month: "Jul", tasksPurple: 110, tasksBlue: 210 },
  { month: "Aug", tasksPurple: 380, tasksBlue: 300 },
  { month: "Sep", tasksPurple: 250, tasksBlue: 190 },
  { month: "Oct", tasksPurple: 210, tasksBlue: 220 },
  { month: "Nov", tasksPurple: 290, tasksBlue: 30 },
  { month: "Dec", tasksPurple: 130, tasksBlue: 50 },
  { month: "Jan", tasksPurple: 340, tasksBlue: 60 },
  { month: "Feb", tasksPurple: 370, tasksBlue: 150 },
  { month: "Mar", tasksPurple: 310, tasksBlue: 220 },
  { month: "Apr", tasksPurple: 90, tasksBlue: 130 },
];

type ChartYpe = "daily" | "weekly" | "monthly";
export default function GraphicCard() {
  const [chartType, setChartType] = useState<ChartYpe>("monthly");

  const xAxisKey =
    chartType === "daily" ? "hour" : chartType === "weekly" ? "day" : "month";
  return (
    <div className="bg-white size-full flex gap-[40px] flex-col max-h-fit  p-10 rounded-[16px]">
      <div className="flex items-baseline gap-[40px] w-full">
        <h3 className="mr-auto font-bold text-[1.5rem] text-primary">
          Task Done
        </h3>
        <ChartSwitchButton
          isActive={chartType === "daily"}
          onClick={() => setChartType("daily")}
        >
          Daily
        </ChartSwitchButton>
        <ChartSwitchButton
          isActive={chartType === "weekly"}
          onClick={() => setChartType("weekly")}
        >
          Weekly
        </ChartSwitchButton>
        <ChartSwitchButton
          isActive={chartType === "monthly"}
          onClick={() => setChartType("monthly")}
        >
          Monthly
        </ChartSwitchButton>
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="w-full h-full  relative"
        minHeight={400}
      >
        <AreaChart
          data={
            chartType === "daily"
              ? dailyData
              : chartType === "weekly"
              ? weeklyData
              : monthlyData
          }
        >
          <defs>
            <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey={xAxisKey}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            domain={[0, 400]}
            tickMargin={20}
            axisLine={false}
            tickLine={false}
          />
          <CartesianGrid stroke="#E7EBEC" vertical={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-secondary)",
              color: "black",
              borderRadius: "20px",
              opacity: "0.8",
              border: "none",
            }}
            labelStyle={{
              color: "var(--color-primary)",
              fontSize: "1.2rem",
              fontStyle: "italic",
              borderBottom: "solid 1px var(--color-blue-gray)",
            }}
            labelFormatter={(label) => {
              if (chartType === "daily") {
                const hour = parseInt(label);
                const startHour = ` ${hour % 12 === 0 ? 12 : hour % 12}:00 ${
                  hour < 12 ? "am" : "pm"
                }`;
                const endHour = ` ${
                  (hour + 4) % 12 === 0 ? 12 : (hour + 4) % 12
                }:00 ${hour + 4 < 12 ? "am" : "pm"}`;
                return `${startHour}-${endHour}`;
              }
              if (chartType === "weekly") return `Day: ${label}`;
              return `Month: ${label}`;
            }}
          />

          <Area
            type="monotone"
            dataKey="tasksPurple"
            name="Tasks completed"
            opacity={0.3}
            stroke="#8B5CF6"
            fill="url(#colorPurple)"
            dot={{ r: 6, stroke: "#8B5CF6", strokeWidth: 4, fill: "#8B5CF6" }}
          />
          <Area
            type="monotone"
            dataKey="tasksBlue"
            name="New tasks"
            opacity={0.3}
            stroke="#3B82F6"
            fill="url(#colorBlue)"
            dot={{
              r: 6,
              stroke: "#3B82F6",
              strokeWidth: 4,
              fill: "#3B82F6",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
