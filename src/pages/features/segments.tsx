import * as React from "react";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";
import { useTranslation } from "gatsby-plugin-react-i18next";

const SegmentPage = ({pageContext}: PageProps) => {
  const {t} = useTranslation();
  return (
    <>
    <SEO
      title={t("segment.title")}
      description={t("segment.description")}
      context={pageContext}
    />
    <Hero>
      <h1>{t("segment.title")}</h1>
      <h4>{t("segment.subtitle")}</h4>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/tags.png"
        title={t("segment.tags.title")}
        desc={(
          <p>
            {t("segment.tags.main")}
          </p>
        )}
        odd={true}
      />
      <DescribedImage
        image="/images/screenshots/record-tags.png"
        title={t("segment.tagging.title")}
        desc={(
          <p>
            {t("segment.tagging.main")}
          </p>
        )}
        odd={false}
      />
      <DescribedImage
        image="/images/screenshots/report-tags-with-report.png"
        padding={0.5}
        title={t("segment.report.title")}
        desc={(
          <>
          <p>
            {t("segment.report.main1")}
          </p>
          <p>
            {t("segment.report.main2")}
          </p>
          </>
        )}
        odd={true}
      />
    </Container>
    </>
  );
};

export default withLayout(SegmentPage);

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
