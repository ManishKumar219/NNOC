import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import { Box, TextField, Button, Grid, Paper } from "@mui/material";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import user from '../assets/user.png';

export function ProfileCard(props) {
    return (
        <>
            <Card className='card-profile'>
                
                <Image src={props.image}  alt="" roundedCircle />
                
                
                <Card.Title as='p' className='fw-bold ptc'>{props.name}</Card.Title>
                <Card.Text className='primary-yellow-text fw-bold m-1'> {props.desc}</Card.Text>
                <Card.Text className='stc text-small'>Mail: {props.mail}</Card.Text>
            </Card>
        </>
    )
}



export function ContactGoto() {
    const navigate = useNavigate();

    const handleGoToContact = () => {
        navigate('/contact');
    };
    return (
        <div className='bt'>
            <Container>
                <h1 className='text-center p-4'>Ready to Start Your Next Project?</h1>

                <p className='text-center '>Let's build a state-of-the-art fueling station that drives your business forward. Contact us today for a free consultation.</p>

                <button className='cbs ptc ' onClick={handleGoToContact}>Request a Consultation</button>
                <br />

            </Container>
        </div>
    )
}


export function ContactForm() {
    return (
        <Form>
            <Row>
                <Col sm>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='form-st'>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" required />
                    </Form.Group>
                </Col>

                <Col sm>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='form-st'>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" required />
                    </Form.Group>
                </Col>
            </Row>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='form-st'>Email</Form.Label>
                <Form.Control type="email" placeholder="you@example.com" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='form-st'>Subject</Form.Label>
                <Form.Control type="text" placeholder="Question about Pricing" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='form-st'>Message</Form.Label>
                {/* <Form.Control type="textarea" placeholder="you@example.com" /> */}
                <Form.Control as="textarea" placeholder='Your message...' required />
            </Form.Group>

            <button className='cbs ptc ' variant="primary" type="submit ">
                Send Message
            </button>
        </Form>
    )
}