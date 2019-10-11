import styled from 'styled-components'

const List = styled.ul`
  padding-bottom: 15px;

  li {
    padding: 5px 10px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 5px;

    &:nth-child(1) {
      border-bottom: 1px solid #cccccc;
      font-weight: 500;
    }
  }
`

export { List }
