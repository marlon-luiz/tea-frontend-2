import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import Grid from '../../templates/Grid'
import Form from '../../templates/Form'
import FormGroup from '../../templates/FormGroup'
import Input from '../../templates/Input'
import Row from '../../templates/Row'
import Button from '../../templates/Button'

import { getCaregiver } from '../../services/caregiver'
import { addAutist, updateAutist, findAutist } from '../../services/autist'

export default function({
  match: {
    params: { id }
  },
  history
}) {
  const [caregiver, setCaregiver] = useState(null)
  const [formValues, setFormValues] = useState({
    name: '',
    caregiver: ''
  })

  useEffect(() => {
    const fetchAutist = async () => {
      const {
        name,
        responsible: { email: caregiverEmail }
      } = await findAutist(id)

      const caregiver = await getCaregiver(caregiverEmail)

      const formValues = {
        name,
        caregiver: caregiverEmail
      }

      setFormValues(formValues)
      setCaregiver(caregiver)
    }

    if (id) {
      fetchAutist()
    }
  }, [id])

  const handleChange = e => {
    const { name, value } = _.get(e, 'target', {})

    setFormValues({ ...formValues, [name]: value })
  }
  const handleCaregiver = async e => {
    const caregiver = await getCaregiver(e.target.value)

    setCaregiver(caregiver)
  }
  const handleSubmit = async () => {
    const data = {
      name: formValues.name,
      responsibleId: _.get(caregiver, 'id')
    }

    try {
      if (id) {
        await updateAutist(id, data)
      } else {
        await addAutist(data)
      }

      history.push('/autists')
    } catch (e) {
      const errors = _.get(e, 'response.data.errors', []).join('\n')
      const message = `Existem alguns erros nos dados inseridos:\n${errors}`

      alert(message)
    }
  }

  return (
    <Row>
      <Grid lg={8} pushLg={2}>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Grid>
              <FormGroup>
                <Input
                  inline
                  name="name"
                  label="Nome"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </FormGroup>
            </Grid>
          </Row>
          <Row>
            <Grid sm={7}>
              <FormGroup>
                <Input
                  inline
                  name="caregiver"
                  label="Cuidador"
                  value={formValues.caregiver}
                  onChange={handleChange}
                  onBlur={handleCaregiver}
                />
              </FormGroup>
            </Grid>
            <Grid sm={5}>
              <FormGroup>
                <Input readonly value={_.get(caregiver, 'name')} />
              </FormGroup>
            </Grid>
          </Row>
          <FormGroup>
            <Button type="submit" primary>
              {id ? 'Alterar' : 'Adicionar'}
            </Button>
          </FormGroup>
        </Form>
      </Grid>
    </Row>
  )
}
