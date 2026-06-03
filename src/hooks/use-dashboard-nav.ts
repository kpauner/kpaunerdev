"use client"

import {
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileTextIcon,
  FileIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  ListTodoIcon,
  CalendarRangeIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react"
import { useTranslations } from "next-intl"

export type DashboardNavItem = {
  title: string
  url: string
  icon?: LucideIcon
}

export type DashboardDocumentItem = {
  name: string
  url: string
  icon: LucideIcon
}

export type DashboardNavCloudItem = {
  title: string
  icon: LucideIcon
  isActive?: boolean
  url: string
  items: { title: string; url: string }[]
}

/** Reserved for nested sidebar sections (not rendered yet). */
export type DashboardNavClouds = DashboardNavCloudItem[]

export function useDashboardNav() {
  const t = useTranslations("dashboard")

  const navMain: DashboardNavItem[] = [
    { title: t("nav.timeline"), url: "#", icon: CalendarRangeIcon },
    { title: t("nav.tasks"), url: "#", icon: ListTodoIcon },
    { title: t("nav.dashboard"), url: "#", icon: LayoutDashboardIcon },
    { title: t("nav.lifecycle"), url: "#", icon: ListIcon },
    { title: t("nav.analytics"), url: "#", icon: BarChartIcon },
    { title: t("nav.projects"), url: "#", icon: FolderIcon },
    { title: t("nav.team"), url: "#", icon: UsersIcon },
  ]

  const navClouds: DashboardNavClouds = [
    {
      title: t("navClouds.capture"),
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        { title: t("navClouds.activeProposals"), url: "#" },
        { title: t("navClouds.archived"), url: "#" },
      ],
    },
    {
      title: t("navClouds.proposal"),
      icon: FileTextIcon,
      url: "#",
      items: [
        { title: t("navClouds.activeProposals"), url: "#" },
        { title: t("navClouds.archived"), url: "#" },
      ],
    },
    {
      title: t("navClouds.prompts"),
      icon: FileCodeIcon,
      url: "#",
      items: [
        { title: t("navClouds.activeProposals"), url: "#" },
        { title: t("navClouds.archived"), url: "#" },
      ],
    },
  ]

  const navSecondary: DashboardNavItem[] = [
    { title: t("secondary.settings"), url: "#", icon: SettingsIcon },
    { title: t("secondary.getHelp"), url: "#", icon: HelpCircleIcon },
    { title: t("secondary.search"), url: "#", icon: SearchIcon },
  ]

  const documents: DashboardDocumentItem[] = [
    { name: t("documents.dataLibrary"), url: "#", icon: DatabaseIcon },
    { name: t("documents.reports"), url: "#", icon: ClipboardListIcon },
    { name: t("documents.wordAssistant"), url: "#", icon: FileIcon },
  ]

  return {
    brand: t("brand"),
    header: t("header"),
    quickCreateLabel: t("nav.quickCreate"),
    inboxLabel: t("nav.inbox"),
    navMain,
    navClouds,
    navSecondary,
    documents,
    documentsLabel: t("documents.label"),
    documentsMoreLabel: t("documents.more"),
    documentsOpenLabel: t("documents.open"),
    documentsShareLabel: t("documents.share"),
  }
}
