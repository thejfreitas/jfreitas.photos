import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../templates/layout-wrap"
import Navigation from "../components/navigation"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default () => {

  const pageData = useStaticQuery(
    graphql`
        query Images {
        gal : allFile {
            nodes {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
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
    }`
  )

  const site = pageData.site.siteMetadata;

  return (
    <Layout>
      <SEO title={site.name} description={site.description} />
      <section className="gallery-area">
        <header className="headline">
          <h1>
            <Link to="/">{site.headline}</Link>
          </h1>
          <p>{site.greeting} {site.name}. {site.description}</p>
          <Navigation externalSites={site.externalSites} />
        </header>

        {pageData.gal.nodes.map(image => (
          <Img key={image.id} fluid={image.childImageSharp.fluid} />
        ))}
      </section>
    </Layout >
  )
}

