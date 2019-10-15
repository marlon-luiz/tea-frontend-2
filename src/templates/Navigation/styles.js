import styled from 'styled-components'

const Navigation = styled.div`
  grid-area: navigation;

  background-color: #242939;
  font-size: 1.05rem;

  header {
    font-family: 'Patrick Hand', cursive;
    font-weight: normal;
    margin-bottom: 15px;
    line-height: 75px;
    text-align: center;
    font-size: 1.5rem;
    color: #ffffff;
    border-bottom: 1px rgba(255, 255, 255, 0.3) solid;
  }

  a {
    display: block;
    color: rgba(255, 255, 255, 0.85);
    padding: 10px 15px;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 15px;
    align-items: center;

    transition: background-color 300ms ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.07);
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export { Navigation }
