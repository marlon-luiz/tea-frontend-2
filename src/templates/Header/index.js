import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import { Header } from './styles'

export default ({ history }) => {
  const handleSignOut = () => {
    window.user = null

    history.push('/login')
  }

  return (
    <Header>
      <h1>Bem vindo(a), {window.user.name}</h1>
      <button onClick={handleSignOut}>
        Sair
        <Icon icon="sign-out-alt" />
      </button>
    </Header>
  )
}
