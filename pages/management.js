import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Management() {
    return (
        <>
            <Header pageName='ourCompany' />
            <div className="text-center container-lg" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h1 className='mt-5' style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Management</b></h1>
                <div className="row">
                    <div className={`col-md-4 col-sm-6 col-12 p-5`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/shri_hitesh_sethia.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Mr. Hitesh Kumar Sethia</b></h4>
                        <h6>President and Chief Executive Officer</h6>
                    </div>
                    <div className={`col-md-4 col-sm-6 col-12 p-5`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/charanjit.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Mr. Charanjit Attra</b></h4>
                        <h6>Group Chief Operating Officer</h6>
                    </div>
                    <div className={`col-md-4 col-sm-6 col-12 p-5`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/mr-manish-singh.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Mr. Manish Kumar Singh</b></h4>
                        <h6>Group Chief Human Resources Officer</h6>
                    </div>
                    <div className={`col-md-4 col-sm-6 col-12 p-5`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/abhishek-v1.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Mr. Abhishek Pathak</b></h4>
                        <h6>Group Chief Financial Officer</h6>
                    </div>
                    <div className={`col-md-4 col-sm-6 col-12 p-5`}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/director/mohana.png" alt="#ImgNotFound" className='w-100 p-3' />
                        <h4><b>Ms. V Mohana</b></h4>
                        <h6>Group Company Secretary and Compliance Officer</h6>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
