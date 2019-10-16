import _ from 'lodash'

const primaryColor = '#0097e6'

const theme = {
  backgroundColor: '#f2f3f8',
  fontColor: '#48465b',
  fontSize: 14,
  primaryColor,
  errorColor: '#e84118',
  successColor: '#27ae60',
  zIndex: {
    fab: 5
  }
}

export const getTheme = name => ({ theme }) => _.get(theme, name, null)

export default theme
