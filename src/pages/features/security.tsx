import * as React from "react";
import {withLayout} from "../../components/Layout";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";
import { Link } from "gatsby";

const SecurityPage = ({pageContext}: PageProps) => {
  return (
    <>
    <SEO
      title="Security"
      description="The security of your data is our highest priority. We work hard to protect your data, your beneficiaries privacy and your privacy."
      context={pageContext}
    />
    <Hero>
      <h1>Security</h1>
      <h4>The security of your data is our highest priority</h4>
    </Hero>
    <Container className="slanted">
      <h5>How we protect your data</h5>
      <p>
        Impactasaurus is designed with multiple layers of protection across a distributed, reliable infrastructure.
        We encrypt data in transit and at rest to ensure it is secure.
        In case of disaster, we take regular backups.
      </p>
      <h5>How we protect your beneficiaries privacy</h5>
      <p>
        Questionnaire responses contain extremely personal information.
        To protect your beneficiaries, we do not store personally identifiable information about them.
        Instead, beneficiaries are referred to by ID only, keeping their responses anonymous to outside eyes.
      </p>
      <h5>How we protect your privacy</h5>
      <p>
        Our <Link to={"/privacy"}>privacy policy</Link> clearly describes when we collect your information and the steps we take to protect it.
      </p>
      <h5>How we protect your account</h5>
      <p>
        Impactasaurus offers automatic detection of abnormal or suspicious account activity.
      </p>
    </Container>
    </>
  );
};

export default withLayout(SecurityPage);

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
