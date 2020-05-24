module.exports = {
  siteMetadata: {
    title: `Hex Insights`,
    description: `Custom systems and insights`,
    author: `Hex Insights`,
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
        name: `hex-insights-website`,
        short_name: `hex`,
        start_url: `/`,
        background_color: `#0f1a25`,
        theme_color: `#0f1a25`,
        display: `minimal-ui`,
        // icon: `src/images/hex-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
