import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerimg from '../assets/images/header-img.svg';
import { useState, useEffect } from "react";

export const Banner =() =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "App Developer", "Node Js"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 2000;
    useEffect (()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta )
        return()=>{ clearInterval(ticker)};
    }, [text])
    const tick =()=>{
        let i = loopNum %toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting&&updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting&&updatedText===""){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to mt portfolio</span>
                        <h1>{`Hi I am Furqan Hassan`}<span className="wrap"> {text}</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nisi totam placeat itaque iste, libero voluptates aut exercitationem, laudantium corrupti at cupiditate commodi, illo quisquam perspiciatis. Inventore eius quaerat exercitationem!</p>
                        <button  onClick={()=>console.log("let's connect")}> Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={1}>
                        <img src={headerimg} alt="Hadder icon"></img>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}