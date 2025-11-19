// import { ImageSlider } from './utils'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import bg from '../assets/bg2.png'
import bg2 from '../assets/bg3.png'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {ContactGoto} from './utils';


function Home() {

    return (


        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={bg} alt="Homepage background" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-start blur-bg">
                    <Card.Title as="h1" className='fw-bold'>Building the Future of <br />Fueling Stations</Card.Title>
                    <Card.Text>
                        A unit of <span className='primary-yellow-text'> RSN NATURAL OIL & PETROLEUM PVT. LTD.</span>
                    </Card.Text>
                    {/* Add more text or buttons here */}
                </Card.ImgOverlay>
            </Card>


            <div className='sbc'>
                <Container>
                    <br />
                    <h1 className='ptc text-center p-4'>Our Core Services</h1>

                    <Row className=''>
                        <Col sm className='card-custom'>
                            <p className='fw-bold ptc'> <span>🌱</span> <br /> Biofuel Station Development</p>
                            <p className='custom-p'>Comprehensive design and construction of biofuel stations, including Bio Diesel, Bio Gasoline, and Bio CBG/CNG facilities, ensuring compliance with environmental and safety standards.</p>
                        </Col>
                        <Col sm className='card-custom'>
                            <p className='fw-bold ptc text-start'><span>⚡</span><br /> Electric Vehicle Charging Infrastructure</p>
                            <p className='custom-p' >Turnkey installation of fast and ultra-fast EV charging points, integrated with renewable energy systems for efficient and sustainable charging solutions.</p>
                        </Col>
                        <Col sm className='card-custom'>
                            <p className='fw-bold ptc'><span>🛢️</span><br /> Engine Oil & Lubricant Supply Systems</p>
                            <p className='custom-p'>Specialized setup and integration of engine oil dispensing systems for commercial and retail fueling stations, with advanced storage and monitoring options.</p>
                        </Col>
                    </Row>
                    <Row className='pb-5'>
                        <Col sm className='card-custom'>
                            <p className='fw-bold ptc'><span>🏗️</span><br /> Site Planning & Design</p>
                            <p className='custom-p'>End-to-end site analysis, architectural design, and permit facilitation for all types of modern fueling and EV charging stations.</p>
                        </Col>
                        <Col sm className='card-custom'>
                            <p className='fw-bold ptc'><span>🔧</span><br /> System Installation & Maintenance</p>
                            <p className='custom-p'>Certified installation and servicing of underground storage tanks (USTs), biofuel pipelines, and advanced fuel/EV management systems to ensure reliable, long-term operation.</p>
                        </Col>
                        <Col sm className='card-custom'>
                            <p className='fw-bold ptc'><span>🚉</span><br /> Fuel Station Construction</p>
                            <p className='custom-p'>From ground-up construction to commissioning, we deliver complete biofuel and multi-energy fuel stations with convenience stores and forecourt amenities.</p>
                        </Col>



                    </Row>


                </Container>
            </div>


            <Container className='flex pt-5 pb-5'>
                <Row>
                    <Col sm className='pb-4'>
                        <img src={bg2} alt="" className='bs cis' />
                    </Col>

                    <Col sm>
                        <h4 className='ptc fw-bold'>Your Trusted Partner in Fuel Station Development</h4>

                        <p className='stc'>
                            With our expertize, New Natural Oil Corporation is the industry leader in building safe, reliable, and profitable fueling stations. We merge cutting-edge technology with time-tested construction practices. <br /><br />
                        </p>
                        <EmojiEventsIcon sx={{ color: '#fbbf22' }} className='icon' /> <p className='fw-bold ptc din'>Uncompromising Safety</p>
                        <p className='stc'>Our safety-first culture ensures every project adheres to the strictest industry and environmental regulations.</p>

                        <SecurityIcon sx={{ color: '#fbbf22' }} className='icon' /><p className='fw-bold ptc din'>Quality Craftsmanship</p>
                        <p className='stc'>We use only premium materials and skilled labor to guarantee a durable and high-quality finish.</p>

                        <AccessTimeFilledIcon sx={{ color: '#fbbf22' }} className='icon' /><p className='fw-bold ptc din'>On-Time Delivery</p>
                        <p className='stc'>Our proven project management process ensures your station is operational on schedule.</p>

                    </Col>

                </Row>


            </Container>

            <ContactGoto/>

        </div>
    )
}

export default Home