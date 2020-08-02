import React, { Component } from 'react';
import Jumpbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom"
import Header from '../Header/Header'


import portrait from '../../asset/portrait2.jpg';
import project from '../../asset/project.png';
import jira from '../../asset/jira.png';
import jupyter from '../../asset/jupyter.png';
import tableau from '../../asset/tableau.png';
import slack from '../../asset/slack.png';
import react from '../../asset/react.png'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



class Dashboard extends Component {

    state = {
        galleryItems: [<Image src={project} width="50%" height="50%" />,
        <Image src={jira} width="50%" height="50%" />,
        <Image src={jupyter} width="50%" height="50%" />,
        <Image src={tableau} width="50%" height="50%" />,
        <Image src={slack} width="50%" height="50%" />,
        <Image src={react} width="50%" height="50%" />,
        ].map((i) => (<h2 key={i}>{i}</h2>)),
    }

    responsive = {
        0: { items: 1 },
        1024: { items: 5 },
    }

    onSlideChange(e) {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
    }

    onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
    }

    render() {
        return (
            
            <Jumpbotron fluid className="site-bg" style={{ height: '100vh' }} >
                <Header />
                <Container className="text-light vertical-center">
                    <Row className="">
                        <Col className="col-6">
                            <span className="display-2 my-name">Bill Feng</span>
                            <br /><br />
                            <p className="lead">
                                Project Management • Business Analytic • Web Development
                            </p>
                            <Button variant="outline-info"><Link to="/contact" className="text-info">Contact Me</Link></Button>
                            <br />
                            <br />
                            <br />
                            <br />

                            <Row>
                                <AliceCarousel
                                    items={this.state.galleryItems}
                                    responsive={this.responsive}
                                    autoPlayInterval={2000}
                                    autoPlayDirection="lft"
                                    autoPlay={true}
                                    keysControlDisabled={false}
                                    dotsDisabled={true}
                                    buttonsDisabled={true}
                                    fadeOutAnimation={true}
                                    mouseDragEnabled={true}
                                    onSlideChange={this.onSlideChange}
                                    onSlideChanged={this.onSlideChanged}
                                />
                            </Row>
                        </Col>
                        <Col className="col-6">
                            <img src={portrait}
                                className="img-thumbnail"
                                width="340px"
                                height="424px">
                            </img>
                        </Col>
                    </Row>
                </Container>
            </ Jumpbotron >
        )
    }
}

export default Dashboard

