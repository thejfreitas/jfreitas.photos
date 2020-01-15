import React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/layout-wrap"
import MainNavigation from "../components/main-navigation"
import SocialNavigation from "../components/social-navigation"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.name} description={data.site.siteMetadata.description} />
      <header className="headline-intro">
        <div className="headline-content">
          <h1 className="headline-font">{data.site.siteMetadata.headline}</h1>
          <p>{data.site.siteMetadata.greeting} {data.site.siteMetadata.name}</p>
          <p>{data.site.siteMetadata.description}</p>
          <SocialNavigation externalSites={data.site.siteMetadata.externalSites} />
          <MainNavigation />
        </div>
      </header>
    </Layout >
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        headline
        greeting
        name
        description
        externalSites {
          name
          url
        }
      }
    }
  }
`