import React from "react"
import { SignIn } from "@clerk/nextjs"

type Props = {}

export default function Login({}: Props) {
  return <SignIn />
}
