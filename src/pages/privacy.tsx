import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";

const PrivacyPolicyPage = ({pageContext}: PageProps) => {
  const intro = "This Privacy Policy explains the information that Impactasaurus collects when you use its products and services, how that information is used, with whom it may be shared, and your privacy choices";
  return (
    <>
    <SEO title="Privacy Policy" description={intro} context={pageContext}/>
    <Hero>
      <h1>Privacy Policy</h1>
    </Hero>
    <Container>
      <Row>
        <Col>
          <p>
            <b>Last Updated</b> : November 8th, 2018
          </p>
          <p>
            {intro}.
          </p>
          <p>
            By registering for, or using our services, you accept this Privacy Policy, which is part of our <a href="/terms">Terms of Use</a>.
          </p>
          <h6>Who Are "You"</h6>
          <p>
            We refer to "you" a lot in this Privacy Policy. To better understand what information is most relevant to you, see the following definitions.

            <ul>
              <li><b>Accountholders:</b> You hold an account with Impactasaurus. You have the ability to create questionnaires and analyse data. You ask beneficiaries to complete questionnaires.</li>
              <li><b>Beneficiary:</b> You do not hold an account with Impactasaurus. You complete questionnaires witin the system, either directly or indirectly through the accountholder.</li>
            </ul>
          </p>

          <h3>Data We Collect About You</h3>
          <p>
            We collect information about you when you use our services. In addition, third parties may collect information about you when you use our services. Collected information may include or reflect personal information that could identify you, as well as non-personal information. We refer to your information as "your data" for short.
          </p>

          <h6>Account Information</h6>
          <p>
            To create an account, you must provide a valid email address, your name and a password
          </p>

          <h6>Content</h6>
          <p>
            Accountholders may create questionnaires and record questionnaire answers from their beneficiaries. Tags can be stored against questionnaire responses, allowing filtering.
          </p>
          <p>
            As a beneficiary, your questionnaire answers are collected.
          </p>

          <h6>Automatically-Collected Information</h6>
          <p>
            We automatically collect certain types of data when you use our services, regardless of whether you have an account. This data includes:
            <ul>
              <li>IP address</li>
              <li>technical information about your device (e.g., browser type, operating system, basic device information)</li>
              <li>the web page you visited or search query you entered before reaching us</li>
              <li>your activities on our website</li>
            </ul>
            We may track your activities using cookies and similar technologies. By using our services, you agree to our use of these methods as set forth in our <a href="/cookie">Cookie Policy</a>.
          </p>

          <h6>Information Collected by Third Parties</h6>
          <p>
            Some third parties may collect data about you when you use our services. This includes:
            <ul>
              <li>Feedback to help us improve our service</li>
              <li>Crash reports to record when something goes wrong with our service</li>
              <li>Analytics to help us understand the usage of our service</li>
            </ul>
          </p>

          <h3>How We Use Your Data</h3>

          We may use your data for the following purposes:
          <ul>
            <li><b>Operating our services:</b> We use your data to provide our services and provide customer support.</li>
            <li><b>Improving our services:</b> We use your data to understand how our services are being used and how we can improve them. In general, we analyze aggregated data, rather than specific user data. We may, however, need to analyze a specific case to address a specific problem (e.g., a bug that affects only a few accounts).</li>
            <li><b>Legal compliance:</b> We use your data where we are legally required to do so. For example, we may need to gather your data to respond to a subpoena or court order.</li>
            <li><b>Protecting your information:</b> Where appropriate, we may anonymize, backup, and delete certain data.</li>
          </ul>

          For accountholders, we may use your data for the following purposes:
          <ul>
            <li><b>Identification and authentication:</b> We use your data to verify you when you access your account.</li>
            <li><b>Communicating with you:</b> We use your data when we communicate with you (e.g., when we respond to a customer support or other inquiry).</li>
            <li><b>Customizing your experience:</b> We use your data to personalize the service to you. This may include remembering your preferences for visualisations or aggregations.</li>
          </ul>

          <h3>With Whom We Share Your Data</h3>

          We share your data with third parties as follows:

          <ul>
            <li><b>Analytics:</b> We share your data with <a href="https://policies.google.com/privacy">Google Analytics</a> who provide analytics showing how customers are using our services.</li>
            <li><b>Data Storage:</b> We securely store your data with <a href="https://www.mongodb.com/cloud/compliance">MongoDB's Atlas</a>.</li>
            <li><b>Feedback:</b> We use <a href="https://delighted.com/privacy">Delighted</a> to collect user feedback from accountholders.</li>
            <li><b>Error Reports:</b> We use <a href="https://sentry.io/privacy/">Sentry</a> to capture failures within our application to allow us to diagnose and fix problems.</li>
            <li><b>Aggregated or anonymized information:</b> We may publicly disclose non-personal aggregated or anonymized information.</li>
          </ul>

          <p>
            For accountholders:
          </p>
          <ul>
            <li><b>Content:</b> Any questionnaires or questionnaire responses from beneficiaries are shared with all accountholders within your organisation.</li>
            <li><b>Authentication:</b> We use <a href="https://auth0.com/privacy">Auth0</a> to store account information and authenticate users.</li>
            <li><b>CRM:</b> <a href="https://legal.hubspot.com/privacy-policy">Hubspot</a> is used to communicate with accountholders.</li>
          </ul>
          <p>
            For beneficiaries:
          </p>
          <ul>
            <li><b>Responses:</b> Any answers provided to a questionnaire are shared with all accountholders belonging to the organisation which requested you complete the questionnaire. This applies if you directly completed the questionnaire within Impactasaurus, or indirectly via an accountholder.</li>
          </ul>
          <p>
            We use reasonable efforts to vet vendors for their privacy and data security practices. We require that such vendors agree to protect the data we share. We do not allow any third party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instruction.
          </p>

          <h3>Data Retention</h3>
          <p>
            We retain your data for as long as you have an account. When you close an account, we will delete your personal information. We may retain logs of automatically collected information (for internal analytics); your email address and communications with you. When we no longer have a business reason for retaining data, we will delete or anonymize it.
          </p>
          <p>
            We retain questionnaires and questionnaire responses for as long as the organisation is registered. When an organisation wishes to stop using our services, we will delete this content.
          </p>
          <p>
            We retain deleted questionnaires and questionnaire responses in case you wish to reverse the deletion.
          </p>
          <p>
            If we receive legal process pertaining to your account, we will retain your data for as long as we in good faith believe is necessary to comply with the legal process. Similarly, if we believe that your account has been involved in wrongdoing, we may preserve your data to defend or assert our rights.
          </p>

          <h3>Protecting Your Information</h3>

          We use technical, and organizational security measures to safeguard your data from unauthorized or accidental disclosure. Despite these efforts, no information system can be 100% secure, so we cannot guarantee the absolute security of your information. Users also have a role to play in keeping their data safe. We encourage you to use a unique and hard-to-guess password for your account and to not share it with others. You should only add users to your organisation who you know and trust. You should monitor your account regularly. If you believe that someone has gained access to your account without your permission, please contact us immediately so that we can investigate.

          <h3>Communication</h3>

          By creating an account, you consent to receive commercial emails from us. This includes newsletters. You may opt out from commerical emails by clicking the unsubscribe link in the email. Please note, you will continue to receive transactional emails from us (e.g., emails providing information about your account).

          <h3>Your Privacy Rights</h3>

          We enable you to make numerous choices about your data:

          <ul>
            <li>You may choose not to provide us with certain information. For example, you may choose not to create an account or not to create a questionnaire.</li>
            <li>You may change or correct information we hold on you.</li>
            <li>You may opt out of receiving commercial emails from us.</li>
            <li>You may export your data or request we transfer it to another service provider.</li>
            <li>You may close your account.</li>
            <li>You may delete your data.</li>
            <li>You may contact us and request what information we hold on you.</li>
          </ul>

          We do not perform any automated user profiling.

          <h3>Updates</h3>

          We may modify this Privacy Policy from time to time. We will post any modified version of our Privacy Policy at <a href="/privacy">https://impactasaurus.org/privacy</a>. If we change the Privacy Policy in a way that materially lessens our commitments to you, we will provide notice to registered users by email or other methods.

          <h3>How to Contact Us</h3>
          <p>
            For any questions, inquiries, or complaints relating to your privacy, please contact us at:
          </p>
          <p>
            <a href="mailto:privacy@impactasaurus.org">support@impactasaurus.org</a>
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(PrivacyPolicyPage);
