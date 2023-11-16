import Carousel from 'react-bootstrap/Carousel';

function CarouselSection() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/5/2023/08/16222504/marcel-eberle-rendlspkdty-unsplash-1024x685-1.jpeg" alt="#ImgNotFound" width='100%' style={{ minHeight: '600px', maxHeight: '650px', height: '100%' }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images.herzindagi.info/image/2023/Sep/lucky-numbers-2.jpg" alt="#ImgNotFound" width='100%' style={{ minHeight: '600px', maxHeight: '650px', height: '100%' }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://media.sketchfab.com/models/ae5779c280a54dbd8cf7e79526115464/thumbnails/9596360b83f0485aa4a668466c59adef/dadf46e4670b4de39a9713ce1cf872d6.jpeg" alt="#ImgNotFound" width='100%' style={{ minHeight: '600px', maxHeight: '650px', height: '100%' }} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;
