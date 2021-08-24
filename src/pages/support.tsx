import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";
import {Questions} from "./faq";
import { useTranslation } from "gatsby-plugin-react-i18next";

const SupportPage = ({pageContext}: PageProps) => {
  const {t, i18n} = useTranslation();
  const qs = Questions(t).filter((q) => q.support);

  let email = "support@impactasaurus.org";
  if (i18n.language === "pt") {
    email = "support.pt@impactasaurus.org";
  }

  return (
    <>
    <SEO
      title={t("support.title")}
      description={t("support.description")}
      context={pageContext}
    />
    <Hero>
      <h1>{t("support.title")}</h1>
      <h4>{t("support.subtitle")}</h4>
    </Hero>
    <Container className="slanted">
      <Row>
        <Col>
          <h4>{t("support.email")}</h4>
        </Col>
      </Row>
      <Row className="header">
        <Col>
          <h2><a href={`mailto:${email}`}>{email}</a></h2>
        </Col>
      </Row>
      <Row className="header">
        <Col>
          <h3>Common Queries</h3>
          {qs.map((q) => (
            <div key={q.id}>
              <h5>{q.title}</h5>
              {q.main}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(SupportPage);

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
