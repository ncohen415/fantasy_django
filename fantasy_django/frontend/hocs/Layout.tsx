import React, { ReactNode } from "react"
import Header from "../components/Header"

type Props = {
  children: ReactNode
}

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  )
}

export default Layout
