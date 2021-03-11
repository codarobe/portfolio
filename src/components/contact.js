import React from "react";
import styled from "styled-components"
import { Button, Section } from "../styles"

const ContactContainer = styled(Section)`
  min-height: 75vh;
`;

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;
  return (
    <ContactContainer id="contact" className='build-in-animate' >
      <h3>{ title }</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <a href="mailto:codyallanrobertson@gmail.com" aria-label="Email Cody Robertson"><Button>Get in Touch</Button></a>
    </ContactContainer>
  );
}

export default Contact;
