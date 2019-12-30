import React from "react"
import { Helmet } from "react-helmet"
import "../scss/main.scss"
import bg from "../img/gallery/saskatoon-bridge.jpg"

export default () => (
    <Helmet bodyAttributes={{
        class: 'headline-intro',
        style: `background-image: url(${bg})`
    }}>
        <html lang="en" />
        <meta charSet="utf-8" />
    </Helmet>
)