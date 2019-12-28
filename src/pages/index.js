import React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/layout-wrap"
import MainNavigation from "../components/main-navigation"

export default ({ data }) => {
  return (
    <Layout>
      <header className="section headline-intro">
        <div className="container headline-content">
          <h1>{data.site.siteMetadata.headline}</h1>
          <p>{data.site.siteMetadata.greeting} {data.site.siteMetadata.name}</p>
          <p>{data.site.siteMetadata.description}</p>

          <div className="main-navigation container">
            <MainNavigation />
          </div>
        </div>
      </header>
    </Layout>
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
      }
    }
  }
`
