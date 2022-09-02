import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello My name is Ayush
           & Welcome to Next.js!
        </h1>

        <p className={styles.description}>
          Get started by clicking{' '}
          <code className={styles.code}>Social media Links</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nex" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Find.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Linkedin &rarr;</h2>
            <p>about</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
            <p>Discover.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/__repl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built on
          <span className={styles.logo}>
            <Image src="/replit.svg" alt="Replit Logo" width={20} height={18} />
          </span>
          Replit by ayushsonone07
        </a>
      </footer>
    </div>
  )
}

export default Home
