import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";

const SupportPage = () => {
  return (
    <>
    <SEO title="Support" description="We are here to help, if you have a question or need help, please get in contact"/>
    <Hero>
      <h1>Support</h1>
      <h4>We are here to help</h4>
    </Hero>
    <Container className="slanted">
      <Row>
        <Col>
          <h4>if you have a question, feature suggestion or need help, please email:</h4>
        </Col>
      </Row>
      <Row className="header">
        <Col>
          <h2><a href="mailto:support@impactasaurus.org">support@impactasaurus.org</a></h2>
        </Col>
      </Row>
      <Row className="header">
        <Col>
          <h3>Common Queries</h3>
          <h5>Can I add more users to my account?</h5>
          <p>
            Yes, you can add as many users to your organisation as you would like.
            To invite others, head to settings then organisation.
            On this page you can generate an invite link which should be given to anyone you would like to join your Impactasaurus.
          </p>
          <h5>How do I import my historic data?</h5>
          <p>
            Due to the variety of data formats, we do not support this within the application currently.
            If you have a lot of data which needs importing, please email a sample of the data.
            We are happy to do one off imports from any data format as long as the data is compatible with Impactasaurus.
          </p>
          <h5>How do I export my data?</h5>
          <p>
            Impactasaurus offers a range of export functionality within the application.
            You can export all the data associated with a questionnaire, an individual beneficiary or the data used in a report.
            When viewing a graph, look for a download icon in the control panel.
            To export data for a particular questionnaire, head to the settings > data page.
          </p>
          <h5>How do I add or edit tags across many records?</h5>
          <p>
            Currently the app allows tags to be edited for one record at a time.
            It can be time consuming to make sweeping changes to your tags.
            We are working on making this easier within the app, but until then, please email and explain how you would like your tags adjusted.
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(SupportPage);
