import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import { Container, Image, PreviewImage } from './slider.styles';

const Slider = ({ images, preview }) => {
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
            {preview ? (
              <PreviewImage image={image} alt={`${i} image`} />
            ) : (
              <Image src={image} alt={`${i} image`} />
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slider;
