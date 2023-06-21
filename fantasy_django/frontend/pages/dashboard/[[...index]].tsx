import React, { useState } from "react"
import { UserButton } from "@clerk/nextjs"
import DashboardLayout from "@/hocs/DashboardLayout"
import { GetServerSideProps } from "next"
import { getAuth } from "@clerk/nextjs/server"

export default function Dashboard({ data }) {
  const [djangoUser, setDjangoUser] = useState(data.django_user)
  return (
    <DashboardLayout user={djangoUser}>
      <div>Dashboard</div>
    </DashboardLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = getAuth(context.req)
  const body = JSON.stringify({ clerk_id: userId })
  try {
    const res = await fetch(
      "http://127.0.0.1:8000/api/accounts/get-user-from-clerk-id",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      }
    )
    const data = await res.json()
    return { props: { data } }
  } catch (e) {
    console.log(e)
  }
}
