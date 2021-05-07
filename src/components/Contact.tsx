import React from 'react';
import Image from 'next/image';
import styles from '../styles/Components.module.scss';

export function Contact() {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.glitch_title} data-text="Contato">Contato</h1>
      <p className={styles.text}>Entre em contato comigo através desses perfis</p>

      <div className={styles.social_medias}>
        <a href="https://github.com/Cauas1" target="_blank">
          <Image src="/github.svg" width={35} height={35} />
        </a>

        <a href="https://www.linkedin.com/in/cau%C3%A3-souza-8129771b0/" target="_blank">
          <Image src="/linkedin.svg" width={35} height={35} />
        </a>
      </div>

    </div>
  );
}

