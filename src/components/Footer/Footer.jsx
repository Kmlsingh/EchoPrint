import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>EchoPrint</h1>
              </div>
              <p>Welcome to EchoPrint, your one-stop shop for all your custom printing needs. We offer high-quality photo framing, t-shirt printing, and image printing on cups, cutlery, and pens.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>Somnath Photframing, Haldwani, Uttrakhand, India</li>
                <li>Email: support@echoprint.in</li>
                <li>Phone: +91 72486 70069</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer