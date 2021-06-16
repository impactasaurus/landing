import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import DescribedImage from "../DescribedImage";
import LearnMore from "../LearnMore";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "./style.less";

export default () => {
  const {t} = useTranslation();
  return (
    <Container className="steps">
      <Row className="header">
        <Col>
          <h2>{t("index.steps.title")}</h2>
          <h4>{t("index.steps.subtitle")}</h4>
        </Col>
      </Row>
      <DescribedImage
        image="/images/screenshots/catalogue.png"
        padding={1}
        title={t("index.steps.1.title")}
        desc={(
          <>
          <p>{t("index.steps.1.description")}</p>
          <LearnMore to="/features/questionnaires/" />
          </>
        )}
        odd={true}
      />
      <DescribedImage
        image="/images/screenshots/response-capture.png"
        padding={0.8}
        title={t("index.steps.2.title")}
        desc={(
          <>
          <p>
            <Trans
              i18nKey="index.steps.2.description"
              components={{
                securityLink: <Link to={"/features/security/"} />,
              }}
            />
          </p>
          <LearnMore to="/features/responses/" />
          </>
        )}
        odd={false}
      />
      <DescribedImage
        image="/images/screenshots/impactasaurus-graph.png"
        padding={1}
        title={t("index.steps.3.title")}
        desc={(
          <>
          <p>{t("index.steps.3.description")}</p>
          <LearnMore to="/features/monitor/" />
          </>
        )}
        odd={true}
      />
      <DescribedImage
        image="/images/screenshots/radar-chart.png"
        padding={1}
        title={t("index.steps.4.title")}
        desc={(
          <>
          <p>
            <Trans
              i18nKey="index.steps.4.description"
              components={{
                segmentLink: <Link to={"/features/segments"} />,
              }}
            />
          </p>
          <LearnMore to="/features/reporting/" />
          </>
        )}
        odd={false}
      />
      <Row className="header cta">
        <Col>
          <h4>
            <Trans
              i18nKey="index.steps.cta"
              components={{
                signupLink: <Link to={"/signup/"} />,
              }}
            />
          </h4>
        </Col>
      </Row>
    </Container>
  );
};
