import * as React from "react";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Container from "react-bootstrap/lib/Container";
import {LayoutProps} from "../Layout";
import "./style.less";

export default ({children}: LayoutProps) => {
  return (
    <Jumbotron fluid className="hero">
      <Container>
        {children}
      </Container>
    </Jumbotron>
  );
};
