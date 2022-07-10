import styled from 'styled-components'

export const LoadMore = styled.button`
  padding: ${prop => prop.theme.space[3]}px ${prop => prop.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.secondary};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  min-width: ${p => p.theme.sizes.s};
  box-shadow: ${p => p.theme.shadows.button};
  :hover, :focus {
    background-color: ${p => p.theme.colors.secondary};
  }
`