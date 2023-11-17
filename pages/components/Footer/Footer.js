import { Dropdown, ListGroup } from 'react-bootstrap';
import styles from '../../../styles/Footer/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <div style={{ background: '#F5F5F5' }}>
            <div className="container-lg">
                <div className={`row py-5 ${styles.footerBeforeLGScrn}`}>
                    <div className="col">
                        <ul style={{ listStyleType: 'none', fontSize: '1rem', lineHeight: '32px' }}>
                            <li><b>Our Business</b></li>
                            <li className={`${styles.footerOptions} p-1`}>Loans</li>
                            <li className={`${styles.footerOptions} p-1`}>Insurance Broking</li>
                            <li className={`${styles.footerOptions} p-1`}>Payments Bank</li>
                            <li className={`${styles.footerOptions} p-1`}>Payment Solutions</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul style={{ listStyleType: 'none', fontSize: '1rem', lineHeight: '32px' }}>
                            <li><b>Our Company</b></li>
                            <li className={`${styles.footerOptions} p-1`}>About Us</li>
                            <li className={`${styles.footerOptions} p-1`}>Board of Directors</li>
                            <li className={`${styles.footerOptions} p-1`}>Board Committees</li>
                            <li className={`${styles.footerOptions} p-1`}>Management</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul style={{ listStyleType: 'none', fontSize: '1rem', lineHeight: '32px' }}>
                            <li><b>Investor Relations</b></li>
                            <li className={`${styles.footerOptions} p-1`}>Financials</li>
                            <li className={`${styles.footerOptions} p-1`}>Policy Documents</li>
                            <li className={`${styles.footerOptions} p-1`}>Investor Contacts</li>
                            <li className={`${styles.footerOptions} p-1`}>Grievance Mechanism</li>
                            <li className={`${styles.footerOptions} p-1`}>Disclosure Under Regulation 46 of SEBI (LODR) Regulations, 2015</li>
                            <li className={`${styles.footerOptions} p-1`}>Downloads</li>
                            <li className={`${styles.footerOptions} p-1`}>Corporate Announcements</li>
                            <li className={`${styles.footerOptions} p-1`}>Notices</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul style={{ listStyleType: 'none', fontSize: '1rem', lineHeight: '32px' }}>
                            <li><b>Legal</b></li>
                            <li className={`${styles.footerOptions} p-1`}>Terms & Conditions</li>
                            <li className={`${styles.footerOptions} p-1`}>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul style={{ listStyleType: 'none', fontSize: '1rem', lineHeight: '32px' }}>
                            <li><b>Quick Links</b></li>
                            <li className={`${styles.footerOptions} p-1`}>Careers</li>
                            <li className={`${styles.footerOptions} p-1`}>Contact Us</li>
                            <li className={`${styles.footerOptions} p-1`}>SEBI Circular on Online Dispute Resolution</li>
                            <li className={`${styles.footerOptions} p-1`}>Link to SMART ODR</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`row mx-4 py-3 ${styles.footerAfterLGScrn}`}>
                {/* <select className='form-control mt-4' style={{ border: '0', background: 'transparent', fontWeight: '700', fontSize: '18px' }} name="cars" id="cars">
                    <option value="#">Our Business</option>
                    <option value="#">Loans</option>
                    <option value="#">Insurance Broking</option>
                    <option value="#">Payments Bank</option>
                    <option value="#">Payment Solutions</option>
                </select>
                <hr />
                <select className='form-control' style={{ border: '0', background: 'transparent', fontWeight: '700', fontSize: '18px' }} name="cars" id="cars">
                    <option value="#">Our Company</option>
                    <option value="#">About Us</option>
                    <option value="#">Board of Directors</option>
                    <option value="#">Board Committees</option>
                    <option value="#">Management</option>
                </select>
                <hr />
                <select className='form-control' style={{ border: '0', background: 'transparent', fontWeight: '700', fontSize: '18px' }} name="cars" id="cars">
                    <option value="#">Investor Relations</option>
                    <option value="#">Financials</option>
                    <option value="#">Policy Documents</option>
                    <option value="#">Investor Contacts</option>
                    <option value="#">Grievance Mechanism</option>
                    <option value="#">Disclosure Under Regulation 46 of SEBI (LODR) Regulations,, fontWeight: '700', fontSize: '18px' 2015</option>
                    <option value="#">Downloads</option>
                    <option value="#">Corporate Announcements</option>
                    <option value="#">Notices</option>
                </select>
                <hr />
                <select className='form-control' style={{ border: '0', background: 'transparent', fontWeight: '700', fontSize: '18px' }} name="cars" id="cars">
                    <option value="#">Legal</option>
                    <option value="#">Terms & Conditions</option>
                    <option value="#">Privacy Policy</option>
                </select>
                <hr />
                <select className='form-control' style={{ border: '0', background: 'transparent', fontWeight: '700', fontSize: '18px' }} name="cars" id="cars">
                    <option value="#">Quick Links</option>
                    <option value="#">Careers</option>
                    <option value="#">Contact Us</option>
                    <option value="#">SEBI Circular on Online Dispute Resolution</option>
                    <option value="#">Link to SMART ODR</option>
                </select>
                <hr /> */}
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
            </div>

            <hr />
            <div className="container-lg">
                <span>
                    <img src="https://jep-asset.akamaized.net/cms/assets/jfs/svg-og/jfslogofinal.svg" alt="#ImgNotFound" width={40} height={40} />
                    &ensp; © 2023 Jio Financial Services Ltd. (Formerly Reliance Strategic Investments Ltd.)
                    <br />
                    <br />
                </span>
            </div>
        </div>
    )
}
