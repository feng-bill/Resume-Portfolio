import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Jumpbotron from 'react-bootstrap/Jumbotron'
import Header from "../Header/Header"

import pmp2 from '../../asset/photo/pmp2.jpg'
import pmp1 from '../../asset/photo/pmp1.jpg'
import seagul from '../../asset/photo/seagul.jpg'
import squral from '../../asset/photo/squral.jpg'
import team1 from '../../asset/photo/team photo.jpg'
import vegas from '../../asset/photo/vegas.jpeg'
import chess from '../../asset/photo/chess.jpg'
import school1 from '../../asset/photo/school1.jpg'
import school2 from '../../asset/photo/1.jpg'
import human1 from '../../asset/photo/2.jpg'
import human2 from '../../asset/photo/3.jpg'
import vegas2 from '../../asset/photo/4.jpg'
import night1 from '../../asset/photo/5.jpg'
import castle1 from '../../asset/photo/castle1.jpg'
import castle2 from '../../asset/photo/castle2.jpg'




class Photo extends Component {
    render() {
        return (
            <Jumpbotron fluid className="bg-dark" >
                <Header/>
                <Container className="pt-3">
                    <Col className="col-9">
                        <h1 className="text-left display-6 text-light">
                            <span className="theme-color">Gallery</span></h1>
                        <p className="text-left text-white">Photography is one of the hobby that I enjoy during my leisure time.</p>

                    </Col>

                    <Row className="pb-4 ">
                        <Col xs={6} md={4}>
                            <Image src={pmp1} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={pmp2} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={team1} thumbnail />
                        </Col>
                    </Row>
                    <Row className="pb-4">
                        <Col xs={6} md={4}>
                            <Image src={seagul} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={vegas} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={squral} thumbnail />
                        </Col>
                    </Row>
                    <Row className="pb-4">
                        <Col xs={6} md={4}>
                            <Image src={chess} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={school2} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={human2} thumbnail />
                        </Col>
                    </Row>
                    <Row className="pb-4">
                        <Col xs={6} md={4}>
                            <Image src={castle2} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={castle1} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={vegas2} thumbnail />
                        </Col>
                    </Row>
                    <Row className="pb-4">
                        <Col xs={6} md={4}>
                            <Image src={human1} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={school1} thumbnail />
                        </Col>
                    </Row>
                </Container>
            </Jumpbotron>
        )
    }
}

export default Photo