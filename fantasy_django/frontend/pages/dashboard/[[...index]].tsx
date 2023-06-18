import React from "react"
import { UserButton } from "@clerk/nextjs"
import Layout from "@/hocs/Layout"

type Props = {}

export default function Dashboard({}: Props) {
  return (
    <Layout>
      <div>Dashboard</div>
      <UserButton />
    </Layout>
  )
}
