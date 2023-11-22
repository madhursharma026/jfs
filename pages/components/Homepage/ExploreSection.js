import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import styles from '/..../../styles/Homepage/Explore.module.css'

export default function ExploreSection() {
    return (
        <>
            <div className={styles.exploreSectionBeforeLGScrn}>
                <div className="container-lg py-5">
                    <div className='mx-3 mx-xxl-5'>
                        <div className="row my-5 text-center">
                            <div className="col-md-3" style={{ display: 'flex' }}>
                                <div className={styles.divStyle}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>Instant Loans</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Make your wish come true with a hassle-free instant loan.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/loans-500-500.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className="col-md-3" style={{ display: 'flex' }}>
                                <div className={styles.divStyle}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>Insurance Plans</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Get bike, car and health insurance plans, all in one place.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/insurance-plans-500-500.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className="col-md-3" style={{ display: 'flex' }}>
                                <div className={styles.divStyle}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>Digital Banking</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Bank anytime, anywhere. It’s easy, instant, and very much secure.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/digital-banking-380-380.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className="col-md-3" style={{ display: 'flex' }}>
                                <div className={styles.divStyle}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>UPI Payments</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Go cashless! This UPI feature works everywhere in India.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/upi-payments-500-500.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.exploreSectionAfterLGScrn}>
                <Carousel>
                    <Carousel.Item>
                        <div className="row mx-3 my-5 text-center">
                            <div className={`col-sm-6`} style={{ display: 'flex' }}>
                                <div className={styles.divStyle1}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>Instant Loans</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Make your wish come true with a hassle-free instant loan.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/loans-500-500.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className={`${styles.col2} col-sm-6`} style={{ display: 'flex' }}>
                                <div className={styles.divStyle2}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>Insurance Plans</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Get bike, car and health insurance plans, all in one place.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/insurance-plans-500-500.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row mx-3 my-5 text-center">
                            <div className={`col-sm-6`} style={{ display: 'flex' }}>
                                <div className={styles.divStyle1}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>Digital Banking</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Bank anytime, anywhere. It’s easy, instant, and very much secure.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/digital-banking-380-380.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className={`${styles.col2} col-sm-6`} style={{ display: 'flex' }}>
                                <div className={styles.divStyle2}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>UPI Payments</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Go cashless! This UPI feature works everywhere in India.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/upi-payments-500-500.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row mx-3 my-5 text-center">
                            <div className={`col-sm-6`} style={{ display: 'flex' }}>
                                <div className={styles.divStyle1}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>UPI Payments</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Go cashless! This UPI feature works everywhere in India.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/upi-payments-500-500.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className={`${styles.col2} col-sm-6`} style={{ display: 'flex' }}>
                                <div className={styles.divStyle2}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>Digital Banking</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Bank anytime, anywhere. It’s easy, instant, and very much secure.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/digital-banking-380-380.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row mx-3 my-5 text-center">
                            <div className={`col-sm-6`} style={{ display: 'flex' }}>
                                <div className={styles.divStyle1}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>Insurance Plans</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Get bike, car and health insurance plans, all in one place.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/insurance-plans-500-500.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className={`${styles.col2} col-sm-6`} style={{ display: 'flex' }}>
                                <div className={styles.divStyle2}>
                                    <h4 className={`mt-3 px-4 ${styles.headingStyle}`}><b>Instant Loans</b></h4>
                                    <p className={`px-4 ${styles.paraStyle}`}>Make your wish come true with a hassle-free instant loan.</p>
                                    <img className={styles.gifStyle} src="https://jep-asset.akamaized.net/cms/assets/jfs/home/loans-500-500.gif" alt="#ImgNotFound" />
                                    <br />
                                    <br />
                                    <Button className={`${styles.exploreBtn} px-4 py-2`}><b>Explore</b></Button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
