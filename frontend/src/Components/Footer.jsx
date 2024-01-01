import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className = "bg-dark text-light">
      <Container>
        <Row className="justify-content-between" >

        <Col xs="auto" className='text-center py-3'> <a>Heba Azeef &copy; 2023</a></Col>

        <Col xs="auto" className='Text-center py-3'>
            {/* Font Awesome icons linking to social media profiles */}
            {/* Link to VCP Site */}
            <a href="https://www.yorku.ca/laps/vcp/" target="_blank" rel="noopener noreferrer">
              <FaGlobe className="social-icon" />
            </a>
            {'         '}
            
            {/* Link to VCP Facebook */}
            <a href="https://www.facebook.com/VanierCollegeProductions/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            {'         '}

            {/* Link to VCP Instagram */}
            <a href="https://www.instagram.com/vancproductions/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            {'        '}
        </Col>
        
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
