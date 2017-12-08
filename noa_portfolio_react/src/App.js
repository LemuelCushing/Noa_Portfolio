import React from "react"
import { Router, Link } from "react-static"
import glamorous from "glamorous"

//
import Routes from "react-static-routes"

import "./app.css"

const AppStyles = glamorous.div({

    fontFamily:
    "'Heebo', sans-serif",
    fontWeight: "300",
    fontSize: "16px",
    margin: "0",
    padding: "0",
    "& a": {
        textDecoration: "none",
        color: "#108db8",
        fontWeight: "lighter",
        fontSize: "18pt"
    },
    "& nav": {
        width: "100%",
        background: "#b86210",
        "& a": {
            color: "white",
            padding: "1rem",
            display: "inline-block",
        },
    },
    "& .content": {
        padding: "1rem",
    },
})

export default () => (
    <Router>
        <AppStyles>
            <nav>
                <Link to="/">בית</Link>
                <Link to="/about">עליי</Link>
                <Link to="/blog">בלוג</Link>
            </nav>
            <div className="content">
                <Routes />
            </div>
        </AppStyles>
    </Router>
)
