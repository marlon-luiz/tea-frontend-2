import React from 'react'
import _ from 'lodash'

import Label from '../../templates/Label'

import { Wrapper } from './styles'

export default Component => {
  return function({ label, inline = false, ...props }) {
    if (!_.isEmpty(props.name) && _.isEmpty(props.id)) {
      props.id = props.name
    }

    const hasLabel = !_.isEmpty(label)

    return (
      <Wrapper inline={inline} hasLabel={hasLabel}>
        {hasLabel && <Label>{label}</Label>}
        <Component {...props} />
      </Wrapper>
    )
  }
}
