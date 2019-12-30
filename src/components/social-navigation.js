import React from "react"

export default ({ externalSites }) => {
    return (
        <nav className="social-navigation container">
            <ul className="social-links">
                {externalSites.map((site, i) => {
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