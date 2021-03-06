// @flow
import React from 'react'
import styled from 'styled-components'

const Sidebar = ({ children }: { children?: React.Element<*> }) =>
  <Container>
    {children}
  </Container>

const Container = styled.div`
  font-size: 16px;
  width: 20%;
  min-width: 200px;
`

export default Sidebar
