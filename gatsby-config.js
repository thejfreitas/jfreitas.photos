/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: `https://jfreitas.photos`,
    headline: `Freitas.eye`,
    greeting: `Hi! My name is`,
    name: `J. de Freitas`,
    author: this.name,
    title: `Photographer`,
    description: `This is my photography portifolio. Enjoy!`,
    externalSites: [
      {
        name: `Behance`,
        url: `https://www.behance.net/freitaseye`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/freitas.eye`,
      },
      {
        name: `About Me`,
        url: `https://juniorfreitas.net`,
      },
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: path.join(__dirname, `src/img/gallery`)
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Dancing Script:400,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jfreitas.photos`,
        short_name: `jfreitas.photos`,
        start_url: `/`,
        background_color: `#b45d88`,
        theme_color: `#b45d88`,
        display: `standalone`,
        icon: `src/img/favicon/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-75050740-2",
      },
    },
  ]
}
