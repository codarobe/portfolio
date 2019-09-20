import { Link } from "gatsby";
import IconLogo from "./icons/logo";
import PropTypes from "prop-types";
import React from "react";
import { theme, Button } from "@styles";

const Nav = ({ siteTitle }) => (
  <nav
    style={{
      background: theme.colors.background,
      marginBottom: "1.45rem",
    }}
  >

    <div
      style={{
        margin: `0 auto`,
        maxWidth: "85%",
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{
        height: "42px",
        width: "42px",
        float: "left"
      }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
          aria-label="Home"
        >
          <IconLogo />
        </Link>
      </div>
      <div style={{
        float: "right"
      }}>
        <a
          href="https://www.dropbox.com/s/54bw7z0xaeqh2ch/Resume%20-%20Working%20Copy.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Link to Resume"
        >
          <Button>Résumé</Button>
        </a>
      </div>
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
