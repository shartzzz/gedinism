module.exports = {
  siteMetadata: {
    title: `Культура гедонизма`,
    description: `культура гедонизма сонное царство интро баюн аутро`,
    author: `shartzzz`,
  },
  pathPrefix: "/gedonism",
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Культура гедонизма`,
        short_name: `Культура гедонизма`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/img/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
