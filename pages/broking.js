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
                        <h1 className='pt-lg-3' style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Get insured, stay assured</b></h1>
                        <h5>Come, find the perfect car, bike or health insurance plan here.</h5>
                        <br /><br /><br /><br /><br />
                        <div className={`${styles.BRAfterMDScrn}`}>
                            <br /><br /><br /><br /><br />
                            <br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 px-5 text-md-center" style={{ maxWidth: '900px', margin: 'auto' }}>
                <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Discover more about insurance plans</b></h1>
                <h5 className='text-secondary'>We specialise in providing customised and need-based insurance solutions to retail and corporate customers. Operating within a strong compliance and governance framework, we have adopted a customer-centric approach and provide broking services across the country. Our strong network of well-trained Insurance Guides is here to support you with your insurance needs.</h5>
            </div>

            <div className="mt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/insurance/find-insurances-at-your-fingertips.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-3 pt-md-0 pt-3">
                            <h1 style={{ fontWeight: '900' }}><b>Insurance plans at your fingertips</b></h1>
                            <h6 className='text-secondary'>No more annoying calls from agents. Just explore Jio Insurance Broking to find a world of insurance solutions from multiple insurance companies. Easily compare various plans and choose the one that best suits your insurance needs. Also, service your policies and renew them in a hassle-free way.</h6>
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
                        <div className="px-xl-3 pt-lg-0 pt-3">
                            <h1 style={{ fontWeight: '900' }}><b>Multiple plans under one roof</b></h1>
                            <h6 className='text-secondary'>Forget browsing from one insurance company to another to find a best-fit product. With Jio Insurance Broking, view, explore, and compare multiple products and plans across multiple insurers and at competitive rates. What’s more, you can also customise these plans to meet your precise needs.</h6>
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
                        <div className="px-xl-3 pt-md-0 pt-3">
                            <h1 style={{ fontWeight: '900' }}><b>With you every step of the way</b></h1>
                            <h6 className='text-secondary'>Confused about various terms and features of a plan? No worries. We will guide you with crisp and easy-to-understand information about the plans' benefits and features. Right from buying to servicing your policy, we assist you at every stage and help you make an informed decision.</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5' style={{ background: '#6F542C' }}>
                <div className="text-white text-center">
                    <h1 style={{ maxWidth: '800px', margin: 'auto', fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Here’s why India trusts Jio Insurance Broking</b></h1>
                    <div className="row mt-5" style={{ maxWidth: '1100px', margin: 'auto' }}>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                <rect y="0.135742" width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M34.6663 21.4692C34.6672 19.632 34.1936 17.8257 33.2913 16.2254C32.389 14.625 31.0886 13.2848 29.5162 12.3347C27.9438 11.3845 26.1526 10.8566 24.3163 10.8021C22.4799 10.7475 20.6605 11.1682 19.0345 12.0234C17.4085 12.8786 16.0309 14.1393 15.0353 15.6833C14.0396 17.2273 13.4596 19.0023 13.3515 20.8363C13.2434 22.6703 13.6108 24.5012 14.4181 26.1515C15.2255 27.8017 16.4454 29.2155 17.9597 30.2559L17.333 34.4292C17.2622 34.9382 17.3399 35.4569 17.557 35.9228C17.774 36.3887 18.121 36.7819 18.5563 37.0552C18.9916 37.3285 19.4966 37.4702 20.0105 37.4632C20.5244 37.4562 21.0253 37.3009 21.453 37.0159L23.9997 35.3359L26.5197 37.0159C26.9573 37.31 27.4724 37.4677 27.9997 37.4692C28.5048 37.4693 28.9995 37.326 29.4263 37.0559C29.8668 36.7783 30.2164 36.3779 30.432 35.9041C30.6476 35.4302 30.7198 34.9036 30.6397 34.3892L30.0397 30.2159C31.46 29.2401 32.6228 27.9347 33.4286 26.4115C34.2343 24.8882 34.659 23.1924 34.6663 21.4692ZM23.9997 29.4692C22.4174 29.4692 20.8707 29 19.5551 28.1209C18.2395 27.2419 17.2141 25.9925 16.6086 24.5307C16.0031 23.0688 15.8447 21.4603 16.1534 19.9085C16.4621 18.3566 17.224 16.9312 18.3428 15.8123C19.4616 14.6935 20.8871 13.9316 22.439 13.6229C23.9908 13.3142 25.5993 13.4727 27.0611 14.0782C28.523 14.6837 29.7724 15.709 30.6514 17.0246C31.5305 18.3402 31.9997 19.8869 31.9997 21.4692C31.9997 23.5909 31.1568 25.6257 29.6565 27.126C28.1562 28.6263 26.1214 29.4692 23.9997 29.4692ZM27.3197 19.9225L25.533 19.6559L24.7197 17.9359C24.6582 17.7961 24.5574 17.6773 24.4295 17.5939C24.3017 17.5105 24.1523 17.4661 23.9997 17.4661C23.847 17.4661 23.6977 17.5105 23.5698 17.5939C23.442 17.6773 23.3412 17.7961 23.2797 17.9359L22.4663 19.6559L20.6797 19.9225C20.5373 19.9465 20.4041 20.0085 20.2941 20.1021C20.1842 20.1956 20.1016 20.3172 20.0551 20.4539C20.0086 20.5906 20 20.7373 20.0301 20.8785C20.0603 21.0197 20.1281 21.1501 20.2263 21.2559L21.5597 22.5892L21.2263 24.5359C21.2035 24.685 21.2225 24.8376 21.2814 24.9765C21.3403 25.1154 21.4366 25.2352 21.5597 25.3225C21.6972 25.4166 21.8597 25.4677 22.0263 25.4692C22.1611 25.4717 22.2942 25.4396 22.413 25.3759L23.9997 24.4959L25.5863 25.3759C25.7051 25.4396 25.8383 25.4717 25.973 25.4692C26.1397 25.4677 26.3021 25.4166 26.4397 25.3225C26.5627 25.2352 26.6591 25.1154 26.718 24.9765C26.7768 24.8376 26.7959 24.685 26.773 24.5359L26.453 22.6292L27.7863 21.2959C27.8846 21.1901 27.9524 21.0597 27.9825 20.9185C28.0127 20.7773 28.0041 20.6306 27.9576 20.4939C27.9111 20.3572 27.8285 20.2356 27.7186 20.1421C27.6086 20.0485 27.4754 19.9865 27.333 19.9625L27.3197 19.9225Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3'>Digital interface with multiple solutions</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                <rect y="0.135742" width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M35.2129 12.9224C34.7151 12.4216 34.039 12.1387 33.3329 12.1357H14.6662C14.1404 12.1379 13.627 12.2955 13.1906 12.5887C12.7541 12.8819 12.414 13.2975 12.2131 13.7834C12.0122 14.2693 11.9594 14.8038 12.0614 15.3196C12.1633 15.8354 12.4155 16.3095 12.7862 16.6824C13.284 17.1832 13.9601 17.4661 14.6662 17.4691H33.3329C33.8587 17.4669 34.3721 17.3093 34.8085 17.0161C35.245 16.7229 35.5851 16.3073 35.786 15.8214C35.9869 15.3355 36.0397 14.8011 35.9377 14.2853C35.8358 13.7695 35.5836 13.2953 35.2129 12.9224ZM31.9995 20.1357H15.9995C15.6459 20.1357 15.3068 20.2762 15.0567 20.5263C14.8067 20.7763 14.6662 21.1155 14.6662 21.4691V26.8024C14.6662 28.0281 14.9076 29.2417 15.3767 30.3741C15.8457 31.5065 16.5332 32.5354 17.3999 33.4021C18.2666 34.2688 19.2955 34.9562 20.4278 35.4253C21.5602 35.8943 22.7739 36.1357 23.9995 36.1357C25.2252 36.1357 26.4389 35.8943 27.5713 35.4253C28.7036 34.9562 29.7325 34.2688 30.5992 33.4021C31.4659 32.5354 32.1534 31.5065 32.6224 30.3741C33.0915 29.2417 33.3329 28.0281 33.3329 26.8024V21.4691C33.3329 21.1155 33.1924 20.7763 32.9424 20.5263C32.6923 20.2762 32.3532 20.1357 31.9995 20.1357ZM26.8262 30.9624C26.0768 31.7128 25.0601 32.1348 23.9995 32.1357C23.2063 32.1349 22.4313 31.8982 21.7729 31.4557C21.1188 31.0175 20.6086 30.396 20.3062 29.6691C20.0033 28.9381 19.9239 28.1337 20.0782 27.3576C20.2325 26.5816 20.6135 25.8687 21.173 25.3092C21.7325 24.7497 22.4454 24.3687 23.2215 24.2144C23.9975 24.0601 24.8019 24.1395 25.5329 24.4424C26.2598 24.7448 26.8813 25.255 27.3195 25.9091C27.762 26.5675 27.9987 27.3425 27.9995 28.1357C27.9986 29.1963 27.5766 30.213 26.8262 30.9624ZM23.9995 26.8024C23.7358 26.8024 23.4781 26.8806 23.2588 27.0271C23.0395 27.1736 22.8686 27.3819 22.7677 27.6255C22.6668 27.8691 22.6404 28.1372 22.6918 28.3959C22.7433 28.6545 22.8703 28.8921 23.0567 29.0786C23.2432 29.265 23.4808 29.392 23.7394 29.4435C23.9981 29.4949 24.2662 29.4685 24.5098 29.3676C24.7534 29.2667 24.9617 29.0958 25.1082 28.8765C25.2547 28.6572 25.3329 28.3995 25.3329 28.1357C25.3329 27.7821 25.1924 27.443 24.9424 27.1929C24.6923 26.9429 24.3532 26.8024 23.9995 26.8024Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3'>Customised plans to best fit your needs</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M34.0667 20.7867C34.0097 20.1194 33.7039 19.498 33.2098 19.0459C32.7157 18.5939 32.0697 18.3442 31.4 18.3467H29.4V17.4C29.4 15.9678 28.8311 14.5943 27.8184 13.5816C26.8057 12.5689 25.4322 12 24 12C22.5678 12 21.1943 12.5689 20.1816 13.5816C19.1689 14.5943 18.6 15.9678 18.6 17.4V18.3467H16.5867C15.917 18.3442 15.2709 18.5939 14.7769 19.0459C14.2828 19.498 13.9769 20.1194 13.92 20.7867L13 31.6667C12.9538 32.2193 13.023 32.7755 13.2032 33.2999C13.3834 33.8244 13.6707 34.3057 14.0469 34.7131C14.423 35.1206 14.8798 35.4455 15.3882 35.667C15.8966 35.8885 16.4454 36.0019 17 36H31C31.5546 36.0019 32.1035 35.8885 32.6118 35.667C33.1202 35.4455 33.577 35.1206 33.9531 34.7131C34.3293 34.3057 34.6166 33.8244 34.7968 33.2999C34.977 32.7755 35.0462 32.2193 35 31.6667L34.0667 20.7867ZM26.7333 18.3467H21.3333V17.4C21.3333 16.6751 21.6213 15.9798 22.1339 15.4672C22.6465 14.9546 23.3417 14.6667 24.0667 14.6667C24.7916 14.6667 25.4868 14.9546 25.9994 15.4672C26.512 15.9798 26.8 16.6751 26.8 17.4L26.7333 18.3467Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3'>Competitive rates from multiple insurers</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M21.3333 22.666C22.52 22.666 23.68 22.3141 24.6667 21.6548C25.6534 20.9955 26.4224 20.0585 26.8765 18.9621C27.3307 17.8658 27.4495 16.6594 27.218 15.4955C26.9865 14.3316 26.415 13.2625 25.5759 12.4234C24.7368 11.5843 23.6677 11.0128 22.5038 10.7813C21.3399 10.5498 20.1335 10.6686 19.0372 11.1227C17.9408 11.5769 17.0037 12.3459 16.3445 13.3326C15.6852 14.3193 15.3333 15.4793 15.3333 16.666C15.3368 18.2562 15.9701 19.7803 17.0945 20.9048C18.219 22.0292 19.7431 22.6625 21.3333 22.666ZM31.9999 23.9994C32.7911 23.9994 33.5644 23.7648 34.2222 23.3252C34.88 22.8857 35.3927 22.261 35.6955 21.5301C35.9982 20.7992 36.0774 19.9949 35.9231 19.219C35.7687 18.4431 35.3878 17.7303 34.8284 17.1709C34.269 16.6115 33.5562 16.2306 32.7803 16.0762C32.0044 15.9219 31.2001 16.0011 30.4692 16.3038C29.7383 16.6066 29.1136 17.1193 28.6741 17.7771C28.2345 18.4349 27.9999 19.2082 27.9999 19.9994C27.9999 21.0602 28.4214 22.0776 29.1715 22.8278C29.9217 23.5779 30.9391 23.9994 31.9999 23.9994ZM31.9999 25.3327C30.6898 25.3248 29.4225 25.7994 28.4399 26.666C26.9019 25.2919 24.9984 24.3931 22.96 24.0785C20.9217 23.7639 18.8358 24.0471 16.955 24.8936C15.0743 25.7402 13.4793 27.1138 12.3632 28.8483C11.2471 30.5827 10.6578 32.6035 10.6666 34.666C10.6666 35.3733 10.9476 36.0515 11.4477 36.5516C11.9477 37.0517 12.626 37.3327 13.3333 37.3327H29.3333C30.0405 37.3327 30.7188 37.0517 31.2189 36.5516C31.719 36.0515 31.9999 35.3733 31.9999 34.666C31.9958 34.2201 31.9647 33.7748 31.9066 33.3327H34.6666C35.3738 33.3327 36.0521 33.0517 36.5522 32.5516C37.0523 32.0515 37.3333 31.3733 37.3333 30.666C37.3333 29.2515 36.7714 27.895 35.7712 26.8948C34.771 25.8946 33.4144 25.3327 31.9999 25.3327Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3'>Hassle-free process, no documentation</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 px-3" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h1 className='text-md-center' style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900'}}><b>Got queries? <br /> Check FAQ</b></h1>
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
