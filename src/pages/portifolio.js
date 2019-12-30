import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../templates/layout-wrap"
import Img from "gatsby-image"

export default () => {
    const images = useStaticQuery(
        graphql`
            query Images {
                gal : allFile {
                nodes {
                    id
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }`
    )

    return (
        <Layout>
            <section>
                {images.gal.nodes.map(image => (
                    <Img key={image.id} fluid={image.childImageSharp.fluid} />
                ))}
            </section>
        </Layout >
    )
}





