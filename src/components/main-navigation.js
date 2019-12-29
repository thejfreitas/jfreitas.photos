import React from "react"
import { Link } from "gatsby"

export default ({ externalSites }) => {
    return (
        <nav>
            <ul>
                {externalSites.map((site, i) => {
                    return (
                        <a key={i} target="_blank" rel="noopener noreferrer" href={site.url}>
                            <li className={site.class}>{site.name}</li>
                        </a>
                    );
                })}

                <Link to="/portifolio">
                    <li>Portifolio</li>
                </Link>
            </ul>
        </nav>
    )
}