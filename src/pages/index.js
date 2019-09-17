import React from "react";
import { Layout, Hero, About, Work, Projects, Contact } from "../components/index"
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <Work data={data.work.edges} />
      <Projects data={data.projects.edges} />
      <Contact data={data.contact.edges} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
{
  hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
    edges {
      node {
        frontmatter {
          lead
          name
          subtitle
          contactText
        }
        html
      }
    }
  }
about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 80, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    work: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            link
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            technologies
            github
            link
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
}
`;
