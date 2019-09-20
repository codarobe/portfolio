import React from "react";
import { Section, theme } from "@styles";
import styled from "styled-components";
//import PropTypes from 'prop-types';

const WorkContainer = styled(Section)``;

const JobContainer = styled.div`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${theme.fontSizes.large};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${theme.colors.highlight};
        line-height: ${theme.fontSizes.xlarge};
      }
    }
`;

const Job = (props) => {
  const { frontmatter, html } = props.data.node;
  const { company, link, location, range, title } = frontmatter;
  return (
    <div>
      <h4>{ title } @ <a href={ link } aria-label="Link to Company">{ company }</a></h4>
      <div>{ location }</div>
      <div>{ range }</div>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </div>
  );
}

const Work = ({ data }) => {
  return (
    <WorkContainer id="work">
      <h3>Professional Experience</h3>
      {data.map((job, i) => (
        <JobContainer key={i}>
          <Job data={job} />
        </JobContainer>
      ))}
    </WorkContainer>
  );
}

/*
Work.propTypes = {
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

export default Work;
