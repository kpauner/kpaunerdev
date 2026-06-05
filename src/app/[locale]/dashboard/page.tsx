import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { DashboardContent } from "@/components/layout/dashboard-content"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"

import data from "./data.json"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <DashboardContent>
        <SectionCards />
        <ChartAreaInteractive />
        <DataTable data={data} />
      </DashboardContent>
    </>
  )
}
