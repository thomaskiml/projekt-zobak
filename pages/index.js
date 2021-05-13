import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projekt Zobák</title>
        <script type="text/javascript" src="js/countdown.js"></script>
      </Head>

      <main className={styles.main}>

      <div className={styles.h01}>
          <h2>Projekt bude online za</h2>
        <h1 id="demo" className={styles.title}>
        </h1>
        <h3 className={styles.h03}><p className={styles.lefty}>•••</p></h3>
        </div>
      </main>

    </div>
  )
}
