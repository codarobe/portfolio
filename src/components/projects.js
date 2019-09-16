import React from "react";
//import PropTypes from 'prop-types';

const Project = (props) => {
  const { frontmatter, html } = props.data.node;
  const { title, technologies, link, github } = frontmatter;
  return (
    <div>
      <div>{ title }</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ul className="technologies-list">
        {technologies.map((item, i) => (
          <li key={i}>{ item }</li>
        ))}
      </ul>
      <div>{ link }</div>
      <div>{ github }</div>
    </div>
  );
};


const Projects = ({ data }) => {
  return (
    <div>
      <h3>Project Portfolio</h3>
      {data.map((project, i) => (
        <Project key={i} data={project} />
      ))}
    </div>
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
