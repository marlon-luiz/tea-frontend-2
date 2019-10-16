import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import { getAutists, deleteAutist } from '../../services/autist'

import List from '../../templates/List'
import Button from '../../templates/FloatingActionButton'
import IconButton from '../../templates/IconButton'

export default function() {
  const [autists, setAustists] = useState([])

  useEffect(() => {
    const fetchAutists = async () => {
      const data = await getAutists()

      setAustists(data)
    }

    fetchAutists()
  }, [])

  const handleDelete = async autistId => {
    if (window.confirm('Tem certeza que deseja excluir este autista?')) {
      await deleteAutist(autistId)

      const data = await getAutists()
      setAustists(data)
    }
  }

  return (
    <>
      <List>
        <thead>
          <tr>
            <th />
            <th>Nome</th>
            <th>Responsável</th>
          </tr>
        </thead>
        <tbody>
          {_.map(autists, autist => (
            <tr>
              <td>
                <IconButton
                  link
                  success
                  icon="pencil-alt"
                  to={`/autists/${autist.id}`}
                />
                <IconButton
                  error
                  icon="trash"
                  onClick={async () => handleDelete(autist.id)}
                />
              </td>
              <td>{autist.name}</td>
              <td>{autist.responsible.name}</td>
            </tr>
          ))}
        </tbody>
      </List>

      <Button to="/autists/add" />
    </>
  )
}
