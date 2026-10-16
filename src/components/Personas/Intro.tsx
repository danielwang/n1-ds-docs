import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

/**
 * Opening banner for the Personas page: eyebrow + gradient title, a
 * one-line framing statement, and a small "Experience & Design" badge
 * echoing the source reference's corner mark.
 */
export default function PersonasIntro(): ReactNode {
  return (
    <div className={styles.intro}>
      <div className={styles.introAtmosphere} aria-hidden="true">
        <span className={styles.introGrain} />
        <span className={styles.introGrid} />
      </div>

      <div className={styles.introTop}>
        <div className={styles.introHeading}>
          <span className={styles.eyebrow}>UX Design Methodology</span>
          <Heading as="h1" className={styles.introTitle}>
            <span className={styles.introTitlePlain}>nebulaONE</span>{' '}
            <span className={styles.introTitleAccent}>User Personas</span>
          </Heading>
        </div>

        <div className={styles.badge} aria-hidden="true">
          <span className={styles.badgeMark}>
            {Array.from({length: 9}).map((_, i) => (
              <span key={i} className={styles.badgeDot} />
            ))}
          </span>
          <span className={styles.badgeText}>
            Experience
            <br />
            &amp; Design
          </span>
        </div>
      </div>

      <p className={styles.introLead}>
        Six roles nebulaONE is designed around — the people who create and
        govern agents, and the people who rely on them every day. Every
        principle on this site exists to serve someone on this list.
      </p>
    </div>
  );
}
