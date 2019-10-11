import _ from 'lodash'

const primaryColor = '#8e44ad'

const theme = {
  backgroundColor: '#f2f3f8',
  fontColor: '#48465b',
  fontSize: 14,
  primaryColor,
  zIndex: {
    fab: 5
  }
}

export const getTheme = name => ({ theme }) => _.get(theme, name, null)

export default theme
