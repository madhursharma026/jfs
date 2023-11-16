import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accordion from 'react-bootstrap/Accordion';
import styles from '../styles/OurBusiness/Banks.module.css';

export default function Banks() {
    return (
        <>
            <Header pageName='ourBusiness' />
            <div className="m-3 m-lg-5">
                <div className={`container-lg px-5 py-5 ${styles.containerStyle}`}>
                    <div className='text-white pt-5' style={{ maxWidth: '600px' }}>
                        <h1 style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>It's your everyday banking companion</b></h1>
                        <h5>Made for all of your payments, banking and financial needs.</h5>
                        <br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
            <div className="mt-5 text-center" style={{ maxWidth: '800px', margin: 'auto' }}>
                <h1 style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Banking services in a nutshell</b></h1>
                <h5 className='text-secondary'>We are targeting the overall financial landscape with a conscious focus on the needs of everyone living anywhere in India. Leading and co-creating an eco-system, we provide accessible, simple and affordable banking solutions to every Indian - especially the financially excluded. With that, our aim to digitise payments and act as a catalyst towards building a cashless society takes shape.</h5>
            </div>

            <div className="mt-5 px-3" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/bank/pay-utility-bills-just-like-that-v2.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-md-0 pt-3">
                            <h1><b>Pay utility bills just like that</b></h1>
                            <h5 className='text-secondary'>Effortlessly settle your utility bills on the go. And next time onwards, get reminders to pay them on time. You can easily pay your electricity, water, gas, internet and other essential bills, in a few taps. With that, keeping your utilities running and finances organised is so much easier.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 pt-5 px-3" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6 order-md-2" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/bank/bank-in-a-hassle-free-way.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-lg-0 pt-3">
                            <h1><b>Bank in a hassle-free way</b></h1>
                            <h5 className='text-secondary'>Opening a bank account or a prepaid wallet is an out-and-out online process. While enjoying the convenience of banking on the go, you also get attractive interest rates on your deposits, free money transfers, one-click bill payments, etc. Truly a smart, secure and super fast way to bank!</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 px-3" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/bank/trust-us-with-your-finances-v2.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-md-0 pt-3">
                            <h1><b>Trust us with your finances</b></h1>
                            <h5 className='text-secondary'>JFS' banking feature is like any other bank yet it has a digital edge. It’s completely digitalised and most of its features like fixed deposits, investments, loans and insurance, can be easily availed of using the JFS or MyJio app. Relax, it’s built with a multi-layered security system to make safe transactions.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 pt-5 px-3" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6 order-md-2" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/bank/reach-us-anytime.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-5 pt-lg-0 pt-3">
                            <h1><b>Reach us anytime</b></h1>
                            <h5 className='text-secondary'>If you have queries or need help with any of our offerings or features, please feel free to connect with us. You can reach us via the JFS app or visit our outlet near you. Our executives on the call or at our store would be happy to assist you with your query. You can also take their help with any of the processes.</h5>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='p-5' style={{ background: '#6F542C' }}>
                <div className="text-white text-center" style={{ maxWidth: '1000px', margin: 'auto' }}>
                    <h1 style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>This is why Jio Payments Bank is India’s bank</b></h1>
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

            <div className="my-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h1 className='text-center' style={{ fontSize: 'calc(40px + 1.25vw)', }}><b>Got queries? <br /> Check FAQ</b></h1>
                <h5 className='text-center'>Find answers to some of the commonly asked questions.</h5>

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
