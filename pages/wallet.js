import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Wallet.module.scss'
import { useNrgContext } from '../context/state'
import { useWalletUser } from '../lib/useWalletUser'
import Card from '../components/Card'
import Loader from '../components/Loader'
import SendTransaction from '../components/SendTransaction'
import AccountBalance from '../components/AccountBalance'

export default function Wallet() {
  const { user, setUser, userData, setUserData } = useNrgContext()
  const router = useRouter()
  const { data, isLoading } = useWalletUser(user)

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  useEffect(() => {
    setUserData(data)
  }, [data, setUserData])

  function signOutUser() {
    setUser('')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>nrg clip</title>
        <meta name="description" content="nrg clip jobcoin wallet" />
        <link rel="icon" href="/nrg-clip-favicon.png" />
      </Head>
      <nav className={styles.nav}>
        <section className={styles.navSection}>
          <div>
            <Image
              src="/nrg-clip-logo-web.png"
              alt="nrg clip logo"
              width="50"
              height="50"
            />
          </div>
          <p className={styles.navUser}>{user}</p>
        </section>
        <section className={styles.navSection}>
          <div>
            <Image src="/person.png" width="40" height="40" alt="person icon" />
          </div>
          <p className={styles.signedIn}>Signed In</p>
          <a className={styles.signOut} onClick={signOutUser}>
            Sign Out
          </a>
        </section>
      </nav>

      <main className={styles.main}>
        <section className={styles.sidebar}>
          <Card text="Jobcoin Balance">
            {isLoading ? (
              <Loader />
            ) : (
              <p className={styles.balance}>{userData?.balance}</p>
            )}
          </Card>
          <SendTransaction />
        </section>
        <section className={styles.graph}>
          {userData?.transactions ? <AccountBalance /> : <Loader />}
        </section>
      </main>
    </div>
  )
}
