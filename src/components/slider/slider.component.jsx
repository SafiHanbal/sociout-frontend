import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import { Container } from './slider.styles';

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        controls={images.length === 1 ? false : true}
        indicators={images.length === 1 ? false : true}
      >
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={image} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slider;
