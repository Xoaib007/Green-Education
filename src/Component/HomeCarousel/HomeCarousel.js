import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HomeCarousel.css'

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='w-75 carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://i.ibb.co/r3932dh/cover-3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Get Started Digital
            Learning</h3>
          <p>Pro Edu teachers are experts, pros, and industry icons, excited to share their wisdom,
            experience and trusted techniques with you.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://i.ibb.co/tQzTGRq/cover-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='slider-caption'>
          <h3>Move your creative journey
            forward.</h3>
          <p>Whether you’re a beginner or a pro,
            looking for a new hobby or the next leap in your creative career,
            you’ll find inspiration for the path ahead.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://i.ibb.co/6Jyr3FM/cover-1.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Get the experience of
            real creators</h3>
          <p>
          It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;