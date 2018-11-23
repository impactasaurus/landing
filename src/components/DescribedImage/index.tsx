import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import "./style.less";

interface IProps {
  title: string;
  desc: string;
  image: string;
  odd: boolean;
}

export default ({title, desc, image, odd}: IProps) => {
  const img = (
    <Col className="image">
      <img src={image} />
    </Col>
  );
  return (
    <Row className="described-image">
      {odd && img}
      <Col className="desc">
        <div>
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </Col>
      {!odd && img}
    </Row>
  );
};
