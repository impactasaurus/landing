import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

interface IProps {
  title: string;
  desc: string;
  image: string;
  odd: boolean;
}

export default ({title, desc, image, odd}: IProps) => {
  const img = (
    <Col>
      <img src={image} width="100%"/>
    </Col>
  );
  return (
    <Row>
      {odd && img}
      <Col>
        <h5>{title}</h5>
        <p>{desc}</p>
      </Col>
      {!odd && img}
    </Row>
  );
};
