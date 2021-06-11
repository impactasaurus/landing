import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

const TermsPage = ({pageContext}: PageProps) => {
  const intro = "These Terms of Use contain the terms under which we provide our Services to you and describe how our Services may be accessed and used";
  return (
    <>
    <SEO title="Terms Of Use" description={intro} context={pageContext} />
    <Hero>
      <h1>Terms Of Use</h1>
    </Hero>
    <Container>
      <Row>
        <Col>
          <p>
            <b>Last Updated</b> : November 11th, 2018
          </p>
          <p>
            {intro}.
          </p>
          <p>
            You indicate your agreement to these Terms of Use by clicking or tapping on a button indicating your acceptance of these Terms or by using our Services. If you will be using our Services on behalf of an organization, you agree to these Terms on behalf of that organization and you represent that you have the authority to do so. In such case, "you" and "your" will refer to that organization.
          </p>

          <h3>Fees and Payment</h3>

          <h6>Fees for Services</h6>
          <p>
            You agree to pay to Impactasaurus any fees for each service you purchase or use, in accordance with the pricing and payment terms presented to you for that Service. Where applicable, you will be billed using the billing method you select through your account management page. If you have elected to pay the fees by credit card, you represent and warrant that the credit card information you provide is correct and you will promptly notify us of any changes to such information. Fees paid by you are non-refundable, except as provided in these Terms or when required by law.
          </p>
          <h6>Subscriptions</h6>
          <p>
            Our Services are billed on a subscription basis (we call these "Subscriptions"). This means that you will be billed in advance on a recurring, periodic basis (each period is called a “billing cycle”). Billing cycles are typically monthly. Your Subscription will automatically renew at the end of each billing cycle unless you cancel auto-renewal through your online account management page, or by contacting our customer support team. While we will be sad to see you go, you may cancel auto-renewal on your Subscription at any time, in which case your Subscription will continue until the end of that billing cycle before terminating. You may cancel auto-renewal on your Subscription immediately after the Subscription starts if you do not want it to renew.
          </p>
          <h6>Taxes</h6>
          <p>
            Unless otherwise stated, you are responsible for any taxes (other than Impactasaurus' income tax) or duties associated with the sale of the Services, including any related penalties or interest.
          </p>
          <h6>Price Changes</h6>
          <p>
            We may change the fees charged for the Services at any time, provided that, for Services billed on a subscription basis, the change will become effective only at the end of the then-current billing cycle of your Subscription. We will provide you with reasonable prior written notice of any change in fees to give you an opportunity to cancel your Subscription before the change becomes effective.
          </p>

          <h3>Privacy</h3>
          <p>
            In the course of using the Services, you may submit content, including your personal data and the personal data of others (all of the above will be referred to as your "Content"). We know that by giving us your Content, you are trusting us to treat it appropriately. Our <a href="/privacy">Privacy Policy</a> detail how we treat your Content (including your personal data) and we agree to adhere to our privacy policy.
          </p>
          <h3>Security</h3>
          <p>
            We will store and process your Content in a manner consistent with industry security standards. We have implemented appropriate technical, organizational, and administrative systems, policies, and procedures designed to help ensure the security, integrity, and confidentiality of your Content and to mitigate the risk of unauthorized access to or use of your Content.
          </p>

          <h3>Your Content</h3>
          <h6>You Retain Ownership of Your Content</h6>
          <p>
            You retain ownership of all of your intellectual property rights in your Content. We do not claim ownership over any of your Content. These Terms do not grant us any licenses or rights to your Content except for the limited rights needed for us to provide the Services, and as otherwise described in these Terms.
          </p>
          <h6>Limited License to Your Content</h6>
          <p>
            You grant Impactasaurus a worldwide, royalty free license to use, reproduce, distribute, modify, adapt, create derivative works, make publicly available, and otherwise exploit your Content, but only for the limited purposes of providing the Services to you and as otherwise permitted by our privacy policy. This license for such limited purposes continues even after you stop using our Services, with respect to aggregate and de-identified data derived from your Content and any residual backup copies of your Content made in the ordinary course of our business. This license also extends to any trusted third parties we work with to the extent necessary to provide the Services to you. If you provide us with feedback about the Services, we may use your feedback without any obligation to you.
          </p>
          <h6>Customer Lists</h6>
          <p>
            We may identify you (by name and logo) as a customer on our website and on other promotional materials.
          </p>
          <h6>Copyright Claims</h6>
          <p>
            We respond to notices of alleged copyright infringement. If you believe that your work has been exploited in a way that constitutes copyright infringement, you may contact us for claims of copyright infringement.
          </p>
          <h6>Other IP Claims</h6>
          <p>
            We respect the intellectual property rights of others, and we expect our users to do the same. If you believe a user is infringing upon your intellectual property rights, you may report it via email.
          </p>

          <h3>User Content</h3>

          <h6>User Content</h6>
          <p>
            The Services display content provided by others that is not owned by Impactasaurus. Such content is the sole responsibility of the entity that makes it available. Correspondingly, you are responsible for your own Content and you must ensure that you have all the rights and permissions needed to use that Content in connection with the Services. We are not responsible for any actions you take with respect to your Content, including sharing it publicly. Please do not use content from the Services unless you have first obtained the permission of its owner, or are otherwise authorized by law to do so.
          </p>
          <h6>Content Review</h6>
          <p>
            You acknowledge that, in order to ensure compliance with legal obligations, we may be required to review certain content submitted to the Services to determine whether it is illegal or whether it violates these Terms (such as when unlawful content is reported to us). We may also modify, prevent access to, delete, or refuse to display content that we believe violates the law or these Terms. However, Impactasaurus otherwise has no obligation to monitor or review any content submitted to the Services.
          </p>

          <h3>Account Management</h3>
          <h6>Keep Your Password Secure</h6>
          <p>
            If you have been issued an account in connection with your use of the Services, you are responsible for safeguarding your password and any other credentials used to access that account. You are responsible for any activity occurring in your account, whether or not you authorized that activity. If you become aware of any unauthorized access to your account, you should notify us immediately. Accounts may not be shared and may only be used by one individual per account.
          </p>
          <h6>Account Inactivity</h6>
          <p>
            We may terminate your account and delete any content contained in it if there is no account activity (such as a log in event or payment) for over 12 months. However, we will attempt to warn you by email before terminating your account to provide you with an opportunity to log in to your account so that it remains active.
          </p>
          <h6>Customer Success</h6>
          <p>
            We may assign you a customer success manager ("CSM"). The CSM may review your use of the Services and your Content to help you to more effectively use the Services, including by providing reporting and usage insight.
          </p>
          <h3>User Requirements</h3>
          <p>
            If you are an individual, you may only use the Services if you have the power to form a contract with us. If you do not have the power to form a contract, you may not use the Services. If you are not an individual, you warrant that you are validly formed and existing under the laws of your jurisdiction of formation, that you have full power and authority to enter into these Terms, and that you have duly authorized your agent to bind you to these Terms.
          </p>
          <h3>Acceptable Uses</h3>
          <h6>Legal Compliance</h6>
          <p>
            You represent and warrant that you will comply with all laws and regulations applicable to your use of the Services.
          </p>
          <h6>Your Responsibilities</h6>
          <p>
            You are responsible for your conduct, Content, and communications with others while using the Services. You must comply with the following requirements when using the Services:
          </p>
          <ul>
            <li>You may not purchase, use, or access the Services for the purpose of building a competitive product or service or for any other competitive purposes.</li>
            <li>You may not misuse our Services by interfering with their normal operation, or attempting to access them using a method other than through the interfaces and instructions that we provide.</li>
            <li>You may not circumvent or attempt to circumvent any limitations that we impose on your account (such as by opening up a new account to conduct a questionnaire that we have closed for a Terms violation).</li>
            <li>Unless authorized by us in writing, you may not probe, scan, or test the vulnerability of our system or network.</li>
            <li>Unless authorized by us in writing, you may not use any manual or automated system or software to extract or scrape data from the websites or other interfaces through which we make our Services available.</li>
            <li>You may not use the Services to infringe the intellectual property rights of others, or to commit an unlawful activity.</li>
            <li>You may not register accounts by "bots" or other automated methods.</li>
          </ul>
          <h3>Changes and Updates</h3>

          <h6>Changes to Terms</h6>
          <p>
            We may change these Terms at any time for a variety of reasons, such as to reflect changes in applicable law or updates to Services, and to account for new Services or functionality. The most current version will always be posted on our website. If an amendment is material, as determined by our sole discretion, we will notify you by email. Changes will be effective no sooner than the day they are publicly posted. If you do not want to agree to any changes made to the terms for a Service, you should stop using that Service, because by continuing to use the Services you indicate your agreement to be bound by the updated terms.
          </p>
          <h6>Changes to Services</h6>
          <p>
            We constantly change and improve our Services. We may add, alter, or remove functionality from a Service at any time without prior notice. We may also limit, suspend, or discontinue a Service at its discretion. If we discontinues a Service, we will give you reasonable advance notice to provide you with an opportunity to export a copy of your Content from that Service. We may remove content from the Services at any time in our sole discretion, although we will endeavor to notify you before we do that if it materially impacts you and if practicable under the circumstances.
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(TermsPage);
