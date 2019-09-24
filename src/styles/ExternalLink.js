import styled from 'styled-components';
import theme from './theme';

const ExternalLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${theme.transition};
  cursor: pointer;
  color: ${theme.colors.highlight};
  &:hover,
  &:focus,
  &:active {
    color: ${theme.colors.highlight};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.1em;
    background-color: ${theme.colors.highlight};
    transition: ${theme.transition};
`;

export default ExternalLink;
