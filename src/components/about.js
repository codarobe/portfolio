import React from "react";
import styled from "styled-components"
import { Section, media, theme } from "@styles";
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

const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;

const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: ${theme.fontSizes.small};
  &:before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${theme.colors.highlight};
    line-height: 12px;
  }
`;

const HeadshotContainer = styled(Img)`
  position: relative;
  width: 40%;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;

const About = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    const { title, skills, avatar } = frontmatter;
    return (
        <AboutContainer id="about" className='build-in-animate' >
          <h3 className="section-title">{title}</h3>
          <FlexContainer>
            <ContentContainer>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <SkillList>
                {skills.map((skill, i) => (
                  <Skill className="skill-item" key={i}>{skill}</Skill>
                ))}
              </SkillList>
            </ContentContainer>
            <HeadshotContainer className="avatar-image" fluid={ avatar.childImageSharp.fluid } alt="Headshot of Cody Robertson"/>
          </FlexContainer>

        </AboutContainer>
    );
}

export default About;
