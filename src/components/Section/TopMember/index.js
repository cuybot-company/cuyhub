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
import { json_top_member } from "../../../assets/json/index"

export default function TopMember() {
    const [dataTm, setDataTm] = React.useState('')

    React.useEffect(() => {
        setDataTm(json_top_member())
    }, []);

    const sortByProperty = (property) => {
        return function (a, b) {
            if (a[property] < b[property])
                return 1;
            else if (a[property] > b[property])
                return -1;

            return 0;
        }
    }


    return (
        <>
            <Card>
                <CardHeader>
                    Top 20 Member
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col xs="12">
                            <div className="p-1 box-scroll">
                                {dataTm == '' ? 'Loading ...' :
                                    dataTm.member.sort(sortByProperty("poin")).map((data, i) =>
                                        <div className="d-flex" key={i}>
                                            <h6 className="font-weight-bold pr-1 mb-1">{i + 1}.</h6>
                                            <div>
                                                <p className="mb-0 font-weight-bold" style={{fontSize: 12}}>{data.name}</p>
                                                <p className="mb-0 font-italic" style={{fontSize: 8}}>({data.poin})</p>
                                            </div>
                                        </div>
                                    )}
                            </div>
                            <div className="d-flex justify-content-between mt-2 mb-3">
                                <p className="small">Total Member : {dataTm === '' ? 'Loading ...' : dataTm.member.length} orang</p>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}
