import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner_one from '../../banner_images/banner_img (1).jpg'
import banner_two from '../../banner_images/banner_img (2).jpg'
import banner_three from '../../banner_images/banner_img (3).jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            style={{
              height: "500px",
              width :'100%',
              objectFit : "cover"                    
           }}
            src={banner_one}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              height: "500px",
              width :'100%',
              objectFit : "cover"                    
           }}
            src={banner_two}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              height: "500px",
              width :'100%',
              objectFit : "cover"                    
           }}
            src={banner_three}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;