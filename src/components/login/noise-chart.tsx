
"use client";

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

const chartData = [
    { time: "9 AM", hertz: 400 },
    { time: "10 AM", hertz: 650 },
    { time: "11 AM", hertz: 820 },
    { time: "12 PM", hertz: 1290 },
    { time: "1 PM", hertz: 1500 },
    { time: "2 PM", hertz: 1740 },
    { time: "3 PM", hertz: 1600 },
    { time: "4 PM", hertz: 1180 },
];

const chartConfig = {
  hertz: {
    label: "Hertz",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function NoiseChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[150px] w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          fontSize={12}
        />
        <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
            domain={[0, 2000]}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="hertz"
          type="natural"
          stroke="var(--color-hertz)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
