import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.scss'
import Navbar from './navbar'

const name = 'S. Roberto Andrade'
const jobTitle = 'Creative Technologist'
export const siteTitle = `${name} | ${jobTitle}`

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`${name} | ${jobTitle} landing page`}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>{children}</main>
      {!home && (
        <div className={`${styles.backToHome} ${utilStyles.noPrint}`} >
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}