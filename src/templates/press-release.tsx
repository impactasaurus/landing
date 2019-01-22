import * as React from "react";
import { get } from "lodash";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import { MarkdownRemark, MarkdownRemarkConnection } from "../graphql-types";
import {withLayout, LayoutProps} from "../components/Layout";
import { graphql } from "gatsby";
import SEO from "../components/SEO/SEO";
import {BlogSnippet} from "../components/BlogSnippet";

interface PressReleaseProps extends LayoutProps {
  data: {
    pr: MarkdownRemark;
  };
}

const PressReleasePage = (props: PressReleaseProps) => {
  const { frontmatter, excerpt, html, fields } = props.data.pr;

  const cover = get(frontmatter, "image.children.0.fluid", {} );
  return (
    <>
    <SEO description={excerpt} title={frontmatter.title} article={true} image={cover.src} pathname={fields.slug} />
    <Hero>
      <h1>{frontmatter.title}</h1>
      <h4>{frontmatter.subtitle}</h4>
    </Hero>
    <Container style={{fontSize: "1.3rem", maxWidth: "700px", marginBottom: "2em" }} className="blog-post">
      <Row>
        <Col style={{marginTop: "2em", textAlign: "justify"}}>

          <span dangerouslySetInnerHTML={{
            __html: html,
          }} />
        </Col>
      </Row>
      <Row>
        <hr />
      </Row>
      <Row>
        <Col>
          <span>Contact: <a href="mailto:press@impactasaurus.org">press@impactasaurus.org</a></span>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(PressReleasePage, false);

export const pageQuery = graphql`
  query TemplatePR($slug: String!) {
  pr: markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    excerpt
    fields {
      slug
    }
    frontmatter {
      tags
      title
      subtitle
      createdDate(formatString: "MMM D, YYYY")
      image {
        children {
          ... on ImageSharp {
            fluid(maxWidth: 900) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
}
`;
