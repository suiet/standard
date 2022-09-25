const config = {
    title: 'Standards',
    description: 'Standards for Sui projects to support wallet.',
  
    lastUpdated: true,
  

    themeConfig: {
      // logo: '/img/logo.png',
  
    //   algolia: {
    //     appId: '2GTGJBXHIX',
    //     apiKey: '8f067b172c1c397812479ea00b77e111',
    //     indexName: 'let'
    //   },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/let-sh/docs' },
      ],
      nav: [
        { text: 'Back to Suiet', link: 'https://suiet.app' },
      ],
      sidebar: {
        '/': [
          {
            text: 'Overview',
            collapsible: true,
            collapsed: false,
            items: [
              { text: 'overview', link: '/' },
            ]
          },
          {
            text: 'FT(Fungible Token)',
            collapsible: true,
            collapsed: false,
            items: [
              { text: 'Fungible Token', link: '/ft/' },
            ]
          },
          {
            text: 'NFT',
            collapsible: true,
            collapsed: false,
            items: [
              { text: 'NFT', link: '/nft/' },
              { text: 'NFT Collections', link: '/nft/collections' },
            ]
          }
        ]
        // '/': [
        //   {
        //     text: 'Quick Start',
        //     collapsible: true,
        //     collapsed: false,
        //     items: [
        //       { text: 'Quick Start', link: '/' },
        //       { text: 'Install Cli', link: '/quickstart/install' },
        //     ]
        //   },
        //   {
        //     text: 'Handbook',
        //     collapsible: true,
        //     collapsed: true,
        //     items: [
        //       { text: 'Static File Hosting', link: '/handbook/static' },
        //       { text: 'Hugo', link: '/handbook/hugo' },
        //       { text: 'Hexo', link: '/handbook/hexo' },
        //       { text: 'Docusaurus', link: '/handbook/docusaurus' },
        //       { text: 'Vue', link: '/handbook/vue' },
        //       { text: 'React', link: '/handbook/react' },
        //       { text: 'Nuxt', link: '/handbook/nuxt' },
        //       { text: 'FastApi', link: '/handbook/fastapi' },
        //       { text: 'Flask', link: '/handbook/flask' },
        //       { text: 'Express', link: '/handbook/express' },
        //       { text: 'Gin', link: '/handbook/gin' },
        //       { text: 'Rocket', link: '/handbook/rocket' },
  
              
        //     ]
        //   },
                  
        //   {
        //     text: 'Concept',
        //     collapsible: true,
        //     collapsed: true,
        //     items: [
        //       { text: 'Basic', link: '/concept/basic' },
        //       { text: 'Development', link: '/concept/development' },
        //       { text: 'Table', link: '/concept/table' },
        //     ]
        //   },
  
        //   {
        //     text: 'Cli',
        //     collapsible: true,
        //     collapsed: true,
        //     items: [
        //       { text: 'Overview', link: '/cli/overview' },
        //       { text: 'Commands', link: '/cli/commands' },
        //       { text: 'Env', link: '/cli/env' },
        //       { text: 'let.json', link: '/cli/let.json' },
        //     ]
        //   },
        //   {
        //     text: 'Console',
        //     collapsible: true,
        //     collapsed: true,
        //     items: [
        //       { text: 'Deployment', link: '/console/deployment' },
        //       { text: 'Developemnt', link: '/console/development' },
        //       { text: 'Lighthouse', link: '/console/lighthouse' },
        //       { text: 'Log', link: '/console/log' },
        //       { text: 'Metric', link: '/console/metric'},
        //       { text: 'Table', link: '/console/table'},
        //     ]
        //   },
        //   {
        //     text: 'Network',
        //     collapsible: true,
        //     collapsed: true,
        //     items: [
        //       { text: 'HTTPS', link: '/network/https' },
        //       { text: 'Routing', link: '/network/routing' },
        //     ]
        //   },
        //   {
        //     text: 'Tables',
        //     collapsible: true,
        //     collapsed: true,
        //     items: [
        //       { text: 'Tables', link: '/tables/tables' },
        //       { text: 'API', link: '/tables/api' },
        //     ]
        //   },
        //   {
        //     text: 'Plugin',
        //     collapsible: true,
        //     collapsed: true,
        //     items: [
        //       { text: 'Firebase', link: '/plugin/firebase' },
        //       { text: 'Google Analytics', link: '/plugin/google-analytics' },
        //     ]
        //   },
        //   {
        //     text: 'Web3',
        //     collapsible: true,
        //     collapsed: true,
        //     items: [
        //       { text: 'Deploy to Web3 infra', link: '/web3/deploy' },
        //     ]
        //   },
        //   {
        //     text: 'Extend',
        //     collapsible: true,
        //     collapsed: true,
        //     items: [
        //       { text: 'Deploy in China', link: '/extend/cn' },
        //     ]
        //   },
        // ],
      },
      editLink: {
        pattern: 'https://github.com/let-sh/docs/edit/main/docs/:path'
      },
      lastUpdated: 'Last Updated',
      footer: {
        message: 'Powered by let.sh',
      }
    },
    markdown: {
      // options for markdown-it-anchor
      // https://github.com/valeriangalliat/markdown-it-anchor#permalinks
  
  
      // options for markdown-it-toc-done-right
      // toc: { level: [1, 2, 3] },
    },
   
  }
  
  module.exports = config