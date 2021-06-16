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
import { Helmet } from "react-helmet";

interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark;
    recents: MarkdownRemarkConnection;
  };
  pageContext: PageContext;
}

const BlogPostPage = (props: BlogPostProps) => {
  const { frontmatter, html, timeToRead, excerpt, fields } = props.data.post;

  const recentsAvailable = props.data.recents && props.data.recents.edges;
  let recents = <div />;
  if (recentsAvailable) {
    const snippets = props.data.recents.edges
      .map(({ node }) => (
        <BlogSnippet key={node.fields.slug} node={node} wide={true}/>
      ));
    recents = (
      <>
      <Row>
        <Col>
          <h5>Recent Posts</h5>
        </Col>
      </Row>
      <Row>
        {snippets}
      </Row>
      </>
    );
  }

  const cover = get(frontmatter, "image.children.0.fixed", {} );
  const draft = frontmatter.draft === true;
  return (
    <>
    {draft && (
      <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div style={{width: "100%", height: "2em", backgroundColor: "red", textAlign: "center"}}>DRAFT</div>
      </>
    )}
    <SEO description={excerpt} title={frontmatter.title} article={true} image={cover.src} context={props.pageContext} />
    <Hero>
      <h1>{frontmatter.title}</h1>
      <h4>{frontmatter.createdDate} - {timeToRead} min read</h4>
    </Hero>
    <Container style={{maxWidth: "700px"}} className="blog-post">
      <Row>
        <Col style={{fontSize: "1.3rem", marginTop: "2em", marginBottom: "2em", textAlign: "justify"}} dangerouslySetInnerHTML={{
          __html: html,
        }}>
        </Col>
      </Row>
      {recents}
    </Container>
    </>
  );
};

export default withLayout(BlogPostPage);

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
  post: markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    excerpt
    timeToRead
    fields {
      slug
    }
    frontmatter {
      tags
      title
      draft
      createdDate(formatString: "MMM D, YYYY")
      image {
        children {
          ... on ImageSharp {
            fixed(width: 900, height: 300, quality: 100) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
  recents: allMarkdownRemark(
    filter: {
      fields: {slug: {ne: $slug}}
      frontmatter: {draft: {ne: true}},
      fileAbsolutePath: {regex: "/blog/"},
    },
    sort: {order: DESC, fields: [frontmatter___createdDate]},
    limit: 4
  ) {
    edges {
      node {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          image {
            children {
              ... on ImageSharp {
                fixed(width: 1920, height: 600) {
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
