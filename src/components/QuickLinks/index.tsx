import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type QuickLink = {
  title: string;
  description: string;
  href: string;
  icon: string;
  accent: 'primary' | 'purple' | 'accent';
};

// Icons are reused from the sidebar's own icon set (static/img/sidebar/) so
// the homepage and docs navigation stay visually consistent without adding
// a new icon dependency.
const links: QuickLink[] = [
  {
    title: 'Overview',
    description: 'Start here for an introduction and getting-started guide.',
    href: '/docs/overview/getting-started',
    icon: '/img/sidebar/overview.svg',
    accent: 'primary',
  },
  {
    title: 'Foundations',
    description: 'The design principles behind the nebulaONE system.',
    href: '/docs/foundations/design-principles',
    icon: '/img/sidebar/foundations.svg',
    accent: 'purple',
  },
  {
    title: 'Design Tokens',
    description: '12 token categories covering colour, type, spacing and more.',
    href: '/docs/design-tokens/what-is-design-token',
    icon: '/img/sidebar/tokens.svg',
    accent: 'accent',
  },
  {
    title: 'UI Components',
    description: 'Reference components built on top of the token set.',
    href: '/docs/ui-components/example-component',
    icon: '/img/sidebar/components.svg',
    accent: 'primary',
  },
];

function QuickLinkCard({title, description, href, icon, accent}: QuickLink) {
  const iconSrc = useBaseUrl(icon);
  return (
    <Link to={href} className={`${styles.card} n1-card`}>
      <span className={styles.icon} data-accent={accent} aria-hidden="true">
        <img src={iconSrc} alt="" width={20} height={20} />
      </span>
      <Heading as="h3" className={styles.title}>
        {title}
      </Heading>
      <p className={styles.description}>{description}</p>
      <span className={styles.cta} aria-hidden="true">
        Explore
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}

export default function QuickLinks(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Explore the system</span>
          <Heading as="h2" className={styles.sectionTitle}>Everything you need, organized by purpose</Heading>
        </div>
        <div className={styles.grid}>
          {links.map((link) => (
            <QuickLinkCard key={link.title} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}
