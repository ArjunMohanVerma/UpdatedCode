import { Container, Row, Col, Button, Form, Accordion } from 'react-bootstrap';
import { useState} from "react";
import { Link } from "react-router-dom";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import {InstagramLogo} from "phosphor-react";
import {YoutubeLogo, FacebookLogo} from "phosphor-react";

import InputMask from 'react-input-mask';
import "../css/Homepage.css";

// Components
import { Teampage } from './Teampage';
import { Slider } from '../components/Slider';

import { AboutComponent } from '../components/AboutComponent';
import { useAuth } from "../hook/useAuth";
import { SwiperComponent } from '../components/SwiperComponent';
import { SwiperInstagram } from '../components/SwiperInstagram';

const Homepage = () =>{


    const { serviceData, employeeData, setMail, mail, sendMail} = useAuth();

    let getEmployee = (id) => {
        return employeeData.filter( item => item.id == id).map( item => item.name)
    };

    let getTimeFromMins = (seconds) =>  {
        let minutes = seconds / 60,
            hours = minutes / 60;

        return `${Math.floor(hours % 24)}ч ${Math.floor(minutes % 60)}м` 

    };

    // Send Mail

    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMail(values => ({...values, [name]: value}));
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        mail['subject'] = 'Обратная связь. Вопрос/Предложение'

        sendMail();
        setAnswer('Your Message is sent to Us!');

        setTimeout(() => {
            setAnswer('');
        }, 10000);
    }


    return (
        <>  
            <Slider />
            <SwiperComponent />
            <AboutComponent />
            <Teampage />


            <Container className='mb-20'>
                <Row className='h-10'>

                    <Col className='Header text-center'>
                        <h2 className="decorated"><span>Have Questions?</span></h2>      
                    </Col>
                </Row>

                <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
                <MDBAccordion alwaysOpen initialActive={1}>
                <MDBAccordionItem collapseId={1} headerTitle="What is STKT Beauty and Technology Pvt Ltd?">
                <strong>STKT Beauty and Technology</strong> Pvt Ltd is a pioneering company that merges cutting-edge technology with the beauty industry. We specialize in creating innovative tech solutions to enhance beauty services, streamline salon operations, and elevate the overall customer experience. 
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle="What services does STKT Beauty and Technology Pvt Ltd offer?">
                We offer a range of services including the development of advanced beauty management software, mobile applications for salon bookings, and technology-driven beauty solutions. We aim to empower beauty professionals with the tools they need to provide exceptional services and improve business efficiency.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle="How does STKT’s technology benefit beauty salons?">
                Our technology helps beauty salons by automating appointment scheduling, managing customer records, and streamlining payment processes. This allows salons to focus more on providing high-quality services while our solutions handle the administrative tasks.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={4} headerTitle="What makes STKT different from other beauty tech companies?">
                <strong>STKT</strong> stands out by combining in-depth industry knowledge with advanced technology. Our solutions are tailored specifically for the beauty industry, ensuring they meet the unique needs of beauty professionals and their clients. We focus on delivering user-friendly, reliable, and innovative products that drive real results.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={5} headerTitle="How can beauty professionals get in touch with STKT for collaboration or inquiries?">
                Beauty professionals interested in collaborating with us or seeking more information can contact us through our website or email us at <strong>suppot@vyleesalon.in</strong>. We’re always excited to explore new partnerships and opportunities.
                </MDBAccordionItem>
            </MDBAccordion>
            </MDBContainer>
                <Row className='justify-content-center text-center'>
                    <Col className='mb-3 mt-3'>
                        <Link to={`/training`}>
                            <Button size="lg" variant="primary">Contact Us </Button>{' '}
                        </Link>
                    </Col>
                </Row>
            </Container>

            
            <Container className='News mb-20' fluid>
                <Row className='h-10'>
                        <Col className='News-Header text-center'>
                            <h2 className="decorated-white"><span>Follow us on Social Media!</span></h2>    
                        </Col>
                    </Row>

                    <SwiperInstagram />

                    <Row className='justify-content-center text-center'>
                        <Col className='mb-5 pt-4'>
                                <Button href="https://www.instagram.com/vylee.in/" size="lg" variant="primary" target="_blank">
                                <InstagramLogo size={32} color={"white"}> 
                                </InstagramLogo>
                                </Button>{' '}
                        </Col>
                        <Col className='mb-5 pt-4'>
                                <Button href="https://www.facebook.com/people/VYLEE/61561414439963/" size="lg" variant="primary" target="_blank">
                                <FacebookLogo size={32} color={"white"}> 
                                </FacebookLogo>
                                </Button>{' '}
                        </Col>
                        <Col className='mb-5 pt-4'>
                                <Button href="https://www.youtube.com/@STKTBeautyandTechnology" size="lg" variant="primary" target="_blank">
                                <YoutubeLogo size={32} color={"white"}> 
                                </YoutubeLogo>
                                </Button>{' '}
                        </Col>
                    </Row>
            </Container>

            <Container className='Contacts mb-20' fluid>
                <Row className='h-10'>
                    <Col className='Header text-center'>
                    <h2 className="decorated"><span>Contact Us for more Details!</span></h2> 
                    </Col>
                </Row>
                <Row className='d-flex flex-column flex-md-row justify-content-center h-100'>
                    <Col className='col-12 col-md-4 d-flex flex-column d-md-block align-items-center align-items-md-start col-lg-5 col-xxl-4'>
                        <Col className='Contacts-header text-left'><b>Our Address:</b></Col>
                        <Col className='Contacts-header mt-3'>
                            <p>STKT BEAUTY AND TECHNOLOGY PVT LTD</p>
                            <p>FF-229, FIRST FLOOR, TOWER A ANSAL API, PALAM</p>
                            <p>CORPORATE PLAZA, GURUGRAM, HARYANA 122017</p>
                            <p>PHONE:9319375444</p>
                            <p>EMAIL: support@vyleesalon.in</p>
                        </Col>
                    </Col>
                    <Col className='Contacts-Form col-12 col-md-6 col-xxl-4'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter Email" required onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control as={InputMask} name="tel" type="tel" mask="1(999) 999-99-99" placeholder="Enter Mobile" required onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                Enter Mobile with Country Code
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Write Your Query</Form.Label>
                                <Form.Control name="text" type="text" placeholder="Write Your Massage" required onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-center" controlId="formBasicText">
                                <Button variant="primary" type="submit" className='m-3'>
                                    SUBMIT
                                </Button>
                            </Form.Group>
                            <Col>
                                <Form.Text style={{color: "green!important", fontSize: "15px"}}>
                                    {answer}
                                </Form.Text>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export {Homepage};