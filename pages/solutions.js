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
                        <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Digital payment acceptance made easy</b></h1>
                        <h5>Check this safest, smartest, and quickest way for businesses to accept payments from their customers.</h5>
                        <br /><br />
                        <div className={`${styles.BRAfterMDScrn}`}>
                            <br /><br /><br /><br /><br />
                            <br /><br /><br /><br /><br />
                            <br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 px-5 text-md-center" style={{ maxWidth: '900px', margin: 'auto' }}>
                <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Explore our business-ready payment solution</b></h1>
                <h5 className='text-secondary' style={{ fontSize: '18px' }}>We are obsessed with technology and use it extensively to solve users’ day-to-day problems and payments are one of them. Created with the sole intention of revolutionising payments, our payment solution facilitates quick and simple transactions. Using this feature, merchants can accept payments from all digital modes including cards, UPI, Netbanking, Wallets, Bill Now, Pay Later, and more.</h5>
            </div>

            <div className="mt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/payment/A+secure+payment+gateway++.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-3 pt-md-0 pt-3">
                            <h1 style={{ fontWeight: '900' }}><b>A secure payment gateway</b></h1>
                            <h6 className='text-secondary'>Elevate your online micro, small or medium-sized business with our reliable payment gateway. Seamlessly collect payments from customers on your website. Enable your delivery agents to collect with dynamic QRs and mPOS devices. You can also share the collect links with your customers for remote transactions.</h6>
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
                        <div className="px-xl-3 pt-lg-0 pt-3">
                            <h1 style={{ fontWeight: '900' }}><b>A versatile in-store terminal</b></h1>
                            <h6 className='text-secondary'>Upgrade your in-store payments with our POS system. Easily accept card and UPI payments and provide a smooth, reliable checkout process. Enhance the in-store experience with static and dynamic QR codes for UPI payments which can be further revolutionised with sound alerts from our Voice Box.</h6>
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
                        <div className="px-xl-3 pt-md-0 pt-3">
                            <h1 style={{ fontWeight: '900' }}><b>A trusted payment solution</b></h1>
                            <h6 className='text-secondary'>Navigate the world of digital payments with our Router, offering flexibility to customers in selecting a preferred payment gateway. Through our user-friendly dashboard, gain transaction insights and take control of your payments. Elevate security using tokenisation to secure sensitive card data.</h6>
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
                        <div className="px-xl-3 pt-lg-0 pt-3">
                            <h1 style={{ fontWeight: '900' }}><b>A reliable growth driver</b></h1>
                            <h6 className='text-secondary'>Boost sales with our Offer Engine. Create enticing promotions and incentives to attract and retain customers. Moreover, harness the power of recurring revenue with our Subscription feature. Easily manage and automate subscription payments, ensuring steady cash flow through repeat business.</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5' style={{ background: '#6F542C' }}>
                <div className="text-white text-center">
                    <h1 style={{ maxWidth: '800px', margin: 'auto', fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>This is why India trusts our payment solution</b></h1>
                    <div className="row mt-5" style={{ maxWidth: '1100px', margin: 'auto' }}>
                        <div className="col-md-3 col-sm-6">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M36.8402 16.1342L24.8402 12.1342C24.2937 11.9605 23.7067 11.9605 23.1602 12.1342L11.1602 16.1342C10.5571 16.3324 10.0446 16.7392 9.71465 17.2815C9.38472 17.8239 9.25907 18.4661 9.3603 19.0928C9.46154 19.7195 9.783 20.2895 10.2669 20.7003C10.7508 21.1112 11.3654 21.3359 12.0002 21.3342V33.3342C11.6466 33.3342 11.3074 33.4747 11.0574 33.7247C10.8074 33.9747 10.6669 34.3139 10.6669 34.6675C10.6669 35.0211 10.8074 35.3603 11.0574 35.6103C11.3074 35.8604 11.6466 36.0008 12.0002 36.0008H36.0002C36.3538 36.0008 36.693 35.8604 36.943 35.6103C37.1931 35.3603 37.3335 35.0211 37.3335 34.6675C37.3335 34.3139 37.1931 33.9747 36.943 33.7247C36.693 33.4747 36.3538 33.3342 36.0002 33.3342V21.3342C36.635 21.3359 37.2496 21.1112 37.7335 20.7003C38.2174 20.2895 38.5389 19.7195 38.6401 19.0928C38.7413 18.4661 38.6157 17.8239 38.2858 17.2815C37.9558 16.7392 37.4433 16.3324 36.8402 16.1342ZM22.6669 21.3342V33.3342H20.0002V21.3342H22.6669ZM25.3335 21.3342H28.0002V33.3342H25.3335V21.3342ZM14.6669 21.3342H17.3335V33.3342H14.6669V21.3342ZM33.3335 33.3342H30.6669V21.3342H33.3335V33.3342Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3' style={{ fontSize: '18px' }}>Easy to get registered with bank’s registered mobile number</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M35.2129 12.7867C34.7151 12.2859 34.039 12.003 33.3329 12H14.6662C14.1404 12.0022 13.627 12.1598 13.1906 12.453C12.7541 12.7461 12.414 13.1618 12.2131 13.6477C12.0122 14.1336 11.9594 14.668 12.0614 15.1838C12.1633 15.6996 12.4155 16.1738 12.7862 16.5467C13.284 17.0475 13.9601 17.3304 14.6662 17.3333H33.3329C33.8587 17.3311 34.3721 17.1735 34.8085 16.8804C35.245 16.5872 35.5851 16.1715 35.786 15.6857C35.9869 15.1998 36.0397 14.6653 35.9377 14.1495C35.8358 13.6337 35.5836 13.1596 35.2129 12.7867ZM31.9995 20H15.9995C15.6459 20 15.3068 20.1405 15.0567 20.3905C14.8067 20.6406 14.6662 20.9797 14.6662 21.3333V26.6667C14.6662 27.8923 14.9076 29.106 15.3767 30.2384C15.8457 31.3708 16.5332 32.3997 17.3999 33.2663C18.2666 34.133 19.2955 34.8205 20.4278 35.2895C21.5602 35.7586 22.7739 36 23.9995 36C25.2252 36 26.4389 35.7586 27.5713 35.2895C28.7036 34.8205 29.7325 34.133 30.5992 33.2663C31.4659 32.3997 32.1534 31.3708 32.6224 30.2384C33.0915 29.106 33.3329 27.8923 33.3329 26.6667V21.3333C33.3329 20.9797 33.1924 20.6406 32.9424 20.3905C32.6923 20.1405 32.3532 20 31.9995 20ZM26.8262 30.8267C26.0768 31.577 25.0601 31.9991 23.9995 32C23.2063 31.9991 22.4313 31.7624 21.7729 31.32C21.1188 30.8818 20.6086 30.2603 20.3062 29.5333C20.0033 28.8024 19.9239 27.998 20.0782 27.2219C20.2325 26.4458 20.6135 25.733 21.173 25.1735C21.7325 24.614 22.4454 24.233 23.2215 24.0787C23.9975 23.9244 24.8019 24.0037 25.5329 24.3067C26.2598 24.6091 26.8813 25.1193 27.3195 25.7733C27.762 26.4317 27.9987 27.2068 27.9995 28C27.9986 29.0605 27.5766 30.0772 26.8262 30.8267ZM23.9995 26.6667C23.7358 26.6667 23.4781 26.7449 23.2588 26.8914C23.0395 27.0379 22.8686 27.2461 22.7677 27.4898C22.6668 27.7334 22.6404 28.0015 22.6918 28.2601C22.7433 28.5188 22.8703 28.7563 23.0567 28.9428C23.2432 29.1293 23.4808 29.2563 23.7394 29.3077C23.9981 29.3592 24.2662 29.3328 24.5098 29.2318C24.7534 29.1309 24.9617 28.96 25.1082 28.7408C25.2547 28.5215 25.3329 28.2637 25.3329 28C25.3329 27.6464 25.1924 27.3072 24.9424 27.0572C24.6923 26.8071 24.3532 26.6667 23.9995 26.6667Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3' style={{ fontSize: '18px' }}>Built with a robust security system for safe and secure transactions</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M34.0669 20.7867C34.01 20.1194 33.7041 19.498 33.21 19.0459C32.716 18.5939 32.0699 18.3442 31.4002 18.3467H29.4002V17.4C29.4002 15.9678 28.8313 14.5943 27.8186 13.5816C26.8059 12.5689 25.4324 12 24.0002 12C22.5681 12 21.1946 12.5689 20.1819 13.5816C19.1692 14.5943 18.6002 15.9678 18.6002 17.4V18.3467H16.5869C15.9172 18.3442 15.2712 18.5939 14.7771 19.0459C14.283 19.498 13.9772 20.1194 13.9202 20.7867L13.0002 31.6667C12.954 32.2193 13.0232 32.7755 13.2034 33.2999C13.3837 33.8244 13.671 34.3057 14.0471 34.7131C14.4233 35.1206 14.88 35.4455 15.3884 35.667C15.8968 35.8885 16.4457 36.0019 17.0002 36H31.0002C31.5548 36.0019 32.1037 35.8885 32.6121 35.667C33.1205 35.4455 33.5772 35.1206 33.9534 34.7131C34.3295 34.3057 34.6168 33.8244 34.797 33.2999C34.9773 32.7755 35.0465 32.2193 35.0002 31.6667L34.0669 20.7867ZM26.7336 18.3467H21.3336V17.4C21.3336 16.6751 21.6216 15.9798 22.1342 15.4672C22.6468 14.9546 23.342 14.6667 24.0669 14.6667C24.7918 14.6667 25.4871 14.9546 25.9997 15.4672C26.5123 15.9798 26.8002 16.6751 26.8002 17.4L26.7336 18.3467Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3' style={{ fontSize: '18px' }}>Works at online as well as offline retail stores across India</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M22.6663 14.666H25.333C26.0403 14.666 26.7185 14.3851 27.2186 13.885C27.7187 13.3849 27.9997 12.7066 27.9997 11.9993C27.9997 11.6457 27.8592 11.3066 27.6091 11.0565C27.3591 10.8065 27.02 10.666 26.6663 10.666H21.333C20.9794 10.666 20.6402 10.8065 20.3902 11.0565C20.1402 11.3066 19.9997 11.6457 19.9997 11.9993C19.9997 12.7066 20.2806 13.3849 20.7807 13.885C21.2808 14.3851 21.9591 14.666 22.6663 14.666ZM33.333 32.3727V26.666C33.3335 24.6557 32.6849 22.6989 31.4837 21.0868C30.2825 19.4748 28.5929 18.2937 26.6663 17.7193V17.3327C26.6663 16.9791 26.5259 16.6399 26.2758 16.3899C26.0258 16.1398 25.6866 15.9993 25.333 15.9993H22.6663C22.3127 15.9993 21.9736 16.1398 21.7235 16.3899C21.4735 16.6399 21.333 16.9791 21.333 17.3327V17.7193C19.4065 18.2937 17.7169 19.4748 16.5156 21.0868C15.3144 22.6989 14.6658 24.6557 14.6663 26.666V32.3727C14.2633 32.6054 13.9282 32.9395 13.6943 33.3418C13.4604 33.7441 13.3358 34.2006 13.333 34.666C13.333 35.3733 13.614 36.0515 14.1141 36.5516C14.6142 37.0517 15.2924 37.3327 15.9997 37.3327H31.9997C32.7069 37.3327 33.3852 37.0517 33.8853 36.5516C34.3854 36.0515 34.6663 35.3733 34.6663 34.666C34.6635 34.2006 34.539 33.7441 34.3051 33.3418C34.0712 32.9395 33.736 32.6054 33.333 32.3727ZM27.333 26.666C27.333 27.2613 27.2002 27.8492 26.9442 28.3866C26.6881 28.9241 26.3153 29.3976 25.853 29.7727L27.933 30.8127C28.247 30.9725 28.485 31.2502 28.595 31.585C28.7049 31.9198 28.6778 32.2845 28.5197 32.5993C28.4089 32.8192 28.2394 33.0041 28.0299 33.1336C27.8204 33.263 27.5792 33.3319 27.333 33.3327C27.1238 33.3352 26.9174 33.2847 26.733 33.186L21.3997 30.5193C21.1339 30.3832 20.9216 30.1619 20.7966 29.8907C20.6717 29.6195 20.6413 29.3143 20.7105 29.0238C20.7797 28.7334 20.9443 28.4746 21.178 28.2888C21.4118 28.103 21.7011 28.0011 21.9997 27.9993H23.333C23.6866 27.9993 24.0258 27.8589 24.2758 27.6088C24.5259 27.3588 24.6663 27.0196 24.6663 26.666C24.6663 26.3124 24.5259 25.9733 24.2758 25.7232C24.0258 25.4732 23.6866 25.3327 23.333 25.3327H20.6663C20.3127 25.3327 19.9736 25.1922 19.7235 24.9422C19.4735 24.6921 19.333 24.353 19.333 23.9993C19.333 23.6457 19.4735 23.3066 19.7235 23.0565C19.9736 22.8065 20.3127 22.666 20.6663 22.666H27.333C27.6866 22.666 28.0258 22.8065 28.2758 23.0565C28.5259 23.3066 28.6663 23.6457 28.6663 23.9993C28.6663 24.353 28.5259 24.6921 28.2758 24.9422C28.0258 25.1922 27.6866 25.3327 27.333 25.3327H27.093C27.2482 25.7602 27.3294 26.2112 27.333 26.666Z" fill="white"></path>
                            </svg>
                            <h5 className='mt-3' style={{ fontSize: '18px' }}>Earns you amazing rewards from a host of brands you love</h5>
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
