import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { Card, Comment } from "semantic-ui-react";
import { MarkdownRemarkConnection, ImageSharp } from "../graphql-types";
import TagsCard from "../components/TagsCard/TagsCard";
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

const BlogPage = (props: BlogProps) => {
  const tags = props.data.tags.group;
  const posts = props.data.posts.edges.map((e) => e.node);
  const { pathname } = props.location;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);

  return (
    <>
    <SEO title="Blog"/>
    <Hero>
      <h1>Blog</h1>
    </Hero>
    <Container>
      <Row>
        <Col>
          {posts.map((node) => <BlogSnippet node={node}/>)}
        </Col>
        <Col>
          <TagsCard Link={Link} tags={tags} tag={props.pageContext.tag} />
        </Col>
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
                fixed(width: 700, height: 100) {
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
