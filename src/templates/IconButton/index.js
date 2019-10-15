import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { Button, Link } from './styles'

export default ({ link, icon, ...props }) => {
  const Component = link ? Link : Button

  return (
    <Component {...props}>
      <Icon icon={icon} />
    </Component>
  )
}
