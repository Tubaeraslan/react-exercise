import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {

  const product= "Buzdolabı";

  return (
    <div>
      {/* <Product productName="Pantolon" price={500} />
      <hr />
      <Product productName="Ayakkabı" price={2500} />
      <hr />
      <Product productName={product} price={15000} /> */}

      {/* component içinde comonent tanımlamama */}

      <Container>
        <Product productName="elbise" price={500}/>
      </Container>
    </div>
  )
}

export default App
