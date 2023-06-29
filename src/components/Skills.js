import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import cppIcon from "../assets/img/c-plusplus.svg";
import pythonIcon from "../assets/img/python.svg";
import jsIcon from "../assets/img/javascript.svg";
import htmlICon from "../assets/img/html-5.svg";
import cssIcon from '../assets/img/css-3.svg';
import pytchIcon from "../assets/img/pytorch-icon.svg";

function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Harnessing an array of skills, I possess a dynamic range of abilities<br></br> that set me apart in the realm of Technology and Innovation.</p>
                            <Carousel responsive={responsive} infinite={true} autoPlaySpeed={2000} autoPlay={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={cppIcon} alt="CPP" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={pythonIcon} alt="Python" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={jsIcon} alt="Javascript" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={htmlICon} alt="HTML" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={cssIcon} alt="CSS" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={pytchIcon} alt="pytch" />
                                    <h5>Pytorch</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt='back'/>
        </div>
    )
}

export default Skills