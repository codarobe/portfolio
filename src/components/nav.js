import { Link } from "gatsby"
import IconLogo from "./icons/logo"
import PropTypes from "prop-types"
import React from "react"

const Nav = ({ siteTitle }) => (
  <nav
    style={{
      background: "#02003a",
      marginBottom: "1.45rem",
    }}
  >
    <div style={{height: "42px", width: "42px"}}>
      <IconLogo />
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
