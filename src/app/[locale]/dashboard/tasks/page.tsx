import { SidebarInset } from "@/components/ui/sidebar"
import { TasksTable, schema } from "@/features/tasks/components/tasks-table"
import tasksData from "../tasks-data.json"
import { z } from "zod"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { DashboardHeader } from "@/components/layout/dashboard-header"

// Type assertion: JSON data matches the schema structure
const validatedTasksData = tasksData as z.infer<typeof schema>[]

export default function DashboardTasksPage() {
  return (
    <>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <TasksTable data={validatedTasksData} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </>
  )
}
