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
  const { frontmatter, html, timeToRead, excerpt, fields } = props.data.pr;

  const cover = get(frontmatter, "image.children.0.fixed", {} );
  return (
    <>
    <SEO description={excerpt} title={frontmatter.title} article={true} image={cover.src} pathname={fields.slug} />
    <Hero>
      <h1>{frontmatter.title}</h1>
      <h4>{frontmatter.createdDate}</h4>
    </Hero>
    <Container style={{maxWidth: "700px"}} className="blog-post">
      <Row>
        <Col style={{fontSize: "1.3rem", marginTop: "2em", marginBottom: "2em", textAlign: "justify"}} dangerouslySetInnerHTML={{
          __html: html,
        }}>
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
    timeToRead
    fields {
      slug
    }
    frontmatter {
      tags
      title
      createdDate(formatString: "MMM D, YYYY")
    }
  }
}
`;
