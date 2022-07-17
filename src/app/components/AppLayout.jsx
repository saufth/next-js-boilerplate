import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from '../../core/components/navigation/Link'

const keywords = [
  'web developer',
  'fullstack developer',
  'javascrip developer',
  'software developer',
  'web design',
  'ui design',
  'ux design'
]

const AppLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name='description' content="Web developer" />
        <meta name="keywords" content={String(keywords)} />
        <title>Saufthdev portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div>
          <Link href="http://localhost:3000">
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/images/logo.svg" alt="Sauftdev Logo" width={25} height={16} />
            </span>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default AppLayout
