import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHandSparkles, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';


const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">
                <img className="rounded logo-header" src={logo} alt="Logo HelpFinder, une" fluid />
                HelpFinder
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart">
                            <FaHandSparkles /> Mes Helps !
                        </Nav.Link>
                        <Nav.Link href="/login">
                            <FaUser /> Se Connecter
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Header;
