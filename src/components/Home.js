import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import { getAutists } from '../services/autist'

import Button from '../templates/FloatingActionButton'
import FormGroup from '../templates/FormGroup'
import Grid from '../templates/Grid'
import Row from '../templates/Row'
import Select from '../templates/Select'

import ActivityList from './Activity/List'

export default function() {
  const [autists, setAutists] = useState([])
  const [autistId, setAutistId] = useState(undefined)

  useEffect(() => {
    getAutists()
      .then(autists => {
        setAutists(autists)

        if (autists[0]) {
          setAutistId(autists[0].id)
        }
      })
      .catch(window.console.log)
  }, [])

  return (
    <>
      <FormGroup>
        <Row>
          <Grid md={4}>
            <Select label="Autista" onChange={e => setAutistId(e.target.value)}>
              {_.map(autists, autist => (
                <option value={autist.id} key={autist.id}>
                  {autist.name}
                </option>
              ))}
            </Select>
          </Grid>
        </Row>
      </FormGroup>

      <Grid>
        <Row>
          <ActivityList autistId={autistId} />
        </Row>
      </Grid>

      <Button to="/activity/add" />
    </>
  )
}
