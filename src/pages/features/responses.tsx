import * as React from "react";
import { Link } from "gatsby";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";

const RecordsPage = () => {
  return (
    <>
    <SEO title="Responses"/>
    <Hero>
      <h1>Questionnaire Responses</h1>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/response-capture.png"
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
