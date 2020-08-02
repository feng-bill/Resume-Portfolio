import React, { Component } from 'react';
import Jumpbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import gif from '../../asset/project management.gif';
import Header from '../Header/Header'

class About extends Component {
    render() {
        return (
            <Jumpbotron fluid className="site-bg" style={{ height: '100vh' }} >
            <Header />
            <Container className="text-light vertical-center text-left">  
                    <Row>
                        <Col className="col-6">
                            <h1 className="display-4 theme-color">About me</h1>
                            <p>
                            I am an undergraduate who studied Management Information Systems and Computer Science at San Jose State University. 
                            </p>
                            <p>First, I am a computer science student who has strong logical thinking in solving problems systematically. </p>
                            <p>In combination with my business knowledge, I learned to translate my technical understanding into relevant business value. </p>
                            <p>Second, I had varies, cross-functional industry/project experience</p>
                            <p>Including project management, quality assurance, software development, data analytics, business digital transformation analysis. </p>
                        
                        </Col>
                        <Col className="col-6">
                            <img
                                src={gif}
                                alt="loading"
                                width="115%"
                                height="100%"
                            >
                            </img>
                        </Col>
                    </Row>
                </Container>
            </ Jumpbotron >
        )
    }
}

export default About

    {/* <p >
                                My passion in Project Management focusing in SDLC was transpire through many great mentors.
                                Project team member work with software life cycle process. 
                                Strong observational and analytical skill demonstrated by taking initiatives to 
                                communicate with team members and improve team environment.  
                                Proficient in project management skills and technical development. 
                            </p>
                            <p>
                                2015 - Introduced to programing with a strong Java fundamental.
                                I took the initiative to continue to explore web-development and data analytic.
                            </p>
                            <p >
                                2016-2019 - With my experience in development, I want to contribute 
                                my knowledge in programming and add value to the project development.
                            </p>
                            <p>
                                2019 - Project Management Bootcamp- CAPM Certification(Pending)
                            </p> */}