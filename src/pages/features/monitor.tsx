import * as React from "react";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";
import { useTranslation } from "gatsby-plugin-react-i18next";

const JourneyPage = ({pageContext}: PageProps) => {
  const {t} = useTranslation();
  const intro = t("monitor.description");
  return (
    <>
    <SEO title={t("monitor.title")} description={intro} context={pageContext}/>
    <Hero>
      <h1>{t("monitor.title")}</h1>
      <h4>{t("monitor.subtitle")}</h4>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/impactasaurus-graph.png"
        padding={1}
        title={t("monitor.journey.title")}
        desc={(
          <p>{intro}</p>
        )}
        odd={true}
      />
      <DescribedImage
      image="/images/screenshots/table.png"
      padding={1}
      title={t("monitor.tailor.title")}
      desc={(
        <p>
          {t("monitor.tailor.main")}
        </p>
      )}
      odd={false}
      />
      <DescribedImage
      image="/images/screenshots/activity-page.png"
      padding={1}
      title={t("monitor.pulse.title")}
      desc={(
        <p>
          {t("monitor.pulse.main")}
        </p>
      )}
      odd={true}
      />
    </Container>
    </>
  );
};

export default withLayout(JourneyPage);

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
