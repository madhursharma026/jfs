import { Button } from 'react-bootstrap';
import styles from '../../../styles/WorkLearnGrow/WorkLearnGrow.module.css';

export default function WorkLearnGrow() {
    return (
        <div className="m-3 m-lg-5">
            <div className={`container-lg px-lg-5 px-3 py-5 ${styles.containerStyle}`}>
                <div className='text-white' style={{ maxWidth: '600px' }}>
                    <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Work, learn and grow</b></h1>
                    <h5>Join our diverse workforce to explore learning opportunities and experience continuous growth.</h5>
                    <Button className={`${styles.exploreBtn} mt-3 px-4 py-2 mb-3`}><b>Explore</b></Button>
                </div>
            </div>
        </div>
    )
}
