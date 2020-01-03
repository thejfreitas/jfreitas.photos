import React from "react"
import { Link } from "gatsby"

export default ({ siteMetadata }) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="headline" to="/">{siteMetadata.headline}</Link>
                </li>
            </ul>
            <ul className="social-links">
                {siteMetadata.externalSites.map((site, i) => {
                    return (
                        <li>
                            <a key={i} target="_blank" rel="noopener noreferrer" href={site.url}>{site.name}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}