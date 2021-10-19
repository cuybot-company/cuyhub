import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";
import { LiveTime } from "../../../utils/LiveTime"

export default function LandingNavbar(props) {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [collapseOut, setCollapseOut] = React.useState("");
    const [color, setColor] = React.useState("navbar-transparent");

    React.useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return function cleanup() {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    const changeColor = () => {
        if (
            document.documentElement.scrollTop > 99 ||
            document.body.scrollTop > 99
        ) {
            setColor("bg-info");
        } else if (
            document.documentElement.scrollTop < 100 ||
            document.body.scrollTop < 100
        ) {
            setColor("navbar-transparent");
        }
    };

    const toggleCollapse = () => {
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(!collapseOpen);
    };

    const onCollapseExiting = () => {
        setCollapseOut("collapsing-out");
    };

    const onCollapseExited = () => {
        setCollapseOut("");
    };

    return (
        <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">

            <Container>
                <div className="navbar-translate">
                    <NavbarBrand to="/" id="navbar-brand" tag={Link}>
                        <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/icon/cuy-hub-4.png").default}
                            style={{ width: "150px" }}
                        />
                    </NavbarBrand>

                    <button
                        aria-expanded={collapseOpen}
                        className="navbar-toggler navbar-toggler"
                        onClick={toggleCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <div className="d-none d-lg-block">
                    {LiveTime()}
                </div>

                <Collapse
                    className={"justify-content-end " + collapseOut}
                    navbar
                    isOpen={collapseOpen}
                    onExiting={onCollapseExiting}
                    onExited={onCollapseExited}
                >
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <img
                                    alt="..."
                                    className="img-fluid mb-2"
                                    src={require("assets/img/icon/cuy-hub-4.png").default}
                                    style={{ width: "150px" }}
                                />
                                {LiveTime()}
                            </Col>
                            <Col className="collapse-close text-right" xs="6">
                                <button
                                    aria-expanded={collapseOpen}
                                    className="navbar-toggler"
                                    onClick={toggleCollapse}
                                >
                                    <i className="tim-icons icon-simple-remove" />
                                </button>
                            </Col>
                        </Row>
                    </div>

                    <Nav navbar>
                        <NavItem>
                            <Button
                                className="nav-link text-white d-none d-lg-flex"
                                color="primary"
                                target="_blank"
                                href="#"
                            >
                                <i className="tim-icons icon-spaceship" />
                                {props.greeting?.map((data, i) =>
                                    <span key={i}>
                                        {data.label}
                                    </span>
                                )}
                            </Button>
                        </NavItem>
                        <NavItem className="pr-0">
                            <img
                                alt="..."
                                className="img-fluid rounded-circle shadow-lg"
                                src={require("assets/img/lora.jpg").default}
                                style={{ width: "40px" }}
                            />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}
