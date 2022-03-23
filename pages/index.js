import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SignInForm from '../components/SignInForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nrg clip</title>
        <meta name="description" content="nrg clip jobcoin wallet" />
        <link rel="icon" href="/nrg-clip-favicon.png" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/nrg-clip-logo-web.png"
          alt="nrg clip logo"
          width="50"
          height="50"
        />
        <div>
          <p className="logo">nrg clip</p>
        </div>
        <SignInForm />
      </main>
    </div>
  )
}
