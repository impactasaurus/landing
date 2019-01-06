import * as React from "react";
import {withLayout} from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Hero from "../components/Hero";
import Container from "react-bootstrap/lib/Container";
import SignupForm, {IFormOutput} from "../components/SignupForm";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

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

const SignupPage = () => {
  return (
    <>
    <SEO title="Signup"/>
    <Hero>
      <h1>Signup</h1>
      <h4>In two minutes, you will be measuring your impact</h4>
    </Hero>
    <Container className="slanted">
      <Row>
        <Col md={{span: 10, offset: 1}} lg={{span: 8, offset: 2}} xl={{span: 6, offset: 3}}>
          <SignupForm onFormSubmit={onSubmit}/>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(SignupPage, false);
