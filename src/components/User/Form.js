import React, { useState } from 'react'
import _ from 'lodash'

import Grid from '../../templates/Grid'
import Form from '../../templates/Form'
import FormGroup from '../../templates/FormGroup'
import Input from '../../templates/Input'
import Row from '../../templates/Row'
import Button from '../../templates/Button'

import { addUser } from '../../services/user'

export default function() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    usertype: ''

  })

  const handleChange = e => {
    const { name, value } = _.get(e, 'target', {})

    setFormValues({ ...formValues, [name]: value })
  }
  const handleSubmit = async () => {
    const data = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      passwordConfirmation: formValues.passwordConfirmation,
      type: formValues.usertype,
    }

    try {
      await addUser(data)
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
            <Grid>
              <FormGroup>
                <Input
                  inline
                  name="email"
                  label="E-mail"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </FormGroup>
            </Grid>
          </Row>
          <Row>
            <Grid sm={6}>
              <FormGroup>
              <Input type="password"
                  inline
                  name="password"
                  label="Senha"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </FormGroup>
            </Grid>
            <Grid sm={6}>
              <FormGroup>
                <Input type="password"
                  inline
                  name="passwordConfirmation"
                  label="Repetir Senha"
                  value={formValues.passwordConfirmation}
                  onChange={handleChange}
                />
              </FormGroup>
            </Grid>
          </Row>
          <Row>
            <Grid>
                <FormGroup>Tipo de Usuário
                <br></br>
                <input type="radio"
                    name="usertype"
                    value={formValues.usertype}
                    checked={true}
                    onChange={handleChange}
                  />Cuidador
                  <br></br>                  
                  <input type="radio"
                    name="usertype"
                    value={formValues.usertype}
                    onChange={handleChange}
                  />Administrador
                </FormGroup>
              </Grid>
          </Row>
          <FormGroup>
            <Button type="submit" primary>
              Cadastrar
            </Button>
          </FormGroup>
        </Form>
      </Grid>
    </Row>
  )
}
