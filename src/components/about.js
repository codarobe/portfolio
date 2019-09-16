import React from "react";
//import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const About = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    const { title, skills, avatar } = frontmatter;
    return (
        <div>
            <h3 className="section-title">{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <ul className="skill-list">
                {skills.map((skill, i) => (
                    <li className="skill-item" key={i}>{skill}</li>
                ))}
            </ul>
            <Img className="avatar-image" fluid={ avatar.childImageSharp.fluid } />
        </div>
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
