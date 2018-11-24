import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import "./style.less";

interface IProps {
  title: string;
  desc: string|JSX.Element;
  image: string;
  odd: boolean;
}

export default ({title, desc, image, odd}: IProps) => {
  return (
    <Row className="described-image header">
      <Col className="image" sm={{span: 12, order: 3}} md={{span: 6, order: odd ? 3 : 1}}>
        <img src={image} />
      </Col>
      <Col className="desc" sm={{span: 12, order: 2}} md={{span: 6, order: 2}}>
        <div>
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </Col>
    </Row>
  );
};
