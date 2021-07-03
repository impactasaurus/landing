import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

interface IQuestion {
  id: string;
  title: string;
  main: JSX.Element;
  sales?: boolean;
  support?: boolean;
}

export const Questions = (t: (s: string) => string): IQuestion[] => [{
  title: t("questions.is-it-right.title"),
  main: (
    <>
    <p>
      {t("questions.is-it-right.if")}
    </p>
    <ul>
      <li>{t("questions.is-it-right.1")}</li>
      <li>{t("questions.is-it-right.2")}</li>
      <li>{t("questions.is-it-right.3")}</li>
    </ul>
    </>
  ),
  id: "is-it-right",
  sales: true,
}, {
  title: t("questions.gdpr.title"),
  main: (
    <p>
      <Trans
        i18nKey="questions.gdpr.main"
        components={{
          sLink: <Link to="/features/security/" />,
          pLink: <Link to="/privacy/" />,
          cLink: <Link to="/cookie/" />,
        }}
      />
    </p>
  ),
  id: "gdpr",
  sales: true,
}, {
  title: t("questions.sensitive-data.title"),
  main: (
    <p>
      {t("questions.sensitive-data.main")}
    </p>
  ),
  id: "sensitive-data",
  sales: true,
}, {
  title: t("questions.segment.title"),
  main: (
    <p>
      <Trans
        i18nKey="questions.segment.main"
        components={{
          sLink: <Link to="/features/segments/" />,
        }}
      />
    </p>
  ),
  id: "segment",
  sales: true,
}, {
  title: t("questions.backing.title"),
  main: (
    <p>
      <Trans
        i18nKey="questions.backing.main"
        components={{
          aLink: <Link to="/about/" />,
        }}
      />
    </p>
  ),
  id: "backing",
  sales: true,
}, {
  title: t("questions.ben-id.title"),
  main: (
    <>
    <p>
      {t("questions.ben-id.1")}
    </p>
    <p>
      {t("questions.ben-id.2")}
    </p>
    </>
  ),
  id: "ben-id",
  support: true,
}, {
  title: t("questions.new-users.title"),
  main: (
    <p>
      {t("questions.new-users.main")}
    </p>
  ),
  id: "new-users",
  support: true,
}, {
  title: t("questions.white-label.title"),
  main: (
    <p>
      {t("questions.white-label.main")}
    </p>
  ),
  id: "white-label",
  sales: true,
  support: true,
}, {
  title: t("questions.app.title"),
  main: (
    <p>
      {t("questions.app.main")}
    </p>
  ),
  id: "app",
  sales: true,
}, {
  title: t("questions.permissions.title"),
  main: (
    <>
    <p>
      {t("questions.permissions.1")}
    </p>
    <p>
      {t("questions.permissions.2")}
    </p>
    </>
  ),
  id: "permissions",
  support: true,
}, {
  title: t("questions.export.title"),
  main: (
    <p>
      {t("questions.export.main")}
    </p>
  ),
  id: "export",
  sales: true,
  support: true,
}, {
  title: t("questions.import.title"),
  main: (
    <p>
      {t("questions.import.main")}
    </p>
  ),
  id: "import",
  support: true,
  sales: true,
}, {
  title: t("questions.delete-ben.title"),
  main: (
    <p>
      {t("questions.delete-ben.main")}
    </p>
  ),
  id: "delete-ben",
  support: true,
}, {
  title: t("questions.bulk-tag.title"),
  main: (
    <p>
      {t("questions.bulk-tag.main")}
    </p>
  ),
  id: "bulk-tag",
  support: true,
}, {
  title: t("questions.password-reset.title"),
  main: (
    <p>
      {t("questions.password-reset.main")}
    </p>
  ),
  id: "password-reset",
  support: true,
}];

const Question = ({q}: {q: IQuestion}) => {
  return (
    <Row id={q.id}>
      <Col>
        <h5>{q.title}</h5>
        {q.main}
      </Col>
    </Row>
  );
};

const FAQPage = ({pageContext}: PageProps) => {
  const {t} = useTranslation();
  const subtitle = t("faq.subtitle");
  return (
    <>
    <SEO title={t("faq.title")} description={subtitle} context={pageContext}/>
    <Hero>
      <h1>{t("faq.title")}</h1>
      <h4>{subtitle}</h4>
    </Hero>
    <Container className="slanted">
      {Questions(t).filter((q) => q.sales).map((q) => <Question key={q.id} q={q}/>)}
    </Container>
    </>
  );
};

export default withLayout(FAQPage);

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
