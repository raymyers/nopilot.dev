import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'nopilot.dev',
  tagline: 'Your front row seat to the rise of Autonomous DevTools',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nopilot.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'raymyers', // Usually your GitHub org/user name.
  projectName: 'nopilot.dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/nopilot-logo-simple.png',
    navbar: {
      title: 'nopilot',
      logo: {
        alt: 'nopoilot Logo',
        src: 'img/nopilot-fabrika.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {to: '/blog', label: 'News', position: 'left'},
        {to: '/leaderboards', label: 'Leaderboards', position: 'left'},
        {to: '/resources', label: 'Resources', position: 'left'},
        {
          href: 'https://github.com/raymyers/nopilot.dev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            // {
            //   label: 'Tutorial',
            //   to: '/docs/intro',
            // },
            {
              label: 'Mender.AI',
              href: 'https://mender.ai',
            },
            {
              label: 'Craft vs Cruft',
              href: 'https://www.youtube.com/channel/UC4nEbAo5xFsOZDk2v0RIGHA',
            },
            {
              label: 'More',
              href: '/resources',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            {
              label: 'Nopilot Discord',
              href: 'https://discord.gg/k3hzFm5ykA',
            },
            {
              label: 'Nopilot YouTube',
              href: 'https://www.youtube.com/@nopilot-dev',
            },
            
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/raymyers/nopilot.dev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mender.AI`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
