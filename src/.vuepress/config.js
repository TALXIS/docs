const { config } = require("vuepress-theme-hope");
const { description } = require('../../package')

module.exports = config({
  locales: {
    '/': {
      lang: 'en',
      title: 'Docs',
      description: 'Documentation for TALXIS by NETWORG.'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Docs',
      description: 'Documentation for TALXIS by NETWORG.'
    },
    '/cz/': {
      lang: 'cs-CZ',
      title: 'Dokumentace',
      description: 'Nápověda pro TALXIS od NETWORGu.'
    }
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'TALXIS Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#4b7b67' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'TALXIS/docs',
    pwa:false,
    comment: { //this is a workaround... with pageinfo it crashes on missing localization
      type: "disable",
      pageInfo: false
    },
    editLinks: true,
    displayHeaders: true,
    docsDir: 'src',
    editLinkText: '',
    lastUpdated: "Last Updated",
    themeColor: false, //prevent visitors switching accent color
    logo: '/assets/img/talxis_logo.png',
    darkLogo: '/assets/img/talxis_logo_white.png',
    smoothScroll: true,
    pageInfo: ['Author', 'Time', 'ReadTime'],
    footer: {
      display: true,
      copyright: "Developed and Maintained by <a href='https://networg.com' target='_blank'> NETWORG </a>",
    },
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'Select Language',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          {
            text: 'Community',
            link: 'https://tntg.cz/talxis-community'
          }
        ],
        sidebar: {}
      },
      '/en/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          {
            text: 'Developer Guide',
            link: '/en/developer-guide/introduction',
          },
          {
            text: 'Community',
            link: 'https://tntg.cz/talxis-community'
          }
        ],
        sidebar: {
          '/en/developer-guide/': [
            {
              title: 'Getting Started',
              collapsable: false,
              children: [
                ['', 'Introduction'],
                ['getting-started/components', 'Components'],
                {
                  title: 'Contributing',
                  collapsable: true,
                  children: [
                    {
                      title: 'Naming Conventions',
                      collapsable: true,
                      children: [
                        ['applications/naming-conventions/git', 'Git'],
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: 'Applications',
              collapsable: false,
              children: [
                {
                  title: 'Modules',
                  collapsable: true,
                  children: [
                    //['preparing-content', 'Start'],
                    //['preparing-content', 'Sales'],
                    //['preparing-content', 'Contract']
                  ]
                },
                {
                  title: 'Utilities',
                  collapsable: true,
                  children: [
                    ['applications/utilities/record-operations', 'Record Operations'],
                    ['applications/utilities/lookup-references', 'Lookup References']
                    //['preparing-content', 'Sales'],
                    //['preparing-content', 'Contract']
                  ]
                },
                //['preparing-content', 'Blank']
              ]
            },
            {
              title: 'Client',
              collapsable: false,
              children: [
                {
                  title: 'Controls',
                  collapsable: true,
                  children: [
                    //['preparing-content', 'Blank']
                  ]
                },
                {
                  title: 'Web Portal',
                  collapsable: true,
                  children: [
                    //['preparing-content', 'Blank']
                  ]
                }
              ]
            },
            {
              title: 'Integration',
              collapsable: false,
              children: [
                {
                  title: 'Components',
                  collapsable: true,
                  children: [
                    ['preparing-content', 'Connector'],
                    ['preparing-content', 'Proxy'],
                    ['preparing-content', 'Adapter']
                  ]
                }
              ]
            },
            {
              title: 'Platform',
              collapsable: false,
              children: [
                {
                  title: 'Service Cluster',
                  collapsable: true,
                  children: [
                    //['preparing-content', 'Blank']
                  ]
                },
                {
                  title: 'Workflow Runtime',
                  collapsable: true,
                  children: [
                    //['preparing-content', 'Blank']
                  ]
                }
              ]
            }
          ],
        }
      },
      '/cz/': {
        selectText: 'Jazyk',
        label: 'čeština',
        editLinkText: 'Upravit tuto stránku na GitHubu',
        nav: [
          {
            text: 'Komunita',
            link: 'https://tntg.cz/talxis-community'
          }
        ],
        algolia: {},
        sidebar: {
          '/cz/integration/': [
            {
              title: 'Hlavní stránka',
              path: '/cz/',
              collapsable: false
            },
            {
              title: 'Integrace',
              path: '/cz/integration/',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                {
                  title: 'Raynet',
                  path: '/cz/integration/raynet/',
                  collapsable: true,
                  sidebarDepth: 1,
                  children: [
                    '/cz/integration/raynet/calendar/',
                    '/cz/integration/raynet/contacts/'
                  ]
                },
                {
                  title: 'Signi (iSmlouva)',
                  path: '/cz/integration/signi/',
                  collapsable: true,
                  sidebarDepth: 1
                }
              ]
            }
          ],
        }
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/google-analytics', {
      'ga': 'UA-73142323-3'
    }]
  ]
});
