import * as React from "react";
import { Link } from "gatsby";
import { get } from "lodash";
import { Label, Card, Comment } from "semantic-ui-react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import { MarkdownRemark, MarkdownRemarkConnection } from "../graphql-types";
import {withLayout, LayoutProps} from "../components/Layout";
import { graphql } from "gatsby";
import SEO from "../components/SEO/SEO";

interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark;
    recents: MarkdownRemarkConnection;
  };
}

const BlogSnippet = ({node}: {node: MarkdownRemark}) => {
  const { frontmatter, timeToRead, fields: { slug }, excerpt } = node;
  const cover = get(frontmatter, "image.children.0.fixed", {});

  const extra = (
    <Comment.Group>
      <Comment>
        <Comment.Content>
          <Comment.Metadata style={{ margin: 0 }}>
            {frontmatter.updatedDate} - {timeToRead} min read
          </Comment.Metadata>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );

  const description = (
    <Card.Description>
      {excerpt}
      <br />
      <Link to={slug}>Read more…</Link>
    </Card.Description>
  );

  return (
    <Card key={slug}
          fluid
          image={cover}
          header={frontmatter.title}
          extra={extra}
          description={description}
    />
  );
};

const BlogPostPage = (props: BlogPostProps) => {
  const { frontmatter, html, timeToRead, excerpt, fields } = props.data.post;

  const tags = props.data.post.frontmatter.tags
    .map((tag) => <Label key={tag}><Link to={`/blog/tags/${tag}/`}>{tag}</Link></Label>);

  const recentsAvailable = props.data.recents && props.data.recents.edges;
  let recents = <div />;
  if (recentsAvailable) {
    const snippets = props.data.recents.edges
      .map(({ node }) => (
        <Col>
          <BlogSnippet key={node.fields.slug} node={node}/>
        </Col>
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
  return (
    <>
    <SEO description={excerpt} title={frontmatter.title} article={true} image={cover.src} pathname={fields.slug} />
    <Hero>
      <h1>{frontmatter.title}</h1>
      <h4>{frontmatter.updatedDate} - {timeToRead} min read</h4>
    </Hero>
    <Container style={{maxWidth: "700px"}}>
      <Row>
        <Col style={{fontSize: "1.3rem", marginTop: "2em", marginBottom: "2em", textAlign: "justify"}} dangerouslySetInnerHTML={{
          __html: html,
        }}>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Tags</h5>
          <p>{tags}</p>
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
      updatedDate(formatString: "MMM D, YYYY")
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
    sort: {order: DESC, fields: [frontmatter___updatedDate]},
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
