import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function ContactUs() {
    return (
        <>
            <Header pageName='investorRelations' />
            <div className='container-lg'>
                <div style={{ maxWidth: '800px', margin: 'auto' }}>
                    <h1 className='my-5 text-center' style={{ fontSize: 'calc(40px + 1.25vw)'  }}><b>Investor Contacts</b></h1>
                    <img src="https://jep-asset.akamaized.net/cms/assets/jfs/investor-relations/investor-contacts-desk1.webp" alt="#ImgNotFound" className='w-100 px-3' style={{ borderRadius: '30px' }} />
                    <div className="row mt-5 px-3">
                        <div className="col-lg-6">
                            <b><h4 className='mt-3' style={{ color: '#902B00' }}><b>INVESTOR CONTACT</b></h4></b>
                            <h4><b>Ms. V Mohana</b></h4>
                            <h6 className='text-muted'>
                                <b className='text-black'>Company Secretary and Compliance Officer</b>
                                <br />
                                Jio Financial Services Limited
                                1st floor, Building 4NA, Maker Maxity, Bandra Kurla Complex,
                                Bandra East, Mumbai 400 051
                                <br />
                                CIN: U65990MH1999PLC120918
                                <br />
                                <br />
                                E-mail: <span className='text-warning'>investor.relations@jfs.in</span>
                            </h6>
                            <br />
                            <b><h4 className='mt-3' style={{ color: '#902B00' }}><b>(I) FOR SECURITIES</b></h4></b>
                            <h4><b>KFin Technologies Limited</b></h4>
                            <h6 className='text-muted'>
                                <b className='text-black'>Unit: Jio Financial Services Limited</b>
                                <br />
                                Selenium, Tower B, Plot No. 31 and 32,
                                Financial District Nanakramguda, Serilingampally
                                Rangareddi-500032 Hyderabad,
                                Telangana, India
                                <br />
                                Toll Free No: +1800 309 4001
                                <br />
                                <br />
                                E-mail: <span className='text-warning'>jfsinvestor@kfintech.com</span>
                                <br />
                                Website: <span className='text-warning'>www.kfintech.com</span>
                            </h6>
                        </div>
                        <div className="col-lg-6">
                            <b><h4 className='mt-3' style={{ color: '#902B00' }}><b>(II) NODAL OFFICER FOR THE IEPF AUTHORITY</b></h4></b>
                            <h4><b>Ms. V Mohana</b></h4>
                            <h6 className='text-muted'>
                                <b className='text-black'>Nodal Officer (IEPF)</b>
                                <br />
                                Jio Financial Services Limited
                                1st floor, Building 4NA, Maker Maxity, Bandra Kurla Complex,
                                Bandra East, Mumbai 400 051
                                <br />
                                <br />
                                E-mail: <span className='text-warning'>mohana.v@jfs.in</span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <Footer />
        </>
    )
}
