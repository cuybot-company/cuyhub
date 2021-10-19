import { data } from "jquery";
import React from "react";
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Button
} from "reactstrap";
import { json_live_chat } from "../../../assets/json/index"

export default function LiveChat() {
    const [dataMassages, setDataMassages] = React.useState('')

    React.useEffect(() => {
        setDataMassages(json_live_chat())
    }, []);


    return (
        <>
            <Card>
                <CardHeader>
                    CuyChat [LIVE]
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col xs="12" md="9">
                            <blockquote>
                                <div className="blockquote blockquote-info box-scroll">
                                    {dataMassages === '' ? 'Loading ...' :
                                        dataMassages.chat_room.map((data, i) =>
                                            <p key={i} className={data.type === 'left' ? 'small text-left' : 'small text-right'}>
                                                <span className="border border-info rounded px-1">
                                                    {data.massage}
                                                </span>
                                            </p>
                                        )}
                                </div>
                            </blockquote>
                            <InputGroup style={{ marginTop: '-16px' }}>
                                <Input placeholder="Type a massage" type="text" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <i className="tim-icons icon-triangle-right-17" />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <div className="d-flex justify-content-between">
                                <p className="small">Pengunjung Web : {dataMassages === '' ? 'Loading ...' : dataMassages.web_visitor} orang</p>
                                <p className="small">Total Chat : {dataMassages === '' ? 'Loading ...' : dataMassages.chat_room.length}</p>
                            </div>
                        </Col>
                        <Col md="3" className="pl-0 d-none d-lg-block">
                            <div className="p-1 box-scroll">
                                {dataMassages === '' ? 'Loading ...' :
                                    dataMassages.member.map((data, i) =>
                                        <div className="d-flex" key={i}>
                                            <div className={data.status == 'true' ? "online" : "offline"}>.</div>
                                            <p className="small">{data.name}</p>
                                        </div>
                                    )}
                            </div>
                            <p className="mt-2 text-center">
                                {dataMassages === '' ? 'Loading ...' : dataMassages.member.length}
                                <span className="ml-2 small">Aktif</span>
                            </p>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}
