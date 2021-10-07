import React from 'react';
import {
  Row, Col, Container, Image,
} from 'react-bootstrap';
import image from '../assets/about.jpg';
import classes from './About.module.css';

const About = () => (
  <Container>
    <Row>
      <Col>
        <h2 className={classes.title}>About Us</h2>
        <Image src={image} fluid />
        <p className={classes.paragraph}>
          Browse over 7,000 recipes. Discover quick and easy dinners, delicious
          dessert recipes, the latest food trends and more. What will you cook
          today?
        </p>
      </Col>
    </Row>
  </Container>
);

export default About;
