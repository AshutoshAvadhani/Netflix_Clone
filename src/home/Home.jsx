import React from 'react'
import "./home.scss"
import Navbar from '../components/navbar/Navbar';
//import shaktiman from "../images/shaktiman.jpg"
// import background from "../images/wallpaper_background.jpg"
import Featured from '../components/featured/Featured';

const Home = () => {
  return (
    <div className='home'>
        <Navbar></Navbar>
        {/* <img src={background} alt="" width="100%"></img> */}

        <Featured type="movie"></Featured>
    </div>
  )
}

export default Home