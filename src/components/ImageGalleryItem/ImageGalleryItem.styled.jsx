import styled from 'styled-components'

export const Item = styled.li`
  border-radius: ${p => p.theme.radii.small};
  box-shadow: ${p => p.theme.shadows.item};
`

export const Image = styled.img`
  width: 100%;
  height: ${p => p.theme.sizes.m};
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`