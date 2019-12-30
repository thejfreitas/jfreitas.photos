import React from "react"
import { Link } from "gatsby"

export default () => {
    return (
        <nav className="main-navigation container">
            <ul>
                <Link to="/portifolio">
                    <li>Check My Portifolio</li>
                </Link>
            </ul>
        </nav>
    )
}