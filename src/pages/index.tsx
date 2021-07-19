import * as React from "react";
import { withLayout } from "../components/Layout";
import SEO from "../components/SEO";
import Testimonials from "../components/Testimonials";
import Steps from "../components/Steps";
import IndexHero from "../components/IndexHero";
import { useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = ({pageContext}: PageProps) => {
  const {t} = useTranslation();

  return (
    <div>
      <SEO
        context={pageContext}
        title={t("index.seoTitle")}
        description={t("index.description")}
      />
      <IndexHero />
      <Steps />
      <Testimonials />
    </div>
  );
};

export default withLayout(IndexPage);

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
