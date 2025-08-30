"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

// Define the data structure type
export type ChartDataPoint = {
  month: string
  [key: string]: string | number
}

// Define the chart configuration type
export type ChartLineConfig = {
  [key: string]: {
    label: string
    color: string
  }
}

// Props for the generic component
export interface ChartLineDotsProps {
  data: ChartDataPoint[]
  config: ChartLineConfig
  title?: string
  description?: string
  width?: number
  height?: number
}

export function ChartLineDots({
  data,
  config,
  title = "Line Chart - Dots",
  description = "Chart data",

  height = 300,
}: ChartLineDotsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <LineChart
            accessibilityLayer
            data={data}
            height={height}
            margin={{
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            {Object.entries(config).map(([key, lineConfig]) => (
              <Line
                key={key}
                dataKey={key}
                type="natural"
                stroke={lineConfig.color}
                strokeWidth={2}
                dot={{
                  fill: lineConfig.color,
                  r: 4,
                }}
                activeDot={{
                  r: 6,
                  fill: lineConfig.color,
                }}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
