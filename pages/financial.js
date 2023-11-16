import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Financial() {
    return (
        <>
            <Header pageName='investorRelations' />
            <div className="mt-5 container-lg" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h1 className='text-center' style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Financial Documents</b></h1>
                <h5 className='text-secondary text-center'>Our vision is to digitally deliver a range of financial products to promote the financial well-being of the people of India.</h5>


                <div className="row mb-5">
                    <div className="col-md-3 mt-5">
                        <ListGroup style={{ cursor: 'pointer' }}>
                            <ListGroup.Item className='fs-6 p-3' style={{ background: 'transparent', fontWeight: '500' }}><b>Select Document</b></ListGroup.Item>
                            <ListGroup.Item className='fs-6 p-3' style={{ background: 'transparent', fontWeight: '500' }}>
                                <input type="radio" defaultChecked /> Annual Reports
                            </ListGroup.Item>
                            <ListGroup.Item className='fs-6 p-3' style={{ background: 'transparent', fontWeight: '500' }}>
                                <input type="radio" /> Reports
                            </ListGroup.Item>
                            <ListGroup.Item className='fs-6 p-3' style={{ background: 'transparent', fontWeight: '500' }}>
                                <input type="radio" /> Quarterly Results
                            </ListGroup.Item>
                            <ListGroup.Item className='fs-6 p-3' style={{ background: 'transparent', fontWeight: '500' }}>
                                <input type="radio" /> Financial statements of subsidiaries
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-md-9 mt-5">
                        <h5 className="text-center">FY2017-2018</h5>
                        <ul class="list-group px-5 mt-5">
                            <li class="list-group-item p-3" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', border: '0', fontSize: '18px', cursor: 'pointer' }}><i class="fa fa-envelope"></i> &nbsp; Annual Report 2017-18
                                <span style={{ float: 'right' }}><i class="fa fa-download" ></i></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
