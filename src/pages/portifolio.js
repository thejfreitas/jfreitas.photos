import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../templates/layout-wrap"
import Img from "gatsby-image"
import SocialNavigation from "../components/social-navigation"
import InternalNavigation from "../components/internal-navigation"

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
                    externalSites {
                        name
                        url
                    }
                }
            }    
        }`
    )

    return (
        <Layout>
            <header className="internal-header container">
                <InternalNavigation headline={pageData.site.siteMetadata.headline} />
                <SocialNavigation externalSites={pageData.site.siteMetadata.externalSites} />

            </header>
            <section className="container gallery-area">
                {pageData.gal.nodes.map(image => (
                    <Img key={image.id} fluid={image.childImageSharp.fluid} />
                ))}
            </section>
        </Layout >
    )
}
