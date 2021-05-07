import React from 'react';

import styles from '../styles/Components.module.scss';

export function About() {
  return (
    <div className={styles.main_container}>
      <h3 className={styles.glitch_title} data-text="Sobre">Sobre</h3>
      <p className={styles.text}>Eae Devs! Eu sou o Cauã e eu tenho sido um programador estudante há quase 2 anos.
      Hoje em dia eu estou melhorando minhas habilidades como um Full Stack e também aprendendo alguns conceitos
      de Data Science para no futuro talvez migrar para essa incrível area.
      </p>
    </div>
  );
}

