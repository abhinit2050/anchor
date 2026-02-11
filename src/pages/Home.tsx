import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Home Page</div>
      <Link to="/dashboard">Go to Dashboard</Link>
      </>
  )
}

export default Home