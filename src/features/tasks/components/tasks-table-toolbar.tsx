"use client";

import { Table } from "@tanstack/react-table";
import { X, LayoutGrid, Table2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TasksTableFacetedFilter } from "@/features/tasks/components/tasks-table-faceted-filter";

type ViewMode = "card" | "table";

interface TasksTableToolbarProps<TData> {
  table: Table<TData>;
  viewMode?: ViewMode;
  onViewChange?: (mode: ViewMode) => void;
  columnsDropdown?: React.ReactNode;
  createTaskButton?: React.ReactNode;
}

const statuses = [
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in-progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "blocked",
    label: "Blocked",
  },
];

const priorities = [
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "high",
    label: "High",
  },
  {
    value: "urgent",
    label: "Urgent",
  },
];

export function TasksTableToolbar<TData>({
  table,
  viewMode,
  onViewChange,
  columnsDropdown,
  createTaskButton,
}: TasksTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center gap-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-9 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <TasksTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <TasksTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.resetColumnFilters()}
            className="px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        {columnsDropdown}
        {createTaskButton}
        {viewMode !== undefined && onViewChange && (
          <>
            <Button
              variant={viewMode === "card" ? "default" : "outline"}
              size="sm"
              onClick={() => onViewChange("card")}
            >
              <LayoutGrid className="h-4 w-4 mr-2" />
              Card
            </Button>
            <Button
              variant={viewMode === "table" ? "default" : "outline"}
              size="sm"
              onClick={() => onViewChange("table")}
            >
              <Table2 className="h-4 w-4 mr-2" />
              Table
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
