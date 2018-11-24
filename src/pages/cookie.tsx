import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";

const CookiePolicyPage = () => {
  return (
    <>
    <Hero>
      <h1>Cookie Policy</h1>
    </Hero>
    <Container>
      <Row>
        <Col>
          <p>
            <b>Last Updated</b> : November 10th, 2018
          </p>
          <p>
            This Cookie Policy explains how Impactasaurus and our affiliates use cookies and similar technologies to recognise you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h3>What Are Cookies?</h3>

          <p>
            A cookie is a small file containing a string of characters that is sent to your computer when you visit a website. When you visit the site again, the cookie allows that site to recognize your browser. Cookies may store user preferences and other information. Cookies provide a convenience feature to save you time, or tell the Web server that you have returned to a specific page.
          </p>
          <p>
            Cookies set by the website owner (in this case, Impactasaurus) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like interactive content and analytics). The parties that set these third party cookies can recognise your computer both when it visits the website in question and also when it visits certain other websites.
          </p>

          <h3>How Do We Use Cookies?</h3>
          <p>
            The third party cookies we use are for:
          </p>
          <ul>
            <li><b>Analytics:</b> To allow us to understand how our services are used, we use <a href="https://policies.google.com/privacy">Google Analytics</a>.</li>
            <li><b>Feedback:</b> We use <a href="https://delighted.com/privacy">Delighted</a>, to collect customer feedback on our services.</li>
          </ul>
          <p>
            We use no first party cookies.
          </p>

          <h3>How Can I Control Cookies?</h3>
          <p>
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website.
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(CookiePolicyPage);
