import React from "react"
import { SignIn } from "@clerk/nextjs"
import Layout from "@/hocs/Layout"

type Props = {}

export default function Login({}: Props) {
  return (
    <Layout>
      <SignIn />
    </Layout>
  )
}
