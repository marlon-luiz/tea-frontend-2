import React, { useState } from 'react'
import _ from 'lodash'

import Grid from '../../templates/Grid'
import Form from '../../templates/Form'
import FormGroup from '../../templates/FormGroup'
import Input from '../../templates/Input'
import Row from '../../templates/Row'
import Button from '../../templates/Button'

import { getCaregiver } from '../../services/caregiver'
import { addAutist } from '../../services/autist'

export default function() {
  const [caregiver, setCaregiver] = useState(null)
  const [formValues, setFormValues] = useState({
    name: '',
    caregiver: ''
  })

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
      await addAutist(data)
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
              Adicionar
            </Button>
          </FormGroup>
        </Form>
      </Grid>
    </Row>
  )
}
