import React from 'react'

export default ({ onSubmit, children }) => {
  const handleSubmit = e => {
    e.preventDefault()

    onSubmit()
  }

  return (
    <form action="#" noValidate onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
