import { DashboardContent } from "@/components/layout/dashboard-content"
import { DashboardHeader } from "@/components/layout/dashboard-header"
import { TasksTable, schema } from "@/features/tasks/components/tasks-table"
import tasksData from "../tasks-data.json"
import { z } from "zod"

const validatedTasksData = tasksData as z.infer<typeof schema>[]

export default function DashboardTasksPage() {
  return (
    <>
      <DashboardHeader />
      <DashboardContent>
        <TasksTable data={validatedTasksData} />
      </DashboardContent>
    </>
  )
}
