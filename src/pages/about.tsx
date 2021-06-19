import React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";

const AboutPage = ({ pageContext }: PageProps) => {
  const vision = "Our vision is for all organisations, benefiting society, to understand their social impact, allowing them to demonstrate their value to stakeholders and drive improvements to their services";
  return (
    <>
    <SEO title="About Us" description={vision} context={pageContext} />
    <Hero>
      <h1>About Us</h1>
      <h4>All organisations, benefiting society, should understand their social impact</h4>
    </Hero>
    <Container className="slanted">
      <Row>
        <Col>
          <h3>Origin</h3>
          <p>
            In 2016, <a href="https://aldlife.org">ALD Life</a> created a project on <a href="https://socialcoder.org">Social Coder</a> requesting a custom outcome monitoring and reporting solution.
            ALD found that the commercial offerings were:
          </p>
          <ul>
            <li>too expensive</li>
            <li>only offered to users of a specific CRM system</li>
            <li>not configurable enough</li>
            <li>too complicated</li>
          </ul>
          <p>
            It became apparent that ALD were not alone, other charities were struggling to find the right tools for their impact needs.
            Impactasaurus was founded in 2017 to meet this need.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Vision</h3>
          <p>
            {vision}.
          </p>
          <p>
            To achieve this vision, we are creating <b>easy to use</b> and <b>inexpensive</b> software, to help small and medium size charities measure and understand their social impact.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Team</h3>
          <p>
            A team of volunteers help bring Impactasaurus' vision to life.
            From programming to marketing, many very talented people have given up their time to help.
            We are truly grateful for their support.
          </p>
          <p>
            Dan Reynolds, the founder of Impactasaurus, is new to the charity sector, having previously worked in software consultancy.
            By exploiting his software skills, Dan hopes to help charities help others.
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
