import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className='nav'>STATIC VS. INTERACTIVE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>STATIC</Nav.Link>
            <Nav.Link>INTERACTIVE</Nav.Link>
          </Nav>
      </Navbar>
        </>
    );
  };
  
  export default Navigation;