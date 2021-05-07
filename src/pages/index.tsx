import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Skills } from '../components/Skills'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h1 className={styles.glitch_title} data-text="cauas1's portifolio">cauas1's portifolio</h1>

        <p className={styles.caption}>scroll down</p>
      </div>

      <div className={styles.second_container}>
        <div className={styles.second}>
          <About />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  )
}
