import { data } from "jquery";
import React from "react";
import {
    Row,
    Col,
    Card,
    Container,
    CardBody,
    CardHeader,
} from "reactstrap";
import { json_event_annon } from "../../../assets/json/index"

export default function EventAndAnnoncement() {
    const [dataEv, setDataEv] = React.useState('')

    React.useEffect(() => {
        setDataEv(json_event_annon())
    }, []);

    return (
        <>
            <Container>
                <Row className="row-grid justify-content-between">
                    <Col md="5">
                        <div className="px-md-5">
                            <hr className="line-success" />
                            <h3>{dataEv.title}</h3>
                            <p>{dataEv.des}</p>
                            <ul className="list-unstyled mt-5">
                                {dataEv === "" ? "loading" : dataEv.fit.map((data, i) =>
                                    <li className="py-2" key={i}>
                                        <div className="d-flex align-items-center">
                                            <div className="icon icon-success mb-2">
                                                <i className={`tim-icons ${data.icon}`} />
                                            </div>
                                            <div className="ml-3">
                                                <h6>{data.name}</h6>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </Col>
                    <Col md="7">
                        <Card>
                            <CardHeader>
                                Ucapan Selamat &amp; Terimakasih
                            </CardHeader>
                            <CardBody>
                                testeeet testeeet testeeet testeeet
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
