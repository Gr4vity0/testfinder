import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHandSparkles, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';


const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
            <LinkContainer to='/'>
                <Navbar.Brand>
                    <img className="rounded logo-header" src={logo} alt="Logo HelpFinder, une" fluid />
                    HelpFinder
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <LinkContainer to="/cart">
                        <Nav.Link>
                            <FaHandSparkles /> Mes Helps !
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>
                            <FaUser /> Se Connecter
                        </Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Header;
