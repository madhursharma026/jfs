import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accordion from 'react-bootstrap/Accordion';
import styles from '../styles/OurBusiness/loans.module.css';

export default function Loans() {
    return (
        <>
            <Header pageName='ourBusiness' />
            <div className="m-3 m-lg-5">
                <div className={`container-lg px-md-5 px-4 py-5 ${styles.containerStyle}`}>
                    <div className='text-white pt-md-5 pb-md-5 mb-md-5' style={{ maxWidth: '650px' }}>
                        <h1 className='pt-md-3' style={{ fontSize: 'calc(36px + 1.25vw)', fontWeight: '900' }}><b>Discover the power of instant loans</b></h1>
                        <h5>Make a wish, apply for a loan and see it happening!</h5>
                    </div>
                </div>
            </div>
            <div className="mt-5 px-5 text-md-center" style={{ maxWidth: '900px', margin: 'auto' }}>
                <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>All about our lending services</b></h1>
                <h5 className='text-secondary'>Jio Finance offers a comprehensive suite of financial products catering to both retail and business segments. In recent developments, we have launched Consumer Durable Loans and Personal Loans for retail consumers, alongside Trade Credit Facility Loans tailored to meet the needs of small businesses.</h5>
            </div>

            <div className="mt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/lending/realise-your-dreams-right-away.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-3 pt-md-0 pt-3">
                            <h2 style={{ fontWeight: '900' }}><b>Personal Loan</b></h2>
                            <h6 className='text-secondary' style={{ fontSize: '18px' }}>Realise your dreams, right away. Whether you are a salaried or self-employed applicant, you can get personal loans starting at ₹30,000 without the hassle of physical documents or trips to banks. What’s more, it only requires your mobile number, Aadhaar number and PAN details!</h6>
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
                        <div className="px-xl-3 pt-lg-0 pt-3">
                            <h2 style={{ fontWeight: '900' }}><b>Consumer Durable Loan</b></h2>
                            <h6 className='text-secondary' style={{ fontSize: '18px' }}>Buy everything on your wish list now! From furniture pieces to fancy electronic items, you can quickly buy them with a consumer durable loan. That’s not all. You enjoy zero-cost EMI, zero down payment, and no foreclosure charges. Must say, it's your ticket to purchasing everything you desire!</h6>
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
                        <div className="px-xl-3 pt-md-0 pt-3">
                            <h2 style={{ fontWeight: '900' }}><b>Merchant Trade Credit Facility</b></h2>
                            <h6 className='text-secondary' style={{ fontSize: '18px' }}>Planning to upgrade your business setup or transform its operations? Do it now. With a credit limit of up to ₹10 lakh, you can see all your plans coming to life and business take flight. A 14-day no-cost EMI and zero foreclosure charges further give wings to your business ambition.</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5' style={{ background: '#6F542C' }}>
                <div className="text-white text-center">
                    <h1 style={{ maxWidth: '800px', margin: 'auto', fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Here’s why India prefers Jio Finance</b></h1>
                    <div className="row mt-5" style={{ maxWidth: '1100px', margin: 'auto' }}>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                <rect y="0.136719" width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M32 12.1361H30.6667C30.6667 11.7824 30.5262 11.4433 30.2761 11.1933C30.0261 10.9432 29.687 10.8027 29.3333 10.8027C28.9797 10.8027 28.6406 10.9432 28.3905 11.1933C28.1405 11.4433 28 11.7824 28 12.1361H20C20 11.7824 19.8595 11.4433 19.6095 11.1933C19.3594 10.9432 19.0203 10.8027 18.6667 10.8027C18.313 10.8027 17.9739 10.9432 17.7239 11.1933C17.4738 11.4433 17.3333 11.7824 17.3333 12.1361H16C14.9391 12.1361 13.9217 12.5575 13.1716 13.3076C12.4214 14.0578 12 15.0752 12 16.1361V32.1361C12 33.1969 12.4214 34.2143 13.1716 34.9645C13.9217 35.7146 14.9391 36.1361 16 36.1361H32C33.0609 36.1361 34.0783 35.7146 34.8284 34.9645C35.5786 34.2143 36 33.1969 36 32.1361V16.1361C36 15.0752 35.5786 14.0578 34.8284 13.3076C34.0783 12.5575 33.0609 12.1361 32 12.1361ZM26 30.8027C26 31.1564 25.8595 31.4955 25.6095 31.7455C25.3594 31.9956 25.0203 32.1361 24.6667 32.1361C24.313 32.1361 23.9739 31.9956 23.7239 31.7455C23.4738 31.4955 23.3333 31.1564 23.3333 30.8027V26.0161L22.9467 26.4161C22.6956 26.6671 22.3551 26.8082 22 26.8082C21.6449 26.8082 21.3044 26.6671 21.0533 26.4161C20.8023 26.165 20.6612 25.8245 20.6612 25.4694C20.6612 25.1143 20.8023 24.7738 21.0533 24.5227L23.72 21.8561C23.9075 21.6711 24.1456 21.5457 24.4042 21.4959C24.6629 21.4461 24.9305 21.474 25.1733 21.5761C25.4168 21.6761 25.6253 21.846 25.7724 22.0643C25.9195 22.2825 25.9987 22.5395 26 22.8027V30.8027ZM33.3333 17.4694H14.6667V16.1361C14.6667 15.7824 14.8071 15.4433 15.0572 15.1933C15.3072 14.9432 15.6464 14.8027 16 14.8027H17.3333C17.3333 15.1564 17.4738 15.4955 17.7239 15.7455C17.9739 15.9956 18.313 16.1361 18.6667 16.1361C19.0203 16.1361 19.3594 15.9956 19.6095 15.7455C19.8595 15.4955 20 15.1564 20 14.8027H28C28 15.1564 28.1405 15.4955 28.3905 15.7455C28.6406 15.9956 28.9797 16.1361 29.3333 16.1361C29.687 16.1361 30.0261 15.9956 30.2761 15.7455C30.5262 15.4955 30.6667 15.1564 30.6667 14.8027H32C32.3536 14.8027 32.6928 14.9432 32.9428 15.1933C33.1929 15.4433 33.3333 15.7824 33.3333 16.1361V17.4694Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3'>Instant loan approval</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                <rect y="0.136719" width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M28.6671 20.1361C28.6671 19.7825 28.5267 19.4434 28.2766 19.1933C28.0266 18.9433 27.6874 18.8028 27.3338 18.8028H20.6671C20.3135 18.8028 19.9744 18.9433 19.7243 19.1933C19.4743 19.4434 19.3338 19.7825 19.3338 20.1361C19.3338 20.4898 19.4743 20.8289 19.7243 21.079C19.9744 21.329 20.3135 21.4695 20.6671 21.4695H23.3338C23.6874 21.4695 24.0266 21.61 24.2766 21.86C24.5267 22.1101 24.6671 22.4492 24.6671 22.8028C24.6671 23.1564 24.5267 23.4956 24.2766 23.7456C24.0266 23.9957 23.6874 24.1361 23.3338 24.1361H22.0005C21.7019 24.1379 21.4126 24.2398 21.1788 24.4256C20.9451 24.6113 20.7804 24.8702 20.7113 25.1606C20.6421 25.4511 20.6725 25.7563 20.7974 26.0275C20.9224 26.2986 21.1347 26.52 21.4005 26.6561L26.7338 29.3228C26.9182 29.4215 27.1246 29.472 27.3338 29.4695C27.58 29.4687 27.8212 29.3998 28.0307 29.2704C28.2401 29.1409 28.4097 28.956 28.5205 28.7361C28.6838 28.4293 28.7208 28.0708 28.6237 27.7371C28.5265 27.4034 28.3029 27.1208 28.0005 26.9495L25.9205 25.9095C26.5484 25.3795 26.9979 24.669 27.2078 23.8746C27.4177 23.0802 27.3779 22.2405 27.0938 21.4695H27.3338C27.6874 21.4695 28.0266 21.329 28.2766 21.079C28.5267 20.8289 28.6671 20.4898 28.6671 20.1361ZM24.0005 10.8028C22.2495 10.8028 20.5157 11.1477 18.898 11.8178C17.2803 12.4878 15.8105 13.4699 14.5724 14.7081C12.0719 17.2085 10.6671 20.5999 10.6671 24.1361C10.6646 24.6355 10.6958 25.1344 10.7605 25.6295C10.8029 25.9831 10.9841 26.3054 11.2641 26.5254C11.5442 26.7455 11.9002 26.8452 12.2538 26.8028C12.6074 26.7604 12.9297 26.5792 13.1497 26.2992C13.3698 26.0191 13.4696 25.6631 13.4271 25.3095C13.3757 24.9202 13.3445 24.5286 13.3338 24.1361C13.328 21.6976 14.158 19.3307 15.6854 17.4298C17.2128 15.5288 19.3454 14.2086 21.728 13.6891C24.1106 13.1696 26.5992 13.4822 28.7794 14.5747C30.9595 15.6672 32.6994 17.4738 33.7093 19.6934C34.7193 21.913 34.9382 24.4116 34.3296 26.773C33.721 29.1344 32.3217 31.2159 30.3647 32.6709C28.4078 34.1259 26.0114 34.8664 23.5748 34.7691C21.1382 34.6718 18.8085 33.7425 16.9738 32.1361H18.0005C18.3541 32.1361 18.6932 31.9957 18.9433 31.7456C19.1933 31.4956 19.3338 31.1564 19.3338 30.8028C19.3338 30.4492 19.1933 30.11 18.9433 29.86C18.6932 29.61 18.3541 29.4695 18.0005 29.4695H14.0005C13.6468 29.4695 13.3077 29.61 13.0577 29.86C12.8076 30.11 12.6671 30.4492 12.6671 30.8028V34.8028C12.6671 35.1564 12.8076 35.4956 13.0577 35.7456C13.3077 35.9957 13.6468 36.1361 14.0005 36.1361C14.3541 36.1361 14.6932 35.9957 14.9433 35.7456C15.1933 35.4956 15.3338 35.1564 15.3338 34.8028V34.2295C16.9638 35.6364 18.9104 36.6277 21.0069 37.1185C23.1035 37.6092 25.2878 37.5849 27.3729 37.0476C29.4581 36.5103 31.3821 35.476 32.9804 34.0332C34.5787 32.5903 35.8038 30.7818 36.5509 28.7623C37.2981 26.7428 37.5449 24.5724 37.2705 22.4367C36.9961 20.301 36.2085 18.2635 34.975 16.4985C33.7416 14.7336 32.0991 13.2935 30.1879 12.3016C28.2767 11.3097 26.1537 10.7955 24.0005 10.8028Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3'>Hassle-free process</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                <rect y="0.136719" width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M24.0007 22.8027C25.1873 22.8027 26.3474 22.4508 27.3341 21.7916C28.3208 21.1323 29.0898 20.1952 29.5439 19.0988C29.9981 18.0025 30.1169 16.7961 29.8854 15.6322C29.6539 14.4683 29.0824 13.3992 28.2433 12.5601C27.4042 11.721 26.3351 11.1495 25.1712 10.918C24.0073 10.6865 22.8009 10.8053 21.7045 11.2595C20.6082 11.7136 19.6711 12.4826 19.0118 13.4693C18.3525 14.456 18.0007 15.616 18.0007 16.8027C18.0042 18.393 18.6374 19.917 19.7619 21.0415C20.8864 22.1659 22.4104 22.7992 24.0007 22.8027ZM27.294 24.6561L24.7606 26.5361C24.5299 26.7092 24.2491 26.8027 23.9607 26.8027C23.6722 26.8027 23.3914 26.7092 23.1607 26.5361L20.654 24.6827C18.5251 25.3862 16.672 26.7426 15.3579 28.5593C14.0439 30.376 13.3357 32.5606 13.334 34.8027C13.334 35.51 13.6149 36.1883 14.115 36.6884C14.6151 37.1885 15.2934 37.4694 16.0007 37.4694H32.0007C32.7079 37.4694 33.3862 37.1885 33.8863 36.6884C34.3864 36.1883 34.6673 35.51 34.6673 34.8027C34.6676 32.5495 33.9542 30.354 32.6296 28.5311C31.305 26.7083 29.4372 25.3518 27.294 24.6561ZM30.6673 34.8027H25.334C24.9804 34.8027 24.6412 34.6623 24.3912 34.4122C24.1411 34.1622 24.0007 33.823 24.0007 33.4694C24.0007 33.1158 24.1411 32.7766 24.3912 32.5266C24.6412 32.2765 24.9804 32.1361 25.334 32.1361H30.6673C31.0209 32.1361 31.3601 32.2765 31.6101 32.5266C31.8602 32.7766 32.0007 33.1158 32.0007 33.4694C32.0007 33.823 31.8602 34.1622 31.6101 34.4122C31.3601 34.6623 31.0209 34.8027 30.6673 34.8027Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3'>Competitive interest rates</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                <rect y="0.136719" width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M33.334 10.8027H14.6673C14.3137 10.8027 13.9746 10.9432 13.7245 11.1933C13.4745 11.4433 13.334 11.7824 13.334 12.1361C13.334 12.4897 13.4745 12.8288 13.7245 13.0789C13.9746 13.3289 14.3137 13.4694 14.6673 13.4694V36.1361C14.668 36.3773 14.734 36.6138 14.8585 36.8204C14.9829 37.027 15.1611 37.196 15.374 37.3094C15.5825 37.4165 15.8155 37.4667 16.0496 37.455C16.2837 37.4433 16.5105 37.3701 16.7073 37.2427L20.0007 35.0694L23.2673 37.2427C23.4864 37.3889 23.7439 37.4669 24.0073 37.4669C24.2707 37.4669 24.5282 37.3889 24.7473 37.2427L28.0007 35.0694L31.254 37.2427C31.4547 37.3784 31.6885 37.4568 31.9304 37.4696C32.1723 37.4823 32.4131 37.429 32.6269 37.3152C32.8408 37.2014 33.0196 37.0315 33.1442 36.8238C33.2687 36.616 33.3343 36.3783 33.334 36.1361V13.4694C33.6876 13.4694 34.0267 13.3289 34.2768 13.0789C34.5268 12.8288 34.6673 12.4897 34.6673 12.1361C34.6673 11.7824 34.5268 11.4433 34.2768 11.1933C34.0267 10.9432 33.6876 10.8027 33.334 10.8027ZM27.334 22.8027C27.334 23.3981 27.2012 23.9859 26.9451 24.5234C26.6891 25.0608 26.3163 25.5343 25.854 25.9094L27.934 26.9494C28.248 27.1092 28.486 27.3869 28.5959 27.7217C28.7059 28.0565 28.6788 28.4212 28.5207 28.7361C28.4099 28.956 28.2403 29.1409 28.0309 29.2703C27.8214 29.3997 27.5802 29.4687 27.334 29.4694C27.1248 29.4719 26.9184 29.4215 26.734 29.3227L21.4007 26.6561C21.1349 26.5199 20.9226 26.2986 20.7976 26.0274C20.6727 25.7563 20.6423 25.451 20.7115 25.1606C20.7806 24.8701 20.9453 24.6113 21.179 24.4255C21.4128 24.2398 21.7021 24.1378 22.0007 24.1361H23.334C23.6876 24.1361 24.0267 23.9956 24.2768 23.7455C24.5268 23.4955 24.6673 23.1564 24.6673 22.8027C24.6673 22.4491 24.5268 22.11 24.2768 21.8599C24.0267 21.6099 23.6876 21.4694 23.334 21.4694H20.6673C20.3137 21.4694 19.9746 21.3289 19.7245 21.0789C19.4745 20.8288 19.334 20.4897 19.334 20.1361C19.334 19.7824 19.4745 19.4433 19.7245 19.1933C19.9746 18.9432 20.3137 18.8027 20.6673 18.8027H27.334C27.6876 18.8027 28.0267 18.9432 28.2768 19.1933C28.5268 19.4433 28.6673 19.7824 28.6673 20.1361C28.6673 20.4897 28.5268 20.8288 28.2768 21.0789C28.0267 21.3289 27.6876 21.4694 27.334 21.4694H27.094C27.2492 21.897 27.3304 22.3479 27.334 22.8027Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3'>Repayment convenience</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 px-3" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h1 className='text-md-center' style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Got queries? <br /> Check FAQ</b></h1>
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
