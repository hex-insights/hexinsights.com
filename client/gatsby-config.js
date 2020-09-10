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
        theme_color: `#5db18a`,
        background_color: `#0f1a25`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
