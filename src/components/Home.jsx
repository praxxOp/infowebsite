import React from 'react';
import './Home.css';
import  mumbai from "../assets/desktop-wallpaper-bandra-worli-sea-link-mumbai-skyline 1.jpg"
import delhi from "../assets/1167248 1.jpg"
import himalayas from "../assets/nepal-himalayas-mountains-nature-wallpaper-preview 1.png"
const Home = () => {
  return (
    <div>
      <div className="maincontainer">
      <div className="container">
        
      
      <div className="imgcontainer">
        <img src={mumbai} alt="" />
        <img src={delhi} alt="" />
        <img src={himalayas} alt="" />
      </div>
      <div className="tagcontainer">
          <h1>MUMBAI.</h1>
          <h1>DELHI.</h1>
          <h1>HIMALAYAS.</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home