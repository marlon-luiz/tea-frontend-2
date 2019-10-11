import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import { Button } from './styles'

export default ({ to }) => (
  <Button to={to}>
    <Icon icon="plus" />
  </Button>
)
