import React from 'react'
import { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [aboutText, setAboutText] = useState('');
    const [delta, setDelta] = useState(100);
    const [index, setIndex] = useState(1);
    const myName = "Hi I am Prathamesh";
    const myAbout = "I am a passionate and versatile programmer with a keen interest in artificial intelligence, web development, and competitive programming. With a strong foundation in these domains, I strive to bring creativity, innovation, and practicality to every project I undertake.";
    const period = 2000;

    useEffect(() => {
        let ticker = setTimeout(() => {
            tick();
        }, delta);

        return;
    }, [text, aboutText])

    const printAbout = () => {
        console.log('inside')
        while (aboutText.length < myAbout.length) {
            console.log('inLOOp');
            let updatedText = myAbout.substring(0, aboutText.length + 1);
            setAboutText(updatedText);
            
        }
    }

    const tick = () => {
        let currText = text;

        if(currText.length === myName.length){
            setDelta(20);
            let updatedText = myAbout.substring(0, aboutText.length + 1);
            setAboutText(updatedText);
            return;
        }

        let updatedText = myName.substring(0, text.length + 1);
        setText(updatedText);
    }


    const goToConnect = () => {
        document.getElementById("connect").scrollIntoView({behavior: 'smooth'});
    }


    return (
        <div className='banner' id='home'>
            <Container>
                <Row className='aligh-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1><span className='wrap'>{text}</span></h1>
                        <p><span>{aboutText}</span></p>
                        <button onClick={goToConnect}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header-img'></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner