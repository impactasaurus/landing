import * as React from "react";
import { withLayout, LayoutProps } from "../components/Layout";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Signup from "../components/Signup";
import Testimonials from "../components/Testimonials";
import Steps from "../components/Steps";

const IndexPage = (props: LayoutProps) => (
  <div>
    <Hero>
      <h1>Simple impact reporting</h1>
      <h4>Attract funding and improve your service, with minimal overhead</h4>
      <img src="/images/screenshots/radar-frame.png" />
    </Hero>
    <Steps />
    <Clients />
    <Testimonials />
    <Signup />
  </div>
);

export default withLayout(IndexPage);
