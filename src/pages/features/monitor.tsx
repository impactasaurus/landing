import * as React from "react";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";

const JourneyPage = () => {
  return (
    <>
    <SEO title="Monitor"/>
    <Hero>
      <h1>Monitor</h1>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/impactasaurus-graph.png"
        title="Journey"
        desc={(
          <p>
            Your beneficiaries go through a journey with your support. Understand their journey by visualising an individual beneficiary's records.
          </p>
        )}
        odd={true}
      />
      <DescribedImage
      image="/images/screenshots/table.png"
      title="Optimise service"
      desc={(
        <p>
          Once a beneficiary's journey can be visualised, the service you provide can be optimised for the individual. If you can't measure it, you can't improve it.
        </p>
      )}
      odd={false}
      />
    </Container>
    </>
  );
};

export default withLayout(JourneyPage);
