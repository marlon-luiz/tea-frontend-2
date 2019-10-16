import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import _ from 'lodash'

import { Navigation } from './styles'

export default function() {
  const items = [
    { to: '/', icon: 'calendar-alt', iconStyle: 'far', text: 'Atividades' },
    { to: '/autists', icon: 'user', text: 'Autistas' }
  ]

  return (
    <Navigation>
      <header>
        <h1>TEA Routine</h1>
      </header>
      <nav>
        <ul>
          {_.map(items, (item, index) => (
            <li key={index}>
              <Link to={item.to}>
                <Icon icon={[item.iconStyle, item.icon]} />
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Navigation>
  )
}
