import * as React from "react";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";
import { Link } from "gatsby";

const ReportingPage = () => {
  return (
    <>
    <SEO title="Reporting"/>
    <Hero>
      <h1>Reporting</h1>
      <h4>Produce visualisations to demonstrate your impact</h4>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/report.png"
        title="Visualise your impact"
        desc={(
          <p>
            View the average distance travelled by your beneficiaries, as a result of your intervention. Download visualisations to include in your impact reports.
          </p>
        )}
        odd={true}
      />
      <DescribedImage
        image="/images/screenshots/report-tags.png"
        title="Report on a subset of beneficiaries"
        desc={(
          <p>
            Generate reports for a particular project, location or demographic using tags. See the <Link to={"/features/segments"}>segments</Link> feature page for more information.
          </p>
        )}
        odd={false}
      />
      <DescribedImage
        image="/images/screenshots/report-export.png"
        title="Export the report's data"
        desc={(
          <p>
            The data used to produce the report can be exported to Excel for backup, verification or custom analysis.
          </p>
        )}
        odd={true}
      />
    </Container>
    </>
  );
};

export default withLayout(ReportingPage);
