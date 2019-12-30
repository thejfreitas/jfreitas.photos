import React from "react"
import { Link } from "gatsby"

export default ({ siteMetadata }) => {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li className="headline">{siteMetadata.headline}</li>
                </Link>
            </ul>
            <ul className="social-links">
                {siteMetadata.externalSites.map((site, i) => {
                    return (
                        <a key={i} target="_blank" rel="noopener noreferrer" href={site.url}>
                            <li>{site.name}</li>
                        </a>
                    );
                })}
            </ul>
        </nav>
    )
}