import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import { getAutists } from '../../services/autist'

import Button from '../../templates/FloatingActionButton'
import FormGroup from '../../templates/FormGroup'
import Grid from '../../templates/Grid'
import Row from '../../templates/Row'
import Select from '../../templates/Select'

import ActivityList from '../Activity/List'

export default function({ location: { state } }) {
  const [autists, setAutists] = useState([])
  const [autistId, setAutistId] = useState(_.get(state, 'autistId', ''))

  useEffect(() => {
    const fetchAutists = async () => {
      const autists = await getAutists()

      setAutists(autists)

      if (!autistId && autists[0]) {
        setAutistId(autists[0].id)
      }
    }

    fetchAutists()
  }, [autistId])

  return (
    <>
      <FormGroup>
        <Row>
          <Grid md={4}>
            <Select
              label="Autista"
              value={autistId}
              onChange={e => setAutistId(e.target.value)}
            >
              {_.map(autists, autist => (
                <option value={autist.id} key={autist.id}>
                  {autist.name}
                </option>
              ))}
            </Select>
          </Grid>
        </Row>
      </FormGroup>

      <Row>
        <Grid>
          <ActivityList autistId={autistId} report />
        </Grid>
      </Row>
    </>
  )
}
