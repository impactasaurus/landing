import * as React from "react";
import { withLayout, LayoutProps } from "../components/Layout";
import Signup from "../components/Signup";
import SEO from "../components/SEO";
import Testimonials from "../components/Testimonials";
import Steps from "../components/Steps";
import IndexHero from "../components/IndexHero";

const IndexPage = (props: LayoutProps) => (
  <div>
    <SEO />
    <IndexHero />
    <Steps />
    <Testimonials />
    <Signup />
  </div>
);

export default withLayout(IndexPage);
