import React from "react";
import { Section } from "@styles";
import styled from "styled-components";
//import PropTypes from 'prop-types';

const WorkContainer = styled(Section)``;

const Job = (props) => {
  const { frontmatter, html } = props.data.node;
  const { company, link, location, range, title } = frontmatter;
  return (
    <div>
      <h4>{ title } @ <a href={ link }>{ company }</a></h4>
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
        <Job key={i} data={job} />
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
