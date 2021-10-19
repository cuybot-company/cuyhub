import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingNavbar from "components/Navbars/LandingPage/index.js";
import LiveChat from "components/Section/ChatLive";
import TopMember from "components/Section/TopMember";
import CuyGame from "components/Section/CuyGame";
import CommonityProduct from "components/Section/CommonityProduct";
import EventAndAnnoncement from "components/Section/EventAndAnnoncement";
import Footer from "components/Footer/Footer.js";
import bigChartData from "variables/charts.js";
import { json_commpony } from "../assets/json/index";

export default function LandingPage() {
  const [datas, setDatas] = React.useState("");

  React.useEffect(() => {
    setDatas(json_commpony());
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  const viewBg = () => {
    return (
      <>
        <img
          alt="..."
          className="path"
          src={require("assets/img/blob.png").default}
        />
        <img
          alt="..."
          className="path2"
          src={require("assets/img/path2.png").default}
        />
        <img
          alt="..."
          className="shapes triangle"
          src={require("assets/img/triunghiuri.png").default}
        />
        <img
          alt="..."
          className="shapes wave"
          src={require("assets/img/waves.png").default}
        />
        <img
          alt="..."
          className="shapes squares"
          src={require("assets/img/patrat.png").default}
        />
        <img
          alt="..."
          className="shapes circle"
          src={require("assets/img/cercuri.png").default}
        />
      </>
    );
  };
  return (
    <>
      <LandingNavbar title={datas.name} greeting={datas.greeting} />
      <div className="wrapper">
        {/* Section - 1 */}
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
            <Container>
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col xs="12" md="6">
                  <LiveChat />
                </Col>
                <Col xs="12" md="2" className="px-0">
                  <TopMember />
                </Col>
                <Col xs="12" md="4">
                  <CuyGame />
                </Col>
              </Row>
            </Container>
          </section>
        </section>

        {/* Section - 2 */}
        <div className="page-header">
          {viewBg()}
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  {datas.H1} <br />
                </h1>
                <p className="text-white mb-3">{datas.des}</p>
                <div className="btn-wrapper">
                  <div className="button-container">
                    {datas === ""
                      ? null
                      : datas.link.map((data, i) => (
                          <Button
                            key={i}
                            className="btn-icon btn-simple btn-round btn-neutral"
                            color="default"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className={`fab ${data.icon}`} />
                          </Button>
                        ))}
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                <div>
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/icon/cuy-bot-3.png").default}
                  />
                  <div className="ml-2">
                    <h4>Karya terlaris dari komunitas</h4>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <section className="section section-lg">
          {/* Section - 3 */}
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
            <CommonityProduct />
          </section>
        </section>

        {/* Section - 4 */}
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png").default}
          />

          <EventAndAnnoncement />
        </section>
        <section className="section section-lg">
          {/* <img
                        alt="..."
                        className="path"
                        src={require("assets/img/path4.png").default}
                    />
                    <img
                        alt="..."
                        className="path2"
                        src={require("assets/img/path2.png").default}
                    /> */}
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <hr className="line-info" />
                    <h5 className="card-category">Grafik Perkembangan</h5>
                    <CardTitle tag="h2">Member Cuyhub</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </section>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png").default}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Produk Digital Kreasi{" "}
                  <span className="text-info">Seniman CuyTeams</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Cuy BOT</h4>
                        <span>Asisten virtual</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>data cuaca</ListGroupItem>
                        <ListGroupItem>info covid-19</ListGroupItem>
                        <ListGroupItem>kutipan pilihan</ListGroupItem>
                        <ListGroupItem>fitur menarik lainnya</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      COBA SEKARANG
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/etherum.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Cuy Games</h4>
                        <span>Game Terbaik Kami</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>perang gambar</ListGroupItem>
                        <ListGroupItem>bercocok tanam</ListGroupItem>
                        <ListGroupItem>badut petak umpet</ListGroupItem>
                        <ListGroupItem>Games menarik lainnya</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      MAIN SEKARANG
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ripp.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">cuy course</h4>
                        <span>Plan</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>tips &amp; trik</ListGroupItem>
                        <ListGroupItem>livechat support</ListGroupItem>
                        <ListGroupItem>gift &amp; sertifikasi digital</ListGroupItem>
                        <ListGroupItem>video tutorial pembelajaran</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      IDR. 199.000,-
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
