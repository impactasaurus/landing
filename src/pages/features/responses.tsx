import * as React from "react";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";

const RecordsPage = ({pageContext}: PageProps) => {
  const {t} = useTranslation();
  return (
    <>
    <SEO
      title={t("responses.title")}
      description={t("responses.description")}
      context={pageContext}
    />
    <Hero>
      <h1>{t("responses.title-alt")}</h1>
      <h4>{t("responses.subtitle")}</h4>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/response-capture.png"
        padding={0.8}
        title={t("responses.method.title")}
        desc={(
          <>
          <ul>
            <li>{t("responses.method.together")}</li>
            <li>{t("responses.method.remote")}</li>
            <li>{t("responses.method.data-entry")}</li>
          </ul>
          </>
        )}
        odd={true}
      />
      <DescribedImage
        image="/images/screenshots/record.png"
        padding={0.5}
        title={t("responses.secure.title")}
        desc={(
          <p>
            <Trans
              i18nKey="responses.secure.main"
              components={{
                sLink: <Link to="/features/security/"/>,
              }}
            />
          </p>
        )}
        odd={false}
      />
    </Container>
    </>
  );
};

export default withLayout(RecordsPage);

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
