import Link from 'next/link'; 
import type { Metadata } from 'next';
import fetchUsersData from '@/lib/fetchUsersData';

export const metadata : Metadata = {
    title : 'users',
}

export default async function UserPage() {
  const userData : Promise<user[]> = fetchUsersData()

  const users = await userData

  const content = (
    <section>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <br/>
      {users.map(user => {
        return(
          <>
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.title}</Link>
          </p>
          </>
        )
      })}
    </section>
  )

  return content
}
