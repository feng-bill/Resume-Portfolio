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

import SkillBar from 'react-skillbars';

import project from '../../asset/project.png';
import jira from '../../asset/jira.png';
import jupyter from '../../asset/jupyter.png';
import tableau from '../../asset/tableau.png';
import slack from '../../asset/slack.png';
import react from '../../asset/react.png';
import { ReactComponent as Creative } from '../../asset/skill/creative.svg';
import { ReactComponent as Analyst } from '../../asset/skill/analyst.svg';
import { ReactComponent as Funny } from '../../asset/skill/funny.svg';

// import Creative from '../../asset/skill/angrycreative-brands.svg';

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

class Skills extends Component {
    render() {
        return (
            <Jumpbotron fluid className="site-bg" style={{ height: '100vh' }} >
                <Header />
                <Container className="text-light text-left" style={{paddingTop: "5vh"}}>   
                <Row className="text-light">
                    <Col className="col-9">
                        <h1 className="display-4 theme-color">Skills</h1>
                        <p >
                            I like to use what I learn from development and apply it business.
                        </p>
                    </Col>
                       
                </Row>
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="card-group">
                        <div class="col mb-4">
                            <div class="card text-dark" >
                                <span style={{fontSize: "100px"}} className="text-center"><i class="fa fa-tasks fa-lg"></i></span>
                            <div class="card-body">
                                <h5 class="card-title ">Project Management</h5>
                                <p class="card-text">SDLC implementation - Waterfall - Agile</p>
                            </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card text-dark">
                                <span style={{fontSize: "100px"}} className="text-center"><Analyst width="45%" height="45%"/></span>
                            <div class="card-body">
                                <h5 class="card-title">Business Analysis</h5>
                                <p class="card-text">Design, modify and recommend of business systems or IT systems</p>
                            </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card text-dark">
                                <span style={{fontSize: "100px"}} className="text-center"><i class="fa fa-code fa-lg"></i></span>
                            <div class="card-body">
                                <h5 class="card-title">Web Development</h5>
                                <p class="card-text">Fullstack developer - ReactJs</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="card-group">
                        <div class="col mb-4">
                            <div class="card text-dark">
                                <span style={{fontSize: "100px"}} className="text-center"><i class="fa fa-camera-retro fa-lg"></i></span>
                            <div class="card-body">
                                <h5 class="card-title">Photography</h5>
                                <p class="card-text">I like to enjoy the small things in life.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card text-dark">
                            <span style={{fontSize: "100px"}} className="text-center"><Creative width="60%" height="60%"/></span>
                            
                            <div class="card-body">
                                <h5 class="card-title">Creative</h5>
                                <p class="card-text">It is important to innovate and think outside the box; It drives business.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card text-dark">
                            <span style={{fontSize: "100px"}} className="text-center"><Funny width="45%" height="45%"/></span>
                            <div class="card-body">
                                <h5 class="card-title">Sense of Humor</h5>
                                <p class="card-text">I tend to lighten the mood and I welcome everyone.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


                </Container>
            </ Jumpbotron >
        )
    }
}

export default Skills
{/* <Row className="text-light">
                        <Col className="col-6">
                            <h1 className="display-4 theme-color">My Skills</h1>
                            <p> I do all kinds of interesting stuff</p>
                            <p>
                                Part of my work philosophy is to learn from different industries.
                                I am open to opportunities to <b className="highlight-color">Lead</b> with my 100% effort,
                                and be <b className="highlight-color">Resourceful</b> to <b className="highlight-color">Empower</b> the team.
                            </p>
                            <p>
                                The main area of my expertise is in Information Transformation. 
                                I built up my portfolio by working in different
                                industry to translate my technical expertise into business value.
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
                            <SkillBar
                                skills={skills}
                                colors={colors} />
                        </Col>
                    </Row> */}