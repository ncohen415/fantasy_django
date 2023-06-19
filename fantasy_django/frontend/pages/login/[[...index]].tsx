import React from "react"
import { SignIn } from "@clerk/nextjs"
import HomePageLayout from "@/hocs/HomePageLayout"

type Props = {}

export default function Login({}: Props) {
  return (
    <HomePageLayout>
      <SignIn />
    </HomePageLayout>
  )
}
