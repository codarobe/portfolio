import React from "react"
import styled from 'styled-components';
import { media, Section, Button, theme } from '@styles'

const HeroContainer = styled(Section)`
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  },
`;
const Lead = styled.h2`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.highlight};
  ${media.desktop`font-size: ${theme.fontSizes.medium};`};
  ${media.tablet`font-size: ${theme.fontSizes.small};`};
`;

const Name = styled.h1`
  font-size: 60px;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
  color: ${theme.colors.textPrimary};
  line-height: 1.1;
`;

const Subtitle = styled.h3`
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 30px;`};
  ${media.phone`font-size: 20px;`};
  color: ${theme.colors.textSecondary};
  line-height: 1.1;
`;

const Content = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
`;

const Hero = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    const { lead, name, subtitle, contactText } = frontmatter;

  // useEffect(() => {
  //   // Create an intersection observer with default options, that
  //   // triggers a class on/off depending on an element’s visibility
  //   // in the viewport
  //   const animationObserver = new IntersectionObserver((entries, observer) => {
  //     for (const entry of entries) {
  //       entry.target.classList.toggle('animated', entry.isIntersecting)
  //     }
  //   });
  //
  //   // Use that IntersectionObserver to observe the visibility
  //   // of some elements
  //   for (const element of document.querySelectorAll('.build-in-animate')) {
  //     animationObserver.observe(element);
  //   }
  // });

    return (
        <HeroContainer id="hero" className='build-in-animate'>
          <Lead>{lead}</Lead>
          <Name>{name}</Name>
          <Subtitle>{subtitle}</Subtitle>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
          <a href="mailto:codyallanrobertson@gmail.com" aria-label="Email Cody Robertson"><Button>{ contactText}</Button></a>
        </HeroContainer>
    );
}

export default Hero;
