import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import QuickLinks from '@site/src/components/QuickLinks';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={`container ${styles.heroContent}`}>
        <span className={styles.eyebrow}>Design System Documentation</span>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/overview/getting-started">
            Browse the Docs
          </Link>
          <Link className="button button--secondary button--lg" to="https://github.com/danielwang/n1-ds-docs">
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation for the nebulaONE design system">
      <HomepageHeader />
      <main>
        <QuickLinks />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
