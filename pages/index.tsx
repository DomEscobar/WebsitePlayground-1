import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moonlight Sonata</title>
        <link rel="preconnect" href="/tanak.otf" />
        <meta
          name="description"
          content="Follow the path - XianTanak will guide you @XianTanakBot.Only 1 /setTG /setTWT. /? "
        />
        <link rel="icon" href="/images/xiancu.jpg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.container}>
            <img className={styles.xiancu} src="/images/xiancu.jpg" />
            <div className={styles.sky}>
              <h1 className={styles.headerText}>Moonlight Sonata...</h1>
              <h2 className={styles.text}>
                ... follow the sonata of <b> Xian Tanak</b> 
              </h2>
              <div className={styles.stars}></div>
              <div className={styles.stars1}></div>
              <div className={styles.stars2}></div>
              <div className={styles.shooting}></div>
              <div className={styles.shooting2}></div>
              <div className={styles.moon}></div>

              <img className={styles.piano} src="/images/piano.gif" alt="/?" />

              <svg
                className={styles.floor}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#000000"
                  d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,128C672,117,768,107,864,117.3C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
