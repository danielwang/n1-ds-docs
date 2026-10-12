import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'N1 DS Docs',
  tagline: 'Documentation for the N1 DS project',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://danielwang.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served.
  // For GitHub project pages deployment, this is '/<projectName>/'.
  baseUrl: '/n1-ds-docs/',

  // GitHub pages deployment config.
  // Deployment is handled by the GitHub Actions workflow in
  // .github/workflows/deploy.yml using GitHub's native Pages deployment
  // (no gh-pages branch is used), but these fields are still used for
  // "edit this page" links and the `docusaurus deploy` CLI command.
  organizationName: 'danielwang', // Usually your GitHub org/user name.
  projectName: 'n1-ds-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Edit links point to the docs folder on the default branch.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/danielwang/n1-ds-docs/tree/main/',
        },
        // The blog plugin is disabled; this is a documentation-only site.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      // Retains Docusaurus's built-in light/dark theme switch in the navbar,
      // defaulting to the visitor's OS preference.
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'N1 DS Docs',
      logo: {
        alt: 'N1 DS Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/danielwang/n1-ds-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/danielwang/n1-ds-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} N1 DS Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
