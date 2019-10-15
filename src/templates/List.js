import styled, { css } from 'styled-components'
import _ from 'lodash'

export default styled.table`
  padding-bottom: 15px;
  width: 100%;
  border-collapse: collapse;

  thead {
    text-align: left;

    th {
      padding: 5px 10px 10px;
      border-bottom: 1px rgba(0, 0, 0, 0.3) solid;
    }
  }

  tbody tr {
    td {
      padding: 5px 10px;
    }

    &:first-child td {
      padding: 10px 10px 5px;
    }
  }

  ${props => {
    if (props.centerColumns && _.isArray(props.centerColumns)) {
      return css`
        tbody,
        thead {
          th,
          td {
            ${() =>
              _.join(
                _.map(props.centerColumns, column => `&:nth-child(${column})`),
                ', '
              )} {
              text-align: center;
            }
          }
        }
      `
    }
  }}
`
