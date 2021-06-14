import * as React from "react";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import SlantedHero from "../Hero/slanted";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./style.less";

export default () => {
  const {t} = useTranslation();
  return (
    <div id="index-hero">
      <SlantedHero bottom={true}>
        <Row className="header">
          <Col>
            <h1>{t("index.title")}</h1>
            <h4>{t("index.subtitle")}</h4>
          </Col>
        </Row>
      </SlantedHero>
      <Container className="screenshot">
        <Row>
          <Col>
            <img src="/images/screenshots/radar-frame.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
