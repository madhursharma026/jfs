import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../../../styles/Header/Header.module.css'
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';



export default function Header(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let pageName = props.pageName

    return (
        <>
            <div className={styles.headerBeforeLGScrn}>
                <Navbar expand="lg" style={{ background: '#D8AA67' }}>
                    <div className='container-xxl'>
                        <Link href='/' className='px-5 py-1'>
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/svg-og/jfslogofinal.svg" className='my-1' alt="#ImgNotFound" height={40} width={40} />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" style={{ marginTop: '-5px' }}>
                                {/* <Link href='#ourBusiness' className={`${styles.navbarOption} px-3`} style={{ textDecoration: pageName === 'ourBusiness' ? 'underline' : '' }}>Our Business</Link> */}
                                <div class={styles.dropdownButton}>
                                    <button class={`px-3 ${styles.dropdownButtonName}`} style={{ textDecoration: pageName === 'ourBusiness' ? 'underline' : '' }}>Our Business</button>
                                    <div class={`pb-3 ${styles.dropdownButtonContent}`} style={{ minWidth: '200px' }}>
                                        <div style={{ background: '#D8AA67' }}>
                                            <br />
                                        </div>
                                        <Link href='/loans' className={`${styles.dropdownLinks}`}>Loans</Link>
                                        <Link href='/broking' className={`${styles.dropdownLinks}`}>Insurance Broking</Link>
                                        <Link href='/banks' className={`${styles.dropdownLinks}`}>Payments Bank</Link>
                                        <Link href='/solutions' className={`${styles.dropdownLinks}`}>Payment Solutions</Link>
                                    </div>
                                </div>
                                {/* <Link href='#investorRelations' className={`${styles.navbarOption} px-3`} style={{ textDecoration: pageName === 'investorRelations' ? 'underline' : '' }}>Investor Relations</Link> */}
                                <div class={styles.dropdownButton}>
                                    <button class={`px-3 ${styles.dropdownButtonName}`} style={{ textDecoration: pageName === 'investorRelations' ? 'underline' : '' }}>Investor Relations</button>
                                    <div class={`pb-3 ${styles.dropdownButtonContent}`} style={{ minWidth: '500px' }}>
                                        <div style={{ background: '#D8AA67' }}>
                                            <br />
                                        </div>
                                        <Link href='/financial' className={`${styles.dropdownLinks}`}>Financials</Link>
                                        <Link href='/documents' className={`${styles.dropdownLinks}`}>Policy Documents</Link>
                                        <Link href='/contacts' className={`${styles.dropdownLinks}`}>Investor Contacts</Link>
                                        <Link href='/mechanism' className={`${styles.dropdownLinks}`}>Grievance Mechanism</Link>
                                        <Link href='/disclosure' className={`${styles.dropdownLinks}`}>Disclosure Under Regulation 46 of SEBI (LODR) Regulations, 2015</Link>
                                        <Link href='/downloads' className={`${styles.dropdownLinks}`}>Downloads</Link>
                                        <Link href='/announcements' className={`${styles.dropdownLinks}`}>Corporate Announcements</Link>
                                        <Link href='/notices' className={`${styles.dropdownLinks}`}>Notices</Link>
                                    </div>
                                </div>
                                {/* <Link href='#ourCompany' className={`${styles.navbarOption} px-3`} style={{ textDecoration: pageName === 'ourCompany' ? 'underline' : '' }}>Our Company</Link> */}
                                <div class={styles.dropdownButton}>
                                    <button class={`px-3 ${styles.dropdownButtonName}`} style={{ textDecoration: pageName === 'ourCompany' ? 'underline' : '' }}>Our Company</button>
                                    <div class={`pb-3 ${styles.dropdownButtonContent}`} style={{ minWidth: '200px' }}>
                                        <div style={{ background: '#D8AA67' }}>
                                            <br />
                                        </div>
                                        <Link href='/aboutUs' className={`${styles.dropdownLinks}`}>About Us</Link>
                                        <Link href='/director' className={`${styles.dropdownLinks}`}>Board of Directors</Link>
                                        <Link href='/committees' className={`${styles.dropdownLinks}`}>Board Committees</Link>
                                        <Link href='/management' className={`${styles.dropdownLinks}`}>Management</Link>
                                    </div>
                                </div>
                                <Link href='/careers' className={`${styles.navbarOption} px-3`} style={{ textDecoration: pageName === 'careers' ? 'underline' : '' }}>Careers</Link>
                                <Link href='/contactUs' className={`${styles.navbarOption} px-3`} style={{ textDecoration: pageName === 'contactUs' ? 'underline' : '' }}>Contact Us</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>

            <div className={styles.headerAfterLGScrn}>
                <Navbar expand="lg" style={{ background: '#D8AA67' }}>
                    <div className='container-xxl'>
                        {/* <Navbar.Brand href="#home" className='px-3' >
                            <i class="fa fa-bars px-3" onClick={handleShow} />
                            <img src="https://jep-asset.akamaized.net/cms/assets/jfs/svg-og/jfslogofinal.svg" className='my-1' alt="#ImgNotFound" height={40} width={40} />
                        </Navbar.Brand> */}
                        <div>
                            <i class="fa fa-bars px-3" onClick={handleShow} />
                            <Link href='/' className='py-1'>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jfs/svg-og/jfslogofinal.svg" className='my-1' alt="#ImgNotFound" height={40} width={40} />
                            </Link>
                        </div>
                    </div>
                </Navbar>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton style={{ background: '#D8AA67' }}>
                    <Offcanvas.Title className='p-4'></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-4'>
                    <ListGroup variant="flush" style={{ border: 'none' }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='w-100 px-0' style={{ textAlign: 'left', fontWeight: '500', fontSize: '18px', borderRadius: '0', borderTop: 0, borderLeft: '0', borderRight: '0', borderBottom: '1px solid #E0E0E0' }}>
                                Our Business
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='w-100'>
                                <Link href='/loans' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Loans</Link>
                                <Link href='/broking' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Insurance Broking</Link>
                                <Link href='/banks' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Payments Bank</Link>
                                <Link href='/solutions' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Payment Solutions</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='w-100 px-0' style={{ textAlign: 'left', fontWeight: '500', fontSize: '18px', borderRadius: '0', borderTop: 0, borderLeft: '0', borderRight: '0', borderBottom: '1px solid #E0E0E0' }}>
                                Investor Relations
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='w-100'>
                                <Link href='/financial' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Financials</Link>
                                <Link href='/documents' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Policy Documents</Link>
                                <Link href='/contacts' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Investor Contacts</Link>
                                <Link href='/mechanism' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Grievance Mechanism</Link>
                                <Link href='/disclosure' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Disclosure Under Regulation 46 of SEBI (LODR) Regulations, 2015</Link>
                                <Link href='/downloads' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Downloads</Link>
                                <Link href='/announcements' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Corporate Announcements</Link>
                                <Link href='/notices' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Notices</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='w-100 px-0' style={{ textAlign: 'left', fontWeight: '500', fontSize: '18px', borderRadius: '0', borderTop: 0, borderLeft: '0', borderRight: '0', borderBottom: '1px solid #E0E0E0' }}>
                                Our Company
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='w-100'>
                                <Link href='/aboutUs' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>About Us</Link>
                                <Link href='/director' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Board of Directors</Link>
                                <Link href='/committees' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Board Committees</Link>
                                <Link href='/management' style={{ display: 'block', textDecoration: 'none' }} className={`text-black px-2`}>Management</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Link href='/careers' className='w-100 px-0 p-2 text-black' style={{ textAlign: 'left', textDecoration: 'none', fontWeight: '500', fontSize: '18px', borderRadius: '0', borderTop: 0, borderLeft: '0', borderRight: '0', borderBottom: '1px solid #E0E0E0' }}>
                            Careers
                        </Link>
                        <Link href='/contactUs' className='w-100 px-0 p-2 text-black' style={{ textAlign: 'left', textDecoration: 'none', fontWeight: '500', fontSize: '18px', borderRadius: '0', borderTop: 0, borderLeft: '0', borderRight: '0', borderBottom: '1px solid #E0E0E0' }}>
                            Contact Us
                        </Link>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

