import React from "react";
import { Section, theme, ExternalLink } from "@styles";
import styled from "styled-components";

const WorkContainer = styled(Section)``;

const JobContainer = styled.div`
  padding: 10px;
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
        content: '▸';
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
    <div className='build-in-animate'>
      <h4>{ title } @ <ExternalLink href={ link } target="_blank" rel="noopener nofollow noreferrer" aria-label="Link to Company">{ company }</ExternalLink></h4>
      <div>{ range }</div>
      <div>{ location }</div>
      <br/>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </div>
  );
}

const Work = ({ data }) => {
  return (
    <WorkContainer id="work" className='build-in-animate' >
      <h3>Professional Experience</h3>
      {data.map((job, i) => (
        <JobContainer key={i}>
          <Job data={job} />
        </JobContainer>
      ))}
    </WorkContainer>
  );
}

export default Work;
