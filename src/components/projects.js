import React from "react";
import IconGitHub from "./icons/github"
import styled from "styled-components"
import { Section, theme, ExternalLink } from "@styles"

const ProjectsContainer = styled(Section)``;

const TechnologiesList = styled.ul``;

const Technology = styled.li`
  display: inline-block;
  float: left;
  padding: 10px;
  font-size: ${theme.fontSizes.small};
`;

const CardContainer = styled.div`
  padding: 10px;
`;

const IconLink = styled.a`
  position: inline-block;
  top: -10px;
  padding-top: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Project = (props) => {
  const { frontmatter, html } = props.data.node;
  const { title, technologies, link, github } = frontmatter;
  return (
    <CardContainer>
      <h4><ExternalLink target="_blank" rel="noopener nofollow noreferrer" href={link} aria-label="Link to Project">{ title }</ExternalLink></h4>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <TechnologiesList className="technologies-list">
        {technologies.map((item, i) => (
          <Technology key={i}>{ item }</Technology>
        ))}
      </TechnologiesList>
      {github && (
        <IconLink href={github} aria-label="Link to Project Source on GitHub" target="_blank" rel="noopener nofollow noreferrer"><IconGitHub/></IconLink>
      )}
    </CardContainer>
  );
};

const ProjectContainer = styled.div`
  padding: 20px;
`

const Projects = ({ data }) => {
  return (
    <ProjectsContainer id="projects">
      <h3>Project Portfolio</h3>
      {data.map((project, i) => (
        <ProjectContainer key={i}>
          <Project data={project} />
        </ProjectContainer>
      ))}
    </ProjectsContainer>
  );
}

export default Projects;
