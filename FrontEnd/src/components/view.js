import {ThemeContext} from "../ThemeContext";
import {Link} from "react-router-dom";
import {
    Button,
    NavDropdown,
    Navbar,
    Nav,
    ButtonGroup,
    ToggleButton,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {FaAdjust} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useContext} from "react";
import "../styles/view.css";

function NavbarComponent() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const backColor = theme === "light" ? "white" : "black";

    return (
        <div className={`my-component theme-${theme}`} style={{backColor}}>
            <header className="header custom-header">
                <Container>
                    <Navbar expand="lg" variant="light" className="custom-navbar">
                        <Navbar.Brand as={Link} to="/" className="logo">
                            CardioVISION
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="mr-auto">
                                <ButtonGroup>
                                    <ToggleButton variant="outline-secondary" onClick={toggleTheme}>
                                        <FaAdjust/>
                                    </ToggleButton>
                                </ButtonGroup>
                                <Nav.Link as={Link} to="#home">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="#features">
                                    Features
                                </Nav.Link>
                                <Nav.Link as={Link} to="#about">
                                    About
                                </Nav.Link>
                                <NavDropdown title="Languages" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#">English</NavDropdown.Item>
                                    <NavDropdown.Item href="#">عربي</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
            <main>
                <Row fluid>
                    <Col>
                        <div className="intro" id="home">
                            <h1>Welcome To CardioVISION</h1>
                            <p>It's Your Way To a Healthier Life</p>
                            <Link to="/sign-up">
                                <Button variant="primary">let's Sign Up</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            <div className="achievements" id='features'>
                                <Row>
                                    <Col md={4}>
                                        <div className="work">
                                            <i className="fas fa-atom"/>
                                            <p className="work-heading">Who We Are</p>
                                            <p className="work-text">
                                                We are a team of developers that decided to create this
                                                website to help others improving there health.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="work" id='features'>
                                            <i className="fas fa-skiing"/>
                                            <p className="work-heading">Features</p>
                                            <p className="work-text">
                                                We collect data from patients and process on it to
                                                predict percentage of there exposure to ischemic heart disease
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="work" id='features'>
                                            <i className="fas fa-ethernet"/>
                                            <p className="work-heading">Goals</p>
                                            <p className="work-text">
                                                We aim to end up with best results & most accurate accuracy
                                            </p>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="about-me" id='about'>
                                <div className="about-me-text">
                                    <h2>About Ischemic Heart Disease</h2>
                                    <p>
                                        It's a heart problems caused by narrowed heart arteries.
                                        When arteries are narrowed, less blood and oxygen reach the heart muscle.
                                        This is also called coronary artery disease and coronary heart disease.
                                        This can lead to heart attack.
                                    </p>
                                </div>
                                <img
                                    src="https://images.ctfassets.net/uq0sg0aynn6a/1MzuLwYkDvFO4CxwSmrnyj/d8df23d94200328d0d182b149bdc1eb4/Ischemic_Heart_Disease.jpg"
                                    alt="me"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Container>
                <Row>
                    <Col>
                        <footer className={`my-component theme-${theme} footer`} style={{backColor}}>
                            <div className="copy">© 2023 Developer</div>
                            <div className="bottom-links">
                                <div className="links">
                                    <span>More Info</span>
                                    <a href="#home">Home</a>
                                    <a href="#features">Features</a>
                                    <a href="#about">About</a>
                                </div>
                                <div className="links">
                                    <span>Connect With Us</span>
                                    <a href="https://www.facebook.com">
                                        <FontAwesomeIcon icon={faFacebook}/>
                                    </a>
                                    <a href="https://www.twitter.com">
                                        <FontAwesomeIcon icon={faTwitter}/>
                                    </a>
                                    <a href="https://www.linkedin.com">
                                        <FontAwesomeIcon icon={faLinkedin}/>
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NavbarComponent;


