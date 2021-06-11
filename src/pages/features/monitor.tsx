import * as React from "react";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";

const JourneyPage = ({pageContext}: PageProps) => {
  const intro = "Your beneficiaries go through a journey with your support. Visualise their journey by collecting questionnaire responses throughout your intervention.";
  return (
    <>
    <SEO title="Monitor" description={intro} context={pageContext}/>
    <Hero>
      <h1>Monitor</h1>
      <h4>Tailor your service to fit your beneficiary's journey</h4>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/impactasaurus-graph.png"
        padding={1}
        title="Your beneficiary's journey"
        desc={(
          <p>{intro}</p>
        )}
        odd={true}
      />
      <DescribedImage
      image="/images/screenshots/table.png"
      padding={1}
      title="Tailor your service"
      desc={(
        <p>
          Tailor the service you provide based on an individual's journey. As the saying goes, "If you can't measure it, you can't improve it".
        </p>
      )}
      odd={false}
      />
      <DescribedImage
      image="/images/screenshots/activity-page.png"
      padding={1}
      title="Your organisation's pulse"
      desc={(
        <p>
          The activity feed shows each questionnaire response as it is recorded, across your entire organisation; allowing you to monitor your service in real time.
        </p>
      )}
      odd={true}
      />
    </Container>
    </>
  );
};

export default withLayout(JourneyPage);
