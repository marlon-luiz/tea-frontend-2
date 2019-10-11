import styled from 'styled-components'

const Navigation = styled.div`
  background-color: #242939;
  color: #ffffff;
  grid-area: navigation;

  @media (max-width: 767px) {
    display: none;
  }
`

export { Navigation }
