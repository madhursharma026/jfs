import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/OurCompany/AboutUs.module.css'

export default function AboutUs() {
    return (
        <>
            <Header pageName='ourCompany' />
            <div className="container-xxl px-lg-5 px-3">
            <div className="mx-lg-3">
                <div className="row mt-5 px-lg-0 px-3">
                    <div className="col-lg-6">
                        <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>About Us</b></h1>
                        <h5 style={{ fontSize: '1.125rem', color: '#595959' }}>Jio Financial Services Ltd. was originally incorporated as Reliance Strategic Investments Private Limited on July 22, 1999, under the Companies Act 1956. Subsequently, the name of the Company was changed to Reliance Strategic Investments Limited and a fresh certificate of incorporation was issued on January 14, 2002. The name of the Company was further changed to ‘Jio Financial Services Limited’ and a fresh certificate of incorporation was issued on July 25, 2023.</h5>
                        <br />
                        <h5 style={{ fontSize: '1.125rem', color: '#595959' }}>Our Company is a systemically important non-deposit-taking Non-Banking Financial Company registered with the Reserve Bank of India. CIN: L65990MH1999PLC120918</h5>
                        <br />
                        <h5 style={{ fontSize: '1.125rem', color: '#595959' }}>Our Company will be a holding company and will operate its financial services business through its consumer-facing subsidiaries namely Jio Finance Limited (JFL), Jio Insurance Broking Limited (JIBL), and Jio Payment Solutions Limited (JPSL) and joint venture namely Jio Payments Bank Limited (JPBL).</h5>
                        <br />
                    </div>
                    <div className="col-lg-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/jfs-about-mainbanner.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                </div>

                <div className="mt-5 px-lg-0 px-3">
                    <h1 style={{fontWeight: '900'}}><b>Our vision</b></h1>
                    <h5 style={{ fontSize: '1.125rem', color: '#595959' }}>
                        We care about a financially secure and prosperous future for all Indians. Our vision is to digitally deliver a range of financial products to promote the financial well-being of the people of India. Over the next decade, the digital economy will be the primary catalyst for the Indian economy and will generate cost efficiencies and productivity gains across sectors and industries, creating a virtuous cycle of continuous, sustainable, and inclusive growth.
                    </h5>
                    <h5 style={{ fontSize: '1.125rem', color: '#595959' }}>
                        As India advances towards higher GDP growth levels and higher per capita income, our company, being born in this new digital era, will deliver financial products digitally and ensure that the benefits of financial services reach each and every Indian; our company will strive to capture the growth opportunities and ride this digital wave and target maximising returns for all its stakeholders.
                    </h5>
                </div>


                <Carousel className='px-lg-0 px-3'>
                    <Carousel.Item>
                        <div className="row mt-4">
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageOne}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-1.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageTwo}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-2.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageThree}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-3.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row mt-4">
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageOne}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-3.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageTwo}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-2.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageThree}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-1.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row mt-4">
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageOne}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-1.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageTwo}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-2.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageThree}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-3.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row mt-4">
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageOne}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-3.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageTwo}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-2.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                            <div className={`col-md-4 col-sm-6 col-12 ${styles.imageThree}`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-1.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: "20px" }} />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <br /><br /><br />
            </div>
            </div>
            <Footer />
        </>
    )
}
