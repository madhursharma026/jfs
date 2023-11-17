import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Mechanism() {
    return (
        <>
            <Header pageName='investorRelations' />
            <div className="container-lg px-4" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h1 className='text-md-center mt-5' style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Grievance Management</b></h1>
                <h5 className='text-secondary text-md-center'>The clear framework of our grievance handling mechanism ensures quick redressing of stakeholders grievances related to policies.</h5>
                <div className="row mt-5 px-3">
                    <div className="col-lg-6">
                        <h1 style={{ fontSize: 'calc(35px + 1.25vw)' }}><b>Grievance Handling Mechanism</b></h1>
                        <h5 style={{ fontSize: '1.125rem', color: '#595959' }}>We have appointed M/s. KFin Technologies Limited (KFinTech) to discharge investor service functions on behalf of the Company. KFinTech, an ISO 9002 Certified Registrar and Transfer Agent, is the largest registrar in India with a vast number of Investor Service Centres across the country. It is entrusted with handling all share-related matters including transmission, transposition, nomination, dividend, change of name/address/signature, registration of mandate/Power of Attorney, replacement/split/consolidation of share certificate/demat of shares, issue of duplicate certificates, etc. We have outlined a framework to ensure a smooth and transparent procedure for interacting with our investors. Our values are exuded in all our interactions and are enshrined by the principles of corporate governance at Jio Financial Services Limited.</h5>
                    </div>
                    <div className="col-lg-6" style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/investor-relations/grievance-mechanism/banner-desk.webp" alt="#ImgNotFound" className='w-100' style={{ borderRadius: '20px' }} />
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <Footer />
        </>
    )
}
