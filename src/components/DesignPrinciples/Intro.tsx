import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

import {philosophyPillars} from './data';
import styles from './styles.module.css';

/**
 * Opening banner for the Design Principles page: a two-column title +
 * lead statement, followed by "The Philosophy" — the single idea every
 * principle below exists to protect.
 */
export default function DesignPrinciplesIntro(): ReactNode {
  return (
    <div className={styles.intro}>
      <div className={styles.introAtmosphere} aria-hidden="true">
        <span className={styles.introGrain} />
        <span className={styles.introGrid} />
      </div>

      <div className={styles.introHeader}>
        <Heading as="h1" className={styles.introTitle}>
          <span className={styles.introTitleLine}>Design</span>
          <span className={`${styles.introTitleLine} ${styles.introTitleAccent}`}>
            Principles
          </span>
        </Heading>
        <p className={styles.introLead}>
          Human-centered design is not a phase of our process. It is the
          standard every Cloudforce decision is measured against — in
          strategy, engineering, delivery, and the product itself.
        </p>
      </div>

      <div className={styles.philosophy}>
        <span className={styles.eyebrow}>The Philosophy</span>
        <p className={styles.philosophyStatement}>
          Everything begins with the human doing the work.
        </p>
        <p className={styles.philosophyBody}>
          Every principle below is a way of honoring that. The universal
          principles govern how Cloudforce thinks and decides. The product
          principles govern how nebulaONE behaves. Neither exists to
          describe screens — they exist to protect the person on the other
          side of them.
        </p>
        <div className={styles.pillarGrid}>
          {philosophyPillars.map((pillar) => (
            <div className={styles.pillarCell} key={pillar.title}>
              <p className={styles.pillarTitle}>{pillar.title}</p>
              <p className={styles.pillarBody}>{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
