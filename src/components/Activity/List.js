import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import moment from 'moment'

import { getActivities } from '../../services/activity'

import List from '../../templates/List'
import IconButton from '../../templates/IconButton'

export default function({ autistId }) {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const fetchActivities = async () => {
      if (autistId) {
        const data = await getActivities(autistId)

        setActivities(data)
      }
    }

    fetchActivities()
  }, [autistId])

  return (
    <List centerColumns={[4, 5, 6]}>
      <thead>
        <tr>
          <th />
          <th>Título</th>
          <th>Descrição</th>
          <th>Início</th>
          <th>Fim</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {_.map(activities, activity => (
          <tr key={activity.id}>
            <td>
              <IconButton
                link
                success
                icon="pencil-alt"
                to={`/activities/${activity.id}`}
              />
              <IconButton error icon="trash" />
            </td>
            <td>{activity.title}</td>
            <td>{activity.description}</td>
            <td>{moment(activity.start).format('DD/MM HH:mm')}</td>
            <td>{moment(activity.end).format('DD/MM HH:mm')}</td>
            <td>Pendente</td>
          </tr>
        ))}
      </tbody>
    </List>
  )
}
