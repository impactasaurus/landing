import * as React from "react";
import { Link } from "gatsby";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";

const RecordsPage = ({pageContext}: PageProps) => {
  return (
    <>
    <SEO
      title="Responses"
      description="Questionnaire responses can be collected in person, remotely or retrospectively. Responses are securely saved within Impactasaurus for review and analysis."
      context={pageContext}
    />
    <Hero>
      <h1>Questionnaire responses</h1>
      <h4>Collect and store your beneficiaries' responses</h4>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/response-capture.png"
        padding={0.8}
        title="Collect responses however works for you"
        desc={(
          <>
          <ul>
            <li>complete the questionnaire together with your beneficiary</li>
            <li>send them a link to complete it on their own</li>
            <li>enter answers captured on paper or historically.</li>
          </ul>
          </>
        )}
        odd={true}
      />
      <DescribedImage
        image="/images/screenshots/record.png"
        padding={0.5}
        title="Secure cloud storage"
        desc={(
          <p>
            Answers are stored <Link to="/features/security/">securely</Link> in the cloud, available for <Link to="/features/monitor/">beneficiary monitoring</Link> and <Link to="/features/reporting/">impact reporting</Link> from anywhere in the world.
          </p>
        )}
        odd={false}
      />
    </Container>
    </>
  );
};

export default withLayout(RecordsPage);

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
