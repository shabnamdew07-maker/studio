
"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { mood: "Happy", value: 1230, fill: "var(--color-happy)" },
  { mood: "Neutral", value: 750, fill: "var(--color-neutral)" },
  { mood: "Stressed", value: 320, fill: "var(--color-stressed)" },
  { mood: "Anxious", value: 180, fill: "var(--color-anxious)" },
];

const chartConfig = {
  value: {
    label: "Count",
  },
  happy: {
    label: "Happy",
    color: "hsl(var(--chart-2))",
  },
  neutral: {
    label: "Neutral",
    color: "hsl(var(--chart-4))",
  },
  stressed: {
    label: "Stressed",
    color: "hsl(var(--chart-1))",
  },
  anxious: {
    label: "Anxious",
    color: "hsl(var(--destructive))",
  },
} satisfies ChartConfig;

export function MoodChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData} layout="vertical">
        <XAxis type="number" hide />
        <YAxis
          dataKey="mood"
          type="category"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          width={60}
          hide
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="value" radius={5} />
      </BarChart>
    </ChartContainer>
  );
}
