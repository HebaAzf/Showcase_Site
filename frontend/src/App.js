//used 'rafce' to create this arrow function component
import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
  <>
    <Header />
    <main className = 'py-3'> 
      <Container>
        <h1>The 2023/24 BIPOC Hub Showcase</h1>  
      </Container>
    </main>
    <Footer />
  </>
  )
}

export default App