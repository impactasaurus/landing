import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";
import { Link } from "gatsby";

interface IQuestion {
  title: string;
  main: JSX.Element;
  id: string;
  sales?: boolean;
  support?: boolean;
}

export const Questions: IQuestion[] = [{
  title: "Is Impactasaurus the right tool for me?",
  main: (
    <>
    <p>
      Impactasaurus is a tool for recording, monitoring and reporting on soft outcomes.
      It is the right tool for you, if the following describes your use case:
    </p>
    <ul>
      <li>You help beneficiaries over a period of time</li>
      <li>Your beneficiaries can complete a questionnaire before and after your intervention (or more frequently)</li>
      <li>You are interested in understanding the impact you are having on your beneficiaries</li>
      <li>Your desired questionnaire is composed of scale questions (e.g. likert scales)</li>
    </ul>
    </>
  ),
  id: "is-it-right",
  sales: true,
}, {
  title: "Are you GDPR compliant?",
  main: (
    <p>
      Yes, we take data privacy and security extremely seriously.
      For more information, see our <Link to="/features/security">privacy and security feature page</Link>, <Link to="/privacy">privacy policy</Link> and <Link to="/cookie">cookie policy</Link>.
    </p>
  ),
  id: "gdpr",
  sales: true,
}, {
  title: "Who is behind Impactasaurus?",
  main: (
    <>
    <p>Impactasaurus is built by a team of volunteers. It is not backed by any companies. See more at our <Link to="/about">about page</Link>.</p>
    </>
  ),
  id: "backing",
  sales: true,
}, {
  title: "Is there a mobile app available?",
  main: (
    <p>
      No, however, the web app works well on mobile phones and tablets.
    </p>
  ),
  id: "app",
  sales: true,
}, {
  title: "Can I produce reports for a specific demographic, project or location?",
  main: (
    <p>
      Yes, this is possible with the use of tags. <Link to="/features/segments">Click here for more information</Link>.
    </p>
  ),
  id: "segment",
  sales: true,
}, {
  title: "How should I refer to my beneficiaries within Impactasaurus?",
  main: (
    <>
    <p>
      If you have a system which stores beneficiary information (e.g. CRM), the beneficiary's ID within that system should also be used in Impactasaurus.
    </p>
    <p>
      If you don't have such a system, look for other ways you can assign IDs to your beneficiaries.
      As an example, many charities keep a spreadsheet with beneficiary information, the row number could be used as the beneficiary ID.
      Avoid using personal information which could be used to identify the individual, for example phone numbers, postcodes or names.
    </p>
    </>
  ),
  id: "ben-id",
  support: true,
}, {
  title: "Can I add more users to my account?",
  main: (
    <p>
      Yes, you can add as many users to your organisation as you would like.
      To invite others, head to settings then organisation.
      On this page you can generate an invite link which should be given to anyone you would like to join your Impactasaurus.
    </p>
  ),
  id: "new-users",
  support: true,
}, {
  title: "Can I restrict what a user can do?",
  main: (
    <>
    <p>
      All users within your organisation have the same permissions.
      This decision was made to keep the software simple and easy to use.
    </p>
    <p>
      If you would like some control over user permissions, <Link to="/support">please drop us an email</Link>.
      If there is enough demand, we will consider adding this functionality.
    </p>
    </>
  ),
  id: "permissions",
  support: true,
}, {
  title: "Can I export my data?",
  main: (
    <p>
      Impactasaurus offers a range of export functionality within the application.
      You can export all the data associated with a questionnaire, an individual beneficiary or the data used in a report.
      When viewing a graph, look for a download icon in the control panel.
      To export data for a particular questionnaire, head to the settings > data page.
    </p>
  ),
  id: "export",
  sales: true,
  support: true,
}, {
  title: "How do I import my historic data?",
  main: (
    <p>
      Due to the variety of data formats, we do not support this within the application currently.
      If you have a lot of data which needs importing, <Link to="/support/">please email</Link> a sample of the data.
      We are happy to do one off imports from any data format as long as the data is compatible with Impactasaurus.
    </p>
  ),
  id: "import",
  support: true,
  sales: true,
}, {
  title: "How do I add or edit tags across many records?",
  main: (
    <p>
      Currently the app allows tags to be edited for one record at a time.
      It can be time consuming to make sweeping changes to your tags.
      We are working on making this easier within the app, but until then, please email and explain how you would like your tags adjusted.
    </p>
  ),
  id: "bulk-tag",
  support: true,
}];

const Question = ({q}: {q: IQuestion}) => {
  return (
    <Row id={q.id}>
      <Col>
        <h5>{q.title}</h5>
        {q.main}
      </Col>
    </Row>
  );
};

const FAQPage = () => {
  return (
    <>
    <SEO title="FAQ"/>
    <Hero>
      <h1>FAQ</h1>
      <h4>Answers to some common questions</h4>
    </Hero>
    <Container className="slanted">
      {Questions.filter((q) => q.sales).map((q) => <Question key={q.id} q={q}/>)}
    </Container>
    </>
  );
};

export default withLayout(FAQPage);
