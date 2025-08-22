
"use client";

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

const chartData = [
    { time: "9 AM", participants: 280 },
    { time: "10 AM", participants: 450 },
    { time: "11 AM", participants: 620 },
    { time: "12 PM", participants: 890 },
    { time: "1 PM", participants: 1100 },
    { time: "2 PM", participants: 1340 },
    { time: "3 PM", participants: 1200 },
    { time: "4 PM", participants: 980 },
];

const chartConfig = {
  participants: {
    label: "Participants",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function ParticipationChart() {
  return (
    <ChartContainer config={chartConfig}>
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
        />
        <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="participants"
          type="natural"
          stroke="var(--color-participants)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
