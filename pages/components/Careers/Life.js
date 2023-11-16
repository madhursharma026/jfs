import { Button, Carousel } from "react-bootstrap";
// import styles from '../../../styles/Explore/Explore.module.css'
import styles from '../../../styles/Explore/Explore.module.css';

export default function Life() {
    return (
        <div className="mt-5 text-center" style={{ maxWidth: '800px', margin: 'auto' }}>
            <h1><b>Life at JFS</b></h1>
            <h5>JFS aims to create a sustainable, nimble, and forward-looking 'talent-intensive' organisation fostering long-term value creation for all stakeholders and an 'enriching place to work' globally.</h5>

            <Button className='px-4 py-2 mt-4' style={{ borderRadius: '20px', background: '#D8AA67', borderColor: '#D8AA67', color: "black" }}><b>Learn More About Us</b></Button>
            <div className={styles.exploreSectionBeforeLGScrn}>
                <div className="container-lg py-5">
                    <div className="row text-center">
                        <div className="col-lg-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card1-.jpg" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                        </div>
                        <div className="col-lg-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card2-.jpg" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/tile3-desk.webp" alt="#ImgNotFound" className="w-100 mt-3" style={{ borderRadius: '30px' }} />
                        </div>
                        <div className="col-lg-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card5.svg" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.exploreSectionAfterLGScrn}>
                <Carousel>
                    <Carousel.Item>
                        <div className="m-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card1-.jpg" alt="#ImgNotFound" style={{ borderRadius: '30px', maxHeight: '650px', minHeight: '350px', height: '100%', width: '100%' }} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="m-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card2-.jpg" alt="#ImgNotFound" style={{ borderRadius: '30px', maxHeight: '650px', minHeight: '350px', height: '100%', width: '100%' }} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="m-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/tile3-desk.webp" alt="#ImgNotFound" style={{ borderRadius: '30px', maxHeight: '650px', minHeight: '350px', height: '100%', width: '100%' }} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="m-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card5.svg" alt="#ImgNotFound" style={{ borderRadius: '30px', maxHeight: '650px', minHeight: '350px', height: '100%', width: '100%' }} />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
