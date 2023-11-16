import { Button, Carousel } from "react-bootstrap";
import styles from '../../../styles/Explore/Explore.module.css'

export default function Services() {
    return (
        <div className="mt-5 text-center" style={{ maxWidth: '800px', margin: 'auto' }}>
            <h1><b>About Jio Financial Services Limited</b></h1>
            <h5>Jio Financial Services Limited focuses mainly on crucial customer groups, reaching out to individuals and small businesses often untapped in urban, semi-urban, and rural areas of India. Our goal is to provide easy-to-use, transparent financial products that cater to the rapidly evolving financial needs of India.</h5>

            <Button className='px-4 py-2 mt-4' style={{ borderRadius: '20px', background: '#D8AA67', borderColor: '#D8AA67', color: "black" }}><b>Learn More About Us</b></Button>
            <div className={styles.exploreSectionBeforeLGScrn}>
                <div className="container-lg py-5">
                    <div className="row my-5 text-center">
                        <div className="col-lg-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk1.webp" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                        </div>
                        <div className="col-lg-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk2.webp" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk3.webp" alt="#ImgNotFound" className="w-100 mt-3" style={{ borderRadius: '30px' }} />
                        </div>
                        <div className="col-lg-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk4.webp" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.exploreSectionAfterLGScrn}>
                <Carousel>
                    <Carousel.Item>
                        <div className="m-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk1.webp" alt="#ImgNotFound" style={{ borderRadius: '30px', maxHeight: '650px', minHeight: '350px', height: '100%', width: '100%' }} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="m-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk2.webp" alt="#ImgNotFound" style={{ borderRadius: '30px', maxHeight: '650px', minHeight: '350px', height: '100%', width: '100%' }} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="m-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk3.webp" alt="#ImgNotFound" style={{ borderRadius: '30px', maxHeight: '650px', minHeight: '350px', height: '100%', width: '100%' }} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="m-5">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk4.webp" alt="#ImgNotFound" style={{ borderRadius: '30px', maxHeight: '650px', minHeight: '350px', height: '100%', width: '100%' }} />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
