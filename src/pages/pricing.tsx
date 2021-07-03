import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";
import { useTranslation } from "gatsby-plugin-react-i18next";

const PricingPage = ({pageContext}: PageProps) => {
  const {t} = useTranslation();
  return (
    <>
    <SEO
      title={t("pricing.title")}
      description={t("pricing.description")}
      context={pageContext}
    />
    <Hero>
      <h1>{t("pricing.title")}</h1>
      <h4>{t("pricing.subtitle")}</h4>
    </Hero>
    <Container className="slanted">
      <Row className="header">
        <Col>
          <h2>{t("pricing.header.title")}</h2>
          <h4>{t("pricing.header.subtitle")}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>{t("pricing.changes.title")}</h5>
          <p>
            {t("pricing.changes.p1")}
          </p>
          <p>
            {t("pricing.changes.p2")}
          </p>
          <p>
            {t("pricing.changes.p3")}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>{t("pricing.running.title")}</h5>
          <p>
            {t("pricing.running.main")}
          </p>
          <p>
            {t("pricing.thanks")}
          </p>
          <p style={{display: "flex", alignItems: "center"}}>
            <a style={{padding: "1em", display: "inline-block"}} href="https://auth0.com/?utm_source=oss&utm_medium=gp&utm_campaign=oss" target="_blank"><img width="150" height="50" alt="JWT Auth for open source projects" src="/images/partners/a0.png"/></a>
            <a style={{padding: "0.2em", display: "inline-block"}} href="https://sentry.io" target="_blank"><img width="150" height="50" alt="Error tracking - Sentry" src="/images/partners/sentry.svg" /></a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>{t("pricing.development.title")}</h5>
          <p>
            {t("pricing.development.main")}
          </p>
          <p>
            {t("pricing.thanks")}
          </p>
          <p style={{display: "flex", alignItems: "center"}}>
            <a style={{padding: "1em", display: "inline-block"}} href="https://github.com/" target="_blank"><img width="80" height="18" alt="Development platform - Github" src="/images/partners/github.svg" /></a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>{t("pricing.beta.title")}</h5>
          <p>
            {t("pricing.beta.main")}
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(PricingPage);

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
