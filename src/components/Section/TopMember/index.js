import React from "react";
import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import axios from "axios";
import { json_top_member } from "../../../assets/json/index";

export default function TopMember() {
  const [dataTm, setDataTm] = useState("");
//   const [dataMember, setDataMember] = useState([]);

  useEffect(() => {
    setDataTm(json_top_member());
    // getDataTotalMember();
  }, []);

  const sortByProperty = (property) => {
    return function (a, b) {
      if (a[property] < b[property]) return 1;
      else if (a[property] > b[property]) return -1;

      return 0;
    };
  };

//   const getDataTotalMember = () => {
//     const api = "#api#api#api";
//     const token =
//       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MzQ3MjU2MzksImV4cCI6MTY2NjI2MTYzOSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.1RYeLokja7oGfCXxVAWPMBUOyv-zcsah5J5CpCVWza8";
//     axios
//       .get(api + '/v1/guilds/887712251887382578', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         setDataMember(res.data);
//       });
//   };

  return (
    <>
      <Card>
        <CardHeader>Top 20 Member</CardHeader>
        <CardBody>
          <Row>
            <Col xs="12">
              <div className="p-1 box-scroll">
                {dataTm == ""
                  ? "Loading ..."
                  : dataTm.member
                      .sort(sortByProperty("poin"))
                      .map((data, i) => (
                        <div className="d-flex" key={i}>
                          <h6 className="font-weight-bold pr-1 mb-1">
                            {i + 1}.
                          </h6>
                          <div>
                            <p
                              className="mb-0 font-weight-bold"
                              style={{ fontSize: 12 }}
                            >
                              {data.name}
                            </p>
                            <p
                              className="mb-0 font-italic"
                              style={{ fontSize: 8 }}
                            >
                              ({data.poin})
                            </p>
                          </div>
                        </div>
                      ))}
              </div>
              <div className="d-flex justify-content-between mt-2 mb-3">
                <p className="small">
                  Total Member :{" "}
                  {dataTm === "" ? "Loading ..." : dataTm.member.length} orang
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
