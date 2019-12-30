import React from "react"
import { Link } from "gatsby"

export default ({ externalSites }) => {
    return (
        <nav>
            <ul>
                <Link to="/portifolio">
                    <li>Check My Portifolio</li>
                </Link>
            </ul>
        </nav>
    )
}