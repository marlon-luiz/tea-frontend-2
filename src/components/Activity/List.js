import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import moment from 'moment'

import {
  getActivities,
  deleteActivity,
  concludeActivity
} from '../../services/activity'

import List from '../../templates/List'
import IconButton from '../../templates/IconButton'

export default function({ autistId, report }) {
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

  const handleDelete = async activityId => {
    if (window.confirm('Tem certeza que deseja excluir esta atividade?')) {
      await deleteActivity(activityId)

      if (autistId) {
        const data = await getActivities(autistId)

        setActivities(data)
      }
    }
  }

  const handeConclude = async activityId => {
    if (window.confirm('Tem certeza que deseja concluir esta atividade?')) {
      await concludeActivity(activityId)

      if (autistId) {
        const data = await getActivities(autistId)

        setActivities(data)
      }
    }
  }

  return (
    <List centerColumns={[4, 5, 6]}>
      <thead>
        <tr>
          {!report && <th />}
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
            {!report &&
              (window.user.type === 'A' ? (
                <td>
                  {!activity.isConcluded && (
                    <>
                      <IconButton
                        link
                        success
                        icon="pencil-alt"
                        to={`/activities/${activity.id}`}
                      />
                      <IconButton
                        error
                        icon="trash"
                        onClick={async () => await handleDelete(activity.id)}
                      />
                    </>
                  )}
                </td>
              ) : (
                <td>
                  {!activity.isConcluded && (
                    <IconButton
                      success
                      icon="check"
                      onClick={async () => await handeConclude(activity.id)}
                    />
                  )}
                </td>
              ))}
            <td>{activity.title}</td>
            <td>{activity.description}</td>
            <td>{moment(activity.start).format('DD/MM HH:mm')}</td>
            <td>{moment(activity.end).format('DD/MM HH:mm')}</td>
            <td>{activity.isConcluded ? 'Concluído' : 'Pendente'}</td>
          </tr>
        ))}
      </tbody>
    </List>
  )
}
