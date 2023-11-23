import { Button } from 'react-bootstrap';
import styles from '../../../styles/Relations/Relations.module.css';

export default function Relations() {
    return (
        <div style={{ background: '#7B5D32' }}>
            <div className="container-lg text-md-center">
                <div className="p-lg-5 py-5 px-3 text-white">
                    <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900', maxWidth: '800px', margin: 'auto' }}>
                        <b>Find resources related to investor relations here</b>
                    </h1>
                    <h5 className="mt-3 mb-3">Financial documents, policies, investors' contacts, and more.</h5>

                    <div className={`${styles.dataBeforeLGScrn}`}>
                        <div class={styles.Content}>
                            <div class={styles.leftImg}>
                                <div className={`${styles.imgContainer} mt-3`}>
                                    <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/finance.webp" alt="#ImgNotFound" className="w-100 h-100 p-2" style={{ borderRadius: '30px' }} />
                                    <h2 className={`${styles.bottomLeft} pb-4`}><b>Financial Documents</b></h2>
                                    <h5 className={`${styles.bottomLeft}`}>Access quarterly and annual reports.</h5>
                                    <div className={styles.bottomRight}>
                                        <Button className={`${styles.exploreBtn} px-md-4 px-2 py-md-2 mb-3`}><b>Explore <i class="fa fa-long-arrow-right"></i></b></Button>
                                    </div>
                                </div>
                            </div>
                            <div class={styles.rightside}>
                                <div class={styles.allRightImgs}>
                                    <div class={styles.rightImg2}>
                                        <div className={`${styles.imgContainer} mt-3`}>
                                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/policy-doc.webp" alt="#ImgNotFound" className="w-100 h-100 p-2" style={{ borderRadius: '30px' }} />
                                            <h4 className={`${styles.bottomLeft}`}><b>Policy <br className={styles.BRAfterLGScrn} /> Statements</b></h4>
                                            <div className={styles.bottomRight}>
                                                <Button className={`${styles.exploreBtn} px-md-4 px-2 py-md-2 mb-3`}><b><i class="fa fa-long-arrow-right"></i></b></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                                <div class={styles.allRightImgs}>
                                    <div class={styles.rightImg2}>
                                        <div className={`${styles.imgContainer} mt-3`}>
                                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/investor-contact.webp" alt="#ImgNotFound" className="w-100 h-100 p-2" style={{ borderRadius: '30px' }} />
                                            <h4 className={`${styles.bottomLeft}`}><b>Investor <br className={styles.BRAfterLGScrn} /> Contacts</b></h4>
                                            <div className={styles.bottomRight}>
                                                <Button className={`${styles.exploreBtn} px-md-4 px-2 py-md-2 mb-3`}><b><i class="fa fa-long-arrow-right"></i></b></Button>
                                            </div>
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </div >
                    </div >

                    <div className={`row ${styles.dataAfterLGScrn}`}>
                        <div className="col-lg-7">
                            <div className={`${styles.imgContainer} mt-3`}>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/finance.webp" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                                <h2 className={`${styles.bottomLeft} mb-sm-5 mb-3`}><b>Financial Documents</b></h2>
                                <h5 className={`${styles.bottomLeft2} ${styles.bottomLeft}`}>Access quarterly and annual reports.</h5>
                                <div className={styles.bottomRight}>
                                    <Button className={`${styles.exploreBtn} px-md-4 px-2 py-md-2 mb-3`}><b>Explore <i class="fa fa-long-arrow-right"></i></b></Button>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5">
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className={`${styles.imgContainer} mt-3`}>
                                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/policy-doc.webp" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                                        <h4 className={`${styles.bottomLeft} mb-3`}><b>Policy Statements</b></h4>
                                        <div className={styles.bottomRight}>
                                            <Button className={`${styles.exploreBtn} px-md-4 px-2 py-md-2 mb-3`}><b><i class="fa fa-long-arrow-right"></i></b></Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={`${styles.imgContainer} mt-3`}>
                                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/investor-contact.webp" alt="#ImgNotFound" className="w-100" style={{ borderRadius: '30px' }} />
                                        <h4 className={`${styles.bottomLeft} mb-3`}><b>Investor Contacts</b></h4>
                                        <div className={styles.bottomRight}>
                                            <Button className={`${styles.exploreBtn} px-md-4 px-2 py-md-2 mb-3`}><b><i class="fa fa-long-arrow-right"></i></b></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
