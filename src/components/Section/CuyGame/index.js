import React from "react";
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button
} from "reactstrap";
import { json_top_member, json_top_game } from "../../../assets/json/index"

export default function CuyGame() {
    const [dataTm, setDataTm] = React.useState('')
    const [dataTg, setDataTg] = React.useState('')

    React.useEffect(() => {
        setDataTm(json_top_member())
        setDataTg(json_top_game())
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
                    CuyGames Leaderboard
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col xs="6">
                            <div className="p-1 box-scroll">
                                {dataTm == '' ? 'Loading ...' :
                                    dataTm.member.sort(sortByProperty("poin")).map((data, i) =>
                                        <div className="d-flex" key={i}>
                                            <h6 className="font-weight-bold pr-1 mb-1">{i + 1}.</h6>
                                            <div>
                                                <p className="mb-0 font-weight-bold" style={{ fontSize: 12 }}>{data.name}</p>
                                                <p className="mb-0 font-italic" style={{ fontSize: 8 }}>({data.poin})</p>
                                            </div>
                                        </div>
                                    )}
                            </div>
                            <div className="d-flex justify-content-between mt-2 mb-3">
                                <p className="small">Gamers Aktif : {dataTm == '' ? 'Loading ...' : dataTm.member.length} orang</p>
                            </div>
                        </Col>
                        <Col xs="6">
                            <Row className="p-1 mr-0 box-scroll">
                                {dataTg === '' ? 'loading' : dataTg.game.map((data, i) =>
                                    <Col xs="6" key={i}>
                                        <img
                                            alt="..."
                                            className="img-fluid"
                                            src={require("assets/img/icon/cuy-bot-3.png").default}
                                            style={{ width: 120 }}
                                        />
                                        <p className="small">{data.name}</p>
                                    </Col>
                                )}
                            </Row>
                            <Button
                                className="nav-link d-none d-lg-block mt-4"
                                color="default"
                            >
                                Join game
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}
