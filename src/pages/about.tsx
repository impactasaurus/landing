import React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const AboutPage = ({ pageContext }: PageProps) => {
  const {t} = useTranslation();
  const vision = t("about.description");
  return (
    <>
    <SEO title={t("about.title")} description={vision} context={pageContext} />
    <Hero>
      <h1>{t("about.title")}</h1>
      <h4>{t("about.subtitle")}</h4>
    </Hero>
    <Container className="slanted">
      <Row>
        <Col>
          <h3>{t("about.origin.title")}</h3>
          <p>
            <Trans
              i18nKey="about.origin.intro"
              components={{
                aldLink: <a href="https://aldlife.org"/>,
                scLink: <a href="https://socialcoder.org"/>,
              }}
            />
          </p>
          <ul>
            <li>{t("about.origin.expensive")}</li>
            <li>{t("about.origin.crm")}</li>
            <li>{t("about.origin.config")}</li>
            <li>{t("about.origin.complicated")}</li>
          </ul>
          <p>
            {t("about.origin.end")}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>{t("about.vision.title")}</h3>
          <p>
            {vision}.
          </p>
          <p>
            <Trans i18nKey="about.vision.end"/>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>{t("about.team.title")}</h3>
          <p>
            {t("about.team.team")}
          </p>
          <p>
            {t("about.team.dan")}
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(AboutPage);

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
