import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import obg from '../assets/obg.png'
import { ContactForm } from './utils';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';






export default function Contact() {
    return (
        <>
            <Card className="bg-dark text-white">
                <Card.Img src={obg} alt="Homepage background" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center blur-bg2">
                    <Card.Title as="h1" className='fw-bold'>Contact Us</Card.Title>
                    <Card.Text>
                        {/* A unit of <span className='primary-yellow-text'> RSN NATURAL OIL & PETROLEUM PVT. LTD.</span> */}
                    </Card.Text>
                    {/* Add more text or buttons here */}
                </Card.ImgOverlay>
            </Card>


            <div className='sbc'>
                <br /> 
                <Container  className=' p-4 brr'>
                    <Row>
                        <Col sm className='bg-white bs p-4 brr m-3' style={{height: 'max-content'}}>
                            <h3 className='ptc fw-bold'>Contact Information</h3>
                            <p className='stc text-small'>Fill up the form and our team will get to you within 24 hours.</p>

                            <p className='stc pt-3'><LocationPinIcon sx={{ color: '#fbbf22',  }} className='icon' /> Hasanganj, Jamalpur, Bihar 811214</p> 
                            <p className='stc pt-2'><MailIcon sx={{ color: '#fbbf22', }} className='icon' /> nnoc@gmail.com</p>
                            <p className='stc pt-3'><PhoneIcon sx={{ color: '#fbbf22',  }} className='icon' /> 09123 456789</p> 
                        </Col>

                        <Col sm className='bg-white bs p-4 brr m-3'>
                            <ContactForm />

                        </Col>
                    </Row>
                    
                </Container>
                <br />

            </div>

            <Container>
                <h2 className='ptc text-center p-4'>Find Us Here</h2>
                <div style={{maxWidth: '800px'}} className='m-auto pb-5'>
                     {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.835958458258!2d86.4687927777134!3d25.343285077617303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1efa878aaed89%3A0xed7f96ed70b195b5!2sNew%20Natural%20oil%20corporation!5e0!3m2!1sen!2sin!4v1762890115273!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '16px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        /> */}
                </div>
            </Container>

            {/* */}

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.835958458258!2d86.4687927777134!3d25.343285077617303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1efa878aaed89%3A0xed7f96ed70b195b5!2sNew%20Natural%20oil%20corporation!5e0!3m2!1sen!2sin!4v1762890115273!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </>
    )
}