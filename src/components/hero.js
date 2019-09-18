import React from "react";
import styled from 'styled-components';
import { media, Section, Button } from '@styles'
//import PropTypes from 'prop-types';

const HeroContainer = styled(Section)`
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;

const Hero = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    const { lead, name, subtitle, contactText } = frontmatter;
    return (
        <HeroContainer id="hero">
          <h2>{lead}</h2>
          <h1>{name}</h1>
          <h3>{subtitle}</h3>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <Button>{ contactText}</Button>
        </HeroContainer>
    );
}

/*
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
*/

export default Hero;
