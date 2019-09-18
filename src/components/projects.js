import React from "react";
import IconGitHub from "./icons/github"
import styled from "styled-components"
import { Section } from "@styles"
//import PropTypes from 'prop-types';

const ProjectsContainer = styled(Section)``;

const TechnologiesList = styled.ul``;

const Technology = styled.li`
  display: inline-block;
  float: left;
  padding: 10px;
`;

const Project = (props) => {
  const { frontmatter, html } = props.data.node;
  const { title, technologies, link, github } = frontmatter;
  return (
    <div>
      <h4><a href={link} aria-label="Link to Project">{ title }</a></h4>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <TechnologiesList className="technologies-list">
        {technologies.map((item, i) => (
          <Technology key={i}>{ item }</Technology>
        ))}
      </TechnologiesList>
      <a href={github} aria-label="Link to Project Source on GitHub"><IconGitHub/></a>
    </div>
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

/*
Projects.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      lead: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      contactText: PropTypes.string.isRequired
    }),
  }),
};
*/

export default Projects;
