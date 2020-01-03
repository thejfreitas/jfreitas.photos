import React from "react"

export default ({ externalSites }) => {
    return (
        <nav className="social-navigation container">
            <ul className="social-links">
                {externalSites.map((site, i) => {
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