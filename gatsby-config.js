module.exports = {
  siteMetadata: {
    title: `Cody Robertson | Software Engineer`,
    description: `Cody Robertson is a software engineer based in Nashville, TN specializing in full-stack web development.`,
    author: `Cody Robertson`,
    siteKeywords: 'Cody Robertson, Cody, Robertson, codarobe, software engineer, front-end engineer, web developer, javascript, nashville',
    siteUrl: 'https://codyrobertson.com',
    siteLanguage: 'en_US'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cody Robertson`,
        short_name: `codyrobertson`,
        start_url: `/`,
        background_color: `#09071d`,
        theme_color: `#09071d`,
        display: `minimal-ui`,
        icon: `src/images/favicons/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1100,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
