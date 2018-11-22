import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Image from "react-bootstrap/lib/Image";

interface IProps {
  name: string;
  quote: string;
  image: string;
}

export default ({name, quote, image}: IProps) => {
  return (
    <Row key="intro">
      <Col md={{span: 3, offset: 1}}>
        <Image src={image} width="100%" />
      </Col>
      <Col md={{span: 6, offset: 1}}>
        <h5>{name}</h5>
        <p>{quote}</p>
      </Col>
    </Row>
  );
};
