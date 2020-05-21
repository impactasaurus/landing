import * as React from "react";
import {withLayout} from "../../components/Layout";
import DescribedImage from "../../components/DescribedImage";
import Container from "react-bootstrap/lib/Container";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO/SEO";

const QuestionnairePage = () => {
  return (
    <>
    <SEO title="Questionnaires" description="Based on your desired outcomes, choose from our range of peer reviewed questionnaires. If none of them suit, you can always create your own questionnaire."/>
    <Hero>
      <h1>Questionnaires</h1>
      <h4>Define questions to measure your outcomes</h4>
    </Hero>
    <Container className="slanted">
      <DescribedImage
        image="/images/screenshots/catalogue.png"
        padding={1}
        title="Select from our catalogue"
        desc={(
          <>
          <p>
            Unsure what questionnaire to use?
          </p>
          <p>
            Benefit from our catalogue of peer reviewed and validated questionnaires taken from the literature.
            Our questionnaires are also freely available to browse at <a href="https://softoutcomes.org">softoutcomes.org</a>.
          </p>
          </>
        )}
        odd={true}
      />
      <DescribedImage
        image="/images/screenshots/new-likert-q.png"
        title="Create your own"
        desc={(
          <p>
            If our catalogue of questionnaires does not suit, you can create your own questionnaire. Define your own questions and scales easily with our questionnaire creator.
          </p>
        )}
        odd={false}
      />
      <DescribedImage
        image="/images/screenshots/categories.png"
        padding={1}
        title="Group questions"
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
