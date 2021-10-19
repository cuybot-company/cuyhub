import { data } from "jquery";
import React from "react";
import {
    Row,
    Col,
    Card,
    Container,
    CardBody,
    CardTitle,
} from "reactstrap";
import { json_commonity_product } from "../../../assets/json/index"

export default function CommonityProduct() {
    const [dataCp, setDataCp] = React.useState('')

    React.useEffect(() => {
        setDataCp(json_commonity_product())
    }, []);

    return (
        <>
            <Container>
                <Row className="row-grid justify-content-between">
                    <Col className="mt-lg-5" md="5">
                        <Row>
                            {console.log(dataCp.product)}
                            {dataCp === "" ? 'loading' : dataCp.product.map((data, i) =>
                                <Col key={i} className="px-2 py-2" lg="6" sm="12">
                                    <Card className={i = 1 ? "card-stats" : "card-stats upper bg-default"}>
                                        <CardBody>
                                            <Row>
                                                <Col md="4" xs="5">
                                                    <div className="icon-big text-center icon-warning">
                                                        <img
                                                            alt="..."
                                                            className="img-fluid"
                                                            src={require("assets/img/icon/cuy-bot-3.png").default}
                                                            style={{ width: 250 }}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col md="8" xs="7" className="px-2">
                                                    <div className="numbers">
                                                        <CardTitle tag="p">{data.name}</CardTitle>
                                                        <p />
                                                        <p className="card-category">Member: {data.member}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Col>
                    <Col md="6">
                        <div className="pl-md-5">
                            <h1>{dataCp.title}</h1>
                            <p>{dataCp.des}</p>
                            <p>{dataCp.des2}</p>
                            <br />
                            <a
                                className="font-weight-bold text-info mt-5"
                                href="#"
                                onClick={(e) => e.preventDefault()}
                            >
                                Join ?{" "}
                                <i className="tim-icons icon-minimal-right text-info" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
