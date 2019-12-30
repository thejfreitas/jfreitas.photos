/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    headline: `Freitas.eye`,
    greeting: `Hi! My name is`,
    name: `J. de Freitas`,
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
        name: `Personal Website`,
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Give You Glory`,
            variants: [`400`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Give You Glory:400`
        ],
        display: 'swap'
      }
    },
  ]
}
