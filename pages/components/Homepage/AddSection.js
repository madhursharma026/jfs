import styles from '../../../styles/AddSection/AddSection.module.css'

export default function AddSection() {
    return (
        <>
            <div className={`${styles.ContainerWidth}`}>
                <div className={`row`}>
                    <div className={`col-md-5 order-lg-2`} style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/come-be-part-of-this-v4.webp" alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className={`col-md-7 text-white`} style={{ margin: 'auto' }}>
                        <div className={`${styles.rightSide} py-5 px-3`}>
                            <div>
                                <h1 className={styles.mainHeading}><b>Come, be part of this transition to India's evolving financial life</b></h1>
                                <h5>Leveraging the latest technology, we empower you to manage your finances in an informed way.</h5>
                                <div className="row mt-3">
                                    <div className="col-md-6 mt-3"><h5>💾 Real-time Transactions</h5></div>
                                    <div className="col-md-6 mt-3"><h5>💾 Robust Security</h5></div>
                                    <div className="col-md-6 mt-3"><h5>💾 Partner Network</h5></div>
                                    <div className="col-md-6 mt-3"><h5>💾 Latest Technology</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
