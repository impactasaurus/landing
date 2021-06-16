import * as React from "react";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Container from "react-bootstrap/lib/Container";
import "./style.less";

export default ({children}) => {
  return (
    <Jumbotron fluid className="hero">
      <Container>
        {children}
      </Container>
    </Jumbotron>
  );
};
