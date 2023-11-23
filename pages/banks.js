import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accordion from 'react-bootstrap/Accordion';
import styles from '../styles/OurBusiness/Banks.module.css';

export default function Banks() {
    return (
        <>
            <Header pageName='ourBusiness' />
            <div className="m-3 m-lg-5">
                <div className={`container-lg px-md-5 px-4 py-5 ${styles.containerStyle}`}>
                    <div className='text-white pt-md-5 pb-md-5 mb-md-5' style={{ maxWidth: '650px' }}>
                        <h1 className='pt-md-3' style={{ fontSize: 'calc(36px + 1.25vw)', fontWeight: '900' }}><b>It's your everyday banking companion</b></h1>
                        <h5>Made for all of your payments, banking and financial needs.</h5>
                    </div>
                </div>
            </div>
            {/* <div className="mt-5 px-lg-0 px-5 text-md-center" style={{ maxWidth: '800px', margin: 'auto' }}> */}
            <div className="mt-5 px-5 text-md-center" style={{ maxWidth: '900px', margin: 'auto' }}>
                <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Banking services in a nutshell</b></h1>
                <h5 className='text-secondary'>We are targeting the overall financial landscape with a conscious focus on the needs of everyone living anywhere in India. Leading and co-creating an eco-system, we provide accessible, simple and affordable banking solutions to every Indian - especially the financially excluded. With that, our aim to digitise payments and act as a catalyst towards building a cashless society takes shape.</h5>
            </div>

            <div className="mt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/bank/pay-utility-bills-just-like-that-v2.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-3 pt-md-0 pt-3">
                            <h1 style={{ fontWeight: '900' }}><b>Pay utility bills just like that</b></h1>
                            <h6 className='text-secondary' style={{ fontSize: '18px' }}>Effortlessly settle your utility bills on the go. And next time onwards, get reminders to pay them on time. You can easily pay your electricity, water, gas, internet and other essential bills, in a few taps. With that, keeping your utilities running and finances organised is so much easier.</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 pt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6 order-md-2" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/bank/bank-in-a-hassle-free-way.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-3 pt-lg-0 pt-3">
                            <h1 style={{ fontWeight: '900' }}><b>Bank in a hassle-free way</b></h1>
                            <h6 className='text-secondary' style={{ fontSize: '18px' }}>Opening a bank account or a prepaid wallet is an out-and-out online process. While enjoying the convenience of banking on the go, you also get attractive interest rates on your deposits, free money transfers, one-click bill payments, etc. Truly a smart, secure and super fast way to bank!</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/bank/trust-us-with-your-finances-v2.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-3 pt-md-0 pt-3">
                            <h1 style={{ fontWeight: '900' }}><b>Trust us with your finances</b></h1>
                            <h6 className='text-secondary' style={{ fontSize: '18px' }}>JFS' banking feature is like any other bank yet it has a digital edge. It’s completely digitalised and most of its features like fixed deposits, investments, loans and insurance, can be easily availed of using the JFS or MyJio app. Relax, it’s built with a multi-layered security system to make safe transactions.</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 pt-5 px-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <div className="row">
                    <div className="col-md-6 order-md-2" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/pdp/bank/reach-us-anytime.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-6 px-lg-5" style={{ margin: 'auto' }}>
                        <div className="px-xl-3 pt-lg-0 pt-3">
                            <h1 style={{ fontWeight: '900' }}><b>Reach us anytime</b></h1>
                            <h6 className='text-secondary' style={{ fontSize: '18px' }}>If you have queries or need help with any of our offerings or features, please feel free to connect with us. You can reach us via the JFS app or visit our outlet near you. Our executives on the call or at our store would be happy to assist you with your query. You can also take their help with any of the processes.</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5' style={{ background: '#6F542C' }}>
                <div className="text-white text-center">
                    <h1 style={{ maxWidth: '780px', margin: 'auto', fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>This is why Jio Payments Bank is India’s bank</b></h1>
                    <div className="row mt-5" style={{ maxWidth: '1100px', margin: 'auto' }}>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M34.6667 21.333C34.6676 19.4958 34.194 17.6895 33.2917 16.0891C32.3894 14.4888 31.089 13.1486 29.5166 12.1984C27.9442 11.2483 26.153 10.7204 24.3166 10.6658C22.4802 10.6113 20.6609 11.032 19.0349 11.8872C17.4089 12.7424 16.0313 14.0031 15.0356 15.5471C14.04 17.0911 13.46 18.8661 13.3519 20.7001C13.2437 22.5341 13.6112 24.3649 14.4185 26.0152C15.2259 27.6655 16.4458 29.0793 17.96 30.1196L17.3334 34.293C17.2625 34.802 17.3403 35.3207 17.5573 35.7866C17.7743 36.2525 18.1214 36.6457 18.5567 36.919C18.9919 37.1923 19.4969 37.334 20.0108 37.327C20.5247 37.32 21.0257 37.1646 21.4534 36.8796L24 35.1996L26.52 36.8796C26.9577 37.1737 27.4727 37.3315 28 37.333C28.5051 37.3331 28.9999 37.1897 29.4267 36.9196C29.8672 36.6421 30.2168 36.2417 30.4324 35.7678C30.648 35.294 30.7202 34.7674 30.64 34.253L30.04 30.0796C31.4604 29.1039 32.6232 27.7985 33.429 26.2752C34.2347 24.752 34.6594 23.0562 34.6667 21.333ZM24 29.333C22.4178 29.333 20.8711 28.8638 19.5555 27.9847C18.2399 27.1057 17.2145 25.8562 16.609 24.3944C16.0035 22.9326 15.8451 21.3241 16.1538 19.7722C16.4624 18.2204 17.2244 16.7949 18.3432 15.6761C19.462 14.5573 20.8875 13.7954 22.4393 13.4867C23.9912 13.178 25.5997 13.3364 27.0615 13.9419C28.5233 14.5474 29.7727 15.5728 30.6518 16.8884C31.5308 18.204 32 19.7507 32 21.333C32 23.4547 31.1572 25.4895 29.6569 26.9898C28.1566 28.4901 26.1218 29.333 24 29.333ZM27.32 19.7863L25.5334 19.5196L24.72 17.7996C24.6585 17.6599 24.5577 17.5411 24.4299 17.4577C24.302 17.3743 24.1527 17.3299 24 17.3299C23.8474 17.3299 23.698 17.3743 23.5702 17.4577C23.4424 17.5411 23.3415 17.6599 23.28 17.7996L22.4667 19.5196L20.68 19.7863C20.5377 19.8103 20.4044 19.8723 20.2945 19.9659C20.1845 20.0594 20.1019 20.181 20.0555 20.3177C20.009 20.4544 20.0004 20.6011 20.0305 20.7423C20.0607 20.8834 20.1285 21.0138 20.2267 21.1196L21.56 22.453L21.2267 24.3996C21.2038 24.5488 21.2229 24.7013 21.2818 24.8403C21.3406 24.9792 21.437 25.099 21.56 25.1863C21.6976 25.2804 21.86 25.3314 22.0267 25.333C22.1615 25.3355 22.2946 25.3033 22.4134 25.2396L24 24.3596L25.5867 25.2396C25.7055 25.3033 25.8386 25.3355 25.9734 25.333C26.14 25.3314 26.3025 25.2804 26.44 25.1863C26.5631 25.099 26.6595 24.9792 26.7183 24.8403C26.7772 24.7013 26.7963 24.5488 26.7734 24.3996L26.4534 22.493L27.7867 21.1596C27.885 21.0538 27.9528 20.9234 27.9829 20.7823C28.0131 20.6411 28.0044 20.4944 27.958 20.3577C27.9115 20.221 27.8289 20.0994 27.7189 20.0059C27.609 19.9123 27.4757 19.8503 27.3334 19.8263L27.32 19.7863Z" fill="white"></path>
                            </svg>
                            <h6 className='mt-3'>Opens savings account in minutes; no paperwork is required</h6>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M35.2134 12.7867C34.7156 12.2859 34.0395 12.003 33.3334 12H14.6667C14.1409 12.0022 13.6275 12.1598 13.191 12.453C12.7546 12.7461 12.4145 13.1618 12.2136 13.6477C12.0127 14.1336 11.9599 14.668 12.0619 15.1838C12.1638 15.6996 12.416 16.1738 12.7867 16.5467C13.2845 17.0475 13.9606 17.3304 14.6667 17.3333H33.3334C33.8592 17.3311 34.3726 17.1735 34.809 16.8804C35.2455 16.5872 35.5856 16.1715 35.7865 15.6857C35.9874 15.1998 36.0402 14.6653 35.9382 14.1495C35.8362 13.6337 35.5841 13.1596 35.2134 12.7867ZM32 20H16C15.6464 20 15.3073 20.1405 15.0572 20.3905C14.8072 20.6406 14.6667 20.9797 14.6667 21.3333V26.6667C14.6667 27.8923 14.9081 29.106 15.3772 30.2384C15.8462 31.3708 16.5337 32.3997 17.4004 33.2663C18.2671 34.133 19.296 34.8205 20.4283 35.2895C21.5607 35.7586 22.7744 36 24 36C25.2257 36 26.4394 35.7586 27.5717 35.2895C28.7041 34.8205 29.733 34.133 30.5997 33.2663C31.4664 32.3997 32.1539 31.3708 32.6229 30.2384C33.092 29.106 33.3334 27.8923 33.3334 26.6667V21.3333C33.3334 20.9797 33.1929 20.6406 32.9428 20.3905C32.6928 20.1405 32.3537 20 32 20ZM26.8267 30.8267C26.0773 31.577 25.0605 31.9991 24 32C23.2068 31.9991 22.4317 31.7624 21.7734 31.32C21.1193 30.8818 20.6091 30.2603 20.3067 29.5333C20.0038 28.8024 19.9244 27.998 20.0787 27.2219C20.233 26.4458 20.614 25.733 21.1735 25.1735C21.733 24.614 22.4459 24.233 23.2219 24.0787C23.998 23.9244 24.8024 24.0037 25.5334 24.3067C26.2603 24.6091 26.8818 25.1193 27.32 25.7733C27.7625 26.4317 27.9992 27.2068 28 28C27.9991 29.0605 27.5771 30.0772 26.8267 30.8267ZM24 26.6667C23.7363 26.6667 23.4785 26.7449 23.2593 26.8914C23.04 27.0379 22.8691 27.2461 22.7682 27.4898C22.6673 27.7334 22.6409 28.0015 22.6923 28.2601C22.7438 28.5188 22.8708 28.7563 23.0572 28.9428C23.2437 29.1293 23.4813 29.2563 23.7399 29.3077C23.9986 29.3592 24.2666 29.3328 24.5103 29.2318C24.7539 29.1309 24.9622 28.96 25.1087 28.7408C25.2552 28.5215 25.3334 28.2637 25.3334 28C25.3334 27.6464 25.1929 27.3072 24.9428 27.0572C24.6928 26.8071 24.3537 26.6667 24 26.6667Z" fill="white"></path>
                            </svg>
                            <h6 className='mt-3'>Works with any telecom operator on 2G/3G/4G/5G networks</h6>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M34.0667 20.7867C34.0097 20.1194 33.7039 19.498 33.2098 19.0459C32.7157 18.5939 32.0697 18.3442 31.4 18.3467H29.4V17.4C29.4 15.9678 28.8311 14.5943 27.8184 13.5816C26.8057 12.5689 25.4322 12 24 12C22.5678 12 21.1943 12.5689 20.1816 13.5816C19.1689 14.5943 18.6 15.9678 18.6 17.4V18.3467H16.5867C15.917 18.3442 15.2709 18.5939 14.7769 19.0459C14.2828 19.498 13.9769 20.1194 13.92 20.7867L13 31.6667C12.9538 32.2193 13.023 32.7755 13.2032 33.2999C13.3834 33.8244 13.6707 34.3057 14.0469 34.7131C14.423 35.1206 14.8798 35.4455 15.3882 35.667C15.8966 35.8885 16.4454 36.0019 17 36H31C31.5546 36.0019 32.1035 35.8885 32.6118 35.667C33.1202 35.4455 33.577 35.1206 33.9531 34.7131C34.3293 34.3057 34.6166 33.8244 34.7968 33.2999C34.977 32.7755 35.0462 32.2193 35 31.6667L34.0667 20.7867ZM26.7333 18.3467H21.3333V17.4C21.3333 16.6751 21.6213 15.9798 22.1339 15.4672C22.6465 14.9546 23.3417 14.6667 24.0667 14.6667C24.7916 14.6667 25.4868 14.9546 25.9994 15.4672C26.512 15.9798 26.8 16.6751 26.8 17.4L26.7333 18.3467Z" fill="white"></path>
                            </svg>
                            <h6 className='mt-3'>Offers exclusive deals and discounts from your favourite brands</h6>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#D8AA67"></rect>
                                <path d="M21.3333 22.666C22.52 22.666 23.68 22.3141 24.6667 21.6548C25.6534 20.9955 26.4224 20.0585 26.8765 18.9621C27.3307 17.8658 27.4495 16.6594 27.218 15.4955C26.9865 14.3316 26.415 13.2625 25.5759 12.4234C24.7368 11.5843 23.6677 11.0128 22.5038 10.7813C21.3399 10.5498 20.1335 10.6686 19.0372 11.1227C17.9408 11.5769 17.0037 12.3459 16.3445 13.3326C15.6852 14.3193 15.3333 15.4793 15.3333 16.666C15.3368 18.2562 15.9701 19.7803 17.0945 20.9048C18.219 22.0292 19.7431 22.6625 21.3333 22.666ZM31.9999 23.9994C32.7911 23.9994 33.5644 23.7648 34.2222 23.3252C34.88 22.8857 35.3927 22.261 35.6955 21.5301C35.9982 20.7992 36.0774 19.9949 35.9231 19.219C35.7687 18.4431 35.3878 17.7303 34.8284 17.1709C34.269 16.6115 33.5562 16.2306 32.7803 16.0762C32.0044 15.9219 31.2001 16.0011 30.4692 16.3038C29.7383 16.6066 29.1136 17.1193 28.6741 17.7771C28.2345 18.4349 27.9999 19.2082 27.9999 19.9994C27.9999 21.0602 28.4214 22.0776 29.1715 22.8278C29.9217 23.5779 30.9391 23.9994 31.9999 23.9994ZM31.9999 25.3327C30.6898 25.3248 29.4225 25.7994 28.4399 26.666C26.9019 25.2919 24.9984 24.3931 22.96 24.0785C20.9217 23.7639 18.8358 24.0471 16.955 24.8936C15.0743 25.7402 13.4793 27.1138 12.3632 28.8483C11.2471 30.5827 10.6578 32.6035 10.6666 34.666C10.6666 35.3733 10.9476 36.0515 11.4477 36.5516C11.9477 37.0517 12.626 37.3327 13.3333 37.3327H29.3333C30.0405 37.3327 30.7188 37.0517 31.2189 36.5516C31.719 36.0515 31.9999 35.3733 31.9999 34.666C31.9958 34.2201 31.9647 33.7748 31.9066 33.3327H34.6666C35.3738 33.3327 36.0521 33.0517 36.5522 32.5516C37.0523 32.0515 37.3333 31.3733 37.3333 30.666C37.3333 29.2515 36.7714 27.895 35.7712 26.8948C34.771 25.8946 33.4144 25.3327 31.9999 25.3327Z" fill="white"></path>
                            </svg>
                            <h6 className='mt-3'>Registered with DICGC: www.dicgc.org.in (a division of RBI)</h6>
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
                            Any Indian resident above 18 years of age can open a Jio Payments Bank account.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}>
                        <Accordion.Header><b>What is the minimum balance I need to keep in my Jio Payments Bank account?</b></Accordion.Header>
                        <Accordion.Body>
                            There is no minimum balance requirement for the Jio Payments Bank account.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}>
                        <Accordion.Header><b>Are there any charges/fees for using my Jio Payments Bank account?</b></Accordion.Header>
                        <Accordion.Body>
                            There are no charges or fees for your Jio Payments Bank account.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}>
                        <Accordion.Header><b>Are there any penalties if the account is inactive?</b></Accordion.Header>
                        <Accordion.Body>
                            No, there are no penalties if the account is inactive.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}>
                        <Accordion.Header><b>What are the ID proofs required for opening a Jio Payments Bank account?</b></Accordion.Header>
                        <Accordion.Body>
                            You just require an Aadhaar Card and PAN Card to open a Jio Payments Bank account.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <Footer />
        </>
    )
}
