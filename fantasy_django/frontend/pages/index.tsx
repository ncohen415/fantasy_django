import { Inter } from "next/font/google"
import Layout from "@/hocs/Layout"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout>
      <h1>homepage</h1>
    </Layout>
  )
}
