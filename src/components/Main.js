import React from 'react'

import Router from '../Router'

import Container from '../templates/Container'
import Header from '../templates/Header'
import Navigation from '../templates/Navigation'
import Footer from '../templates/Footer'
import Grid from '../templates/Grid'
import Card from '../templates/Card'
import Row from '../templates/Row'

export default () => (
  <Container>
    <Navigation />
    <Header />
    <main>
      <Grid>
        <Card>
          <Row>
            <Grid>
              <Router />
            </Grid>
          </Row>
        </Card>
      </Grid>
    </main>
    <Footer />
  </Container>
)
