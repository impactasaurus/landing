import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import "./style.less";

interface IProps {
  title: string;
  desc: string|JSX.Element;
  image: string;
  odd: boolean;
  padding?: number;
}

export default ({title, desc, image, odd, padding}: IProps) => {
  const isString = desc instanceof String;
  return (
    <Row className="described-image header">
      <Col className="image" xs={{span: 12, order: 3}} md={{span: 6, order: odd ? 3 : 1}}>
        <img
          style={{
            boxShadow: "0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4)",
            padding: `${padding ? padding : 0}rem`,
          }}
          src={image}
        />
      </Col>
      <Col className="desc" xs={{span: 12, order: 2}} md={{span: 6, order: 2}}>
        <div>
          <h5>{title}</h5>
          {isString ? <p>{desc}</p> : desc}
        </div>
      </Col>
    </Row>
  );
};
