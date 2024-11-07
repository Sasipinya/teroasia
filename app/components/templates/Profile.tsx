
'use client'

import { signOut, useSession } from "next-auth/react"



export default function Profile() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    return <div>Please sign in</div>
  }

  return (
    <div>
      <p>Welcome, {session.user?.name}</p>
      <img src={session.user?.image ?? ''} alt="Profile" />
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}