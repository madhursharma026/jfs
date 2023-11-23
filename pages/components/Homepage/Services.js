import { Button, Carousel } from "react-bootstrap";
import styles from '../../../styles/Homepage/Service.module.css'

export default function Services() {
    return (
        <div className="mt-5 px-3 text-sm-center" style={{ maxWidth: '800px', margin: 'auto' }}>
            <h1 style={{ fontWeight: '900' }}><b>About Jio Financial Services Limited</b></h1>
            <h5 className={styles.paraStyle}>Jio Financial Services Limited focuses mainly on crucial customer groups, reaching out to individuals and small businesses often untapped in urban, semi-urban, and rural areas of India. Our goal is to provide easy-to-use, transparent financial products that cater to the rapidly evolving financial needs of India.</h5>

            <Button className='px-4 mt-4' style={{ borderRadius: '30px', background: '#D8AA67', borderColor: '#D8AA67', color: "black", paddingTop: '12px', paddingBottom:'12px' }}><b>Learn More About Us</b></Button>
            <div className={styles.exploreSectionBeforeLGScrn}>
                <div className="container-lg py-5">
                    <div className="row my-5 text-center">
                        <div className="col-md-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk1.webp" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                        </div>
                        <div className="col-md-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk2.webp" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk3.webp" alt="#ImgNotFound" className="w-100 mt-3" style={{ borderRadius: '30px' }} />
                        </div>
                        <div className="col-md-4">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk4.webp" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.exploreSectionAfterLGScrn}>
                <Carousel>
                    <Carousel.Item>
                        <div className="my-5 mx-3">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk1.webp" alt="#ImgNotFound" className={styles.carouselItem} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="my-5 mx-3">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk2.webp" alt="#ImgNotFound" className={styles.carouselItem} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="my-5 mx-3">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk3.webp" alt="#ImgNotFound" className={styles.carouselItem} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="my-5 mx-3">
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk4.webp" alt="#ImgNotFound" className={styles.carouselItem} />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
