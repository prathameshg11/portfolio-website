import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/cgpa_cal.png";
import projImg2 from "../assets/img/trackmania.png";
import projImg3 from "../assets/img/portfolio_web.png";
import projImg4 from "../assets/img/ani_gui.png";
import projImg5 from "../assets/img/voice_feature.png";
import projImg6 from "../assets/img/screen_capturer.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

function Projects() {
    const projects_tab1 = [
        {
            title: "Cgpa Calculator",
            description: "A website application made with react js which helps to calculate CGPA and SGPA",
            imgUrl: projImg1,
            url: "https://cgpa-cal.netlify.app/",
        },
        {
            title: "Trackmania",
            description: "Used Reinforcement learning to train an AI model to play Trackmania game",
            imgUrl: projImg2,
            url: "https://github.com/prathameshg11/Trackmania",
        },
        {
            title: "Personal Website",
            description: "Portfolio website made using reactJs and bootstrap",
            imgUrl: projImg3,
            url: "https://github.com/prathameshg11/portfolio-website",
        },
        {
            title: "Ani-Gui",
            description: "Used Anime API services to get information and stream URLs of required anime to play or download anime. Used Electron and Node.js to build the desktop app in Js, CSS, and HTML",
            imgUrl: projImg4,
            url: "https://github.com/prathameshg11/ani-gui",
        },
    ];

    const projects_tab2 = [
        {
            title: "Voice Feature Extractor",
            description: "Used Supervised Contrastive Learning approach to train model to distinguish between diﬀerent voices Trained model extracts style features of voice and represents them array of size 512",
            imgUrl: projImg5,
            url: "https://github.com/prathameshg11/Voice-Style-Extraction",

        },
        {
            title: "Screen Recorder",
            description: "Screen capture simple desktop app made usign nodeJs",
            imgUrl: projImg6,
            url: "https://github.com/prathameshg11/screen-capturer",

        },
    ];


    return (
        <div className='project' id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                        {/* <TrackVisibility> */}
                            {/* {({ isVisible }) => */}
                                {/* <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
                                    <h2>Projects</h2>
                                    <p>Discover a collection of intriguing projects that exemplify my skills and expertise. Each project serves as a testament to my dedication to innovation and my ability to transform ideas into impactful solutions.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> */}
                                        <Tab.Content id="slideInUp">
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects_tab1.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                            <Row>
                                                    {
                                                        projects_tab2.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                            <Row>
                                                    {
                                                        projects_tab1.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                {/* </div> */}
                                {/* } */}
                        {/* </TrackVisibility> */}
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </div>
    )
}

export default Projects