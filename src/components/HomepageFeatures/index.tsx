import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Written in Markdown',
    emoji: '📝',
    description: (
      <>
        Most content lives in simple Markdown files, so contributing new
        docs is as easy as writing plain text.
      </>
    ),
  },
  {
    title: 'Organized Automatically',
    emoji: '🗂️',
    description: (
      <>
        The sidebar is generated from the folder structure in{' '}
        <code>docs/</code>, keeping navigation in sync with your content.
      </>
    ),
  },
  {
    title: 'Light & Dark Themes',
    emoji: '🌓',
    description: (
      <>
        The site ships with Docusaurus&apos;s built-in light and dark
        themes, switchable from the navbar.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.card, 'n1-card')}>
        <span className={styles.featureEmoji} role="img" aria-hidden="true">
          {emoji}
        </span>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Why this site</span>
          <Heading as="h2" className={styles.sectionTitle}>Built for contributors, not just consumers</Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
