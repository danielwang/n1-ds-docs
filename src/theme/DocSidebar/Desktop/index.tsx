import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import Content from '@theme/DocSidebar/Desktop/Content';
import type {Props} from '@theme/DocSidebar/Desktop';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}: Props): ReactNode {
  const {docs: {sidebar: {hideable}}, navbar: {hideOnScroll}} = useThemeConfig();

  return (
    <div className={clsx(styles.sidebar, 'n1-doc-sidebar', isHidden && styles.hidden, hideOnScroll && styles.hideableNavbar)}>
      <header className={styles.header}>
        <Link to="/" className={styles.brand} aria-label="nebulaONE home">
          <img src={useBaseUrl('/img/logo.png')} alt="nebulaONE" />
        </Link>
        {hideable && (
          <button type="button" className={styles.collapse} onClick={onCollapse} aria-label="Collapse sidebar" title="Collapse sidebar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
          </button>
        )}
      </header>
      <div className={styles.label}>Documentation</div>
      <Content path={path} sidebar={sidebar} className={styles.menu} />
      <Link to="/docs/overview/getting-started" className={styles.footer}>
        <span className={styles.monogram} aria-hidden="true">N</span>
        <span>nebulaONE<span className={styles.caption}>Design system</span></span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
      </Link>
    </div>
  );
}
