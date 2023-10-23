import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "@/styles/layout/navbarBS.module.css";

export default function NavbarBS() {
    return (
        <Navbar expand="lg" className="">
            <Container className={styles.container}>
                <Navbar.Brand href="/" className={styles.title}>
                    <img
                        src="/traveling/title2.png"
                        alt="title"
                        className={styles.titleImg}
                    ></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basi  c-navbar-nav" />

                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={styles.navBox}
                >
                    <Nav className={styles.nav}>
                        <NavDropdown
                            title="海外旅遊"
                            id="basic-nav-dropdown"
                            className={styles.choice}
                        >
                            <NavDropdown.Item
                                href="#action/3.1"
                                className={styles.Item}
                            >
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="國內旅遊"
                            id="basic-nav-dropdown"
                            className={styles.choice}
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home" className={styles.choice}>
                            航空訂票
                        </Nav.Link>
                        <Nav.Link href="#link" className={styles.choice}>
                            代辦台胞證
                        </Nav.Link>
                        <Nav.Link href="#link" className={styles.choice}>
                            自由行專區
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
