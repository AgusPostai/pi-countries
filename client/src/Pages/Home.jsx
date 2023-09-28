import React from 'react'
import { CountriesCard, Filters, NavBar } from '../components/index.js'

const Home = () => {
  return (
    <>
      <NavBar />
      <Filters />
      <CountriesCard />
    </>
  )
}

export default Home
