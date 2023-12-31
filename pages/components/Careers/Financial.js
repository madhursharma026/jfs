import { Button } from 'react-bootstrap';
import styles from '../../../styles/WorkLearnGrow/WorkLearnGrow.module.css'

export default function Financial() {
    return (
        <div className="m-3 m-lg-5 px-2">
            <div className={`container-lg px-5 py-5 ${styles.containerStyle}`}>
                <div className='text-white' style={{ maxWidth: '650px' }}>
                    <h1 style={{ fontSize: 'calc(40px + 1.25vw)', fontWeight: '900' }}><b>Build your career at Jio Financial Services</b></h1>
                    <h5>Submit your resume to apply for the first available opportunities.</h5>
                    <Button className={`${styles.exploreBtn} mt-3 px-4 py-2 mb-3`}><b>careers@jfs.in</b></Button>
                    <br /><br /><br /><br /><br />
                </div>
            </div>
        </div>
    )
}
