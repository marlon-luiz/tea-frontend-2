import styled from 'styled-components'

import Card from '../../templates/Card'
import FormGroup from '../../templates/FormGroup'
import Button from '../../templates/Button'

const Background = styled.div`
  background-image: linear-gradient(120deg, #0097e6, #e84118);
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled(Card)`
  width: 100%;
  max-width: 400px;
  padding: 60px 40px;

  h1 {
    font-weight: normal;
    text-align: center;
    padding-bottom: 50px;
  }

  ${FormGroup} {
    padding-bottom: 20px;
  }

  ${Button} {
    margin-top: 30px;
    background-image: linear-gradient(140deg, #0097e6, #e84118);
    color: #ffffff;
    height: 45px;
    width: 100%;
    font-size: 1.1rem;
  }
`

const TextBottom = styled.span`
  padding-top: 40px;
  display: block;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;

  a {
    color: #0097e6;
  }
`

export { Background, Content, TextBottom }
