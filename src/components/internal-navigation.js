import React from "react"
import { Link } from "gatsby"

export default ({ headline }) => {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>{headline}</li>
                </Link>
            </ul>
        </nav>
    )
}