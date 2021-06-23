import * as React from "react";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

const ReportingPage = ({pageContext}: PageProps) => {
  const {t} = useTranslation();
  return (
    <>
    <SEO
      title={t("reporting.title")}
      description={t("reporting.description")}
      context={pageContext}
    />
    <Hero>
      <h1>{t("reporting.title")}</h1>
      <h4>{t("reporting.subtitle")}</h4>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/report.png"
        padding={1}
        title={t("reporting.visualise.title")}
        desc={(
          <p>
            {t("reporting.visualise.main")}
          </p>
        )}
        odd={true}
      />
      <DescribedImage
        image="/images/screenshots/report-tags.png"
        padding={1}
        title={t("reporting.segment.title")}
        desc={(
          <p>
            <Trans
              i18nKey="reporting.segment.main"
              components={{
                sLink: <Link to={"/features/segments"} />,
              }}
            />
          </p>
        )}
        odd={false}
      />
      <DescribedImage
        image="/images/screenshots/report-export.png"
        title={t("reporting.export.title")}
        desc={(
          <p>
            {t("reporting.export.main")}
          </p>
        )}
        odd={true}
      />
    </Container>
    </>
  );
};

export default withLayout(ReportingPage);

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
