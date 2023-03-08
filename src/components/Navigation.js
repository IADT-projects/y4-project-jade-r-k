import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to='/' className='nav'>STATIC VS. INTERACTIVE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/static/'>STATIC</Nav.Link>
            <Nav.Link as={Link} to='/interactive/'>INTERACTIVE</Nav.Link>
          </Nav>
      </Navbar>
        </>
    );
  };
  
  export default Navigation;