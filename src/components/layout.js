/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Head from "./head";
import Nav from "./nav";
import { GlobalStyle } from "@styles";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `)

  return (
    <>
      <Head metadata={data.site.siteMetadata}/>
      <GlobalStyle/>
      <Nav siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "75%",
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
          <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.linkedin.com/in/codyrobertson"
             aria-label="Link to LinkedIn Portfolio"
             target="_blank"
             rel="noopener noreferrer nofollow"
          >
            Cody Robertson
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
