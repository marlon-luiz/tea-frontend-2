import styled from 'styled-components'

export default styled.div`
  background-color: white;
  padding: 15px 15px 0;
  margin-bottom: 15px;
  width: 100%;
  display: block;
  border-radius: 4px;
  box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.05);
  &::before,
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`
