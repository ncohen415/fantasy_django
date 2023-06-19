import { Inter } from "next/font/google"
import HomePageLayout from "@/hocs/HomePageLayout"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <HomePageLayout>
      <h1>homepage</h1>
    </HomePageLayout>
  )
}
