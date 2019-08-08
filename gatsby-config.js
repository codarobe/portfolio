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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
