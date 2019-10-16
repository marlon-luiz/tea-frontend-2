import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import { getAutists } from '../../services/autist'

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
                <IconButton error icon="trash" />
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
