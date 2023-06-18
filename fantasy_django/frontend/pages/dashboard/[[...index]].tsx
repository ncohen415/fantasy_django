import React from "react"
import { UserButton } from "@clerk/nextjs"

type Props = {}

export default function Dashboard({}: Props) {
  return (
    <>
      <div>Dashboard</div>
      <UserButton />
    </>
  )
}
