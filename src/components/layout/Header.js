import { Navbar, Container, Nav } from "react-bootstrap"

export default function Header () {
     return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">EM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
     )
 }
