import React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/layout-wrap"
import MainNavigation from "../components/main-navigation"
import bg from "../galleria/saskatoon-bridge.jpg"

export default ({ data }) => {
  return (
    <Layout>
      <header className="section headline-intro" style={{ backgroundImage: bg }}>
        <div className="container headline-content">

          <h1>{data.site.siteMetadata.headline}</h1>
          <p>{data.site.siteMetadata.greeting} {data.site.siteMetadata.name}</p>
          <p>{data.site.siteMetadata.description}</p>

          <div className="main-navigation container">
            <MainNavigation externalSites={data.site.siteMetadata.externalSites} />
          </div>
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
          class
        }
      }
    }
  }
`
