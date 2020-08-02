import React, { Component } from 'react'
import Jumpbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../../asset/headphone.jpeg'
import Header from '../Header/Header'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import SkillBar from 'react-skillbars';

import project from '../../asset/project.png';
import jira from '../../asset/jira.png';
import jupyter from '../../asset/jupyter.png';
import tableau from '../../asset/tableau.png';
import slack from '../../asset/slack.png';
import react from '../../asset/react.png'

import { Link } from "react-router-dom"

const skills = [
    { type: "Proj Mgmt", level: 90, },
    { type: "SQL", level: 85 },
    { type: "Tableau", level: 80 },
    { type: "Java", level: 75 },
    { type: "ReactJs", level: 70 },
    { type: "Python", level: 65 },
];

const colors = {
    "bar": "#33FFCC",
    "title": {
        "text": "white",
        "background": "#B9B9B9"
    }
}

class Work extends Component {
    render() {
        return (
            <Jumpbotron fluid className="site-bg" style={{ height: '100vh' }} >
                <Header />
                <Container className="text-light vertical-center text-left">         <Row className="text-light">
                    <Col className="col-6">
                        <h1 className="display-4 theme-color">Work</h1>
                        <p>
                            Part of my work experience philosophy is to learn from different industries.
                                When opportunity allows so I can <b className="highlight-color">Lead</b> with my 100% effort,
                                and be <b className="highlight-color">Resourceful</b> to <b className="highlight-color">Empower</b> the team.
                            </p>
                        <p>
                            The main area of my expertise in project management in SDLC.
                            I slowly built up my personal portfolio by working in different
                            industry to sharpen both my soft and hard skills.
                            </p>
                        <p>
                            Including Interpersonal skills as Sales,
                            PM skills as a Project Manager for CUSD,
                            full-stack development experience with ReactJs.
                            </p>
                        <p>
                            Visit my <a href="https://www.linkedin.com/in/billfengw/" className="highlight-color">Linkedin </a>
                            profile for more details or just <Link to="/contact" className="highlight-color">Contact</Link> me.
                            </p>
                    </Col>
                    <Col className="mt-5">
                        {/* <SkillBar
                            // skills={skills}
                            colors={colors} /> */}
                        <div class="list-group">
                            <div href="#" class="list-group-item list-group-item-action active">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Software Quality Assurance Engineer </h5>
                                    <small>Electric Power Research Institute, Palo Alto| Jun 2018 - Current</small>
                                </div>
                                <small>Collaborate with PM - execute proper testing scope - communicate testing result</small><br></br>
                                <small>Improve PM management knowledge base indexing</small><br></br>
                                <p class="mb-1">__Web Dev__</p>
                                <small>Develop search API ready for Coveo indexing</small><br></br>
                                <small>Implement frontend company branding standard </small>
                            </div>
                            <div href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Project Manager</h5>
                                    <small>Campbell Union School District Programs, Campbell | Feb 2019 – May 2019</small>
                                </div>
                                <small>Initiated Project Charter delivery product with a waterfall approach</small><br></br>
                                <small>Monitored and scheduling resources with MS project for scope management </small><br></br>
                                <small>Reducing the manual labor - Improved inventory processing up to 150%</small>
                            </div>
                            <div href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">UI/UX Developer </h5>
                                    <small>The Whole Food Nut, San Diego | July 2017 – Dec 2017</small>
                                </div>
                                <small>Consulted UI design | Improve branding style</small><br></br>
                                <small>Identified business requirement | work break-down tasks</small><br></br>
                                <small>Implement feasible front-end features</small><br></br>
                            </div>
                        </div>
                    </Col>
                </Row>
                </Container >
            </ Jumpbotron >
        )
    }
}

export default Work