import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import moment from 'moment'

import { getActivities } from '../../../services/activity'

import { List } from './styles'

export default function({ autistId }) {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    if (autistId) {
      getActivities(autistId)
        .then(activities => setActivities(activities))
        .catch(window.console.log)
    }
  }, [autistId])

  return (
    <List>
      <li>
        <span>Título</span>
        <span>Descrição</span>
        <span>Início</span>
        <span>Fim</span>
        <span>Status</span>
      </li>
      {_.map(activities, activity => (
        <li key={activity.id}>
          <span>{activity.title}</span>
          <span>{activity.description}</span>
          <span>{moment(activity.start).format('DD/MM HH:mm')}</span>
          <span>{moment(activity.end).format('DD/MM HH:mm')}</span>
          <span>Pendente</span>
        </li>
      ))}
    </List>
  )
}
