"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function FinanceChart({ data, title, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            balance: {
              label: "Balance",
              color: "hsl(var(--chart-1))",
            },
            savings: {
              label: "Savings",
              color: "hsl(var(--chart-2))",
            },
            expenses: {
              label: "Expenses",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="balance"
                stackId="1"
                stroke="var(--color-balance)"
                fill="var(--color-balance)"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="savings"
                stackId="2"
                stroke="var(--color-savings)"
                fill="var(--color-savings)"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stackId="3"
                stroke="var(--color-expenses)"
                fill="var(--color-expenses)"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
