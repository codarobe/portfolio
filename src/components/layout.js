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
import styled from "styled-components";
import { GlobalStyle } from "@styles";
import { useStaticQuery, graphql } from "gatsby";
import IconLinkedIn from "./icons/linkedin"
import IconGitHub from "./icons/github"

const Footer = styled.footer`
  text-align: center;
  padding: 30px;
`;

const FooterContentContainer = styled.div`
  padding: 10px;
`

const IconLink = styled.a`
  position: inline-block;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

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
      </div>
      <Footer>
        <FooterContentContainer>
          © {new Date().getFullYear()}, Built by
          {` `}
          Cody Robertson
        </FooterContentContainer>
        <FooterContentContainer>
            <IconLink href="https://www.linkedin.com/in/codyrobertson"
                      aria-label="Link to LinkedIn Portfolio"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
            >
              <IconLinkedIn/>
            </IconLink>
          <IconLink href="https://www.github.com/cody-robertson"
                    aria-label="Link to GitHub Portfolio"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
          >
            <IconGitHub/>
          </IconLink>
        </FooterContentContainer>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
