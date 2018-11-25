import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Image from "react-bootstrap/lib/Image";

interface IProps {
  name: string;
  quote: string;
  image: string;
  url: string;
}

export default ({name, quote, image, url}: IProps) => {
  const linkWrapper = (inner: JSX.Element): JSX.Element => (
    <a href={url}>
      {inner}
    </a>
  );
  return (
    <Row key="intro">
      <Col md={{span: 3, offset: 1}} style={{textAlign: "center"}}>
        {linkWrapper(<Image src={image} width="100%" style={{maxWidth: "20vw"}} />)}
      </Col>
      <Col md={{span: 6, offset: 1}}>
        {linkWrapper(<h5>{name}</h5>)}
        <p>{quote}</p>
      </Col>
    </Row>
  );
};
