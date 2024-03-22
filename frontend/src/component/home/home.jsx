import React, { useState, useEffect } from "react";
import "./home.css"

export default function Home() {

  const images = [
    "/images/pic1.png",
    "/images/pic2.png",
    "/images/pic3.png"
  ];
   // State to keep track of the current image index
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   // Effect to change the image every 3 seconds (3000 milliseconds)
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentImageIndex((currentImageIndex + 1) % images.length);
     }, 3000);
     return () => clearInterval(interval);
   }, [currentImageIndex, images.length]);
  return (
    <>
     <div className="home1">
        <p id="about-home">
          To help your child enhance the understanding of life based on the core concept of the most powerful tool in the world - “THE MEMORY POWER”.
        </p>
        <img src="/images/pic6.png" alt="" />
      </div>
      <div className="content-section">
        <div className="slideshow-container">
          <img src={images[currentImageIndex]} alt="Slideshow" className="slide-image" />
        </div>
        <div className="message-container">
          <p>
            "“THE MEMORY POWER” is an EdTech startup company that equips students with the skillset and mindset required to be the future of the companies worldwide. We connect a deep understanding of education with the power of the “21st CENTURY LIFE SKILLS” to make your child ready to face this competitive and challenging world."
          </p><br /><br />
          <p>The universe is a subject created in the minds of humans addressed by the facts and theories since centuries. To think about it in detail requires the strength of knowledge and experience which are used to lead an intellectual life.</p>
        </div>
      </div>

    </>
  );
}
