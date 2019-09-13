import React from "react";
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const About = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    const { title, skills, avatar } = frontmatter;
    return (
        <div>
            <h3 class="section-title">{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <ul class="skill-list">
                {skills.map((skill) => (
                    <li class="skill-item">{skill}</li>
                ))}
            </ul>
            <Img class="avatar-image" fluid={ avatar.childImageSharp.fluid }></Img>
        </div>
    );
}

About.propTypes = {
    data: PropTypes.shape({
        html: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            skills: PropTypes.arrayOf(PropTypes.string).isRequired,
            avatar: PropTypes.object.isRequired
        }),
    }),
};

export default About;