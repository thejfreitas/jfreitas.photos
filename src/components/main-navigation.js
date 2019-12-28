import React from "react"
import { Link } from "gatsby"
import instagramLogo from "../img/instagram.svg"
import behanceLogo from "../img/behance.svg"

export default () => (
    <nav>
        <ul>
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/freitas.eye">
                <img src={instagramLogo} alt="Instagram" />
                <li>Instagram</li>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/freitaseye">
                <img src={behanceLogo} alt="Behance" />
                <li>Behance</li>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://juniorfreitas.net">
                <li>My Personal Website</li>
            </a>
            <Link to="/portifolio">
                <li>Portifolio</li>
            </Link>
        </ul>
    </nav>
)