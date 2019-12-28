import React from "react"
import { Link } from "gatsby"
import behanceLogo from "../img/behance.svg"

export default ({ externalSites }) => {
    return (
        <nav>
            <ul>
                {externalSites.map((site) => {
                    return (
                        <a target="_blank" rel="noopener noreferrer" href={site.url}>
                            <img src={behanceLogo} alt={site.name} />
                            <li>{site.name}</li>
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