import React, { Component } from 'react'
import Jumpbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Header/Header';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


import logo from '../../asset/headphone.jpeg'
import campbell from '../../asset/campbell.png'
import forum from '../../asset/forum.jpg'
import yelp from '../../asset/yelp.jpg'
import library from '../../asset/library.jpg'
import casestudy from '../../asset/casestudy.png'

import resume from "../../asset/Resume.pdf"


class Projects extends Component {
    render() {
        return (
            <Jumpbotron fluid className="site-bg" style={{ height: '' }} >
            <Header />
            <Container className="text-light text-left" style={{paddingTop: "30px"}}>  
                  <Row className="text-light">
                        <Col className="col-9">
                            <h1 className="display-4 theme-color">Projects</h1>
                            <p >
                            Translate strong technical understanding into business value. My work experience can be found 
                            <a
                                href={resume}
                                // className="fa fa-file-text-o text-light"
                                target="_blank" 
                                > here</a>
                            </p>
                        </Col>
                       
                    </Row>
                    <div class="card mb-3" style={{maxWidth: '80%'}}>
                        <a href="https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/fec957ce-9e2b-4e83-b66c-ae750ffc4874/view?access_token=8b425eb63d9da319e24491f5164296bde48eb099f75e2b1daae24f2efd2acc96" target="_blank" className="imgSize">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={yelp} class="card-img" alt="yelp"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title">Yelp Data Analytic</h5>
                                        <p class="card-text">Processed 5GB of Yelp Dataset using Apache Spark DataFrame..</p>
                                        <p class="card-text">Manipulated and analyze data on Tableau for business reporting.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="card mb-3" style={{maxWidth: '80%'}}>
                        {/* <a href="https://github.com/feng-bill/Library_Catalog" target="_blank" className="imgSize"> */}
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={casestudy} class="card-img" alt="Rock Solid inc case study"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title">Small Business Digital Transformation Analysis </h5>
                                        <p class="card-text">Developed a business analysis report for the effective use of information systems and technology to create a competitive advantage in an organization.</p>
                                        <p class="card-text">Outlined implementation changes to an organization’s process, technologies, and people aspect to reduce 70% IT change fail rate. </p>

                                    </div>
                                </div>
                            </div>
                        {/* </a> */}
                    </div>
                    <div class="card mb-3" style={{maxWidth: '80%'}}>
                        {/* <a href="https://quadrapod-forum.herokuapp.com" target="_blank" className="imgSize"> */}
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={casestudy} class="card-img" alt="casestudy"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title">Strategic Analysis & Planning </h5>
                                        <p class="card-text">Diagnosed struggling companies with multi-disciplinary techniques, and frameworks; recommend strategic action plans to gain competitive advantage and sustainability. </p>
                                        <p class="card-text">Analyzed the competitive Fintech industry environment; Identified Western Union’s position relative to the industry; provided strategic actions for Western Union to take for competitive advantage and sustainability.</p>

                                        
                                    </div>
                                </div>
                            </div>
                        {/* </a> */}
                    </div>
                    <div class="card mb-3" style={{maxWidth: '80%'}}>
                        <a href="https://quadrapod-forum.herokuapp.com" target="_blank" className="imgSize">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={forum} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title">Student Forum | ReactJs Fullstack</h5>
                                        <p class="card-text">RESTful API with POST, GET, DELETE method.</p>
                                        <p class="card-text">Designed and Developed Front-end & Back-end architecture.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="card mb-3" style={{maxWidth: '80%'}}>
                        <a href="https://github.com/feng-bill/PM_Inventory_Solution" target="_blank" className="imgSize">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={campbell} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title">Campbell School District | Project Manager</h5>
                                        <p class="card-text">Oriented team of 4 and delivered software application in 3 months with SDLC methodology.</p>
                                        <p class="card-text">Analyzed and discussed project sponsor’s requirements and developed WBS in project planning meeting.</p>
                                        <p class="card-text">Monitored and coordinated resources to deliver the software on time with 100% completion.</p>
                                        
                                        <p class="card-text">Improved inventory process by up to 150% with software automation. </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                   
                    <div class="card mb-3" style={{maxWidth: '80%'}}>
                        <a href="https://github.com/feng-bill/Library_Catalog" target="_blank" className="imgSize">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={library} class="card-img" alt="library"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title">Library Catelog | Access Realtional DB</h5>
                                        <p class="card-text">Developed Relational library catalog system in MS Access.</p>
                                        <p class="card-text">Implement agile development life cycle and SDLC.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </Container>
            </ Jumpbotron >


        )
    }
}

export default Projects