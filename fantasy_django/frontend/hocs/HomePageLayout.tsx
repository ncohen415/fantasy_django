import React, { ReactNode } from "react"
import { useUser } from "@clerk/nextjs"
import Header from "../components/Header"

type Props = {
  children: ReactNode
}

const HomePageLayout = (props: Props) => {
  console.log(props.user)
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  )
}

export default HomePageLayout
