import React, { useState } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import Form from '../../templates/Form'
import FormGroup from '../../templates/FormGroup'
import Input from '../../templates/Input'
import Button from '../../templates/Button'

import { Background, Content, TextBottom } from './styles'

import { login } from '../../services/login'

export default function({ history }) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = ({ target }) => {
    const { name, value } = target

    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async () => {
    const errors = []

    if (_.isEmpty(formValues.email)) {
      errors.push('Informe o e-mail.')
    }

    if (_.isEmpty(formValues.password)) {
      errors.push('Informe a senha.')
    }

    if (!errors.length) {
      const { authenticated, user } = await login(formValues)

      if (authenticated) {
        window.user = user
        history.push('/')
      } else {
        alert('E-mail ou senha incorretos!')
      }
    } else {
      alert(_.join(errors, '\n'))
    }
  }

  return (
    <Background>
      <Content>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              placeholder="E-mail"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Senha"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </FormGroup>
          <Button>Login</Button>
          <TextBottom>
            Não tem uma conta? <Link to="/users/add">Crie uma!</Link>
          </TextBottom>
        </Form>
      </Content>
    </Background>
  )
}
