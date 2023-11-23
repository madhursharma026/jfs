import { Button, Carousel } from "react-bootstrap";
// import styles from '../../../styles/Explore/Explore.module.css'
import styles from '../../../styles/Homepage/Service.module.css';

export default function Life() {
    return (
        <div className="mt-5 text-md-center px-4" style={{ maxWidth: '800px', margin: 'auto' }}>
            <h1 style={{fontWeight: '900'}}><b>Life at JFS</b></h1>
            <h5 className="text-muted" style={{fontSize: '1.125rem'}}>JFS aims to create a sustainable, nimble, and forward-looking 'talent-intensive' organisation fostering long-term value creation for all stakeholders and an 'enriching place to work' globally.</h5>

            <div className={styles.exploreSectionBeforeLGScrn}>
                <div className="container-lg py-5">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card1-.jpg" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                        </div>
                        <div className="col-md-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card2-.jpg" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/tile3-desk.webp" alt="#ImgNotFound" className="w-100 mt-3" style={{ borderRadius: '30px' }} />
                        </div>
                        <div className="col-md-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card5.svg" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.exploreSectionAfterLGScrn}>
                <Carousel className="px-3">
                    <Carousel.Item>
                        <div className="mx-md-5 my-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card1-.jpg" alt="#ImgNotFound" className={styles.carouselItem} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="mx-md-5 my-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card2-.jpg" alt="#ImgNotFound" className={styles.carouselItem} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="mx-md-5 my-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/tile3-desk.webp" alt="#ImgNotFound" className={styles.carouselItem} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="mx-md-5 my-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/careers/career-card5.svg" alt="#ImgNotFound" className={styles.carouselItem} />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
