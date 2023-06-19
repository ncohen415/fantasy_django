import React, { ReactNode } from "react"
import { useUser } from "@clerk/nextjs"
import Header from "../components/Header"
import DashboardSidebar from "../components/Header"

type Props = {
  children: ReactNode
}

const HomePageLayout = (props: Props) => {
  const user = useUser()
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  )
}

export default HomePageLayout
