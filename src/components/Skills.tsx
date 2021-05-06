import React from 'react';
import Image from 'next/image'
import styles from '../styles/About.module.css';

// import jsIcon from '../..public/javascript.svg';
// import pyIcon from '/python.svg';
// import tsIcon from '/typescript.svg';
// import pstIcon from '/postgres.svg';
// import cssIcon from '/css.svg';
// import rnIcon from '/javascript.svg';

// const icons = [jsIcon, rnIcon, tsIcon, pstIcon, cssIcon, pyIcon];

export function Skills() {
  return (
    <>
      <h3 className={styles.title}>Habilidades</h3>
      <p className={styles.text}>Estas são minhas melhores habilidades que possuo e as que mais domino.</p>

      <div className={styles.grid_container}>
        <div className={styles.skills_grid}>
          {/* {icons.map(icon => {
          <div className={styles.skill}>
            <Image src={icon} alt="icon" width="2rem" height="2rem" />
          </div>
        })} */}

          <div className={styles.skill_container}>
            <Image src="/javascript.svg" alt="icon" width={80} height={80} />
            <p className={styles.skill_name}>Javascript</p>
          </div>

          <div className={styles.skill_container}>
            <Image src="/typescript.svg" alt="icon" width={80} height={80} />
            <p className={styles.skill_name}>Typescript</p>
          </div>

          <div className={styles.skill_container}>
            <Image src="/react.svg" alt="icon" width={80} height={80} />
            <p className={styles.skill_name}>React/Native</p>
          </div>

          <div className={styles.skill_container}>
            <Image src="/node.svg" alt="icon" width={80} height={80} />
            <p className={styles.skill_name}>Node</p>
          </div>

          <div className={styles.skill_container}>
            <Image src="/postgres.svg" alt="icon" width={80} height={80} />
            <p className={styles.skill_name}>Postgres</p>
          </div>

          <div className={styles.skill_container}>
            <Image src="/css.svg" alt="icon" width={80} height={80} />
            <p className={styles.skill_name}>CSS</p>
          </div>
        </div>
      </div>
    </>
  );
}

