import styles from './page.module.css'
import Link from 'next/link'

function About() {
  return (
    <div className={styles.main}>
        <h1>Welcome, to ABOUTPAGE</h1>
        <Link href='/'>HOMEPAGE</Link>
    </div>
  )
}

export default About