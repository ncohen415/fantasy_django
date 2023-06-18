import React from "react"
import { SignUp as Register } from "@clerk/nextjs"
import Layout from "@/hocs/Layout"

type Props = {}

export default function SignUp({}: Props) {
  return (
    <Layout>
      <Register />
    </Layout>
  )
}
