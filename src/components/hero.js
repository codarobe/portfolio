import React from "react";
import PropTypes from 'prop-types';

const Hero = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    const { lead, name, subtitle, contactText } = frontmatter;
    return (
        <div>
            <h1>{lead}</h1>
            <h2>{name}</h2>
            <h3>{subtitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <button class="contactButton">{contactText}</button>
        </div>
    );
}

Hero.propTypes = {
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

export default Hero;