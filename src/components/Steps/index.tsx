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
      padding={1}
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
      padding={0.8}
      title="2. Collect responses"
      desc={(
        <>
        <p>Questionnaire responses can be collected in person, remotely or retrospectively. Responses are <Link to={"/features/security/"}>securely</Link> saved within Impactasaurus for review and analysis.</p>
        <LearnMore to="/features/responses/" />
        </>
      )}
      odd={false}
    />
    <DescribedImage
      image="/images/screenshots/impactasaurus-graph.png"
      padding={1}
      title="3. Monitor progress"
      desc={(
        <>
        <p>A beneficiary's journey can be monitored during your intervention. This allows you to tailor your services to meet their specific requirements.</p>
        <LearnMore to="/features/monitor/" />
        </>
      )}
      odd={true}
    />
    <DescribedImage
      image="/images/screenshots/radar-chart.png"
      padding={1}
      title="4. Report your impact"
      desc={(
        <>
        <p>Generate reports showing the impact your organisation had on your beneficiaries. Reports can be generated covering all of your beneficiaries or just a certain <Link to={"/features/segments"}>segment</Link> (e.g. a project or a location).</p>
        <LearnMore to="/features/reporting/" />
        </>
      )}
      odd={false}
    />
    <Row className="header cta">
      <Col>
        <h4>Sound good? <Link to={"/signup/"}>Let's get you started...</Link></h4>
      </Col>
    </Row>
  </Container>
);
