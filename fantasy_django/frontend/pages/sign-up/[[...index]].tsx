import React from "react"
import { SignUp as Register } from "@clerk/nextjs"
import HomePageLayout from "@/hocs/HomePageLayout"

type Props = {}

export default function SignUp({}: Props) {
  return (
    <HomePageLayout>
      <Register />
    </HomePageLayout>
  )
}
