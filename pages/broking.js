import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accordion from 'react-bootstrap/Accordion';
import styles from '../styles/OurBusiness/Broking.module.css';

export default function Broking() {
    return (
        <>
            <Header pageName='ourBusiness' />
            <div className="m-3 m-lg-5">
                <div className={`container-lg px-5 py-5 ${styles.containerStyle}`}>
                    <div className='text-white pt-5' style={{ maxWidth: '600px' }}>
                        <h1 style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Get insured, stay assured</b></h1>
                        <h5>Come, find the perfect car, bike or health insurance plan here.</h5>
                        <br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
            <div className="mt-5 px-lg-0 px-5 text-md-center" style={{ maxWidth: '800px', margin: 'auto' }}>
                <h1 style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Discover more about insurance plans</b></h1>
                <h5 className='text-secondary'>We specialise in providing customised and need-based insurance solutions to retail and corporate customers. Operating within a strong compliance and governance framework, we have adopted a customer-centric approach and provide broking services across the country. Our strong network of well-trained Insurance Guides is here to support you with your insurance needs.</h5>
            </div>

            <div className="mt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/insurance/find-insurances-at-your-fingertips.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-md-0 pt-3">
                            <h1><b>Insurance plans at your fingertips</b></h1>
                            <h5 className='text-secondary'>No more annoying calls from agents. Just explore Jio Insurance Broking to find a world of insurance solutions from multiple insurance companies. Easily compare various plans and choose the one that best suits your insurance needs. Also, service your policies and renew them in a hassle-free way.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 pt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6 order-md-2" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/insurance/view-multiple-plans-under-one-roof.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-lg-0 pt-3">
                            <h1><b>Multiple plans under one roof</b></h1>
                            <h5 className='text-secondary'>Forget browsing from one insurance company to another to find a best-fit product. With Jio Insurance Broking, view, explore, and compare multiple products and plans across multiple insurers and at competitive rates. What’s more, you can also customise these plans to meet your precise needs.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/insurance/get-help-every-step-of-the-way.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-md-0 pt-3">
                            <h1><b>With you every step of the way</b></h1>
                            <h5 className='text-secondary'>Confused about various terms and features of a plan? No worries. We will guide you with crisp and easy-to-understand information about the plans' benefits and features. Right from buying to servicing your policy, we assist you at every stage and help you make an informed decision.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5' style={{ background: '#6F542C' }}>
                <div className="text-white text-center" style={{ maxWidth: '1000px', margin: 'auto' }}>
                    <h1 style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Here’s why India trusts Jio Insurance Broking</b></h1>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <i class="fa fa-calendar p-3" style={{ fontSize: '24px', background: '#D8AA67', borderRadius: '100px' }}></i>
                            <h5 className='mt-3'>Digital interface with multiple solutions</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <i class="fa fa-calendar p-3" style={{ fontSize: '24px', background: '#D8AA67', borderRadius: '100px' }}></i>
                            <h5 className='mt-3'>Customised plans to best fit your needs</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <i class="fa fa-calendar p-3" style={{ fontSize: '24px', background: '#D8AA67', borderRadius: '100px' }}></i>
                            <h5 className='mt-3'>Competitive rates from multiple insurers</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <i class="fa fa-calendar p-3" style={{ fontSize: '24px', background: '#D8AA67', borderRadius: '100px' }}></i>
                            <h5 className='mt-3'>Competitive rates from multiple insurers</h5>
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
