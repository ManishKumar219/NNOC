// import { ImageSlider } from './utils'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import MailIcon from '@mui/icons-material/Mail';

export default function Footer() {
    return (
        <>

            

            <div className='fc p-3'>
                {/* <Container> */}
                <Row>
                    <Col>
                        <br />
                        <p className='fw-bold primary-yellow-text'>New Natural Oil Corporation</p>
                        <p className='stc text-small'>A unit of RSN NATURAL OIL & PETROLEUM PVT. LTD.</p>
                    </Col>

                    <Col className='text-center'>
                        <p className='fw-bold'>Company</p>
                        <p><a href="/about" className='stc link'> About us</a></p>
                        <p><a href="/gallery" className='stc link'> Gallery</a></p>
                        <p><a href="/contact" className='stc link'> Contact</a></p>

                    </Col>

                    <Col className='text-center'>
                        <p className='fw-bold'>Contact Us</p>
                        <p className='stc'><LocationPinIcon sx={{ color: '#fbbf22', fontSize: '1.2em' }} />Hasanganj, Jamalpur, Bihar 811214</p>
                        <p className='stc'><MailIcon sx={{ color: '#fbbf22', fontSize: '1.2em' }} /> newnaturaloilcorporation@gmail.com</p>
                        <p className='stc'><MailIcon sx={{ color: '#fbbf22', fontSize: '1.2em' }} /> rsnpetroleum@gmail.com</p>

                    </Col>
                </Row>
                {/* </Container> */}

            </div>

        </>
    )
}