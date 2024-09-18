import { Slider } from '../components/Slider';
import { Container, Row, Col} from 'react-bootstrap';
import { AboutComponent } from '../components/AboutComponent';
import { Teampage } from './Teampage';  
import medal from './img/medal.svg';
import coffee from './img/coffee-cup.svg';
import best from './img/best-friend.svg';
import {ReactTyped} from "react-typed";
import logo from "./img/white-and-black.png";
import {Card} from '../components/Card';
import { SwiperComponent } from '../components/SwiperComponent';

const Aboutpage = () =>{
    const cardsData = [
        {
            image: 'https://th.bing.com/th/id/OIP.D7if1CNTwcaIqBnH9UDjEQHaEq?rs=1&pid=ImgDetMain',
            title: 'Client Acquisition'
        },
        {
            image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Market Research'
        },
        {
            image: 'https://images.pexels.com/photos/4173362/pexels-photo-4173362.jpeg',
            title: 'Customer Management'
        },
        {
            image: 'https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Event Management'
        },
        {
            image: 'https://th.bing.com/th/id/OIP.rYFN3XroiCRvv6xM1Ytw0AHaFH?w=259&h=180&c=7&r=0&o=5&pid=1.7',
            title: 'Client Engagement'
        }
    ];

    return (
        <>

<div className="about-us">
      <header className="about-us-header">
        <img src={logo} alt="Salon" className="header-image About-SVG" />
        <h1>Welcome to STKT Beauty and Technology Private Limited</h1>
        <p className="ft">Find Top-Rated{" "}
        <ReactTyped strings={["Salons and Exclusive Deals with VYLEE"]} typeSpeed={50} loop backSpeed={30}/></p>
      </header>
      
      <section className="introduction">
        <p>
        At <strong> STKT Beauty and Technology Private Limited</strong>, we’re passionate about revolutionizing the salon industry with our innovative platform, <strong>VYLEE</strong>. <br/>We connects salon owners with customers, making it easier for everyone to access and enjoy highly qualified salon services.<br/> <strong>VYLEE</strong> serves as a seamless bridge between exceptional salon services and customers seeking an empowering and luxurious beauty experience.<br/> For clients, <strong>VYLEE</strong> offers an opportunity to showcase their exquisite services to a broader audience, attracting customers who appreciate and seek the highest standards of beauty care. Our platform provides a seamless interface for salons to manage appointments, promote special offers, and engage with a clientele that values luxury and refinement.<br/> For customers,<strong> VYLEE</strong> is the ultimate destination to explore a curated selection of luxury salons renowned for their vibrant, youthful, luminous, elegant, and exotic beauty services.


        </p>
      </section>
      
      <section className="our-story">
        <h2>Our Mission</h2>
        <p>
        To revolutionize the salon industry by seamlessly connecting salon owners with discerning customers through innovative, convenient, and high-quality digital solutions, ensuring access to top-notch salon services for everyone.
        </p>
      </section>
      <section className="our-story">
        <h2>Our Vision</h2>
        <p>
        To be the leading digital platform that transforms the salon industry by empowering salon owners and providing customers with exceptional beauty experiences.
        </p>
      </section>
      
      <section className="our-team">
        <h2>Meet Our Talented Team</h2>
        <div className="team-members">
          {/* Replace with actual team member data */}
          {[
            { name: 'John Doe', specialty: 'Hair Stylist' },
            { name: 'Jane Smith', specialty: 'Color Specialist' },
          ].map((member, index) => (
            <div key={index} className="team-member">
              <img src={`/path/to/team-member${index + 1}.jpg`} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.specialty}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="our-services">
        <h2>What We Offer</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {cardsData.map((card, index) => (
                <Card key={index} image={card.image} title={card.title} />
            ))}
        </div>
        {/* <ul>
          <li>Haircuts & Styling</li>
          <li>Hair Coloring</li>
          <li>Skincare Treatments</li>
          <li>Nail Services</li>
          <li>Bridal Packages</li>
        </ul> */}
      </section>
      
      <section className="commitment">
        <h2>Our Commitment to You</h2>
        <p>
          At [Salon Name], we are committed to using high-quality products and techniques that ensure your safety and satisfaction. Your comfort and happiness are our top priorities.
        </p>
      </section>
      
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>
          “The best salon experience I’ve ever had!” – [Client Name]
        </blockquote>
        <blockquote>
          “I always leave feeling like a million bucks!” – [Client Name]
        </blockquote>
      </section>
      
      <footer className="footer">
        <p>Ready for a new look? <a href="/book">Book your appointment today!</a></p>
        <div className="contact-info">
          <p>Address: [Salon Address]</p>
          <p>Phone: [Salon Phone Number]</p>
          <p>Email: [Salon Email]</p>
        </div>
        <div className="social-media">
          <a href="[Facebook URL]">Facebook</a>
          <a href="[Instagram URL]">Instagram</a>
          <a href="[Twitter URL]">Twitter</a>
        </div>
        </footer>
    </div>



         {/* <Slider />

        <AboutComponent />

        <Teampage />

        <Container fluid style={{ marginTop: "40px", marginBottom: "50px"}}>
            <Row>
                <Col className='Header text-center'>Выбирая нас Вы можете быть уверены в 3-х вещах:</Col>
            </Row>
            <Row className='d-flex justify-content-between flex-column flex-md-row text-center mt-5'>
                <Col className=''>
                    <div className="About-container ">
                        <img alt="employee" style={{marginLeft: "5px"}} src={coffee}/>
                        <div className=''>
                            <h4 style={{marginTop: "20px"}}>Уют</h4>
                            <p>ВАМ ОБЯЗАТЕЛЬНО ПРЕДЛОЖАТ ЧАШЕЧКУ АРОМАТНОГО КОФЕ ИЛИ ЧАЯ</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="About-container">
                        <img alt="employee" src={medal}/>
                        <div className=''>
                            <h4 style={{marginTop: "20px"}}>Качество</h4>
                            <p>РАБОТАЕМ ТОЛЬКО НА ПРОФЕССИОНАЛЬНЫХ МАТЕРИАЛАХ</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="About-container">
                        <img alt="employee" src={best} />
                        <div className=''>
                            <h4 style={{marginTop: "20px"}}>Результат</h4>
                            <p>ВЫ НЕ УСПЕЕТЕ ЗАМЕТИТЬ, КАК СНОВА ЗАХОТИТЕ ВЕРНУТЬСЯ К НАМ</p>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container> */}
        <SwiperComponent /> 
        </>
    )
}

export {Aboutpage};