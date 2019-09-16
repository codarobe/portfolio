import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes } = theme;

const Button = styled.button`
  color: ${colors.highlight};
  background-color: transparent;
  border: 1px solid ${colors.highlight};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smallish};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1.25rem 1.75rem;
  &:hover,
  &:focus,
  &:active {
    background-color: rgba(44,255,122, 0.2);
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
