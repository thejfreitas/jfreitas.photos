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
        class: `ico-behance`
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/freitas.eye`,
        class: `ico-instagram`
      },
      {
        name: `Personal Website`,
        url: `https://juniorfreitas.net`,
        class: `ico-globe`
      },
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: path.join(__dirname, `src`) }

    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ]
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
