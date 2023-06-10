// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Misinfocon India Docs",
  tagline: "Repository of the work done by the various Working Groups",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://tattle-made.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/misinfocon-india-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tattle-made", // Usually your GitHub org/user name.
  projectName: "misinfocon-india-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/tattle-made/misinfocon-india-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/tattle-made/misinfocon-india-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/misinfocon-india-group-photo.png",
      navbar: {
        title: "Home",
        logo: {
          alt: "Misinfocon India",
          src: "img/logo.png",
        },
        items: [
          { to: "/working-groups", label: "Working Groups", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Proposals",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/contact", label: "Contact", position: "left" },
          {
            href: "https://github.com/tattle-made/misinfocon-india-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Email",
                to: "/contact",
              },
              {
                label: "Slack",
                href: "https://admin417477.typeform.com/to/nVuNyG?typeform-source=tattle.co.in",
              },
              {
                label: "Whatsapp",
                to: "/contact",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/tattle-made/misinfocon-india-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Misinfocon India Docs Site. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
