import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accordion from 'react-bootstrap/Accordion';
import styles from '../styles/OurBusiness/Solutions.module.css';

export default function Solutions() {
    return (
        <>
            <Header pageName='ourBusiness' />
            <div className="m-3 m-lg-5">
                <div className={`container-lg px-5 py-5 ${styles.containerStyle}`}>
                    <div className='text-white pt-5' style={{ maxWidth: '600px' }}>
                        <h1 style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Digital payment acceptance made easy</b></h1>
                        <h5>Check this safest, smartest, and quickest way for businesses to accept payments from their customers.</h5>
                        <br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
            <div className="mt-5 px-5 text-md-center" style={{ maxWidth: '800px', margin: 'auto' }}>
                <h1 style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Explore our business-ready payment solution</b></h1>
                <h5 className='text-secondary'>We are obsessed with technology and use it extensively to solve users’ day-to-day problems and payments are one of them. Created with the sole intention of revolutionising payments, our payment solution facilitates quick and simple transactions. Using this feature, merchants can accept payments from all digital modes including cards, UPI, Netbanking, Wallets, Bill Now, Pay Later, and more.</h5>
            </div>

            <div className="mt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/payment/A+secure+payment+gateway++.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-md-0 pt-3">
                            <h1><b>A secure payment gateway</b></h1>
                            <h5 className='text-secondary'>Elevate your online micro, small or medium-sized business with our reliable payment gateway. Seamlessly collect payments from customers on your website. Enable your delivery agents to collect with dynamic QRs and mPOS devices. You can also share the collect links with your customers for remote transactions.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 pt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6 order-md-2" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/payment/A+versatile+in-store+terminal+.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-lg-0 pt-3">
                            <h1><b>A versatile in-store terminal</b></h1>
                            <h5 className='text-secondary'>Upgrade your in-store payments with our POS system. Easily accept card and UPI payments and provide a smooth, reliable checkout process. Enhance the in-store experience with static and dynamic QR codes for UPI payments which can be further revolutionised with sound alerts from our Voice Box.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/payment/trusted-upi-hub-3.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-md-0 pt-3">
                            <h1><b>A trusted payment solution</b></h1>
                            <h5 className='text-secondary'>Navigate the world of digital payments with our Router, offering flexibility to customers in selecting a preferred payment gateway. Through our user-friendly dashboard, gain transaction insights and take control of your payments. Elevate security using tokenisation to secure sensitive card data.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 pt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6 order-md-2" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/payment/A+reliable+bill+centre+.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-lg-0 pt-3">
                            <h1><b>A reliable growth driver</b></h1>
                            <h5 className='text-secondary'>Boost sales with our Offer Engine. Create enticing promotions and incentives to attract and retain customers. Moreover, harness the power of recurring revenue with our Subscription feature. Easily manage and automate subscription payments, ensuring steady cash flow through repeat business.</h5>
                        </div>
                    </div>
                </div>
            </div><div className='p-5' style={{ background: '#6F542C' }}>
                <div className="text-white text-center" style={{ maxWidth: '1000px', margin: 'auto' }}>
                    <h1 style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Here’s why India prefers Jio Finance</b></h1>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <i class="fa fa-calendar p-3" style={{ fontSize: '24px', background: '#D8AA67', borderRadius: '100px' }}></i>
                            <h5 className='mt-3'>Instant loan approval</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <i class="fa fa-calendar p-3" style={{ fontSize: '24px', background: '#D8AA67', borderRadius: '100px' }}></i>
                            <h5 className='mt-3'>Hassle-free process</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <i class="fa fa-calendar p-3" style={{ fontSize: '24px', background: '#D8AA67', borderRadius: '100px' }}></i>
                            <h5 className='mt-3'>Competitive interest rates</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <i class="fa fa-calendar p-3" style={{ fontSize: '24px', background: '#D8AA67', borderRadius: '100px' }}></i>
                            <h5 className='mt-3'>Repayment convenience</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 px-3" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h1 className='text-md-center' style={{ fontSize: 'calc(40px + 1.25vw)', }}><b>Got queries? <br /> Check FAQ</b></h1>
                <h5 className='text-md-center'>Find answers to some of the commonly asked questions.</h5>

                <Accordion className='mt-4'>
                    <Accordion.Item eventKey="0" style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}>
                        <Accordion.Header><b>Who is eligible to hold a Jio Payments Bank account?</b></Accordion.Header>
                        <Accordion.Body>
                            You can apply for an instant personal loan online by visiting the MyJio app and following the simple steps mentioned in the loan section.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}>
                        <Accordion.Header><b>What documents are required for an online personal loan application?</b></Accordion.Header>
                        <Accordion.Body>
                            For the online personal loan application, you only need to provide your PAN number, Aadhaar number, and Aadhaar-linked mobile number. No physical documents are required.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}>
                        <Accordion.Header><b>Can self-employed individuals apply for a personal loan through Jio Finance?</b></Accordion.Header>
                        <Accordion.Body>
                            Yes, both salaried and self-employed individuals can apply for a personal loan through Jio Finance using the online application process.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}>
                        <Accordion.Header><b>Is there a maximum loan amount limit for personal loans through Jio Finance?</b></Accordion.Header>
                        <Accordion.Body>
                            Jio Finance offers personal loans of up to Rs 3 lakh to fulfil various needs or overcome financial crises.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}>
                        <Accordion.Header><b>What are the eligibility criteria for an online personal loan?</b></Accordion.Header>
                        <Accordion.Body>
                            The eligibility criteria include being an Indian citizen, aged between 23-58 years, and either being salaried or self-employed. You need to have a PAN card and an Aadhaar card with an Aadhaar-linked mobile number.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <Footer />
        </>
    )
}
