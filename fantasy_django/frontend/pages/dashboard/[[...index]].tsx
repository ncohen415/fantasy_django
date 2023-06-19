import React from "react"
import { UserButton } from "@clerk/nextjs"
import DashboardLayout from "@/hocs/DashboardLayout"

type Props = {}

export default function Dashboard({}: Props) {
  return (
    <DashboardLayout>
      <div>Dashboard</div>
    </DashboardLayout>
  )
}
