import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { MarkdownRemarkConnection } from "../graphql-types";
import BlogPagination from "../components/BlogPagination/BlogPagination";
import { get } from "lodash";
import {withLayout, LayoutProps} from "../components/Layout";
import { MarkdownRemark } from "../graphql-types";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";

interface BlogProps extends LayoutProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
  pageContext: {
    tag?: string; // only set into `templates/tags-pages.tsx`
  };
}

const BlogSnippet = ({node}: {node: MarkdownRemark}) => {
  const { frontmatter, fields: { slug } } = node;
  const cover = get(frontmatter, "image.children.0.fixed", {});

  return (
    <Col lg={4} md={6} key={slug}>
      <Link to={slug} style={{display: "flex", flexDirection: "column", border: "1px solid lightgray", marginBottom: "4rem"}}>
        <img src={cover.src} srcSet={cover.srcSet} style={{height: "12rem", objectFit: "cover"}} />
        <h4 style={{marginTop: "1.6rem", maxWidth: "90%"}}>{frontmatter.title}</h4>
      </Link>
    </Col>
  );
};

const BlogPage = (props: BlogProps) => {
  const tags = props.data.tags.group;
  const posts = props.data.posts.edges.map((e) => e.node);
  const { pathname } = props.location;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);
  const tabIdx = props.pageContext.tag ? tags.map((t) => t.fieldValue).indexOf(props.pageContext.tag) + 1 : 0;

  return (
    <>
    <SEO title="Blog"/>
    <Hero>
      <h1>Blog</h1>
    </Hero>
    <Container className="slanted">
      <Row>
        {posts.map((node) => <BlogSnippet node={node} key={node.fields.slug} />)}
      </Row>
      <Row>
        <Col>
          <BlogPagination Link={Link} pathname={pathname} pageCount={pageCount} />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(BlogPage);

export const pageQuery = graphql`
query PageBlog {
  # Get tags
  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___updatedDate] },
    filter: {
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/blog/" }
    },
    limit: 10
  ) {
    totalCount
    edges {
      node {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          updatedDate(formatString: "DD MMMM, YYYY")
          image {
          	children {
              ... on ImageSharp {
                fixed(width: 800, height: 400) {
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
