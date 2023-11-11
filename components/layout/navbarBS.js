import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "@/styles/layout/navbarBS.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarBS() {
    const router = useRouter();

    return (
        <Navbar expand="lg" className={styles.navbar}>
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
                            title="東北亞"
                            id="basic-nav-dropdown"
                            className={styles.choice}
                        >
                            <NavDropdown.Item
                                className={styles.item}
                                onClick={() =>
                                    router.push("/[search]", "/Japan")
                                }
                            >
                                日本
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                className={styles.item}
                                onClick={() =>
                                    router.push("/[search]", "/Korean")
                                }
                            >
                                韓國
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                className={styles.item}
                                onClick={() =>
                                    router.push("/[search]", "/China")
                                }
                            >
                                中國
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="東南亞"
                            id="basic-nav-dropdown"
                            className={styles.choice}
                        >
                            <NavDropdown.Item
                                className={styles.item}
                                onClick={() =>
                                    router.push("/[search]", "/Thailand")
                                }
                            >
                                泰國
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                className={styles.item}
                                onClick={() =>
                                    router.push("/[search]", "/Vietnam")
                                }
                            >
                                越南
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                className={styles.item}
                                onClick={() =>
                                    router.push("/[search]", "/Philippines")
                                }
                            >
                                菲律賓
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                className={styles.item}
                                onClick={() =>
                                    router.push("/[search]", "/Indonesia")
                                }
                            >
                                印尼
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="歐美紐澳"
                            id="basic-nav-dropdown"
                            className={styles.choice}
                        >
                            <NavDropdown.Item
                                className={styles.item}
                                onClick={() =>
                                    router.push("/[search]", "/America")
                                }
                            >
                                美國
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                className={styles.item}
                                onClick={() =>
                                    router.push("/[search]", "/Europe")
                                }
                            >
                                歐洲
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                className={styles.item}
                                onClick={() =>
                                    router.push(
                                        "/[search]",
                                        "/NewZealand&Australia"
                                    )
                                }
                            >
                                紐澳
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            onClick={() => {
                                router.push("/[search]", "/taiwan");
                            }}
                            className={styles.choice}
                        >
                            國內旅遊
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                router.push("/others/ticket");
                            }}
                            className={styles.choice}
                        >
                            航空訂票
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                router.push("/others/daibao");
                            }}
                            className={styles.choice}
                        >
                            代辦台胞證
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                router.push("/others/free");
                            }}
                            className={styles.choice}
                        >
                            自由行專區
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
