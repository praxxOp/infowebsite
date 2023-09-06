import React, { useState, useEffect } from 'react';
import './Home.css';
import mumbaiImage from "../assets/desktop-wallpaper-bandra-worli-sea-link-mumbai-skyline 1.jpg";
import delhiImage from "../assets/1167248 1.jpg";
import himalayasImage from "../assets/nepal-himalayas-mountains-nature-wallpaper-preview 1.png";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('slide-in-left');

  const tags = ["MUMBAI.", "DELHI.", "HIMALAYAS."];
  const images = [mumbaiImage, delhiImage, himalayasImage];

  useEffect(() => {
  
    if (index === 0) {
      setSlideDirection('slide-in-left');
    } else if (index === images.length - 1) {
      setSlideDirection('slide-in-right');
    } else {
      setSlideDirection('slide-in-left');
    }
  }, [index, images.length]);

  const goToNext = () => {
    if (index < tags.length - 1) {
      setIndex(index + 1);
    }

  };

  const goToPrev = () => {
   if (index > 0) {
      setIndex(index - 1);
    }
  };
  

  return (
    <div>
      <div className="maincontainer">
        <div className={`container ${slideDirection}`}>
          <div className="imgcontainer">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Image ${i + 1}`}
                className={`image ${index === i ? "active" : ""}`}
              />
            ))}
          </div>
          <div className="tagcontainer">
            {tags.map((tag, i) => (
              <h1
                key={i}
                className={`tag ${index === i ? "active" : ""}`}
              >
                {tag}
              </h1>
            ))}
          </div>
        </div>
        <div className="paracontainer">
          <p>"Mumbai, the bustling city of dreams where tradition meets modernity."</p>
          <p>"Delhi: where history breathes amidst modernity's pulse."</p>
          <p>"The Himalayas: where Earth touches the sky in a sublime embrace."</p>
        </div>
      </div>
      <div className="footer">
        <h1  id="prev"
  className={index === 0 ? "prev-opacity" : ""}
  style={{ opacity: index === 0 ? 0.5 : 1 }}
  onClick={goToPrev}>PREV</h1>
        <p>Embarking on journeys, we unwrap the gift of the world, finding pieces of ourselves scattered in every new place and person we encounter.</p>
        <h1 onClick={goToNext}>NEXT</h1>
      </div>
    </div>
  )
}

export default Home;
