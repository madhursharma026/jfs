import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accordion from 'react-bootstrap/Accordion';
import styles from '../styles/OurBusiness/loans.module.css';

export default function Loans() {
    return (
        <>
            <Header pageName='ourBusiness' />
            <div className="m-3 m-lg-5">
                <div className={`container-lg px-5 py-5 ${styles.containerStyle}`}>
                    <div className='text-white pt-5' style={{ maxWidth: '600px' }}>
                        <h1 style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Discover the power of instant loans</b></h1>
                        <h5>Make a wish, apply for a loan and see it happening!</h5>
                        <br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
            <div className="mt-5 px-5 text-md-center" style={{ maxWidth: '800px', margin: 'auto' }}>
                <h1 style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>All about our lending services</b></h1>
                <h5 className='text-secondary'>Jio Finance offers a comprehensive suite of financial products catering to both retail and business segments. In recent developments, we have launched Consumer Durable Loans and Personal Loans for retail consumers, alongside Trade Credit Facility Loans tailored to meet the needs of small businesses.</h5>
            </div>

            <div className="mt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/lending/realise-your-dreams-right-away.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-md-0 pt-3">
                            <h1><b>Personal Loan</b></h1>
                            <h5 className='text-secondary'>Realise your dreams, right away. Whether you are a salaried or self-employed applicant, you can get personal loans starting at ₹30,000 without the hassle of physical documents or trips to banks. What’s more, it only requires your mobile number, Aadhaar number and PAN details!</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 pt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6 order-md-2" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/unbox-happines-v3.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-lg-0 pt-3">
                            <h1><b>Consumer Durable Loan</b></h1>
                            <h5 className='text-secondary'>Buy everything on your wish list now! From furniture pieces to fancy electronic items, you can quickly buy them with a consumer durable loan. That’s not all. You enjoy zero-cost EMI, zero down payment, and no foreclosure charges. Must say, it's your ticket to purchasing everything you desire!</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/lending/see-your-business-ambitions-soar.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-md-0 pt-3">
                            <h1><b>Merchant Trade Credit Facility</b></h1>
                            <h5 className='text-secondary'>Planning to upgrade your business setup or transform its operations? Do it now. With a credit limit of up to ₹10 lakh, you can see all your plans coming to life and business take flight. A 14-day no-cost EMI and zero foreclosure charges further give wings to your business ambition.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5' style={{ background: '#6F542C' }}>
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
