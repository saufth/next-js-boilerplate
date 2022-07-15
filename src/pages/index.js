import Link from '../core/components/navigation/Link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to my <Link href="http://localhost:3000">Javascript boilerplate!</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Link href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}
