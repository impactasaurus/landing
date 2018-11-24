import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import DescribedImage from "../DescribedImage";

export default () => (
  <Container>
    <Row className="header">
      <Col>
        <h2>You're only 4 steps away from demonstrating your impact</h2>
        <h4>From choosing a questionnaire to reporting your impact, we keep things simple</h4>
      </Col>
    </Row>
    <DescribedImage
      image="/images/screenshots/questionnaire.png"
      title="Select a questionnaire"
      desc="Based on your desired outcomes, choose from our range of peer reviewed questionnaires. If none of them suit, you can always create your own questionnaire."
      odd={true}
    />
    <DescribedImage
      image="/images/screenshots/collect.png"
      title="Collect responses"
      desc={(
        <>
        <span>Ask your beneficiaries to complete your questionnaire. You can either:</span>
        <ul>
          <li>complete the questionnaire together with your beneficiary</li>
          <li>send them a link to complete it on their own</li>
          <li>enter answers captured on paper or historically.</li>
        </ul>
        <span>Questionnaire responses are securely saved within Impactasaurus.</span>
        </>
      )}
      odd={false}
    />
    <DescribedImage
      image="/images/screenshots/impactasaurus-graph.png"
      title="Monitor progress"
      desc="During your intervention, a beneficiary's journey can be monitored. This allows you to tailor your services to best serve the beneficiary."
      odd={true}
    />
    <DescribedImage
      image="/images/screenshots/radar-chart.png"
      title="Report your impact"
      desc="Generate reports showing the impact your organisation had on your beneficiaries. Reports can be generated covering all of your beneficiaries or just a certain segment (e.g. a project or a location)."
      odd={false}
    />
  </Container>
);
