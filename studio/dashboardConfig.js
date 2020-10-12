export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f848b22ef707acd16f8a2e7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2opgxap7',
                  apiId: '9a8a774c-606e-49d9-afaf-15f8c57a44f5'
                },
                {
                  buildHookId: '5f848b2356987dd8c5c30974',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t86k9hu5',
                  apiId: '88437342-4181-41f9-a1f2-57e0bb2c7b23'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muhrusdi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t86k9hu5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
