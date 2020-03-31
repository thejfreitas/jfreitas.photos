import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../templates/layout-wrap"

import Navigation from "../components/navigation"

export default () => {
    const pageData = useStaticQuery(
        graphql`
            query FourOFour {
            
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
                <Navigation siteMetadata={pageData.site.siteMetadata} />
            </header>
            <section className="container fallback-area">
                <h1>404</h1>
                <h2>Ops! This page is broken or does not exist anymore.</h2>
            </section>
        </Layout >
    )
}
