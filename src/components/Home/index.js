import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-content-container">
      <h1 className="heading">Welcome to Counter app and Form app</h1>
      <p className="desc">Click on Hamburger Icon to open the apps.</p>
    </div>
  </div>
)

export default Home
