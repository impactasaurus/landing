import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import SlantedHero from "../Hero/slanted";
import Button from "react-bootstrap/lib/Button";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";
import "./style.less";

export default () => {
  const {t} = useTranslation();
  return (
    <div className="signup">
      <SlantedHero top={true}>
        <Row>
          <Col>
            <h1>{t("common.cta.title")}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>{t("common.cta.subtitle")}</h4>
          </Col>
        </Row>
        <Row>
          <Col className="buttons">
            <Button
              className="signup-button"
              size="lg"
              as={Link}
              to="/signup/"
              width="100px"
              style={{maxWidth: "80vw"}}
            >
              {t("common.cta.button")}
            </Button>
          </Col>
        </Row>
      </SlantedHero>
    </div>
  );
};
