import Carousel from 'react-bootstrap/Carousel';
import styles from '../../../styles/Homepage/CarouselSection.module.css'
import { Button } from 'react-bootstrap';

function CarouselSection() {
  return (
    <>
      <Carousel indicators={false} className={styles.carouselBeforeMDScrn}>
        <Carousel.Item>
          <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/home-hero-loan-desk-1.webp" alt="#ImgNotFound" width="100%" className={styles.carouselItem} />
          <Carousel.Caption className={styles.carouselCaption}>
            <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Realise <span style={{ color: '#D8AA67' }}>your dreams</span></b></h1>
            <Button className='px-4 py-2 mt-4' style={{ borderRadius: '20px', background: '#D8AA67', borderColor: '#D8AA67', color: "black" }}><b>Explore Now</b></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/home-hero-insurance-desk-1.webp" alt="#ImgNotFound" width="100%" className={styles.carouselItem} />
          <Carousel.Caption className={styles.carouselCaption}>
            <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Protect <span style={{ color: '#D8AA67' }}>all that matters</span></b></h1>
            <Button className='px-4 py-2 mt-4' style={{ borderRadius: '20px', background: '#D8AA67', borderColor: '#D8AA67', color: "black" }}><b>Explore Now</b></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/hero-digital-banking-desk.webp" alt="#ImgNotFound" width="100%" className={styles.carouselItem} />
          <Carousel.Caption className={styles.carouselCaption}>
            <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Bank <span style={{ color: '#D8AA67' }}>anytime anywhere</span></b></h1>
            <Button className='px-4 py-2 mt-4' style={{ borderRadius: '20px', background: '#D8AA67', borderColor: '#D8AA67', color: "black" }}><b>Explore Now</b></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/homepage-pay-desk.webp" alt="#ImgNotFound" width="100%" className={styles.carouselItem} />
          <Carousel.Caption className={styles.carouselCaption}>
            <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Manage <span style={{ color: '#D8AA67' }}>all your finances</span></b></h1>
            <Button className='px-4 py-2 mt-4' style={{ borderRadius: '20px', background: '#D8AA67', borderColor: '#D8AA67', color: "black" }}><b>Explore Now</b></Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel indicators={false} className={styles.carouselAfterMDScrn}>
        <Carousel.Item>
          <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/hero-instant-loan-mobi.webp" alt="#ImgNotFound" width="100%" className={styles.carouselItem} />
          <Carousel.Caption className={styles.carouselCaption}>
            <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Realise <span style={{ color: '#D8AA67' }}>your dreams</span></b></h1>
            <Button className='px-4 py-2 mt-4' style={{ borderRadius: '20px', background: '#D8AA67', borderColor: '#D8AA67', color: "black" }}><b>Explore Now</b></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/hero-insurance-mobi.webp" alt="#ImgNotFound" width="100%" className={styles.carouselItem} />
          <Carousel.Caption className={styles.carouselCaption}>
            <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Protect <span style={{ color: '#D8AA67' }}>all that matters</span></b></h1>
            <Button className='px-4 py-2 mt-4' style={{ borderRadius: '20px', background: '#D8AA67', borderColor: '#D8AA67', color: "black" }}><b>Explore Now</b></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/hero-digital-banking-mobi.webp" alt="#ImgNotFound" width="100%" className={styles.carouselItem} />
          <Carousel.Caption className={styles.carouselCaption}>
            <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Bank <span style={{ color: '#D8AA67' }}>anytime anywhere</span></b></h1>
            <Button className='px-4 py-2 mt-4' style={{ borderRadius: '20px', background: '#D8AA67', borderColor: '#D8AA67', color: "black" }}><b>Explore Now</b></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/homepage-pay-mob.webp" alt="#ImgNotFound" width="100%" className={styles.carouselItem} />
          <Carousel.Caption className={styles.carouselCaption}>
            <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Manage <span style={{ color: '#D8AA67' }}>all your finances</span></b></h1>
            <Button className='px-4 py-2 mt-4' style={{ borderRadius: '20px', background: '#D8AA67', borderColor: '#D8AA67', color: "black" }}><b>Explore Now</b></Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselSection;
