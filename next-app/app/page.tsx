import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
        <title>Next/aushsonone07</title>
    </Head>
    <main className={styles.main}>
      <h1>Welcome, to HOMEPAGE</h1>
      <Link href="/about">ABOUTPAGE</Link>
    </main>
    </>
  )
}
