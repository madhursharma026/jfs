import Table from 'react-bootstrap/Table';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Committees() {
    return (
        <>
            <Header pageName='ourCompany' />
            <div className="container-lg" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h1 className='text-md-center px-3 mt-5' style={{ fontSize: 'calc(40px + 1.25vw)' }}><b>Board Committees</b></h1>
                <h5 className='text-md-center px-3' style={{ fontSize: '1.125rem' }}>Discover our board committees, each dedicated to managing specific responsibilities related to various aspects of operations and compliance.</h5>
                <div className="row mb-5 px-3">
                    <div className="col-md-4 mt-5">
                        <ListGroup style={{cursor: 'pointer'}}>
                            <ListGroup.Item className='fs-6 p-3' style={{ background: '#D8AA67', color: 'white', fontWeight: '500' }}>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item className='fs-6 p-3' style={{ background: '#F5F5F5', fontWeight: '500' }}>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item className='fs-6 p-3' style={{ background: '#F5F5F5', fontWeight: '500' }}>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item className='fs-6 p-3' style={{ background: '#F5F5F5', fontWeight: '500' }}>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item className='fs-6 p-3' style={{ background: '#F5F5F5', fontWeight: '500' }}>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-md-4 mt-5">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={{ fontWeight: '500' }}>Sr.</th>
                                    <th style={{ fontWeight: '500' }}>Name</th>
                                    <th style={{ fontWeight: '500' }}>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mr. Rajiv Mehrishi	</td>
                                    <td>Chairman</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Mr. Sunil Mehta	</td>
                                    <td>Member</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Mr. Bimal Manu Tanna	</td>
                                    <td>Member</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
