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
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: "icon", type: "image/png", href: "/assets/img/talxis_logo_ico.png" }],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: 'TALXIS/docs',
        pwa: false,
        comment: { //this is a workaround... with pageinfo it crashes on missing localization
            type: "disable",
            pageInfo: false
        },
        mdEnhance: {
            align: true,
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
                    },
                    {
                        text: 'Status',
                        link: 'https://status.talxis.com'
                    },
                    {
                        text: 'Service Desk',
                        link: 'https://support.networg.com'
                    },
                    {
                        text: 'Q&A',
                        link: 'https://talxis.com/questions'
                    },
                    {
                        text: 'Roadmap',
                        link: 'https://talxis.com/roadmap'
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
                        text: 'Community',
                        link: 'https://tntg.cz/talxis-community'
                    },
                    {
                        text: 'Status',
                        link: 'https://status.talxis.com'
                    },
                    {
                        text: 'Service Desk',
                        link: 'https://support.networg.com'
                    },
                    {
                        text: 'Q&A',
                        link: 'https://talxis.com/questions'
                    },
                    {
                        text: 'Roadmap',
                        link: 'https://talxis.com/roadmap'
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
                                        ['getting-started/contributing/git-workflow', 'Git Workflow'],
                                        {
                                            title: 'Naming Conventions',
                                            collapsable: true,
                                            children: [
                                                ['getting-started/contributing/naming-conventions/git', 'Git'],
                                            ]
                                        },
                                        ['getting-started/contributing/localization-of-business-applications', 'Localization of Business Applications'],
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
                                        {
                                            title: 'Environment',
                                            collapsable: true,
                                            children: [
                                                ['preparing-content', 'Bootstrap'],
                                                ['preparing-content', 'Commerce Start'],
                                                ['preparing-content', 'Geospatial'],
                                                ['preparing-content', 'Contract']
                                            ]
                                        },
                                        {
                                            title: 'Distribution',
                                            collapsable: true,
                                            children: [
                                                ['preparing-content', 'Product'],
                                                ['preparing-content', 'Sales'],
                                                ['preparing-content', 'Marketing'],
                                                ['preparing-content', 'Logistics'],
                                                ['preparing-content', 'Retail']
                                            ]
                                        },
                                        {
                                            title: 'Service',
                                            collapsable: true,
                                            children: [
                                                ['preparing-content', 'Project'],
                                                ['preparing-content', 'Customer Service'],
                                                ['preparing-content', 'Field Service'],
                                                ['preparing-content', 'Scheduling']
                                            ]
                                        },
                                        {
                                            title: 'Operation',
                                            collapsable: true,
                                            children: [
                                                ['applications/modules/operation/procurement', 'Procurement'],
                                                ['preparing-content', 'Finance'],
                                                ['preparing-content', 'People'],
                                                ['preparing-content', 'Quality'],
                                                ['preparing-content', 'Assets']
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Onboarding',
                                    collapsable: true,
                                    children: [
                                        ['applications/onboarding/provision-an-environment', 'Provision an Environment'],
                                        ['applications/onboarding/provide-an-interactive-access-to-an-environment', 'Provide an Interactive Access to an Environment'],
                                        ['applications/onboarding/deploy-an-environment', 'Deploy an Evironment']
                                    ]
                                },
                                {
                                    title: 'Utilities',
                                    collapsable: true,
                                    children: [
                                        ['applications/utilities/announcements', 'Announcements'],
                                        ['applications/utilities/custom-assignment-cascade', 'Assignment Cascade Configuration'],
                                        ['applications/utilities/async-jobs', 'Asynchronous Jobs'],
                                        ['applications/utilities/background-jobs', 'Background Jobs'],
                                        ['applications/utilities/configuration-page', 'Configuration Page'],
                                        ['applications/utilities/create-and-open', 'Create And Open Record'],
                                        ['applications/utilities/introductions', 'Introductions'],
                                        ['applications/utilities/lookup-references', 'Lookup References'],
                                        ['applications/utilities/querybuilder', 'Query Builder'],
                                        ['applications/utilities/record-operations', 'Record Operations'],
                                        ['applications/utilities/uci-extensions', 'UCI Extensions'],
                                        ['applications/utilities/create-and-open', 'Create And Open Record'],
                                        ['applications/utilities/metadata', 'Metadata-Get App Module Details'],
                                        ['applications/utilities/flows', 'TALXIS Flows'],
                                        {
                                            title: 'Content Templates',
                                            collapsable: true,
                                            children: [
                                                ['applications/utilities/templates/general', 'General'],
                                                ['applications/utilities/templates/email-template', 'Email Template'],
                                                ['applications/utilities/templates/document-template', 'Document Template'],
                                                ['applications/utilities/templates/fill-excel-reapter-template', 'Fill Excel Repeater Template'],
                                                ['applications/utilities/templates/fill-excel-template', 'Fill Excel Template'],
                                                ['applications/utilities/templates/fill-word-template', 'Fill Word Template'],
                                            ]
                                        },
                                        //['preparing-content', 'Sales'],
                                        //['preparing-content', 'Contract']
                                    ]
                                },
                                {
                                    title: 'Solution Components',
                                    collapsable: true,
                                    children: [
                                        ['applications/solution-components/general', 'Common Guidance'],
                                        {
                                            title: 'Presentation',
                                            collapsable: true,
                                            children: [
                                                ['applications/solution-components/appmodule', 'AppModule & SiteMap'],
                                                ['preparing-content', 'Dashboard/Chart'],
                                                ['preparing-content', 'Canvas App'],
                                                ['applications/solution-components/form', 'Form'],
                                                ['preparing-content', 'Controls'],
                                                ['preparing-content', 'Client Scripts'],
                                                ['applications/solution-components/businessrule', 'Business Rule'],
                                                ['applications/solution-components/view', 'View'],
                                                ['preparing-content', 'Ribbon Buttons'],
                                                ['applications/solution-components/icon', 'Icon']
                                            ]
                                        },
                                        {
                                            title: 'Composition',
                                            collapsable: true,
                                            children: [
                                                ['preparing-content', 'Message Processing Step'],
                                                ['preparing-content', 'Code Activity'],
                                                ['preparing-content', 'Plugin'],
                                                ['preparing-content', 'Custom API']
                                            ]
                                        },
                                        {
                                            title: 'Business Logic',
                                            collapsable: true,
                                            children: [
                                                ['preparing-content', 'Flow'],
                                                ['preparing-content', 'Workflow/Action'],
                                                ['preparing-content', 'Business Process Flow'],
                                                ['preparing-content', 'C# Library']
                                            ]
                                        },
                                        {
                                            title: 'Model',
                                            collapsable: true,
                                            children: [
                                                ['applications/solution-components/entity', 'Entity'],
                                                ['applications/solution-components/field', 'Attribute'],
                                                ['applications/solution-components/relationship', 'Relationship'],
                                                ['applications/solution-components/optionset', 'Option Set'],
                                                ['preparing-content', 'Data Map'],
                                                ['applications/solution-components/securityrole', 'Security Role']
                                            ]
                                        },
                                        {
                                            title: 'Package',
                                            collapsable: true,
                                            children: [
                                                ['preparing-content', 'Upgrade Scripts'],
                                                ['preparing-content', 'Import Config'],
                                                ['preparing-content', 'Data Package']
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Code Templates',
                                    collapsable: true,
                                    children: [
                                        ['/en/developer-guide/applications/repo-templates/talxis-templates.md', 'TALXIS.SDK.CodeTemplates']
                                    ]
                                }
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
                                        ['/en/developer-guide/applications/controls/general.md', 'General Information'],
                                        ['/en/developer-guide/applications/controls/addresspicker.md', 'Address Picker'],
                                        ['/en/developer-guide/applications/controls/annotations.md', 'Annotations'],
                                        ['/en/developer-guide/applications/controls/attachmentsgrid.md', 'Attachments Grid'],
                                        ['/en/developer-guide/applications/controls/codeeditor.md', 'Code Editor'],
                                        ['/en/developer-guide/applications/controls/colorfuloptionset.md', 'Colorful Optionset'],
                                        ['/en/developer-guide/applications/controls/companyprofilehinting.md', 'Company Profile Hinting'],
                                        ['/en/developer-guide/applications/controls/datasetgeolocationviewer.md', 'Dataset Geolocation Viewer'],
                                        ['/en/developer-guide/applications/controls/emailpicker.md', 'Email Picker'],
                                        ['/en/developer-guide/applications/controls/filepicker.md', 'File Picker'],
                                        ['/en/developer-guide/applications/controls/formbutton.md', 'Form Button'],
                                        ['/en/developer-guide/applications/controls/htmlcontentdisplay.md', 'HTML Content Display'],
                                        ['/en/developer-guide/applications/controls/keyfigures.md', 'Key Figures'],
                                        ['/en/developer-guide/applications/controls/mappicker.md', 'Map Picker'],
                                        ['/en/developer-guide/applications/controls/milestones.md', 'Milestones'],
                                        ['/en/developer-guide/applications/controls/mockapi.md', 'Mock Web Api'],
                                        ['/en/developer-guide/applications/controls/notificationpanel.md', 'Notification Panel'],
                                        ['/en/developer-guide/applications/controls/optionseticons.md', 'Optionset Icons'],
                                        ['/en/developer-guide/applications/controls/phonepicker.md', 'Phone Picker'],
                                        ['/en/developer-guide/applications/controls/quicklookupedit.md', 'Quick Lookup Edit'],
                                        ['/en/developer-guide/applications/controls/rating.md', 'Rating'],
                                        ['/en/developer-guide/applications/controls/treeview.md', 'Tree View'],
                                        ['/en/developer-guide/applications/controls/wbs.md', 'WBS - Work Breakdown Structure']
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
                                        {
                                            title: 'Connectors',
                                            collapsable: true,
                                            children: [
                                                ['/en/developer-guide/integration/components/connector/excelconnector.md', 'Excel Connector'],
                                                ['/en/developer-guide/integration/components/connector/wordconnector.md', 'Word Connector'],
                                                ['/en/developer-guide/integration/components/connector/imageconnector.md', 'Image Connector'],
                                            ]
                                        },
                                        {
                                            title: 'NPM Packages',
                                            collapsable: true,
                                            children: [
                                                ['/en/developer-guide/integration/components/npm-packages/clientlibraries.md', 'Client Libraries'],
                                            ]
                                        },
                                        ['preparing-content', 'Proxy'],
                                        ['preparing-content', 'Adapter']
                                    ]
                                },
                                ['preparing-content', 'Data Mapping']
                            ]
                        },
                        {
                            title: 'Platform',
                            collapsable: false,
                            children: [
                                {
                                    title: 'Environment Data Service',
                                    collapsable: true,
                                    children: [
                                        ['preparing-content', 'API'],
                                        ['preparing-content', 'Webhooks'],
                                        ['preparing-content', 'Authorization'],
                                        ['preparing-content', 'Data Providers'],
                                        ['preparing-content', 'Managed Database'],
                                        ['preparing-content', 'Caching']
                                    ]
                                },
                                {
                                    title: 'Metadata Service',
                                    collapsable: true,
                                    children: [
                                        ['preparing-content', 'Data Model'],
                                        ['preparing-content', 'Processes'],
                                        ['preparing-content', 'User Interface']
                                    ]
                                },
                                {
                                    title: 'Pipelines',
                                    collapsable: true,
                                    children: [
                                        ['/en/developer-guide/platform/pipelines/build.md', 'Build Pipeline'],
                                        ['/en/developer-guide/platform/pipelines/deploy.md', 'Deploy Pipeline'],
                                        ['/en/developer-guide/platform/pipelines/appuser.md', 'Automated App User Import'],
                                        ['/en/developer-guide/platform/pipelines/executeflow.md', 'Automated Cloud Flow Execution'],
                                    ]
                                },
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
                                },
                                {
                                    title: 'Mission Control',
                                    collapsable: true,
                                    children: [
                                        ['preparing-content', 'Provisioning'],
                                        ['preparing-content', 'Telemetry'],
                                        ['preparing-content', 'Feature Control'],
                                        ['preparing-content', 'Configuration & Secrets']
                                    ]
                                }
                            ]
                        }
                    ],
                    '/en/user-guide/': [
                        {
                            title: 'Getting Started',
                            collapsable: false,
                            children: [
                                ['', 'Introduction'],
                            ]
                        },
                        {
                            title: 'Start using application',
                            collapsable: false,
                            children: [
                                ['model-driven-apps/basic-app-elements/', 'Overview'],
                                ['model-driven-apps/basic-app-elements/login-to-app', 'Log in to the application'],
                                ['model-driven-apps/basic-app-elements/select-application', 'Select application'],
                                ['model-driven-apps/basic-app-elements/navigation-menu', 'Navigation menu'],
                                ['model-driven-apps/basic-app-elements/sitemap', 'Site map'],
                                ['model-driven-apps/basic-app-elements/views', 'View records'],
                                {
                                    title: 'Forms and their components',
                                    collapsable: true,
                                    children: [
                                        ['model-driven-apps/basic-app-elements/forms', 'Forms'],
                                        ['model-driven-apps/basic-app-elements/business-process-flow', 'Business process flow'],
                                        {
                                            title: 'Controls',
                                            collapsable: true,
                                            children: [
                                                ['model-driven-apps/basic-app-elements/timeline', 'Timeline'],
                                                ['model-driven-apps/basic-app-elements/lookup', 'Lookup control'],
                                                ['model-driven-apps/basic-app-elements/subgrid', 'Subgrid'],
                                                ['model-driven-apps/basic-app-elements/text-editor', 'Text editor'],
                                                ['model-driven-apps/basic-app-elements/tag', 'Tags'],
                                            ]
                                        }
                                    ]
                                },
                                ['model-driven-apps/basic-app-elements/dashboards', 'Dashboards'],
                                ['model-driven-apps/basic-app-elements/export-excel', 'Export view to Excel'],
                            ],
                        },
                        {
                            title: 'Contact management',
                            collapsable: false,
                            children: [
                                ['model-driven-apps/business-process/contact-management/use-contacts', 'Use contacts to manage customer people'],
                                ['model-driven-apps/business-process/contact-management/use-accounts', 'Use accounts to manage customer companies'],
                                ['model-driven-apps/business-process/contact-management/track-and-manage-activities', 'Track and manage activities'],
                            ]
                        },
                        {
                            title: 'Sales management',
                            collapsable: false,
                            children: [
                                ['model-driven-apps/business-process/sales/develop-sales-from-lead-to-cash', 'Develop sales from lead to cash'],
                                {
                                    title: 'Lead and opportunity',
                                    collapsable: true,
                                    children: [
                                        ['model-driven-apps/business-process/sales/create-and-manage-lead', 'Create and manage lead'],
                                        ['model-driven-apps/business-process/sales/create-or-edit-opportunity', 'Create or edit opportunity'],
                                        ['model-driven-apps/business-process/sales/close-opportunity', 'Close opportunity as won or lose'],
                                    ]
                                },
                                {
                                    title: 'Quote and order management',
                                    collapsable: true,
                                    children: [
                                        ['model-driven-apps/business-process/sales/create-and-manage-quote', 'Create and manage quote'],
                                        ['model-driven-apps/business-process/sales/create-and-manage-order', 'Create and manage order'],
                                        ['model-driven-apps/business-process/sales/add-products-to-quote-order', 'Add products to quote/order'],
                                    ]
                                },
                                ['model-driven-apps/business-process/sales/gain-insights-with-dashboards', 'Gain insights with dashboards'],
                                ['model-driven-apps/business-process/sales/security-roles', 'Security roles and privileges'],


                            ]
                        },
                        {
                            title: 'Contract management',
                            collapsable: false,
                            children: [
                                ['model-driven-apps/business-process/contract/manage-contracts', 'Manage contracts'],
                                ['model-driven-apps/business-process/contract/roles-in-the-contract-process', 'Roles in the contract process'],
                                {
                                    title: 'Contract',
                                    collapsable: true,
                                    children: [
                                        ['model-driven-apps/business-process/contract/create-and-edit-contract', 'Create and edit contract'],
                                        ['model-driven-apps/business-process/contract/amend-valid-contract', 'Amend valid contract'],
                                        ['model-driven-apps/business-process/contract/terminate-contract', 'Terminate contract'],
                                        ['model-driven-apps/business-process/contract/add-historical-contract', 'Add historical contract'],
                                        ['model-driven-apps/business-process/contract/notify-users-about-contract', 'Notify users about contract'],
                                        ['model-driven-apps/business-process/contract/tasks-during-contract-processes', 'Tasks during contract processes'],
                                    ]
                                },
                                {
                                    title: 'Review',
                                    collapsable: true,
                                    children: [
                                        ['model-driven-apps/business-process/contract/start-and-finish-of-review', 'Start and finish of review'],
                                        ['model-driven-apps/business-process/contract/add-review-comment', 'Add review comment'],
                                        ['model-driven-apps/business-process/contract/how-to-handle-review-comment', 'How to handle review comment']
                                    ]
                                },
                                {
                                    title: 'Approval',
                                    collapsable: true,
                                    children: [
                                        ['model-driven-apps/business-process/contract/start-approval', 'Start approval'],
                                        ['model-driven-apps/business-process/contract/approve-or-reject-contract', 'Approve or reject contract']
                                    ]
                                },
                                {
                                    title: 'Signature',
                                    collapsable: true,
                                    children: [
                                        ['model-driven-apps/business-process/contract/sign-the-contract', 'Sign the contract']
                                    ]
                                },
                                ['preparing-content', 'Contract validity end'],
                                ['model-driven-apps/business-process/contract/dashboard', 'Dashboard']
                            ]
                        },
                        {
                            title: 'Procurement management',
                            collapsable: false,
                            children: [
                                ['model-driven-apps/business-process/procurement/', 'What is procurement?'],
                                ['model-driven-apps/business-process/procurement/procurement-process', 'Procurement process'],
                                ['model-driven-apps/business-process/procurement/roles-in-procurement', 'Roles in procurement process'],
                                ['model-driven-apps/business-process/procurement/project', 'Set up a project'],
                                {
                                    title: 'Purchase invoice',
                                    collapsable: true,
                                    children: [
                                        ['model-driven-apps/business-process/procurement/create-purchase-invoice', 'Create or edit a purchase invoice'],
                                        ['model-driven-apps/business-process/procurement/add-invoice-detail', 'Add an invoice detail'],

                                    ]
                                },
                                ['model-driven-apps/business-process/procurement/sent-for-approval', 'Sent an invoice for approval'],
                                ['model-driven-apps/business-process/procurement/approve-purchase-invoice', 'Approval of purchase invoice'],
                                ['model-driven-apps/business-process/procurement/mark-invoice-as-paid', 'Mark invoice as paid'],
                            ]
                        }
                    ],
                    '/en/customizer-guide/': [
                        {
                            title: 'Getting Started',
                            collapsable: false,
                            children: [
                                ['', 'Introduction'],
                            ]
                        },
                        {
                            title: 'Contract Configuration',
                            collapsable: false,
                            children: [
                                ['modules/contract/configure-processes', 'Configure Contract Module'],
                                ['modules/contract/configure-contract-review-and-approval', 'Review and Approval'],
                            ]
                        },
                        {
                            title: 'People Configuration',
                            collapsable: false,
                            children: [
                                ['modules/people/configure-people', 'Configure People Module'],
                                ['modules/people/provision-approvals', 'Provision Approvals'],
                            ]
                        },
                        {
                            title: 'Procurement Configuration',
                            collapsable: false,
                            children: [
                                ['modules/procurement/configure-procurement', 'Configure Procurement Module'],
                            ]
                        }
                    ]
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
                    },
                    {
                        text: 'Stav služeb',
                        link: 'https://status.talxis.com'
                    },
                    {
                        text: 'Podpora',
                        link: 'https://support.networg.com'
                    },
                    {
                        text: 'Q&A',
                        link: 'https://talxis.com/questions'
                    },
                    {
                        text: 'Roadmap',
                        link: 'https://talxis.com/roadmap'
                    }
                ],
                algolia: {},
                sidebar: {
                    '/cz/customizer-guide/': [
                        {
                            title: 'Návod pro správce',
                            collapsable: false
                        },
                        {
                            title: 'Integrace',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                {
                                    title: 'Raynet',
                                    collapsable: true,
                                    sidebarDepth: 1,
                                    children: [
                                        ['/cz/customizer-guide/integration/raynet/', 'Úvod'],
                                        '/cz/customizer-guide/integration/raynet/calendar/'
                                        /* '/cz/integration/raynet/contacts/' */
                                    ]
                                },
                                {
                                    title: 'Signi (iSmlouva)',
                                    path: '/cz/customizer-guide/integration/signi/',
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
        }],
        ['redirect-frontmatter']
    ]
});