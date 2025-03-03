import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import navicon1 from '../assets/images/navicon1.svg';
import navicon2 from '../assets/images/navicon2.svg';
import navicon3 from '../assets/images/navicon3.svg';

export const NavBar =()=>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            if (window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    const onUpdateActiveLink =(value)=>{
        setActiveLink(value);
    }

    return(
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='Navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link" } onClick={()=> onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link" } onClick={()=> onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#Projeccts" className={activeLink === "projects" ? "active navbar-link" : "navbar-link" } onClick={()=> onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><img src={navicon1} alt="" /></a>
                <a href='#'><img src={navicon2} alt="" /></a>
                <a href='#'><img src={navicon3} alt="" /></a>
            </div>
            <button className='vvd' onClick={()=>console.log("connect")}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}