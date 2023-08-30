import React from 'react';
import './Home.css';
import  mumbai from "../assets/desktop-wallpaper-bandra-worli-sea-link-mumbai-skyline 1.jpg"
import delhi from "../assets/1167248 1.jpg"
import himalayas from "../assets/nepal-himalayas-mountains-nature-wallpaper-preview 1.png"
const Home = () => {
   const active =0
   
   const tags = document.querySelectorAll(".tagcontainer h1");
   const img = document.querySelectorAll(".imgcontainer img")
   
   const gotoprev = ()=>{

   }
const gotonext = ()=>{
  let currentvalue = active +1
  
}
  
 
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
      <div className="paracontainer">
          <p>"Mumbai, the bustling city of dreams where tradition meets modernity."</p>
          <p>"Delhi: where history breathes amidst modernity's pulse."</p>
          <p>"The Himalayas: where Earth touches the sky in a sublime embrace."</p>
        </div>
    </div>
    <div className="footer">
      <h1 onClick={gotoprev}>PREV</h1>
      <p>Embarking on journeys, we unwrap the gift of the world, finding pieces of ourselves scattered in every new place and person we encounter.</p>
      <h1 onClick={gotonext}>NEXT</h1>
    </div>
    </div>
  )
}

export default Home