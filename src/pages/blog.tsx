import * as React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import { MarkdownRemarkConnection } from "../graphql-types";
import BlogPagination from "../components/BlogPagination/BlogPagination";
import {withLayout, LayoutProps} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";
import {BlogSnippet} from "../components/BlogSnippet";

interface BlogProps extends LayoutProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
  pageContext: PageContext;
}

// modelled on https://www.helpscout.net/blog/

const BlogPage = (props: BlogProps) => {
  const posts = props.data.posts.edges.map((e) => e.node);
  const { pathname } = props.location;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);
  const subtitle = "News and thoughts from the Impactasaurus team";
  return (
    <>
    <SEO title="Blog" description={subtitle} context={props.pageContext}/>
    <Hero>
      <h1>Blog</h1>
      <h4>{subtitle}</h4>
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
query PageBlog ($language: String!) {
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  # Get tags
  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___createdDate] },
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
          createdDate(formatString: "DD MMMM, YYYY")
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
