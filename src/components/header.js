import React from "react"
import { Helmet } from "react-helmet"
import "../scss/main.scss"

export default () => (
    <Helmet bodyAttributes={{
        class: 'headline-intro',
    }}>
        <html lang="en" />
        <meta charSet="utf-8" />
    </Helmet>
)