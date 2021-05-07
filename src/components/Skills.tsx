import React from 'react';
import Image from 'next/image'
import styles from '../styles/Components.module.scss';

export function Skills() {
  return (
    <div className={styles.main_container}>
      <h3 className={styles.glitch_title} data-text="Habilidades" >Habilidades</h3>
      <p className={styles.text}>Estas são minhas melhores habilidades que possuo e as que mais domino.</p>

      <div className={styles.grid_container}>

        <div className={styles.skill_box}>
          <Image src="/javascript.svg" alt="icon" width={80} height={80} />
          <p className={styles.skill_name} data-text="Javascript">Javascript</p>
        </div>

        <div className={styles.skill_box}>
          <Image src="/typescript.svg" alt="icon" width={80} height={80} />
          <p className={styles.skill_name} data-text="Typescript">Typescript</p>
        </div>

        <div className={styles.skill_box}>
          <Image src="/react.svg" alt="icon" width={80} height={80} />
          <p className={styles.skill_name} data-text="React/Native">React/Native</p>
        </div>

        <div className={styles.skill_box}>
          <Image src="/node.svg" alt="icon" width={80} height={80} />
          <p className={styles.skill_name} data-text="Node">Node</p>
        </div>

        <div className={styles.skill_box}>
          <Image src="/postgres.svg" alt="icon" width={80} height={80} />
          <p className={styles.skill_name} data-text="Postgres">Postgres</p>
        </div>

        <div className={styles.skill_box}>
          <Image src="/css.svg" alt="icon" width={80} height={80} />
          <p className={styles.skill_name} data-text="CSS">CSS</p>
        </div>
      </div>
    </div>
  );
}

