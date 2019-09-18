import React from "react";
import styled from "styled-components"
import { Section, media } from "@styles";
//import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const AboutContainer = styled(Section)``;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;

const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
`;

const HeadshotContainer = styled(Img)`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;

const About = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    const { title, skills, avatar } = frontmatter;
    return (
        <AboutContainer id="about">
          <h3 className="section-title">{title}</h3>
          <FlexContainer>
            <ContentContainer>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <ul className="skill-list">
                {skills.map((skill, i) => (
                  <li className="skill-item" key={i}>{skill}</li>
                ))}
              </ul>
            </ContentContainer>
            <HeadshotContainer className="avatar-image" fluid={ avatar.childImageSharp.fluid } />
          </FlexContainer>

        </AboutContainer>
    );
}

/*
About.propTypes = {
    data: PropTypes.shape({
        html: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            skills: PropTypes.arrayOf(PropTypes.string).isRequired,
            avatar: PropTypes.array.isRequired
        }),
    }),
};
 */

export default About;
