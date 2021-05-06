import Head from 'next/head'
import Image from 'next/image'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h1 className={styles.glitch} data-text="cauas1's portifolio">cauas1's portifolio</h1>

        <p className={styles.caption}>scroll down</p>
      </div>

      <div className={styles.second}>
        <About />

        <Skills />
      </div>
    </div>
  )
}
