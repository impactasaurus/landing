import * as React from "react";
import {withLayout} from "../../components/Layout";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

const SecurityPage = ({pageContext}: PageProps) => {
  const {t} = useTranslation();
  return (
    <>
    <SEO
      title={t("security.title")}
      description={t("security.description")}
      context={pageContext}
    />
    <Hero>
      <h1>{t("security.title")}</h1>
      <h4>{t("security.subtitle")}</h4>
    </Hero>
    <Container className="slanted">
      <h5>{t("security.how.title")}</h5>
      <p>
        {t("security.how.main")}
      </p>
      <h5>{t("security.benPrivacy.title")}</h5>
      <p>
        {t("security.benPrivacy.main")}
      </p>
      <h5>{t("security.charityPrivacy.title")}</h5>
      <p>
        <Trans
          i18nKey="security.charityPrivacy.main"
          components={{
            ppLink: <Link to={"/privacy"} />,
          }}
        />
      </p>
      <h5>{t("security.account.title")}</h5>
      <p>
        {t("security.account.main")}
      </p>
    </Container>
    </>
  );
};

export default withLayout(SecurityPage);

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
