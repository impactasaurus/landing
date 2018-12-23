import * as React from "react";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";

const QuestionnairePage = () => {
  return (
    <>
    <SEO title="Questionnaires"/>
    <Hero>
      <h1>Questionnaires</h1>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/catalogue.png"
        title="Catalogue"
        desc={(
          <>
          <p>
            Unsure what questionnaire to use?
          </p>
          <p>
            Benefit from our catalogue of peer reviewed and validated questionnaires taken from the literature.
          </p>
          </>
        )}
        odd={true}
      />
      <DescribedImage
        image="/images/screenshots/new-likert-q.png"
        title="Custom"
        desc={(
          <p>
            If our catalogue of questionnaires does not suit, you can create your own questionnaire. Define your own questions and scales easily with our questionnaire creator.
          </p>
        )}
        odd={false}
      />
      <DescribedImage
        image="/images/screenshots/categories.png"
        title="Categories"
        desc={(
          <p>
            Related questions can be categorised to produce higher level views of the data. Perfect for questionnaires with lots of questions.
          </p>
        )}
        odd={true}
      />
    </Container>
    </>
  );
};

export default withLayout(QuestionnairePage);
