import * as React from "react";
import { withLayout } from "../components/Layout";
import SEO from "../components/SEO";
import Testimonials from "../components/Testimonials";
import Steps from "../components/Steps";
import IndexHero from "../components/IndexHero";

const IndexPage = ({pageContext}: PageProps) => (
  <div>
    <SEO context={pageContext} />
    <IndexHero />
    <Steps />
    <Testimonials />
  </div>
);

export default withLayout(IndexPage);
