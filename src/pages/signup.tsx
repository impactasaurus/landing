import * as React from "react";
import {withLayout} from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Hero from "../components/Hero";
import Container from "react-bootstrap/lib/Container";
import SignupForm from "../components/SignupForm";

const FAQPage = () => {
  return (
    <>
    <SEO title="Signup"/>
    <Hero>
      <h1>Signup</h1>
      <h4>In two minutes you will be measuring your impact</h4>
    </Hero>
    <Container className="slanted">
      <SignupForm />
    </Container>
    </>
  );
};

export default withLayout(FAQPage);
