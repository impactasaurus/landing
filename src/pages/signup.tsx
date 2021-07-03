import * as React from "react";
import {withLayout} from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Hero from "../components/Hero";
import Container from "react-bootstrap/lib/Container";
import SignupForm, {IFormOutput} from "../components/SignupForm";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import {Questions} from "./faq";
import "whatwg-fetch";
import { useTranslation } from "gatsby-plugin-react-i18next";

const sendToApp = () => {
  window.location.href = "http://app.impactasaurus.org";
};

const onSubmit = (v: IFormOutput) => {
  return fetch("https://api.impactasaurus.org/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "mutation ($name: String!, $email: String!, $password: String!, $org: String!) {\n signup: AddOrg(name: $name, org: $org, email: $email, password: $password) {\n id\n  __typename\n }\n}\n",
      variables: {
        name: v.name,
        email: v.email,
        password: v.password,
        org: v.organisation,
      },
    }),
  })
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const errors = json.errors || [];
    if (errors.length > 0) {
      throw new Error(errors[0].message);
    }
    return json;
  })
  .then(() => {
    if (window.ga) {
      window.ga("send", {
        hitType: "event",
        eventCategory: "signup",
        eventAction: "submitted",
        eventLabel: "success",
        hitCallback: sendToApp,
      });
      // as a backup
      setTimeout(sendToApp, 2000);
    } else {
      sendToApp();
    }
  });
};

const SignupPage = ({pageContext}: PageProps) => {
  const {t} = useTranslation();
  const title = t("signup.title");
  const subtitle = t("signup.subtitle");
  return (
    <>
    <SEO title={title} description={subtitle} context={pageContext}/>
    <Hero>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </Hero>
    <Container className="slanted">
      <Row>
        <Col md={{span: 12, offset: 0}} lg={{span: 10, offset: 1}} xl={{span: 8, offset: 2}}>
          {Questions(t).filter((q) => q.id === "is-it-right").map((q) => (
            <div key={q.id}>
              <h4>{q.title}</h4>
              {q.main}
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col md={{span: 10, offset: 1}} lg={{span: 8, offset: 2}} xl={{span: 6, offset: 3}}>
          <br />
          <h3>{t("signup.cta")}</h3>
          <SignupForm onFormSubmit={onSubmit} t={t}/>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(SignupPage, false);

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
