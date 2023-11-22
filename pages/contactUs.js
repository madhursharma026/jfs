import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function ContactUs() {
    return (
        <>
            <Header pageName='contactUs' />
            <div className='container-lg'>
                <div style={{ maxWidth: '800px', margin: 'auto' }}>
                    <h1 className='my-md-5 my-3 text-center' style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Contact us</b></h1>
                    <img src="https://jep-asset.akamaized.net/cms/assets/jfs/contact-us/banner-desk.webp" alt="#ImgNotFound" className='w-100 px-3' style={{ borderRadius: '30px' }} />
                    <div className="row mt-5 px-3">
                        <div className="col-lg-6">
                            <b><h4 className='mt-3' style={{ fontWeight: '900' }}><b>Investor Relations</b></h4></b>
                            <h5 className="text-warning">
                                <i class="fa fa-envelope-o fs-3"></i>   investor.relations@jfs.in
                            </h5>
                            <b><h4 className='mt-3' style={{ fontWeight: '900' }}><b>Careers</b></h4></b>
                            <h5 className="text-warning">
                                <i class="fa fa-envelope-o fs-3"></i> careers@jfs.in
                            </h5>
                        </div>
                        <div className="col-lg-6">
                            <b><h4 className='mt-3' style={{ fontWeight: '900' }}><b>Address</b></h4></b>
                            <h5 style={{ fontSize: '18px' }} className='text-muted'>Registered Office: 1st floor, Building 4NA,
                                Maker Maxity, Bandra Kurla Complex,
                                Bandra East, Mumbai 400 051,
                                Tel : 022 3555 4094
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <Footer />
        </>
    )
}
