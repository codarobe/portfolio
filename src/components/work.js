import React from "react";
//import PropTypes from 'prop-types';

const Job = (props) => {
  const { frontmatter, html } = props.data.node;
  const { company, link, location, range, title } = frontmatter;
  return (
    <div>
      <div>{ company }</div>
      <div>{ title }</div>
      <div>{ link }</div>
      <div>{ location }</div>
      <div>{ range }</div>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </div>
  );
}

const Work = ({ data }) => {
  return (
    <div>
      <h3>Professional Experience</h3>
      {data.map((job, i) => (
        <Job key={i} data={job} />
      ))}
    </div>
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
