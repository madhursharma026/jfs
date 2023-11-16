import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Notices() {
    return (
        <>
            <Header pageName='investorRelations' />
            <div className="mt-5 container-lg" style={{ maxWidth: '900px', margin: 'auto' }}>
                <h1 className='text-center'><b>Notices</b></h1>
                <h5 className='text-center text-muted'>Here, you'll find all the latest updates on important events.</h5>

                <div className="mb-5">
                    <ul class="list-group px-lg-5">
                        <li class="list-group-item p-3 mt-3" style={{ fontSize: '18px', borderRadius: '20px', cursor: 'pointer' }}>
                            <span className='fs-6'>October 19, 2023</span>
                            <br />
                            <span className='fs-5' style={{ color: '#B08B53' }}>Transcript of Presentation on Unaudited Financial Results</span>
                            <span style={{ float: 'right' }}><i class="fa fa-download" ></i></span>
                        </li>
                        <li class="list-group-item p-3 mt-3" style={{ fontSize: '18px', borderRadius: '20px', cursor: 'pointer' }}>
                            <span className='fs-6'>October 19, 2023</span>
                            <br />
                            <span className='fs-5' style={{ color: '#B08B53' }}>Transcript of Presentation on Unaudited Financial Results</span>
                            <span style={{ float: 'right' }}><i class="fa fa-download" ></i></span>
                        </li>
                        <li class="list-group-item p-3 mt-3" style={{ fontSize: '18px', borderRadius: '20px', cursor: 'pointer' }}>
                            <span className='fs-6'>October 19, 2023</span>
                            <br />
                            <span className='fs-5' style={{ color: '#B08B53' }}>Transcript of Presentation on Unaudited Financial Results</span>
                            <span style={{ float: 'right' }}><i class="fa fa-download" ></i></span>
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    )
}
