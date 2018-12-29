import * as React from "react";
import { Link } from "gatsby";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import DescribedImage from "../DescribedImage";
import LearnMore from "../LearnMore";
import "./style.less";

export default () => (
  <Container className="steps">
    <Row className="header">
      <Col>
        <h2>You're only 4 steps away from demonstrating your impact</h2>
        <h4>From choosing a questionnaire to reporting your impact, we keep things simple</h4>
      </Col>
    </Row>
    <DescribedImage
      image="/images/screenshots/catalogue.png"
      title="1. Select a questionnaire"
      desc={(
        <>
        <p>Based on your desired outcomes, choose from our range of peer reviewed questionnaires. If none of them suit, you can always create your own questionnaire.</p>
        <LearnMore to="/features/questionnaires/" />
        </>
      )}
      odd={true}
    />
    <DescribedImage
      image="/images/screenshots/response-capture.png"
      title="2. Collect responses"
      desc={(
        <>
        <p>Collect questionnaire responses however best suits your service. Responses are <Link to={"/features/security/"}>securely</Link> saved within Impactasaurus for review and analysis.</p>
        <LearnMore to="/features/responses/" />
        </>
      )}
      odd={false}
    />
    <DescribedImage
      image="/images/screenshots/impactasaurus-graph.png"
      title="3. Monitor progress"
      desc={(
        <>
        <p>During your intervention, a beneficiary's journey can be monitored. This allows you to tailor your services to best serve the beneficiary.</p>
        <LearnMore to="/features/monitor/" />
        </>
      )}
      odd={true}
    />
    <DescribedImage
      image="/images/screenshots/radar-chart.png"
      title="4. Report your impact"
      desc={(
        <>
        <p>Generate reports showing the impact your organisation had on your beneficiaries. Reports can be generated covering all of your beneficiaries or just a certain <Link to={"/features/segments"}>segment</Link> (e.g. a project or a location).</p>
        <LearnMore to="/features/reporting/" />
        </>
      )}
      odd={false}
    />
  </Container>
);
