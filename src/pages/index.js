import React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/layout-wrap"
import MainNavigation from "../components/main-navigation"
import SocialNavigation from "../components/social-navigation"
import bg from "../img/gallery/saskatoon-bridge.jpg"

export default ({ data }) => {
  return (
    <Layout>
      <header className="headline-intro" style={{ backgroundImage: `url(${bg})` }}>
        <div className=" headline-content">

          <h1>{data.site.siteMetadata.headline}</h1>
          <p>{data.site.siteMetadata.greeting} {data.site.siteMetadata.name}</p>
          <p>{data.site.siteMetadata.description}</p>

          <div className="social-navigation container">
            <SocialNavigation externalSites={data.site.siteMetadata.externalSites} />
          </div>
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
        }
      }
    }
  }
`
