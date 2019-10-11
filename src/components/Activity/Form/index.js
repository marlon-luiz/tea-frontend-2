import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import moment from 'moment'

import Grid from '../../../templates/Grid'
import Form from '../../../templates/Form'
import FormGroup from '../../../templates/FormGroup'
import Input from '../../../templates/Input'
import Row from '../../../templates/Row'
import Select from '../../../templates/Select'
import Textarea from '../../../templates/Textarea'

import { getAutists } from '../../../services/autist'
import { addActivity } from '../../../services/activity'
import Button from '../../../templates/Button'

export default () => {
  const start = moment(),
    end = moment()

  const [autists, setAustists] = useState([])
  const [formValues, setFormValues] = useState({
    autistId: 34,
    title: 'Teste Eduardo',
    description: '',
    startDate: start.format('YYYY-MM-DD'),
    endDate: end.format('YYYY-MM-DD'),
    startTime: start.format('HH:mm'),
    endTime: end.format('HH:mm')
  })

  useEffect(() => {
    getAutists()
      .then(autists => setAustists(autists))
      .catch(window.console.log)
  }, [])

  const handleChange = e => {
    const { name, value } = _.get(e, 'target', {})
    console.log(name, value)

    setFormValues({ ...formValues, [name]: value })
  }

  const validate = () => {
    const errors = []
    console.log(formValues)

    if (isNaN(formValues.autistId)) {
      errors.push('Informe o autista')
    }
    if (_.isEmpty(formValues.title)) {
      errors.push('Informe o título da atividade')
    }
    if (!moment(formValues.startDate, 'YYYY-MM-DD').isValid()) {
      errors.push('Informe uma data inicial válida')
    }
    if (!moment(formValues.endDate, 'YYYY-MM-DD').isValid()) {
      errors.push('Informe uma data final válida')
    }
    if (!moment(formValues.startTime, 'HH:mm').isValid()) {
      errors.push('Informe um horário inicial válido')
    }
    if (!moment(formValues.endTime, 'HH:mm').isValid()) {
      errors.push('Informe um horário final válido')
    }

    if (errors.length > 0) {
      errors.unshift('Existem alguns erros nos dados inseridos:')

      const errorMsg = errors.join('\n')
      window.alert(errorMsg)

      return false
    }

    return true
  }

  const holdSubmit = async () => {
    if (validate()) {
      const startDate = moment(formValues.startDate, 'YYYY-MM-DD')
      const endDate = moment(formValues.endDate, 'YYYY-MM-DD')
      const startTime = moment(formValues.startTime, 'HH:mm')
      const endTime = moment(formValues.endTime, 'HH:mm')

      const start = moment().set({
        year: startDate.year(),
        month: startDate.month(),
        date: startDate.date(),
        hour: startTime.hour(),
        minute: startTime.minute(),
        second: 0
      })
      const end = moment().set({
        year: endDate.year(),
        month: endDate.month(),
        date: endDate.date(),
        hour: endTime.hour(),
        minute: endTime.minute(),
        second: 0
      })

      let values = _.pick(formValues, 'autistId', 'title', 'description')
      values = { ...formValues, start: start.toDate(), end: end.toDate() }

      try {
        await addActivity(values)
      } catch (e) {
        const errors = _.get(e, 'response.data.errors', []).join('\n')
        const message = `Existem alguns erros nos dados inseridos:\n${errors}`

        alert(message)
      }
    }
  }

  return (
    <Row>
      <Grid lg={8} pushLg={2}>
        <Form onSubmit={holdSubmit}>
          <Row>
            <Grid>
              <FormGroup>
                <Select
                  inline
                  label="Autista"
                  name="autistId"
                  value={formValues.autistId}
                  onChange={handleChange}
                >
                  <option value="" />
                  {_.map(autists, autist => (
                    <option value={autist.id} key={autist.id}>
                      {autist.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            </Grid>
          </Row>
          <Row>
            <Grid>
              <FormGroup>
                <Input
                  inline
                  label="Título"
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                />
              </FormGroup>
            </Grid>
          </Row>
          <Row>
            <Grid>
              <FormGroup>
                <Textarea
                  inline
                  label="Descrição"
                  name="description"
                  rows={3}
                  value={formValues.description}
                  onChange={handleChange}
                />
              </FormGroup>
            </Grid>
          </Row>
          <Row>
            <Grid xs={8}>
              <FormGroup>
                <Input
                  inline
                  labelSize={4}
                  label="Início"
                  name="startDate"
                  type="date"
                  value={formValues.startDate}
                  onChange={handleChange}
                />
              </FormGroup>
            </Grid>
            <Grid xs={4}>
              <FormGroup>
                <Input
                  inline
                  name="startTime"
                  type="time"
                  value={formValues.startTime}
                  onChange={handleChange}
                />
              </FormGroup>
            </Grid>
          </Row>
          <Row>
            <Grid xs={8}>
              <FormGroup>
                <Input
                  inline
                  label="Fim"
                  name="endDate"
                  type="date"
                  value={formValues.endDate}
                  onChange={handleChange}
                />
              </FormGroup>
            </Grid>
            <Grid xs={4}>
              <FormGroup>
                <Input
                  inline
                  name="endTime"
                  type="time"
                  value={formValues.endTime}
                  onChange={handleChange}
                />
              </FormGroup>
            </Grid>
          </Row>
          <Row>
            <Grid>
              <FormGroup>
                <Button type="submit" primary>
                  Adicionar
                </Button>
              </FormGroup>
            </Grid>
          </Row>
        </Form>
      </Grid>
    </Row>
  )
}
