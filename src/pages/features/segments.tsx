import * as React from "react";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";

const SegmentPage = () => {
  return (
    <>
    <SEO title="Segments"/>
    <Hero>
      <h1>Segments</h1>
      <h4>Analyse a subset of your beneficiaries</h4>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/tags.png"
        title="Introducing tags"
        desc={(
          <p>
            Understand your impact for a specific location, project or demographic using tags. Tags are free text labels which can be used to segment your data.
          </p>
        )}
        odd={true}
      />
      <DescribedImage
        image="/images/screenshots/record-tags.png"
        title="Tag questionnaire responses"
        desc={(
          <p>
            Tags are set on questionnaire responses, either when collecting the response or retrospectively. Tags used previously for a beneficiary will be automatically suggested next time.
          </p>
        )}
        odd={false}
      />
      <DescribedImage
        image="/images/screenshots/report-tags-with-report.png"
        padding={0.5}
        title="Report on a subset of beneficiaries"
        desc={(
          <>
          <p>
            Generate reports for a given set of tags. Only questionnaire responses with matching tags will be included in the report.
          </p>
          <p>
            Interested in knowing the impact of a particular project? Generate a report for that project's tag.
          </p>
          </>
        )}
        odd={true}
      />
    </Container>
    </>
  );
};

export default withLayout(SegmentPage);
