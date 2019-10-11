import styled from 'styled-components'

const List = styled.ul`
  padding-bottom: 15px;

  li {
    padding: 5px 10px;
    display: grid;
    grid-template-columns: 2fr 4fr 1.5fr 1.5fr 1fr;
    grid-gap: 5px;

    &:nth-child(1) {
      border-bottom: 1px solid #cccccc;
      font-weight: 500;
    }

    span {
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        text-align: center;
      }
    }
  }
`

export { List }
