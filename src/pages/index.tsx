import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const logoSrc = useBaseUrl('/img/sidebar/logo.svg');
  return (
    <header className={styles.hero}>
      {/* Decorative atmosphere: grain, drifting glow orbs and a fine
          technical grid. Purely visual, so it's hidden from assistive
          tech and never intercepts pointer events. */}
      <div className={styles.atmosphere} aria-hidden="true">
        <span className={styles.grain} />
        <span className={styles.grid} />
        <span className={`${styles.orb} ${styles.orbPrimary}`} />
        <span className={`${styles.orb} ${styles.orbAccent}`} />
        <span className={`${styles.orb} ${styles.orbPurple}`} />
      </div>

      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroContent}>
          <Link to="/" className={styles.logo} aria-label="nebulaONE home">
            <img src={logoSrc} alt="nebulaONE" />
          </Link>
          <span className={styles.eyebrow}>UX &amp; UI Documentation</span>
          <Heading as="h1" className={styles.heroTitle}>
            <span className={styles.titleLine}>Design guidance</span>
            <span className={styles.titleLine}>
              for <em className={styles.titleAccent}>humans</em> and{' '}
              <em className={styles.titleAccent}>AI</em>
            </span>
          </Heading>
          <p className={styles.heroSubtitle}>
            Practical UX and UI guidelines for creating clear, consistent
            experiences.
          </p>
          <div className={styles.buttons}>
            <Link className={`button button--primary button--lg ${styles.cta}`} to="/docs/overview/getting-started">
              Browse the Docs
            </Link>
          </div>
        </div>

        {/* Editorial visual column: a frosted glass pane layered over a
            cropped, oversized echo of the wordmark. Hidden on narrow
            viewports to keep the mobile hero fast and uncluttered. */}
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.watermark}>
            <img src={logoSrc} alt="" className={styles.watermarkImg} />
          </div>
          <div className={styles.glassPane}>
            <span className={styles.glassGrid} />
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageFooter() {
  const wordmarkSrc = useBaseUrl('/img/nebulaone-wordmark.webp');
  return (
    <footer className={styles.footer}>
      <span className={styles.footerGrid} aria-hidden="true" />
      <p className={styles.footerCaption}>Design guidance for humans and AI</p>
      <img src={wordmarkSrc} alt="" className={styles.footerMark} aria-hidden="true" />
    </footer>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="UX and UI design guidelines for humans and AI systems">
      <HomepageHeader />
      <HomepageFooter />
    </Layout>
  );
}
