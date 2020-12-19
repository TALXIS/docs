const { description } = require('../../package')

module.exports = {
  locales: {
    '/': {
      lang: 'en',
      title: 'TALXIS Docs',
      description: 'Documentation for TALXIS by NETWORG.'
    },
    '/en/': {
      lang: 'en-US',
      title: 'TALXIS Docs',
      description: 'Documentation for TALXIS by NETWORG.'
    },
    '/cz/': {
      lang: 'cs-CZ',
      title: 'TALXIS Nápověda',
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
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: true,
    displayHeaders: true,
    docsDir: 'https://github.com/TALXIS/docs',
    editLinkText: '',
    lastUpdated: false,
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
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
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
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          {
            text: 'Guide',
            link: '/en/guide/',
          },
          {
            text: 'Config',
            link: '/en/config/'
          },
          {
            text: 'Community',
            link: 'https://tntg.cz/talxis-community'
          }
        ],
        sidebar: {
          '/en/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
        }
      },
      '/cz/': {
        selectText: 'Jazyk',
        label: 'čeština',
        editLinkText: 'Upravit tuto stránku na GitHubu',
        serviceWorker: {
          updatePopup: {
            message: "Nový obsah je dostupný.",
            buttonText: "Obnovit"
          }
        },
        nav: [
          {
            text: 'Guide',
            link: '/cz/guide/',
          },
          {
            text: 'Config',
            link: '/cz/config/'
          },
          {
            text: 'Komunita',
            link: 'https://tntg.cz/talxis-community'
          }
        ],
        algolia: {},
        sidebar: {
          '/cz/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
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
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
