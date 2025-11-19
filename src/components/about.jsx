import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import obg from '../assets/obg.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import DoneIcon from '@mui/icons-material/Done';
import { ContactGoto } from './utils';

import user from '../assets/user.png';
import { ProfileCard } from './utils';
import SpeedIcon from '@mui/icons-material/Speed';

export default function About() {
    return (
        <>
            <Card className="bg-dark text-white">
                <Card.Img src={obg} alt="Homepage background" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center blur-bg2">
                    <Card.Title as="h1" className='fw-bold'>About Us</Card.Title>
                    <Card.Text>
                        {/* A unit of <span className='primary-yellow-text'> RSN NATURAL OIL & PETROLEUM PVT. LTD.</span> */}
                    </Card.Text>
                    {/* Add more text or buttons here */}
                </Card.ImgOverlay>
            </Card>


            <Container>
                <div className='bs p-4 m-4  stry brr'>
                    <h1 className='text-center ptc fw-bold'>Company Details</h1>
                    <br />
                    <p> <strong>COMPANY NAME</strong>  - NEW NATURAL OIL CORPORATION ( A UNIT OF RSN NATURAL OIL &
                        PETROLEUM PVT.LTD.) </p>
                    <p><strong>ADDRESS</strong> - HASANGANJ ENGLISH,P/S - KASIMBAJAR , P/O-SAFIYABAD,NEAR BY
                        JANGLI ASTHAN,JAMALPUR ,MUNGER (BIHAR)</p>

                    <p> <strong>CIN N0</strong> - U46102BR2025PTC074978 </p> <p> <strong>GST NO</strong> -10AAOCR5104R1Z4 </p>

                </div>
            </Container>

            <div className='sbc'>
                <Container>
                    <br />


                    <Row className=''>
                        <Col sm className='card-custom'>
                            <TrackChangesIcon sx={{ color: '#fbbf22', fontSize: '1.9rem' }} className=' m-2' />
                            <p className='fw-bold ptc'> Our Mission</p>
                            <p className='custom-p'>To deliver exceptional fuel station construction services that exceed client expectations while maintaining the highest standards of safety, quality, and environmental stewardship.</p>
                        </Col>
                        <Col sm className='card-custom'>
                            <VisibilityIcon sx={{ color: '#fbbf22', fontSize: '1.9rem' }} className=' m-2' />
                            <p className='fw-bold ptc'> Our Vision</p>
                            <p className='custom-p'>To be the most trusted and innovative fuel station construction company, setting industry standards for sustainable and technologically advanced fueling infrastructure.</p>
                        </Col>
                        <Col sm className='card-custom'>
                            <FavoriteIcon sx={{ color: '#fbbf22', fontSize: '1.9rem' }} className=' m-2' />
                            <p className='fw-bold ptc'> Our Values</p>
                            <p className='custom-p'><DoneIcon sx={{ color: '#fbbf22' }} /> Safety First</p>
                            <p className='custom-p'><DoneIcon sx={{ color: '#fbbf22' }} /> Quality Excellence</p>
                            <p className='custom-p'><DoneIcon sx={{ color: '#fbbf22' }} /> Environmental Responsibility</p>
                            <p className='custom-p'><DoneIcon sx={{ color: '#fbbf22' }} /> Client Partnership</p>
                        </Col>

                    </Row>

                </Container>
            </div>

            <Container>
                <h1 className='text-center ptc fw-bold pt-5'>Our Team</h1>

                <Row>
                    <Col className=''>
                        <ProfileCard image={user} name='Randhir Mondal' desc='Director' mail='abc@abc' />
                    </Col>
                    <Col className=''>
                        <ProfileCard image={user} name='Randhir Mondal' desc='Director' mail='abc@abc' />
                    </Col>
                    <Col className=''>
                        <ProfileCard image={user} name='Randhir Mondal' desc='Director' mail='abc@abc' />
                    </Col>


                </Row>

                <Row>
                    <Col className=''>
                        <ProfileCard image={user} name='Randhir Mondal' desc='Director' mail='abc@abc' />
                    </Col>
                    <Col className=''>
                        <ProfileCard image={user} name='Randhir Mondal' desc='Director' mail='abc@abc' />
                    </Col>
                    <Col className=''>
                        <ProfileCard image={user} name='Randhir Mondal' desc='Director' mail='abc@abc' />
                    </Col>

                </Row>
                <br /><br />

            </Container>


            <div className='sbc p-4'>
                <Container className=' bg-white pb-4 brr'>
                    <h1 className='ptc text-center p-4'>Our Network </h1>
                    
                    <p className='stc p-2'>We are proudly expanding our business network in  <SpeedIcon sx={{ color: '#fbbf22', fontSize: '2rem' }} className=' m-2 pb-1' /></p>

                    <div className='city'>
                        <p>Kolkata</p>
                        <p>Bihar</p>
                        <p>Jharkhand</p>
                        <p>Chhattisgarh</p>
                        <p>Jammu & Kashmir</p>
                    </div>
                </Container>
            </div>


            <ContactGoto />



        </>
    )
}