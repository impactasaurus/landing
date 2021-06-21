import * as React from "react";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const QuestionnairePage = ({pageContext}: PageProps) => {
  const {t} = useTranslation();
  const title = t("questionnaires.title");
  return (
    <>
    <SEO
      title={title}
      description={t("questionnaires.description")}
      context={pageContext}
    />
    <Hero>
      <h1>{title}</h1>
      <h4>{t("questionnaires.subtitle")}</h4>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/catalogue.png"
        padding={1}
        title={t("questionnaires.catalogue.title")}
        desc={(
          <>
          <p>
            {t("questionnaires.catalogue.intro")}
          </p>
          <p>
            <Trans
              i18nKey="questionnaires.catalogue.main"
              components={{
                soLink: <a href="https://softoutcomes.org" target="_blank" />,
              }}
            />
          </p>
          </>
        )}
        odd={true}
      />
      <DescribedImage
        image="/images/screenshots/new-likert-q.png"
        title={t("questionnaires.create.title")}
        desc={(
          <p>
            {t("questionnaires.create.main")}
          </p>
        )}
        odd={false}
      />
      <DescribedImage
        image="/images/screenshots/categories.png"
        padding={1}
        title={t("questionnaires.group.title")}
        desc={(
          <p>
            {t("questionnaires.group.main")}
          </p>
        )}
        odd={true}
      />
    </Container>
    </>
  );
};

export default withLayout(QuestionnairePage);

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
