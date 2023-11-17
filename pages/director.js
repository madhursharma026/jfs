import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Directors() {
    return (
        <>
            <Header pageName='ourCompany' />
            <div className="text-md-center px-3 container-lg" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h1 className='mt-5' style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Board of Directors</b></h1>
                <h6>Meet our Board of Directors who share a unified vision and provide unwavering support to the success and growth of the organisation.</h6>
                <div className="row">
                    <div className={`col-md-4 col-sm-6 col-12 p-5 text-center`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/kamath.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Mr. Kundapur Vaman Kamath</b></h4>
                        <h6>Independent Director and Non-executive chairman</h6>
                    </div>
                    <div className={`col-md-4 col-sm-6 col-12 p-5 text-center`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/shri-rajiv-mehrishi.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Mr. Rajiv Mehrishi</b></h4>
                        <h6>Independent Director</h6>
                    </div>
                    <div className={`col-md-4 col-sm-6 col-12 p-5 text-center`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/shri-sunil-mehta.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Mr. Sunil Mehta</b></h4>
                        <h6>Independent Director</h6>
                    </div>
                    <div className={`col-md-4 col-sm-6 col-12 p-5 text-center`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/shri-bimal-manu-tanna.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Mr. Bimal Manu Tanna</b></h4>
                        <h6>Independent Director</h6>
                    </div>
                    <div className={`col-md-4 col-sm-6 col-12 p-5 text-center`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/shri-sethuraman.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Mr. Sethuraman Kandasamy</b></h4>
                        <h6>Non-Independent and Non-Executive Director</h6>
                    </div>
                    <div className={`col-md-4 col-sm-6 col-12 p-5 text-center`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/shri-jagannath-kumar.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Mr. Jagannatha Kuma</b></h4>
                        <h6>Non-Independent and Non-Executive Director</h6>
                    </div>
                    <div className={`col-md-4 col-sm-6 col-12 p-5 text-center`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/smt-jayashri-rajesh.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Ms. Jayashri Rajesh</b></h4>
                        <h6>Non-Independent and Non-Executive Directo</h6>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
