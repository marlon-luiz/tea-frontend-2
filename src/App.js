import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Router from './Router'

import theme from './theme'
import GlobalStyle from './GlobalStyle'

import Container from './templates/Container'
import Header from './templates/Header'
import Navigation from './templates/Navigation'
import Footer from './templates/Footer'
import Grid from './templates/Grid'
import Card from './templates/Card'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <>
        <Container>
          <Navigation />
          <Header />
          <main>
            <Grid>
              <Card>
                <Router />
              </Card>
            </Grid>
          </main>
          <Footer />
        </Container>
        <GlobalStyle />
      </>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
